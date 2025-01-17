let send = document.querySelector(".send");

send.addEventListener("click",()=>{
    alert("이메일 전송 완료했습니다.");
    location.reload(true);
})


function senderAd() {
    const value = sender.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
        senderSpan.style.backgroundColor = "#fbcbd7";
    } else {
        senderSpan.style.backgroundColor = "#b2cefc";
    }
}

function receiverAd() {
    const value = receiver.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
        receiverSpan.style.backgroundColor = "#fbcbd7";
    } else {
        receiverSpan.style.backgroundColor = "#b2cefc";
    }
}

//sencer이벤트
const sender = document.getElementById("sender");
const senderSpan = document.getElementById("senderSpan");

sender.addEventListener("input", ()=>{
    const value = sender.value;

    if(value){
        senderSpan.textContent = value;
    }else{
        senderSpan.textContent = "";
    }
})

sender.addEventListener("blur",()=>{
    const value = sender.value;
    
    if(value){
        senderSpan.classList.add("on");
        senderSpan.style.opacity = 1;
        senderAd();
    }
    else{
        senderSpan.style.opacity = 0;
    }
    
})

//receiver 이벤트

const receiver = document.getElementById("receiver");
const receiverSpan = document.getElementById("receiverSpan");

receiver.addEventListener("input",()=>{
    const value = receiver.value;

    if(value){
        receiverSpan.textContent = value;
        
    }else{
        receiverSpan.textContent="";
        receiverSpan.style.opacity = 0;
    }


});

receiver.addEventListener("blur",function(){
    const value = receiver.value;
    if(value){
        receiverSpan.classList.add("on");
        receiverSpan.style.opacity = 1;
        receiverAd();
    }else{
        receiverSpan.style.opacity = 0;
    }
    

});




//title 이벤트
const title = document.getElementById("title");
const titleSpan = document.getElementById("titleSpan");

title.addEventListener("input", ()=>{
    const value = title.value;
    if(value){
        titleSpan.textContent = value;
    }else{
        titleSpan.textContent = "";
    }
})

title.addEventListener("blur",()=>{
    const value = title.value;
    if(value){
        titleSpan.classList.add("on");
        titleSpan.style.opacity = 1;

    }else{
        titleSpan.style.opacity = 0;
    }
})


