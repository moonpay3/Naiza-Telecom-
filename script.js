// ===================== SHOP CONFIG =====================
const SHOP = {
  name: "Naiza Telecom",
  whatsapp: "8801XXXXXXXXX", // Replace with your WhatsApp number, e.g. 88017XXXXXXXX
  facebook: "https://www.facebook.com/", // Replace with your Facebook Page URL
  address: "Garadob Bazar, Gangni, Meherpur",
  delivery: "সারা বাংলাদেশে কুরিয়ার সুবিধা"
};

// Add/edit products here. You can replace emoji with image URLs later.
const PRODUCTS = [
  {id:1,name:"Premium Mobile Cover",category:"Mobile Cover",price:199,icon:"📱"},
  {id:2,name:"Fast Charger + Data Cable",category:"Charger & Cable",price:599,icon:"🔌"},
  {id:3,name:"TWS Bluetooth Earbuds",category:"Earbuds",price:999,icon:"🎧"},
  {id:4,name:"Power Bank 20000mAh",category:"Power Bank",price:1499,icon:"🔋"},
  {id:5,name:"Tempered Glass Screen Protector",category:"Screen Protector",price:149,icon:"🛡️"},
  {id:6,name:"Type-C Data Cable",category:"Charger & Cable",price:249,icon:"🔗"},
  {id:7,name:"33W Fast Charger",category:"Charger & Cable",price:799,icon:"⚡"},
  {id:8,name:"Wireless Neckband",category:"Earbuds",price:699,icon:"🎧"}
];

let cart = JSON.parse(localStorage.getItem("naiza_cart") || "[]");

const money = n => "৳" + Number(n).toLocaleString("en-BD");
const save = () => localStorage.setItem("naiza_cart", JSON.stringify(cart));

function renderProducts(){
  const q = document.querySelector("#search").value.toLowerCase().trim();
  const f = document.querySelector("#filter").value;
  const list = PRODUCTS.filter(p => (f==="All" || p.category===f) && p.name.toLowerCase().includes(q));
  document.querySelector("#productGrid").innerHTML = list.map(p => `
    <article class="product">
      <div class="product-img">${p.icon}</div>
      <div class="product-body">
        <span class="tag">${p.category}</span>
        <h3>${p.name}</h3>
        <small>Quality product • Available</small>
        <div class="price">${money(p.price)}</div>
        <button class="btn primary" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </article>`).join("") || `<p>No products found.</p>`;
}

function addToCart(id){
  const p=PRODUCTS.find(x=>x.id===id), item=cart.find(x=>x.id===id);
  item ? item.qty++ : cart.push({id,qty:1});
  save(); renderCart(); openCart();
}
function changeQty(id,d){
  const item=cart.find(x=>x.id===id); if(!item) return;
  item.qty += d; if(item.qty<=0) cart=cart.filter(x=>x.id!==id);
  save(); renderCart();
}
function renderCart(){
  const box=document.querySelector("#cartItems");
  if(!cart.length) box.innerHTML="<p style='color:#9aa9ba'>আপনার cart এখনো খালি।</p>";
  else box.innerHTML=cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);return `
    <div class="cart-row"><div><b>${p.name}</b><br><small>${money(p.price)} × ${i.qty}</small></div>
    <div class="qty"><button onclick="changeQty(${p.id},-1)">−</button> ${i.qty} <button onclick="changeQty(${p.id},1)">+</button></div></div>`}).join("");
  const total=cart.reduce((s,i)=>s+PRODUCTS.find(p=>p.id===i.id).price*i.qty,0);
  document.querySelector("#cartTotal").textContent=money(total);
  document.querySelector("#cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0);
}
function openCart(){document.querySelector("#cartDrawer").classList.add("open")}
function closeCart(){document.querySelector("#cartDrawer").classList.remove("open")}
function openModal(){document.querySelector("#checkoutModal").classList.add("open")}
function closeModal(){document.querySelector("#checkoutModal").classList.remove("open")}

document.querySelector("#search").addEventListener("input",renderProducts);
document.querySelector("#filter").addEventListener("change",renderProducts);
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{document.querySelector("#filter").value=b.dataset.category;renderProducts();document.querySelector("#products").scrollIntoView()});
document.querySelector("#openCart").onclick=openCart;
document.querySelector("#closeCart").onclick=closeCart;
document.querySelector("#checkoutBtn").onclick=()=>{if(cart.length) openModal(); else alert("আপনার cart খালি।")};
document.querySelector("#closeModal").onclick=closeModal;
document.querySelector("#waLink").href=`https://wa.me/${SHOP.whatsapp}`;

document.querySelector("#checkoutForm").addEventListener("submit",e=>{
  e.preventDefault();
  if(!cart.length) return;
  const fd=new FormData(e.target);
  const items=cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);return `${p.name} × ${i.qty} = ${money(p.price*i.qty)}`}).join("\n");
  const total=cart.reduce((s,i)=>s+PRODUCTS.find(p=>p.id===i.id).price*i.qty,0);
  const msg=`New Order - ${SHOP.name}%0A%0AName: ${encodeURIComponent(fd.get("name"))}%0APhone: ${encodeURIComponent(fd.get("phone"))}%0AAddress: ${encodeURIComponent(fd.get("address"))}%0APayment: ${encodeURIComponent(fd.get("payment"))}%0A%0AItems:%0A${encodeURIComponent(items)}%0A%0ATotal: ${money(total)}`;
  window.open(`https://wa.me/${SHOP.whatsapp}?text=${msg}`,"_blank");
  cart=[];save();renderCart();closeModal();closeCart();
});

const filter=document.querySelector("#filter");
[...new Set(PRODUCTS.map(p=>p.category))].forEach(c=>filter.insertAdjacentHTML("beforeend",`<option>${c}</option>`));
document.querySelector("#year").textContent=new Date().getFullYear();
renderProducts();renderCart();
