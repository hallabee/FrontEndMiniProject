let scrollPos = 0; // 현재 스크롤 포지션
const maxScrollPerSection = 10; // 각 섹션마다 10번의 스크롤 허용
const sections = document.querySelectorAll('.newfunc-section'); // 클래스 선택자로 변경
const animations = document.querySelectorAll('.newfunc-animation'); //
const totalSections = sections.length;

// 스크롤 값을 반환하는 함수
function getScrollDirection(event) {
    const scrollDirection = event.deltaY > 0 ? 1 : -1;
    return scrollDirection;
}

// 스크롤 처리 함수
function handleScroll(event) {
    event.preventDefault();

    const scrollDirection = getScrollDirection(event);

    // 스크롤 포지션 업데이트
    scrollPos = Math.min(Math.max(scrollPos + scrollDirection, 0), totalSections * maxScrollPerSection - 1);

    // 현재 섹션 인덱스 계산
    const sectionIndex = Math.floor(scrollPos / maxScrollPerSection);
    const currentSection = sections[sectionIndex];

    // 스크롤 포지션 값 업데이트
    document.getElementById('scrollDisplay').textContent = `Scroll Position: ${scrollPos}`;

    // 화면 이동
    if(scrollPos == 0){
        
    }

    window.scrollTo({
        top: currentSection.offsetTop,
        behavior: 'smooth'
    });
}

function startanimation() {
    for(let  i = 0; i  < scrollPos; i++){
        const animation = animations[i];
        animation.classList.add('setvisible-opacity');        
    }
    for(let i = scrollPos; i < totalSections*maxScrollPerSection; i++){
        const animation = animations[i];
        animation.classList.remove('setvisible-opacity')
    }
}

// 스크롤 이벤트 리스너 추가
window.addEventListener('wheel', handleScroll, { passive: false });
window.addEventListener('wheel', startanimation, { passive: false });