document.addEventListener('DOMContentLoaded', function() {
    // 로그인 폼 관련 요소
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginErrorMessage = document.getElementById('errorMessage');

    // 회원가입 폼 관련 요소
    const signupForm = document.getElementById('signupForm');
    const signupUsernameInput = document.getElementById('signupUsername');
    const signupPasswordInput = document.getElementById('signupPassword');
    const signupConfirmPasswordInput = document.getElementById('signupConfirmPassword');
    const signupNameInput = document.getElementById('signupName');
    const signupEmailInput = document.getElementById('signupEmail');
    const signupErrorMessage = document.createElement('div');
    signupErrorMessage.className = 'error-message';
    if (signupForm) {
        signupForm.insertBefore(signupErrorMessage, signupForm.querySelector('button[type="submit"]'));
    }

    // 로그인 폼 제출 이벤트
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 폼의 기본 제출 동작을 막습니다.

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // 입력 유효성 검사
            if (!username || !password) {
                showErrorMessage(loginErrorMessage, '아이디와 비밀번호를 모두 입력하세요.');
                return;
            }

            // 로그인 요청
            fetch('/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 401) {
                    throw new Error('아이디 또는 비밀번호가 잘못되었습니다.');
                } else {
                    throw new Error('로그인에 실패했습니다.');
                }
            })
            .then(data => {
                showSuccessMessage(loginErrorMessage, '로그인 성공!');
                // 로그인 성공 후 추가 작업 수행 (예: 페이지 이동)
                // 예: window.location.href = '/dashboard';
            })
            .catch(error => {
                showErrorMessage(loginErrorMessage, error.message);
            });
        });
    }

    // 비밀번호 보이기/숨기기 기능
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            // 아이콘 변경
            if (type === 'text') {
                togglePassword.src = './img/showicon.svg'; // 눈뜬 아이콘 경로로 변경
            } else {
                togglePassword.src = './img/hideicon.svg'; // 눈 감은 아이콘 경로로 변경
            }
            this.classList.toggle('show');
        });
    }

    // 회원가입 폼 제출 이벤트
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 폼의 기본 제출 동작을 막습니다.

            const username = signupUsernameInput.value.trim();
            const password = signupPasswordInput.value.trim();
            const confirmPassword = signupConfirmPasswordInput.value.trim();
            const name = signupNameInput.value.trim();
            const email = signupEmailInput.value.trim();

            // 입력 유효성 검사
            if (!username || !password || !confirmPassword || !name || !email) {
                showErrorMessage(signupErrorMessage, '모든 필드를 입력하세요.');
                return;
            }

            // 이메일 형식 유효성 검사
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showErrorMessage(signupErrorMessage, '유효한 이메일 주소를 입력하세요.');
                return;
            }

            // 비밀번호 일치 여부 확인
            if (password !== confirmPassword) {
                showErrorMessage(signupErrorMessage, '비밀번호가 일치하지 않습니다.');
                return;
            }

            // 회원가입 요청
            fetch('/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('회원가입에 실패했습니다.');
                }
            })
            .then(data => {
                showSuccessMessage(signupErrorMessage, '회원가입 성공!');
                // 회원가입 성공 후 추가 작업 수행 (예: 로그인 페이지로 이동)
                // 예: window.location.href = '/login';
            })
            .catch(error => {
                showErrorMessage(signupErrorMessage, error.message);
            });
        });
    }

    function showErrorMessage(element, message) {
        element.textContent = message;
        element.style.display = 'block';
        element.style.color = 'red';
        element.style.marginTop = '10px';
        element.style.marginBottom = '25px';
    }

    function showSuccessMessage(element, message) {
        element.textContent = message;
        element.style.display = 'block';
        element.style.color = 'green';
        element.style.marginTop = '10px';
    }
});
