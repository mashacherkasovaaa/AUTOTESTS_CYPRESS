//проверка покупки нового аватара с валидной картой и правильным кодом смс

describe('shop', () => {

    it('buying a new avatar', () => {
        //зашли на сайт
        cy.visit('https://pokemonbattle.me/');

        //вводим логи, пароль и кнопку нажимаем
        cy.get(':nth-child(1) > .auth__input').type('reavt@pirolsnet.com');
        cy.get('#password').type('Pokemon1');
        cy.get('.auth__button').click();

        //ищем на странице номер айди тренера - проверяем, что авторизация прошла
        cy.get('.header__id-text_type_profile');

        //с главной страницы ищем кнопку магазина
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.pokemon__title').contains('Магазин');

        //Проверяем, что кнопка покупки доступна и жмем
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2').contains('Карта');

        //заполняем страницу оплаты
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('maryChe');
        cy.get('.pay-btn').click();

        //ввод кода из смски
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();

        //проверка успешной оплаты и возврат в магазин
        cy.get('.payment__padding').contains('Покупка прошла успешно');
        cy.get('.payment__back-button-success').click();
    })

})