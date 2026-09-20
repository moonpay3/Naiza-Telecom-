# Naiza Telecom — Website

এই ফোল্ডারটি একটি static e-commerce storefront হিসেবে তৈরি করা হয়েছে।

## Public করার আগে 3টি জিনিস বদলাবেন
1. `script.js` → `SHOP.whatsapp`-এ আপনার আসল WhatsApp নম্বর বসান (country code সহ, + ছাড়া; উদাহরণ: 88017XXXXXXXX)।
2. `script.js` → `SHOP.facebook`-এ আপনার Facebook Page URL বসান।
3. `script.js` → `PRODUCTS` তালিকায় আপনার আসল product name, price ও category বসান।

## কী আছে
- Responsive mobile/desktop design
- Home / Products / Categories / About / Contact
- Search + category filter
- Shopping cart with localStorage
- Checkout form
- WhatsApp order message
- Cash on Delivery option
- আপনার দেওয়া Naiza Telecom logo ও cover image

## গুরুত্বপূর্ণ
এটি frontend/static website। WhatsApp/COD order নেওয়া যাবে, কিন্তু card/bKash/Nagad automatic payment, database, admin panel বা order dashboard নেই। সেগুলো যোগ করতে backend/payment integration লাগবে।

## Hosting
এই ফোল্ডারের সব ফাইল একসাথে static hosting-এ upload করলে website চালু হবে। Domain চাইলে পরে custom domain connect করা যাবে।
