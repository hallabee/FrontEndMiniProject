// 섹션 전환 함수
function showSection(sectionId) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  // 프로필 사진 미리보기 함수
  function previewProfilePhoto() {
    const fileInput = document.getElementById('profile-photo');
    const preview = document.getElementById('profile-photo-preview');
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onloadend = function () {
      preview.src = reader.result;
      preview.style.display = 'block';
    }
    
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
      preview.style.display = 'none';
    }
  }
  
  // 개인정보 저장 함수 (localStorage 사용)
  function savePersonalInfo() {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const phone = document.getElementById('user-phone').value;
    const profilePhoto = document.getElementById('profile-photo-preview').src;
  
    if (!name || !email || !phone) {
      alert('모든 정보를 입력하세요.');
      return;
    }
  
    // localStorage에 저장
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('profilePhoto', profilePhoto);
  
    // 저장 완료 메시지
    showTemporaryMessage('개인 정보가 성공적으로 저장되었습니다.');
  
    // 홈 화면에 사용자 정보 반영
    applyProfileToHome();
  }
  
  // 임시 저장 메시지 표시
  function showTemporaryMessage(message) {
    const messageDiv = document.getElementById('save-message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 3000);
  }
  
  // 페이지 로드 시 저장된 정보 불러오기 및 홈 화면에 반영
  window.onload = function () {
    applyProfileToHome();
  };
  
  function applyProfileToHome() {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');
    const savedPhoto = localStorage.getItem('profilePhoto');
  
    if (savedName) {
      document.getElementById('welcome-message').innerText = `${savedName}님, 환영합니다`;
      document.getElementById('profile-name-home').innerText = savedName;
    }
    if (savedEmail) {
      document.getElementById('profile-email-home').innerText = savedEmail;
    }
    if (savedPhone) {
      document.getElementById('profile-phone-home').innerText = savedPhone;
    }
    if (savedPhoto) {
      const profileImageHome = document.getElementById('profile-image-home');
      profileImageHome.src = savedPhoto;
      profileImageHome.style.display = 'block';
    }
  }
  