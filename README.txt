* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #0f172a;
    color: #f8fafc;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #1e293b;
    border-bottom: 1px solid #334155;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo-area h1 {
    font-size: 22px;
    color: #ffffff;
}

.logo-area span {
    color: #38bdf8;
}

.cart-icon {
    position: relative;
    font-size: 20px;
    background: #334155;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.cart-icon span {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ef4444;
    color: white;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 50%;
}

/* Search Bar */
.search-container {
    padding: 15px 20px;
    background: #1e293b;
    text-align: center;
}

.search-box {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    background: #0f172a;
    border: 1px solid #475569;
    border-radius: 25px;
    overflow: hidden;
}

.search-box input {
    flex: 1;
    padding: 12px 20px;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;
}

.search-box button {
    background: #38bdf8;
    border: none;
    padding: 0 20px;
    cursor: pointer;
    color: #0f172a;
    font-size: 16px;
}

/* Hero Section */
.hero-section {
    background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1556742049-0a67d553c2a3?auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 60px 20px;
}

.hero-content h2 {
    font-size: 26px;
    margin-bottom: 10px;
    color: #ffffff;
}

.hero-content p {
    font-size: 14px;
    color: #cbd5e1;
    margin-bottom: 20px;
}

.shop-btn {
    display: inline-block;
    background: #38bdf8;
    color: #0f172a;
    padding: 10px 25px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
}

/* Products Section */
.products-section {
    padding: 30px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.products-section h2 {
    font-size: 22px;
    margin-bottom: 20px;
    border-left: 4px solid #38bdf8;
    padding-left: 10px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
}

.product-card {
    background: #1e293b;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #334155;
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-3px);
}

.product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.product-info {
    padding: 12px;
}

.product-info h3 {
    font-size: 14px;
    margin-bottom: 6px;
    color: #f1f5f9;
}

.price {
    font-size: 15px;
    color: #38bdf8;
    font-weight: bold;
    margin-bottom: 10px;
}

.add-to-cart-btn {
    width: 100%;
    background: #2563eb;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
}

.add-to-cart-btn:hover {
    background: #1d4ed8;
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    background: #1e293b;
    color: #64748b;
    font-size: 13px;
    border-top: 1px solid #334155;
    margin-top: 40px;
}
