document.addEventListener('DOMContentLoaded', function() {
    // 로그인 폼 관련 요소
    const loginForm = document.getElementById('loginForm');
    const loginUsernameInput = document.getElementById('username');
    const loginPasswordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginButton = loginForm ? loginForm.querySelector('button[type="submit"]') : null;
    const loginErrorMessage = document.createElement('div');
    loginErrorMessage.className = 'error-message';
    if (loginForm) {
        loginForm.insertBefore(loginErrorMessage, loginForm.querySelector('button[type="submit"]'));
    }

    // 회원가입 폼 관련 요소
    const signupForm = document.getElementById('signupForm');
    const signupUsernameInput = document.getElementById('signupUsername');
    const signupPasswordInput = document.getElementById('signupPassword');
    const signupConfirmPasswordInput = document.getElementById('signupConfirmPassword');
    const signupNameInput = document.getElementById('signupName');
    const signupEmailInput = document.getElementById('signupEmail');
    const signupButton = signupForm ? signupForm.querySelector('button[type="submit"]') : null;
    const signupErrorMessage = document.createElement('div');
    signupErrorMessage.className = 'error-message';
    if (signupForm) {
        signupForm.insertBefore(signupErrorMessage, signupForm.querySelector('button[type="submit"]'));
    }

    // 아이콘 URL
    const container = document.querySelector('.container');
    const hideIconUrl = container ? container.getAttribute('data-hideicon-url') : '';
    const showIconUrl = container ? container.getAttribute('data-showicon-url') : '';

    // 모든 필드가 작성되었는지 확인하는 함수
    function checkFieldsFilled(inputs, button) {
        const allFilled = inputs.every(input => input.value.trim());
        if (allFilled) {
            button.style.backgroundColor = '#7DB249'; // 모든 필드가 작성되었을 때 색상
            button.style.cursor = 'pointer';
            button.disabled = false;
        } else {
            button.style.backgroundColor = '#C6C6C6'; // 모든 필드가 작성되지 않았을 때 색상
            button.style.cursor = 'not-allowed';
            button.disabled = true;
        }
    }

    // 입력 필드 이벤트 리스너 추가
    function addInputListeners(inputs, button) {
        inputs.forEach(input => {
            input.addEventListener('input', () => checkFieldsFilled(inputs, button));
        });
        // 초기 호출로 필드 상태 확인
        checkFieldsFilled(inputs, button);
    }

    // 비밀번호 보이기/숨기기 기능
    function addTogglePasswordListener(toggleButton, passwordInput) {
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                // 아이콘 변경
                toggleButton.src = type === 'text' ? showIconUrl : hideIconUrl;
                toggleButton.classList.toggle('show');
            });
        }
    }

    // 폼 관련 요소 초기화 및 이벤트 설정
    function initializeForm(formId, inputIds, buttonSelector, togglePasswordId, errorMessageElement) {
        const form = document.getElementById(formId);
        if (!form) return;

        const inputs = inputIds.map(id => document.getElementById(id));
        const button = form.querySelector(buttonSelector);
        const passwordInput = inputs.find(input => input.type === 'password');
        const togglePasswordButton = document.getElementById(togglePasswordId);
        
        addInputListeners(inputs, button);
        addTogglePasswordListener(togglePasswordButton, passwordInput);

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            if (formId === 'loginForm') {
                handleLogin(inputs, errorMessageElement);
            } else if (formId === 'signupForm') {
                handleSignup(inputs, errorMessageElement);
            }
        });
    }

    // 로그인 요청 처리
    function handleLogin(inputs, errorMessageElement) {
        const [usernameInput, passwordInput] = inputs;
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();


        fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ username, password })
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
            showSuccessMessage(errorMessageElement, '로그인 성공!');
            // 로그인 성공 후 추가 작업 수행 (예: 페이지 이동)
            // 예: window.location.href = '/dashboard';
        })
        .catch(error => {
            showErrorMessage(errorMessageElement, error.message);
        });
    }

})