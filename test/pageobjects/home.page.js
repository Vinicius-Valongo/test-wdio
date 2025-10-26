const BasePage = require('./base.page');

/**
 * Home Page Object
 * Representa a tela inicial do aplicativo
 */
class HomePage {
    /**
     * Seletores dos elementos da tela Home
     */
    get homeContainer() {
        return $('~Home-screen');
    }

    get loginButton() {
        return $('~Login');
    }

    get formsButton() {
        return $('~Forms');
    }

    get swipeButton() {
        return $('~Swipe');
    }

    get dragButton() {
        return $('~Drag');
    }

    get webviewButton() {
        return $('~Webview');
    }

    /**
     * Aguarda a tela Home estar visível
     */
    async waitForHomeScreen() {
        await BasePage.waitForElement(this.homeContainer);
    }

    /**
     * Navega para a tela de Login
     */
    async navigateToLogin() {
        await BasePage.clickElement(this.loginButton);
    }

    /**
     * Navega para a tela de Formulários
     */
    async navigateToForms() {
        await BasePage.clickElement(this.formsButton);
    }

    /**
     * Navega para a tela de Swipe
     */
    async navigateToSwipe() {
        await BasePage.clickElement(this.swipeButton);
    }

    /**
     * Navega para a tela de Drag
     */
    async navigateToDrag() {
        await BasePage.clickElement(this.dragButton);
    }

    /**
     * Navega para a tela de Webview
     */
    async navigateToWebview() {
        await BasePage.clickElement(this.webviewButton);
    }

    /**
     * Verifica se está na tela Home
     * @returns {Promise<boolean>}
     */
    async isOnHomePage() {
        return await BasePage.isElementVisible(this.homeContainer);
    }

    /**
     * Retorna para a tela Home usando o botão back do Android
     * Tenta até 5 vezes ou até encontrar a Home screen
     */
    async returnToHome() {
        const maxAttempts = 5;
        let attempts = 0;
        
        while (attempts < maxAttempts) {
            const isHome = await this.isOnHomePage();
            if (isHome) {
                console.log('✓ Já está na tela Home');
                return;
            }
            
            console.log(`⬅ Pressionando back (tentativa ${attempts + 1}/${maxAttempts})`);
            await driver.back();
            await driver.pause(1000);
            attempts++;
        }
        
        console.log('⚠ Não conseguiu retornar à Home após 5 tentativas');
    }
}

module.exports = new HomePage();
