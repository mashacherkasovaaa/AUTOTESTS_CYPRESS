describe('auth_form', () => {
    beforeEach(() => {
    cy.visit('https://login.qa.studio')
    })
    
    // 1 Напиши проверку на позитивный кейс авторизации:
    // а) Ввести правильный логин
    // б) Ввести правильный пароль
    // в) Нажать войти
    // г) Проверить нужный текст и наличие кнопки крестик
    
    it('check auth_form', () => {
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    
    cy.get('#loginButton').click();
    
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > img');
    })
    
    // 2 Напиши автотест на проверку логики восстановления пароля:
    // а) Нажать «Забыли пароль»
    // б) Ввести любой имейл
    // в) Проверка, что получили нужный текст и есть кнопка крестика
    
    it('forget password', () => {
    cy.get('#forgotEmailButton').contains('Забыли пароль?').click();
    
    cy.get('#mailForgot').type('test@test.com');
    cy.get('#restoreEmailButton').click();
    
    cy.get('#message').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > img');
    })
    
    // 3 Напиши проверку на негативный кейс авторизации:
    // а) Ввести правильный логин
    // б) Ввести НЕ правильный пароль
    // в) Нажать войти
    // г) Проверить нужный текст и наличие кнопки крестик
    
    it('incorrect password', () => {
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('incorrect_pass_iLoveqastudio1');
    
    cy.get('#loginButton').click();
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > img');
    })
    
    // 4 Напиши проверку на негативный кейс авторизации:
    // а) Ввести НЕ правильный логин
    // б) Ввести правильный пароль
    // в) Нажать войти
    // г) Проверить нужный текст и наличие кнопки крестик
    
    it('incorrect login', () => {
    cy.get('#mail').type('gggerman@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    
    cy.get('#loginButton').click();
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > img');
    })
    
    // 5 Напиши проверку на негативный кейс валидации:
    // а) Ввести логин без @
    // б) Ввести правильный пароль
    // в) Нажать войти
    // г) Проверить, что получаем текст с ошибкой
    
    it('login without @', () => {
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    
    cy.get('#loginButton').click();
    
    cy.get('#message').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > img');
    })
    
    // 6 Напиши проверку на приведение к строчным буквам в логине:
    // а) Ввести логин GerMan@Dolnikov.ru
    // б) Ввести правильный пароль
    // в) Нажать войти
    // г) Проверить, что авторизация успешна (нужный текст и наличие кнопки крестик)
    // Разработчик допустил баг и это не реализовал. Тест должен упасть — и это ок (то есть мы поймали баг, который допустил разработчик)
    
    it('conversion to lowercase letters in the login', () => {
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    
    cy.get('#loginButton').click();
    
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > img');
    })
    
    })