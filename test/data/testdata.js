/**
 * Test Data
 * Dados de teste utilizados nos cenários
 */

module.exports = {
    // Dados de Login válidos
    validLogin: {
        email: 'test@webdriverio.com',
        password: 'Test1234!'
    },

    // Dados de Login inválidos
    invalidLogin: {
        invalidEmail: 'invalid-email',
        emptyEmail: '',
        emptyPassword: '',
        wrongPassword: 'WrongPass123'
    },

    // Dados de Cadastro válidos
    validSignUp: {
        email: 'newuser@webdriverio.com',
        password: 'NewUser123!',
        repeatPassword: 'NewUser123!'
    },

    // Dados de Cadastro inválidos
    invalidSignUp: {
        invalidEmail: 'invalid.email',
        mismatchPassword: 'Test123!',
        mismatchRepeatPassword: 'Test456!',
        shortPassword: '123'
    },

    // Dados de Formulários
    formData: {
        inputText: 'WebdriverIO Automation Test',
        dropdownOptions: {
            option1: 'webdriver.io is awesome',
            option2: 'Appium is awesome',
            option3: 'This app is awesome'
        }
    },

    // Mensagens esperadas
    messages: {
        loginSuccess: 'Success',
        signUpSuccess: 'Signed Up',
        invalidEmail: 'enter a valid email',
        passwordMismatch: 'not match',
        buttonActive: 'This button is'
    },

    // Textos dos slides do Swipe
    swipeTexts: {
        slide1: 'Swipe horizontal',
        slide2: 'Fully Open Source',
        slide3: 'GREAT COMMUNITY'
    }
};
