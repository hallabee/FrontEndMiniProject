let currentProfileIndex = 0;  // 현재 선택된 프로필 인덱스

const profileLinks = document.querySelectorAll('.profile-list .profile-card');

function updateProfileCard() {
    const profileCard = document.getElementById('profileCard');
    const selectedProfile = profileLinks[currentProfileIndex];

    // 현재 프로필 카드 업데이트
    profileCard.href = selectedProfile.href;
    profileCard.querySelector('.profile-img').src = selectedProfile.querySelector('.profile-img').src;
    profileCard.querySelector('h4').innerHTML = selectedProfile.querySelector('h4').innerHTML;
    profileCard.querySelector('p').innerHTML = selectedProfile.querySelector('p').innerHTML;
    profileCard.querySelector('.fa-globe').innerHTML = selectedProfile.querySelector('.fa-globe').innerHTML;
    profileCard.querySelector('.fa-headset').innerHTML = selectedProfile.querySelector('.fa-headset').innerHTML;
    profileCard.querySelector('.far.fa-envelope').innerHTML = selectedProfile.querySelector('.far.fa-envelope').innerHTML;

    updateSideCards(); // 양쪽 카드 업데이트
}

// 양쪽 카드 업데이트 함수
function updateSideCards() {
    const nextIndex = (currentProfileIndex + 1) % profileLinks.length;
    const prevIndex = (currentProfileIndex - 1 + profileLinks.length) % profileLinks.length;

    const prevCard = document.getElementById('prevProfileCard');
    const nextCard = document.getElementById('nextProfileCard');

    // 이전 카드 업데이트
    prevCard.querySelector('.profile-img').src = profileLinks[prevIndex].querySelector('.profile-img').src;
    prevCard.querySelector('h4').innerHTML = profileLinks[prevIndex].querySelector('h4').innerHTML;

    // 다음 카드 업데이트
    nextCard.querySelector('.profile-img').src = profileLinks[nextIndex].querySelector('.profile-img').src;
    nextCard.querySelector('h4').innerHTML = profileLinks[nextIndex].querySelector('h4').innerHTML;
}

// 슬라이드를 이동하는 함수
function moveSlide(direction) {
    const slider = document.getElementById('slider');

    // 슬라이드 애니메이션
    slider.classList.add('moving');

    // 프로필 인덱스 업데이트
    currentProfileIndex = (currentProfileIndex + direction + profileLinks.length) % profileLinks.length;

    // 모든 프로필 카드 업데이트
    updateProfileCard();

    setTimeout(() => {
        slider.classList.remove('moving');
    }, 400); // 애니메이션 시간과 일치시킵니다
}



// 전체 보기에서 선택한 프로필을 슬라이드 방식에 연동하는 함수
function selectProfile(index) {
    currentProfileIndex = index;
    updateProfileCard();
    showRotatingCard();  // 슬라이드 모드로 전환
}

// 전체 프로필을 보여주는 함수
function showAllProfiles() {
    document.getElementById('allProfiles').style.display = 'block';
    document.getElementById('slider').style.display = 'none';

    const allProfileCards = document.querySelectorAll('.all-profiles .profile-card');
    allProfileCards.forEach(card => {
        card.style.opacity = '1'; // 모든 카드의 투명도 제거
    });

}

// 회전 프로필을 보여주는 함수
function showRotatingCard() {
    document.getElementById('allProfiles').style.display = 'none';
    document.getElementById('slider').style.display = 'inline-block';
    updateProfileCard();
}

// 초기화
updateProfileCard();
