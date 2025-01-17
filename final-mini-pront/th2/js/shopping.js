document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('상품이 장바구니에 담겼습니다!');
    });
});
document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search').value.toLowerCase();  // 입력된 검색어
    const products = document.querySelectorAll('.product-card');  // 모든 상품 카드

    products.forEach(product => {
        const productName = product.querySelector('h4').textContent.toLowerCase();  // 상품명

        // 검색어가 상품명에 포함되어 있으면 해당 상품을 보여주고, 그렇지 않으면 숨김
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
