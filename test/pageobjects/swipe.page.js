const BasePage = require('./base.page');

/**
 * Swipe Page Object
 * Representa a tela de Swipe do aplicativo
 */
class SwipePage {
    /**
     * Seletores dos elementos da tela Swipe
     */
    get swipeContainer() {
        return $('~Swipe-screen');
    }

    get carouselContainer() {
        return $('//*[@content-desc="__CAROUSEL_CONTAINER__"]');
    }

    get slideText() {
        return $('//*[@resource-id="slideTextLabel"]');
    }

    get slideTextAlternative() {
        // Seletor alternativo caso o principal falhe
        return $('//android.widget.TextView[contains(@text, "FULLY OPEN SOURCE")]');
    }

    get logo() {
        return $('~WebdriverIO logo');
    }

    /**
     * Obtém um card específico do carousel
     * @param {number} index - Índice do card
     * @returns {WebdriverIO.Element}
     */
    card(index) {
        return $(`(//*[@content-desc="card"])[${index}]`);
    }

    /**
     * Aguarda a tela de Swipe estar visível
     */
    async waitForSwipeScreen() {
        await BasePage.waitForElement(this.swipeContainer);
    }

    /**
     * Realiza swipe para a esquerda
     */
    async swipeLeft() {
        const { width, height } = await driver.getWindowSize();
        
        // Coordenadas para swipe horizontal (direita para esquerda)
        const left = Math.floor(width * 0.1);
        const top = Math.floor(height * 0.4);
        const swipeWidth = Math.floor(width * 0.8);
        const swipeHeight = Math.floor(height * 0.2);
        
        // Usando mobile: swipeGesture que é suportado pelo UiAutomator2
        await driver.execute('mobile: swipeGesture', {
            left,
            top,
            width: swipeWidth,
            height: swipeHeight,
            direction: 'left',
            percent: 0.75
        });
        
        await driver.pause(1500); // Aguarda animação do carousel
    }

    /**
     * Realiza swipe para a direita
     */
    async swipeRight() {
        const { width, height } = await driver.getWindowSize();
        const startX = width * 0.2;
        const endX = width * 0.8;
        const y = height / 2;

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 500, x: endX, y: y },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        await driver.pause(500);
    }

    /**
     * Obtém o texto do slide atual
     * @returns {Promise<string>}
     */
    async getSlideText() {
        // Aguarda animação do swipe
        await driver.pause(1000);
        
        try {
            // Tenta usar o seletor principal
            await BasePage.waitForElement(this.slideText);
            return await BasePage.getText(this.slideText);
        } catch (error) {
            // Se falhar, tenta seletor alternativo
            console.log('Tentando seletor alternativo para slideText...');
            await BasePage.waitForElement(this.slideTextAlternative);
            return await BasePage.getText(this.slideTextAlternative);
        }
    }

    /**
     * Obtém o texto do card atual no carousel
     * @returns {Promise<string>}
     */
    async getCurrentCardText() {
        return await this.getSlideText();
    }

    /**
     * Verifica se o logo está visível
     * @returns {Promise<boolean>}
     */
    async isLogoVisible() {
        return await BasePage.isElementVisible(this.logo);
    }

    /**
     * Navega para um slide específico fazendo swipes
     * @param {number} slideNumber - Número do slide (1-6)
     */
    async navigateToSlide(slideNumber) {
        // Começa do slide 1
        for (let i = 1; i < slideNumber; i++) {
            await this.swipeLeft();
        }
    }

    /**
     * Verifica se está na tela de Swipe
     * @returns {Promise<boolean>}
     */
    async isOnSwipePage() {
        return await BasePage.isElementVisible(this.swipeContainer);
    }
}

module.exports = new SwipePage();
