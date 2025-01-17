document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('상품이 장바구니에 담겼습니다!');
    });
});
