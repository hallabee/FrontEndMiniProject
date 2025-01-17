function showBox(){
    let headerBox = document.querySelector('.headerbox-element');
    if(headerBox.classList.contains('headerbox-element-visible')){
        headerBox.classList.remove('headerbox-element-visible');
    }
    else{
        headerBox.classList.add('headerbox-element-visible');
    }
}