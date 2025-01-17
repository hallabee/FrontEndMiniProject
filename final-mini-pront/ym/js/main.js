let emailWrite = document.querySelector(".compose-sidebar");

emailWrite.addEventListener("click",()=>{
    location.href = "emailWritePage.html";
});

//전체 체크박스
let mainCheck = document.querySelector(".mainCheck");

mainCheck.addEventListener("click", ()=>{
    const isChecked = mainCheck.checked;
    const checkBoxes = document.querySelectorAll(".check");

    if(isChecked){
        for(const ck of checkBoxes){
            ck.checked = true;
        }
    }

    else{
        for(const ck of checkBoxes){
            ck.checked = false;
        }
    }
})

//읽음 작동
let read = document.querySelector(".read");
const checkBoxes = document.querySelectorAll(".check");

read.addEventListener("click", ()=>{
    checkBoxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const icon = checkbox.nextElementSibling; // 체크박스 바로 다음의 아이콘 선택
            icon.classList.remove('fa-envelope');
            icon.classList.add('fa-envelope-open');
        }
    });
})

//안읽음 작동
let notRead = document.querySelector(".notRead");

notRead.addEventListener("click", ()=>{
    checkBoxes.forEach((checkbox) =>{
        if(checkbox.checked){
            const icon = checkbox.nextElementSibling;

            icon.classList.remove('fa-envelope-open');
            icon.classList.add('fa-envelope');
        }
    });
})
