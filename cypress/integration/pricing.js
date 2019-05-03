describe('The Pricing Page', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8000/price');
        cy.get('.price-area > .container > .d-flex > .menu-content > .title > .mb-10').contains('Your Plan');
        cy.get('.price-area > .container > .d-flex > .menu-content > .title > p').contains('When someone');
        cy.get(':nth-child(1) > .top-part > h4').contains('Economy');
        cy.get(':nth-child(1) > .top-part > .mt-10').contains('For the');
        cy.get(':nth-child(1) > .package-list > ul > :nth-child(1)').contains('Online');
        cy.get(':nth-child(1) > .package-list > ul > :nth-child(2)').contains('Styles for');
        cy.get(':nth-child(1) > .package-list > ul > :nth-child(3)').contains('Customer');
        cy.get(':nth-child(1) > .bottom-part > h1').contains('199');
        cy.get(':nth-child(2) > .top-part > h4').contains('Business');
        cy.get(':nth-child(2) > .top-part > .mt-10').contains('For the');
        cy.get(':nth-child(2) > .package-list > ul > :nth-child(1)').contains('Online');
        cy.get(':nth-child(2) > .package-list > ul > :nth-child(2)').contains('Styles for');
        cy.get(':nth-child(2) > .package-list > ul > :nth-child(3)').contains('Customer');
        cy.get(':nth-child(2) > .bottom-part > h1').contains('299');
        cy.get(':nth-child(3) > .top-part > h4').contains('Premium');
        cy.get(':nth-child(3) > .top-part > .mt-10').contains('For the');
        cy.get(':nth-child(3) > .package-list > ul > :nth-child(1)').contains('Online');
        cy.get(':nth-child(3) > .package-list > ul > :nth-child(2)').contains('Styles for');
        cy.get(':nth-child(3) > .package-list > ul > :nth-child(3)').contains('Customer');
        cy.get(':nth-child(3) > .bottom-part > h1').contains('399');
        cy.get(':nth-child(4) > .top-part > h4').contains('Exclusive');
        cy.get(':nth-child(4) > .top-part > .mt-10').contains('For the');
        cy.get(':nth-child(4) > .package-list > ul > :nth-child(1)').contains('Online');
        cy.get(':nth-child(4) > .package-list > ul > :nth-child(2)').contains('Styles for');
        cy.get(':nth-child(4) > .package-list > ul > :nth-child(3)').contains('Customer');
        cy.get(':nth-child(4) > .bottom-part > h1').contains('499');
        cy.get('.faq-area > .container > .d-flex > .menu-content > .title > .mb-10').contains('Questions');
        cy.get('.faq-area > .container > .d-flex > .menu-content > .title > p').contains('It is very');
        cy.get('.active').contains('You Re');
        cy.get('.accordion > [style="display: block;"]').contains('justo ut');
        cy.get('.accordion > :nth-child(3) > a').contains('The Basics Of Buying A Telescope');
        cy.get('.accordion > [style="display: block;"]').contains('eget');
        cy.get('.accordion > :nth-child(5) > a').contains('Great');
        cy.get('.accordion > [style="display: block;"]').contains('diam');
        cy.get('.accordion > :nth-child(7) > a').contains('Do Your');
        cy.get('.accordion > :nth-child(9) > a').contains('For Your');
        cy.get(':nth-child(1) > .single-footer-widget > h4').contains('About');
        cy.get(':nth-child(1) > .single-footer-widget > :nth-child(2)').contains('We have tested');
        cy.get('.footer-text').contains('This template');
        cy.get(':nth-child(2) > .single-footer-widget > h4').contains('Newsletter');
        cy.get(':nth-child(2) > .single-footer-widget > p').contains('Stay updated');
        cy.get('.input-group > #email').type('shah@gmail.com');
        cy.get('.input-group > #email').click();
        cy.get('.col-lg-2 > .single-footer-widget > h4').contains('Follow');
        cy.get('.col-lg-2 > .single-footer-widget > p').contains('Let us be')
    });

});