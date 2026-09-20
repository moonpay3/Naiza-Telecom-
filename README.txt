* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #0f172a;
    color: #f8fafc;
    line-height: 1.5;
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
    font-size: 20px;
    color: #ffffff;
}

.logo-area span {
    color: #38bdf8;
}

.cart-icon {
    position: relative;
    font-size: 18px;
    background: #334155;
    padding: 8px 12px;
    border-radius: 50%;
    cursor: pointer;
}

.cart-icon span {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ef4444;
    color: white;
    font-size: 11px;
    padding: 2px 5px;
    border-radius: 50%;
}

/* Search Bar */
.search-container {
    padding: 12px 15px;
    background: #1e293b;
    text-align: center;
    border-bottom: 1px solid #334155;
}

.search-box {
    display: flex;
    max-width: 100%;
    background: #0f172a;
    border: 1px solid #475569;
    border-radius: 20px;
    overflow: hidden;
}

.search-box input {
    flex: 1;
    padding: 10px 15px;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 13px;
}

.search-box button {
    background: #38bdf8;
    border: none;
    padding: 0 15px;
    cursor: pointer;
    color: #0f172a;
}

/* Hero Section */
.hero-section {
    background: #1e293b;
    text-align: center;
    padding: 40px 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #334155;
}

.hero-content h2 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #ffffff;
}

.hero-content p {
    font-size: 12px;
    color: #cbd5e1;
    margin-bottom: 15px;
}

.shop-btn {
    display: inline-block;
    background: #38bdf8;
    color: #0f172a;
    padding: 8px 20px;
    border-radius: 15px;
    text-decoration: none;
    font-weight: bold;
    font-size: 13px;
}

/* Products Section */
.products-section {
    padding: 10px 15px 30px 15px;
    max-width: 1200px;
    margin: 0 auto;
}

.products-section h2 {
    font-size: 18px;
    margin-bottom: 15px;
    border-left: 3px solid #38bdf8;
    padding-left: 8px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.product-card {
    background: #1e293b;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #334155;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-card img {
    width: 100%;
    height: 120px;
    object-fit: cover;
}

.product-info {
    padding: 10px;
}

.product-info h3 {
    font-size: 12px;
    margin-bottom: 5px;
    color: #f1f5f9;
}

.price {
    font-size: 13px;
    color: #38bdf8;
    font-weight: bold;
    margin-bottom: 8px;
}

.add-to-cart-btn {
    width: 100%;
    background: #2563eb;
    color: white;
    border: none;
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 500;
}

/* Footer */
footer {
    text-align: center;
    padding: 15px;
    background: #1e293b;
    color: #64748b;
    font-size: 11px;
    border-top: 1px solid #334155;
    margin-top: 20px;
}

