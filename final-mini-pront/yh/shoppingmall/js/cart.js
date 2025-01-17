// cart.js

function calculateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(cartItem => {
        const priceElement = cartItem.querySelector('.product-price');
        const quantityElement = cartItem.querySelector('.item-quantity');
        
        // 원래 가격을 저장하기 위한 데이터 속성 설정
        const originalPrice = priceElement.getAttribute('data-original-price');
        const priceNumber = Number(originalPrice); // 원래 가격은 data-original-price에서 가져옴
        const quantity = Number(quantityElement.value);
        
        // 각 항목의 가격 * 수량을 계산하여 해당 항목의 가격 업데이트
        const newPrice = priceNumber * quantity;
        priceElement.innerText = '₩' + newPrice.toLocaleString();
        
        // 총합 계산
        total += newPrice;
    });
    
    // 총합 표시
    document.querySelector('.total-price').innerText = '₩' + total.toLocaleString();
}

// 수량이 변경될 때 수량이 0이면 항목을 삭제하고, 0 이상이면 총합을 계산하는 이벤트 리스너 추가
function addQuantityChangeListener() {
    const quantityInputs = document.querySelectorAll('.item-quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const cartItem = input.closest('.cart-item'); // 해당 장바구니 항목
            const productName = cartItem.querySelector('.product-name').innerText; // 상품명 가져오기

            if (input.value == 0) {
                // 수량이 0이면 해당 항목 삭제
                cartItem.remove();
                alert(`선택한 ${productName}의 이름이 삭제되었습니다.`);
            } else {
                calculateTotal(); // 수량이 0이 아니면 총합 계산
            }
        });
    });
}

// 삭제 버튼 클릭 시 해당 항목을 삭제하고 메시지 출력
function addRemoveButtonListener() {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = button.closest('.cart-item'); // 해당 항목을 찾음
            const productName = cartItem.querySelector('.product-name').innerText; // 상품명 가져오기
            
            // 해당 항목을 DOM에서 제거
            cartItem.remove();
            
            // 메시지 출력
            alert(`선택한 ${productName}의 이름이 삭제되었습니다.`);
            
            // 항목이 삭제된 후 총합 다시 계산
            calculateTotal();
        });
    });
}

// 페이지 로드 시 합계 계산 및 이벤트 리스너 설정
window.onload = function() {
    // 각 가격 요소에 원래 가격을 data-original-price 속성에 저장
    const priceElements = document.querySelectorAll('.product-price');
    priceElements.forEach(priceElement => {
        const priceText = priceElement.innerText;
        const priceNumber = Number(priceText.replace(/[^0-9]/g, ''));
        priceElement.setAttribute('data-original-price', priceNumber); // 원래 가격 저장
    });

    calculateTotal();
    addQuantityChangeListener();
    addRemoveButtonListener(); // 삭제 버튼에 대한 리스너 추가
};
