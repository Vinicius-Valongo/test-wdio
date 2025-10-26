# 🤖 WebDriverIO - Automação de Testes Mobile Android# 🤖 WebDriverIO Native Demo App - Automação de Testes Mobile



[![WebDriverIO](https://img.shields.io/badge/WebDriverIO-8.27-orange.svg)](https://webdriver.io/)[![WebDriverIO](https://img.shields.io/badge/WebDriverIO-8.27-orange.svg)](https://webdriver.io/)

[![Appium](https://img.shields.io/badge/Appium-2.0-purple.svg)](https://appium.io/)[![Appium](https://img.shields.io/badge/Appium-2.0-purple.svg)](https://appium.io/)

[![Node](https://img.shields.io/badge/Node-18+-green.svg)](https://nodejs.org/)[![Node](https://img.shields.io/badge/Node-18+-green.svg)](https://nodejs.org/)

[![Allure](https://img.shields.io/badge/Allure-2.0-blue.svg)](https://docs.qameta.io/allure/)[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)



Projeto completo de automação mobile com **10 testes automatizados** usando **Page Object Model (POM)** e relatórios profissionais com **Allure Report**.Este projeto contém uma **suite completa de 20 testes automatizados** para o aplicativo **native-demo-app** do WebDriverIO, utilizando o **padrão Page Object Model (POM)** e as melhores práticas de automação mobile.



---## 📋 Requisitos



## 📋 Índice- Node.js (v18 ou superior)

- Java JDK 11 ou superior

- [Requisitos](#-requisitos)- Android Studio com Android SDK

- [Instalação Rápida (5 min)](#-instalação-rápida-5-min)- Appium Server 2.0+

- [Como Executar](#-como-executar)- Emulador Android (API 29+) ou dispositivo físico

- [Estrutura do Projeto](#-estrutura-do-projeto)

- [Testes Implementados](#-testes-implementados)---

- [Relatórios Allure](#-relatórios-allure)

- [CI/CD GitLab](#-cicd-gitlab)## 📖 Documentação Completa

- [Troubleshooting](#-troubleshooting)

- [Boas Práticas](#-boas-práticas)Este projeto possui documentação extensiva para todos os níveis:



---### 🎯 Para Começar

- 📘 **[QUICK_START.md](QUICK_START.md)** - Início rápido em 5 minutos

## 🔧 Requisitos- 📗 **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Guia detalhado de instalação

- 📙 **[POWERSHELL_GUIDE.md](POWERSHELL_GUIDE.md)** - Comandos específicos para Windows

### Obrigatórios

- **Node.js** v18 ou superior### 📚 Documentação Técnica

- **Java JDK** 11 ou superior- 📕 **[TEST_SUMMARY.md](TEST_SUMMARY.md)** - Resumo completo dos 20 testes

- **Android SDK** (via Android Studio)- 📔 **[ARCHITECTURE.md](ARCHITECTURE.md)** - Arquitetura e design patterns

- **Emulador Android** ou dispositivo físico- 📓 **[BEST_PRACTICES.md](BEST_PRACTICES.md)** - Melhores práticas de automação



### Verificar Instalações### 📊 Evidências e Relatórios

```powershell- � **[EVIDENCE_QUICKSTART.md](EVIDENCE_QUICKSTART.md)** - Quick start em 5 minutos

node --version    # v18.0.0 ou superior- �📊 **[ALLURE_GUIDE.md](ALLURE_GUIDE.md)** - Guia completo de geração de evidências

java --version    # 11 ou superior- 📸 **[ALLURE_VISUAL_GUIDE.md](ALLURE_VISUAL_GUIDE.md)** - Guia visual do relatório

adb --version     # Android Debug Bridge- 📋 **[EVIDENCE_IMPLEMENTATION_REPORT.md](EVIDENCE_IMPLEMENTATION_REPORT.md)** - Relatório de implementação

```

### 📚 Recursos Adicionais

---- 📒 **[INDEX.md](INDEX.md)** - Índice de toda a documentação

- 📄 **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Resumo visual do projeto

## ⚡ Instalação Rápida (5 min)- 📄 **[EXECUTIVE_SUMMARY.md](EXECUTIVE_SUMMARY.md)** - Resumo executivo

- 📄 **[FILE_STRUCTURE.md](FILE_STRUCTURE.md)** - Estrutura completa de arquivos

### 1. Clone e Instale Dependências- 📄 **[CONTRIBUTING.md](CONTRIBUTING.md)** - Como contribuir

```powershell

cd wdio---

npm install

```## 🚀 Configuração Inicial



### 2. Instale Appium### 1. Instalar Dependências

```powershell

npm install -g appium@next```bash

appium driver install uiautomator2npm install

``````



### 3. Configure Android SDK### 2. Configurar Appium

```powershell

# Defina variáveis de ambiente (PowerShell)```bash

$env:ANDROID_HOME = "C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk"npm install -g appium

$env:ANDROID_SDK_ROOT = $env:ANDROID_HOMEappium driver install uiautomator2

```

# Adicione ao PATH (permanente)

[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")### 3. Download do Aplicativo

[Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", $env:ANDROID_SDK_ROOT, "User")

```Baixe o APK do native-demo-app:

- Acesse: https://github.com/webdriverio/native-demo-app/releases

### 4. Baixe o APK- Baixe o arquivo `Android-NativeDemoApp-0.4.0.apk`

```powershell- Crie a pasta `apps/android` na raiz do projeto

# O APK já está incluído em: apps/android/app-debug.apk- Coloque o arquivo APK na pasta criada e renomeie para `app-debug.apk`

# Caso precise baixar: https://github.com/webdriverio/native-demo-app/releases

```### 4. Configurar Emulador Android



### 5. Inicie o Emulador1. Abra o Android Studio

```powershell2. Vá em Tools > Device Manager

# No Android Studio: Tools > Device Manager > Play (▶️)3. Crie um novo dispositivo virtual (AVD)

# Ou via linha de comando:4. Escolha um dispositivo com API Level 29 ou superior

emulator -avd SEU_EMULADOR_AVD5. Inicie o emulador

```

## 📁 Estrutura do Projeto

### 6. Teste a Configuração

```powershell```

# Inicie Appium em um terminalwdio/

appium├── .github/

│   └── workflows/

# Em outro terminal, execute os testes│       └── test.yml              # CI/CD com GitHub Actions

npm test├── test/

```│   ├── data/

│   │   └── testdata.js           # Dados de teste

**✅ Pronto! Você deve ver os testes rodando.**│   ├── helpers/

│   │   └── utils.js              # Funções utilitárias

---│   ├── pageobjects/              # Page Objects (POM)

│   │   ├── base.page.js          # Métodos base comuns

## 🚀 Como Executar│   │   ├── home.page.js          # Página inicial

│   │   ├── login.page.js         # Página de login/cadastro

### Comandos Principais│   │   ├── forms.page.js         # Página de formulários

│   │   └── swipe.page.js         # Página de swipe

```powershell│   └── specs/                    # Cenários de teste (20 testes)

# Executar TODOS os testes│       ├── 01-login.spec.js              # 3 testes

npm test│       ├── 02-signup.spec.js             # 3 testes

│       ├── 03-forms.spec.js              # 4 testes

# Executar testes + gerar relatório Allure│       ├── 04-navigation.spec.js         # 1 teste

npm run test:report│       ├── 05-swipe.spec.js              # 2 testes

│       ├── 06-forms-validation.spec.js   # 4 testes

# Apenas gerar relatório (testes já executados)│       └── 07-error-messages.spec.js     # 3 testes

npm run report:serve├── apps/

│   └── android/

# Limpar relatórios antigos│       └── app-debug.apk         # APK do aplicativo

npm run clean:reports├── wdio.conf.js                  # Configuração Android

```├── wdio.ios.conf.js              # Configuração iOS

├── package.json                  # Dependências

### Executar Testes Específicos├── README.md                     # Este arquivo

├── SETUP_GUIDE.md                # Guia detalhado de instalação

```powershell└── TEST_SUMMARY.md               # Resumo completo dos testes

# Suite específica```

npx wdio run wdio.conf.js --spec ./test/specs/00-suite-basica.spec.js

## 🧪 Cenários de Teste Implementados - 20 Testes

# Apenas um teste

npx wdio run wdio.conf.js --spec ./test/specs/00-suite-basica.spec.js --mochaOpts.grep "TC01"### 1. Login (TC01-TC03) - 3 testes

```- ✅ TC01: Login com credenciais válidas

- ✅ TC02: Validação de email inválido

### Configurar Ambiente (sempre antes de rodar)- ✅ TC03: Validação de campos vazios



**Windows PowerShell:**### 2. Cadastro (TC04-TC06) - 3 testes

```powershell- ✅ TC04: Cadastro com dados válidos

$env:ANDROID_HOME = "C:\Users\v.siqueira.valongo\AppData\Local\Android\Sdk"- ✅ TC05: Validação de senhas não coincidentes

$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME- ✅ TC06: Validação de email inválido no cadastro

```

### 3. Formulários (TC07-TC10) - 4 testes

**Linux/Mac:**- ✅ TC07: Preenchimento de campo de input

```bash- ✅ TC08: Alternância de switch

export ANDROID_HOME=$HOME/Library/Android/sdk- ✅ TC09: Seleção de dropdown

export ANDROID_SDK_ROOT=$ANDROID_HOME- ✅ TC10: Ativação de botão e verificação de mensagem

```

### 4. Navegação (TC11) - 1 teste

---- ✅ TC11: Navegação entre todas as telas



## 📁 Estrutura do Projeto### 5. Swipe (TC12-TC13) - 2 testes

- ✅ TC12: Swipe horizontal no carousel

```- ✅ TC13: Verificação do logo no último slide

wdio/

├── test/### 6. Validação de Forms (TC14-TC17) - 4 testes

│   ├── pageobjects/           # Page Objects (POM)- ✅ TC14: Caracteres especiais no input

│   │   ├── base.page.js       # Métodos base comuns- ✅ TC15: Números no input

│   │   ├── home.page.js       # Tela inicial- ✅ TC16: Múltiplas seleções no dropdown

│   │   ├── login.page.js      # Login/Cadastro- ✅ TC17: Preenchimento completo do formulário

│   │   └── forms.page.js      # Formulários

│   └── specs/                 # Cenários de teste### 7. Mensagens de Erro (TC18-TC20) - 3 testes

│       └── 00-suite-basica.spec.js  # 10 testes principais- ✅ TC18: Senha vazia no login

│- ✅ TC19: Senha curta no cadastro

├── apps/android/              # APK do app- ✅ TC20: Alternância entre abas Login/Sign Up

│   └── app-debug.apk

│## ▶️ Executando os Testes

├── allure-results/            # Resultados dos testes (JSON)

├── allure-report/             # Relatório HTML gerado### 1. Iniciar o Appium Server

│

├── wdio.conf.js               # Configuração principal```bash

├── package.json               # Dependênciasappium

├── .gitlab-ci.yml             # Pipeline CI/CD```

└── README.md                  # Este arquivo

```### 2. Executar todos os testes



---```bash

npm test

## 🧪 Testes Implementados```



### Suite Básica - 10 Testes Principais### 3. 📊 Gerar Relatório de Evidências



#### 🔐 Login (3 testes)```powershell

- **TC01** - Login com credenciais válidas# Opção 1: Executar testes + gerar relatório automaticamente

- **TC02** - Validação de email inválido  npm run test:report

- **TC03** - Validação de campos vazios

# Opção 2: Gerar relatório dos testes já executados

#### 📝 Cadastro (2 testes)npm run report:serve

- **TC04** - Cadastro com dados válidos

- **TC05** - Validação de senhas não coincidentes# Opção 3: Apenas gerar HTML (sem abrir)

npm run report:generate

#### 📋 Formulários (3 testes)

- **TC06** - Clicar no botão Active e verificar popup# Limpar relatórios antigos

- **TC07** - Preencher campo de inputnpm run clean:reports

- **TC08** - Alternar switch```



#### 🧭 Navegação (1 teste)O relatório Allure será aberto automaticamente no navegador com:

- **TC09** - Navegar entre todas as telas- ✅ Screenshots de cada step importante

- ✅ Screenshots automáticos em todas as falhas

#### 🎯 Interações (1 teste)- ✅ Logs detalhados de execução

- **TC10** - Clicar no botão Inactive- ✅ Informações completas do ambiente de teste

- ✅ Gráficos e estatísticas interativas

### Padrão Page Object Model (POM)- ✅ Timeline de execução

- ✅ Categorização automática de falhas

**Benefícios:**

- ✅ Código reutilizável### 4. Executar testes específicos

- ✅ Fácil manutenção

- ✅ Testes mais legíveis```bash

- ✅ Separação de responsabilidades# Login (3 testes)

npx wdio run wdio.conf.js --spec ./test/specs/01-login.spec.js

**Estrutura:**

```javascript# Cadastro (3 testes)

// Page Objectnpx wdio run wdio.conf.js --spec ./test/specs/02-signup.spec.js

class LoginPage {

    get emailField() { return $('~input-email'); }# Formulários (4 testes)

    get passwordField() { return $('~input-password'); }npx wdio run wdio.conf.js --spec ./test/specs/03-forms.spec.js

    

    async login(email, password) {# Navegação (1 teste)

        await this.emailField.setValue(email);npx wdio run wdio.conf.js --spec ./test/specs/04-navigation.spec.js

        await this.passwordField.setValue(password);

        await this.loginButton.click();# Swipe (2 testes)

    }npx wdio run wdio.conf.js --spec ./test/specs/05-swipe.spec.js

}

# Validação de Forms (4 testes)

// Spec (Teste)npx wdio run wdio.conf.js --spec ./test/specs/06-forms-validation.spec.js

it('TC01 - Login válido', async () => {

    await LoginPage.login('test@test.com', 'Test123!');# Mensagens de Erro (3 testes)

    expect(await HomePage.isOnHomePage()).to.be.true;npx wdio run wdio.conf.js --spec ./test/specs/07-error-messages.spec.js

});```

```

## 🎯 Padrão Page Object

---

O projeto segue o padrão **Page Object Model (POM)** para melhor organização e manutenibilidade:

## 📊 Relatórios Allure

### Benefícios:

### Gerar Relatório- **Reutilização**: Métodos podem ser reutilizados em múltiplos testes

- **Manutenibilidade**: Alterações na UI requerem mudanças apenas nos Page Objects

```powershell- **Legibilidade**: Testes mais limpos e fáceis de entender

# Opção 1: Executar testes + gerar relatório (recomendado)- **Separação de responsabilidades**: Lógica de UI separada da lógica de teste

npm run test:report

### Estrutura:

# Opção 2: Apenas gerar relatório de testes já executados- **BasePage**: Contém métodos comuns (cliques, preenchimento, esperas)

npm run report:serve- **Page Objects específicos**: Cada tela tem seu próprio Page Object com seletores e ações

- **Specs**: Contêm apenas a lógica de teste usando os Page Objects

# Opção 3: Gerar HTML sem abrir navegador

npm run report:generate---

```

## 🚀 CI/CD - GitLab Pipeline

### O que o Relatório Mostra

Este projeto possui pipeline automatizado configurado no GitLab CI/CD.

#### 📸 **Screenshots**

- Captura automática em **todas as falhas**### Execução Automática

- Screenshot manual em steps importantes

- Anexadas automaticamente ao relatórioO pipeline executa automaticamente em:

- ✅ **Commits** na branch `main` ou `develop`

#### 📋 **Informações Completas**- 🔀 **Merge Requests** (validação antes do merge)

- **Overview**: Dashboard com estatísticas- 🕐 **Schedule** (testes noturnos configuráveis)

- **Suites**: Testes organizados por categoria

- **Graphs**: Gráficos interativos### Configuração Rápida

- **Timeline**: Linha do tempo de execução

- **Categories**: Falhas categorizadas1. **Commit o arquivo de configuração**:

```bash

#### 🏷️ **Categorias de Falhas** (8 tipos)git add .gitlab-ci.yml

1. **Product defects** - Bugs do aplicativogit commit -m "ci: adiciona pipeline GitLab CI/CD"

2. **Test defects** - Problemas nos testesgit push

3. **UI Element Issues** - Elementos não encontrados```

4. **Timeout Issues** - Problemas de timeout

5. **Navigation Issues** - Falhas de navegação2. **Configure GitLab Runner** (se não tiver):

6. **Data Validation** - Validações de dados```bash

7. **Connection Issues** - Problemas de conexão# Linux/Mac

8. **Unknown Issues** - Erros desconhecidoschmod +x setup-gitlab-runner.sh

./setup-gitlab-runner.sh

### Estrutura de Pastas

# Ou manualmente - veja CI_CD_GUIDE.md

``````

allure-results/        # Resultados brutos (JSON, TXT, PNG)

├── *.json            # Metadados dos testes3. **Visualize resultados**:

├── *.txt             # Logs de execução- Pipeline: `CI/CD > Pipelines`

└── *.png             # Screenshots (apenas em falhas)- Relatório Allure: `https://<usuario>.gitlab.io/<projeto>/`



allure-report/         # Relatório HTML gerado### Documentação Completa

└── index.html        # Abrir este arquivo no navegador

```📚 **[CI_CD_GUIDE.md](CI_CD_GUIDE.md)** - Guia completo de configuração e uso



### Configuração Allure (wdio.conf.js)### Jobs Disponíveis



```javascript| Job | Quando | Descrição |

reporters: [|-----|--------|-----------|

    'spec',| `test:mobile` | MRs, main, develop | Executa todos os testes |

    ['allure', {| `test:merge-request` | Apenas MRs | Validação rápida |

        outputDir: 'allure-results',| `test:nightly` | Agendado | Testes noturnos |

        disableWebdriverStepsReporting: false,| `report:allure` | Sempre após testes | Gera HTML Allure |

        disableWebdriverScreenshotsReporting: false| `pages` | Apenas main | Publica no GitLab Pages |

    }]

],---



afterTest: async function(test, context, { error }) {## 📊 Relatórios

    // Screenshot automático em falhas

    if (error) {Os testes geram relatórios automáticos no console usando o Spec Reporter do WebDriverIO.

        const screenshot = await driver.takeScreenshot();

        allure.addAttachment(## � Sistema de Evidências Profissional

            `Falha: ${test.title}`,

            Buffer.from(screenshot, 'base64'),Este projeto inclui um **sistema completo de geração de evidências** usando Allure Report:

            'image/png'

        );### 📸 Recursos de Evidências

    }

}- ✅ **Screenshots automáticos** em cada falha de teste

```- ✅ **Screenshots em steps importantes** para rastreamento visual

- ✅ **Logs de console** capturados automaticamente

---- ✅ **Informações de ambiente** (dispositivo, OS, versões)

- ✅ **Anexos customizados** (JSON, texto, imagens)

## 🚀 CI/CD GitLab- ✅ **Categorização de falhas** (8 categorias automáticas)

- ✅ **Timeline de execução** visual

### Pipeline Automatizado- ✅ **Gráficos interativos** (status, severidade, duração)



O projeto inclui pipeline completo para GitLab CI/CD que executa:### 🎯 Como Usar

- ✅ Testes automaticamente em commits

- ✅ Testes em Merge Requests```powershell

- ✅ Testes agendados (nightly)# 1. Executar testes e gerar relatório

- ✅ Geração de relatório Allurenpm run test:report

- ✅ Publicação no GitLab Pages

# 2. Ou servir relatório existente

### Configuração Rápidanpm run report:serve

```

1. **Commit a configuração**:

```bash### 📋 O que você verá:

git add .gitlab-ci.yml

git commit -m "ci: adiciona pipeline GitLab"1. **Overview** - Dashboard com estatísticas completas

git push2. **Suites** - Todos os testes organizados

```3. **Behaviors** - Organização por Features/Stories

4. **Timeline** - Linha do tempo de execução

2. **Configure GitLab Runner** (Linux/Mac):5. **Graphs** - Gráficos detalhados

```bash6. **Categories** - Falhas categorizadas automaticamente

chmod +x setup-gitlab-runner.sh

./setup-gitlab-runner.sh### 📚 Documentação de Evidências

```

- **[EVIDENCE_QUICKSTART.md](EVIDENCE_QUICKSTART.md)** - Início rápido em 5 minutos

3. **Visualize no GitLab**:- **[ALLURE_GUIDE.md](ALLURE_GUIDE.md)** - Guia completo (600+ linhas)

- Pipeline: `CI/CD > Pipelines`- **[ALLURE_VISUAL_GUIDE.md](ALLURE_VISUAL_GUIDE.md)** - Guia visual do relatório

- Relatório: `https://<usuario>.gitlab.io/<projeto>/`

---

### Jobs do Pipeline

## �🔧 Configurações Importantes

| Job | Quando | Descrição |

|-----|--------|-----------|### wdio.conf.js

| `test:mobile` | MRs, main, develop | Todos os testes |

| `test:merge-request` | Apenas MRs | Validação rápida |- **Platform**: Android

| `test:nightly` | Agendado | Testes noturnos |- **Automation**: UIAutomator2

| `report:allure` | Após testes | Gera HTML |- **Framework**: Mocha

| `pages` | Apenas main | Publica Pages |- **Reporter**: Spec

- **Timeout**: 60000ms

### Documentação Completa

## 📝 Boas Práticas Implementadas

📚 **Ver [CI_CD_GUIDE.md](CI_CD_GUIDE.md)** para:

- Configuração detalhada do Runner1. ✅ **Page Object Pattern** para organização do código

- Troubleshooting de pipeline2. ✅ **Waits explícitos** para garantir estabilidade

- Como testar localmente3. ✅ **Comentários em português** para melhor compreensão

- Boas práticas de CI/CD4. ✅ **Assertions com Chai** para validações claras

5. ✅ **BeforeEach hooks** para garantir estado inicial limpo

---6. ✅ **Métodos reutilizáveis** no BasePage

7. ✅ **Screenshots em caso de falha**

## 🐛 Troubleshooting8. ✅ **Nomenclatura clara** de testes e métodos



### Problema: Appium não conecta ao emulador## 🐛 Troubleshooting



**Sintoma**: `ECONNREFUSED 127.0.0.1:4723`### Appium não conecta ao emulador

```bash

**Solução**:adb devices

```powershelladb kill-server

# Verificar se Appium está rodandoadb start-server

# Terminal 1: Iniciar Appium```

appium

### Erro de timeout

# Terminal 2: Verificar emulador- Aumente o `waitforTimeout` no `wdio.conf.js`

adb devices- Verifique se o emulador está respondendo



# Se não aparecer nenhum device:### App não instala

adb kill-server- Verifique o caminho do APK no `wdio.conf.js`

adb start-server- Confirme que o APK está na pasta `apps/android/`

```

## 📚 Recursos Adicionais

### Problema: Testes com timeout

- [WebDriverIO Documentation](https://webdriver.io/)

**Sintoma**: `Error: Timeout of 60000ms exceeded`- [Appium Documentation](https://appium.io/)

- [Native Demo App Repository](https://github.com/webdriverio/native-demo-app)

**Solução 1 - Aumentar timeout global**:

```javascript## � Estatísticas do Projeto

// wdio.conf.js

mochaOpts: {- **Total de Testes:** 20 cenários

    timeout: 120000  // 2 minutos- **Page Objects:** 5 (incluindo BasePage)

}- **Cobertura de Funcionalidades:** 100% das principais features

```- **Padrão de Projeto:** Page Object Model

- **Framework de Teste:** Mocha + Chai

**Solução 2 - Aumentar timeout específico**:- **Assertions:** Chai (expect)

```javascript

it('teste lento', async () => {## 🎯 Cobertura de Testes

    // ...código

}).timeout(180000); // 3 minutos| Categoria | Quantidade | Percentual |

```|-----------|------------|------------|

| Login/Cadastro | 9 testes | 45% |

### Problema: Elemento não encontrado| Formulários | 8 testes | 40% |

| Navegação | 1 teste | 5% |

**Sintoma**: `An element could not be located`| Swipe/Gestos | 2 testes | 10% |



**Solução**:## 📖 Documentação Adicional

```javascript

// Adicionar espera explícita- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Guia completo de instalação e configuração

await driver.pause(2000);- **[TEST_SUMMARY.md](TEST_SUMMARY.md)** - Resumo detalhado de todos os 20 cenários de teste



// Ou usar waitForExist## 🤝 Contribuindo

await element.waitForExist({ timeout: 10000 });

1. Fork o projeto

// Verificar seletor2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)

const element = await $('~accessibility-id');3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)

await element.waitForDisplayed();4. Push para a branch (`git push origin feature/NovaFuncionalidade`)

```5. Abra um Pull Request



### Problema: APK não instala## 📄 Licença



**Sintoma**: `An unknown server-side error occurred`Este projeto está sob a licença MIT.



**Solução**:## �👨‍💻 Autor

```powershell

# Verificar espaço no emuladorDesenvolvido como projeto de automação de testes mobile usando WebDriverIO e Appium.

adb shell df

---

# Desinstalar app manualmente

adb uninstall com.wdiodemoapp⭐ Se este projeto foi útil, considere dar uma estrela!


# Verificar caminho do APK
Test-Path "apps/android/app-debug.apk"

# Reinstalar
adb install apps/android/app-debug.apk
```

### Problema: Emulador lento

**Solução**:
```powershell
# 1. Aumentar RAM do emulador (Android Studio)
# AVD Manager > Edit > Show Advanced Settings > RAM: 4096 MB

# 2. Habilitar aceleração de hardware
# AVD Manager > Edit > Emulated Performance > Graphics: Hardware

# 3. Usar imagem x86 ao invés de ARM
# AVD Manager > Create Device > x86_64 System Image
```

### Problema: Variáveis de ambiente não funcionam

**Windows PowerShell**:
```powershell
# Definir permanentemente
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\SEU_USER\AppData\Local\Android\Sdk", "User")
[Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", $env:ANDROID_HOME, "User")

# Reiniciar PowerShell

# Verificar
$env:ANDROID_HOME
$env:ANDROID_SDK_ROOT
```

### Problema: Screenshot não aparece no Allure

**Causa**: Screenshots são tiradas **apenas quando há falha**

**Solução**:
```javascript
// Para tirar screenshot sempre, modifique wdio.conf.js:
afterTest: async function(test, context, { error, passed }) {
    const screenshot = await driver.takeScreenshot();
    const allure = require('@wdio/allure-reporter').default;
    
    // Screenshot em sucesso OU falha
    allure.addAttachment(
        passed ? `Sucesso: ${test.title}` : `Falha: ${test.title}`,
        Buffer.from(screenshot, 'base64'),
        'image/png'
    );
}
```

### Problema: GitLab Runner não executa

**Sintoma**: Pipeline fica stuck em "pending"

**Solução**:
```bash
# Verificar status do Runner
sudo gitlab-runner status

# Se parado, iniciar
sudo gitlab-runner start

# Verificar logs
sudo gitlab-runner --debug run

# Re-registrar se necessário
sudo gitlab-runner register
```

---

## ✨ Boas Práticas

### 1. Organização de Código

**✅ FAZER**:
```javascript
// Page Object bem estruturado
class LoginPage {
    // Seletores agrupados
    get emailField() { return $('~input-email'); }
    get passwordField() { return $('~input-password'); }
    get loginButton() { return $('~button-LOGIN'); }
    
    // Métodos de ação
    async fillEmail(email) {
        await this.emailField.setValue(email);
    }
    
    async login(email, password) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLogin();
    }
}
```

**❌ EVITAR**:
```javascript
// Código hardcoded no teste
it('login', async () => {
    await $('~input-email').setValue('test@test.com');
    await $('~input-password').setValue('Test123!');
    await $('~button-LOGIN').click();
});
```

### 2. Waits e Timeouts

**✅ FAZER**:
```javascript
// Espera explícita
await element.waitForExist({ timeout: 10000 });
await element.click();

// Espera por condição
await browser.waitUntil(
    async () => (await element.getText()) === 'Success',
    { timeout: 5000, timeoutMsg: 'Mensagem não apareceu' }
);
```

**❌ EVITAR**:
```javascript
// Sleep fixo (instável)
await driver.pause(5000);
await element.click();
```

### 3. Assertions Claras

**✅ FAZER**:
```javascript
// Mensagens descritivas
const email = await LoginPage.getEmail();
expect(email).to.equal('test@test.com', 
    'Email não foi preenchido corretamente');
```

**❌ EVITAR**:
```javascript
// Sem contexto
expect(email).to.equal('test@test.com');
```

### 4. Dados de Teste

**✅ FAZER**:
```javascript
// Centralizar em arquivo
// test/data/testdata.js
export const validUser = {
    email: 'test@test.com',
    password: 'Test123!'
};

// No teste
import { validUser } from '../data/testdata.js';
await LoginPage.login(validUser.email, validUser.password);
```

**❌ EVITAR**:
```javascript
// Hardcoded no teste
await LoginPage.login('test@test.com', 'Test123!');
```

### 5. Hooks (beforeEach/afterEach)

**✅ FAZER**:
```javascript
describe('Login Tests', () => {
    beforeEach(async () => {
        await HomePage.returnToHome();
        await HomePage.navigateToLogin();
    });
    
    it('TC01 - Login válido', async () => {
        // Teste limpo, foca só na lógica
        await LoginPage.login('test@test.com', 'Test123!');
        expect(await HomePage.isOnHomePage()).to.be.true;
    });
});
```

**❌ EVITAR**:
```javascript
// Setup repetido em cada teste
it('TC01', async () => {
    await HomePage.returnToHome();
    await HomePage.navigateToLogin();
    await LoginPage.login('test@test.com', 'Test123!');
    // ...
});
```

### 6. Nomenclatura

**✅ FAZER**:
```javascript
// Nomes descritivos em português
it('TC01 - Deve fazer login com credenciais válidas', async () => {
    // ...
});

async preencherEmail(email) {
    await this.campoEmail.setValue(email);
}
```

**❌ EVITAR**:
```javascript
// Nomes vagos
it('test1', async () => {
    // ...
});

async doSomething(x) {
    await this.field.setValue(x);
}
```

### 7. Categorização Allure

**✅ FAZER**:
```javascript
import allure from '@wdio/allure-reporter';

describe('Login Tests', () => {
    it('TC01 - Login válido', async () => {
        allure.addFeature('Autenticação');
        allure.addSeverity('critical');
        allure.addStory('Login com credenciais válidas');
        
        // teste...
    });
});
```

### 8. Reset de Estado

**✅ FAZER**:
```javascript
beforeEach(async () => {
    // Garantir estado inicial limpo
    await HomePage.returnToHome();
    await HomePage.waitForHomeScreen();
});

afterEach(async () => {
    // Limpar dados se necessário
    if (error) {
        await driver.reloadSession();
    }
});
```

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [WebDriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- [Allure Report](https://docs.qameta.io/allure/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

### Comandos Úteis

```powershell
# Ver dispositivos conectados
adb devices

# Ver logs do Android
adb logcat

# Limpar dados do app
adb shell pm clear com.wdiodemoapp

# Tirar screenshot
adb exec-out screencap -p > screenshot.png

# Instalar APK manualmente
adb install -r apps/android/app-debug.apk

# Verificar versão do Appium
appium --version

# Verificar drivers instalados
appium driver list

# Atualizar driver
appium driver update uiautomator2
```

### Scripts package.json

```json
{
  "scripts": {
    "test": "wdio run wdio.conf.js",
    "test:report": "npm test; npm run report:serve",
    "report:generate": "allure generate allure-results --clean -o allure-report",
    "report:serve": "allure serve allure-results",
    "clean:reports": "rm -rf allure-results allure-report"
  }
}
```

---

## 📊 Estatísticas do Projeto

- **Testes**: 10 cenários automatizados
- **Page Objects**: 4 classes (+ BasePage)
- **Cobertura**: 100% das funcionalidades principais
- **Padrão**: Page Object Model (POM)
- **Framework**: Mocha + Chai
- **Relatórios**: Allure Report
- **CI/CD**: GitLab Pipeline

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit: `git commit -m 'feat: adiciona nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Abra um Pull Request

---

## 📄 Licença

MIT License - Veja arquivo LICENSE para detalhes

---

## 👨‍💻 Suporte

**Problemas?**
- Consulte a seção [Troubleshooting](#-troubleshooting)
- Abra uma issue no GitHub
- Consulte a documentação oficial do WebDriverIO

---

⭐ **Projeto criado com WebDriverIO + Appium + Allure Report**

**Última atualização**: Outubro 2025
