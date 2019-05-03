describe('The Contact Page', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8000/contact');
        cy.get('.nav-menu > :nth-child(1) > a').contains('Home');
        cy.get('.nav-menu > :nth-child(2) > a').contains('About');
        cy.get('.nav-menu > :nth-child(3) > a').contains('Services');
        cy.get('.nav-menu > :nth-child(4) > a').contains('Portfolio');
        cy.get('.nav-menu > :nth-child(5) > a').contains('Pricing');
        cy.get('.nav-menu > :nth-child(6) > .sf-with-ul').contains('Blog');
        cy.get('.nav-menu > :nth-child(7) > :nth-child(1)').contains('Pages');
        cy.get('.nav-menu > :nth-child(8) > a').contains('Contact');
        cy.get(':nth-child(1) > .contact-details > h5').contains('New');
        cy.get(':nth-child(1) > .contact-details > p').contains('4343');
        cy.get(':nth-child(2) > .contact-details > h5').contains('562');
        cy.get(':nth-child(2) > .contact-details > p').contains('Mon');
        cy.get(':nth-child(3) > .contact-details > h5').contains('support@colorlib.com');
        cy.get(':nth-child(3) > .contact-details > p').contains('Send us');
        cy.get('#name').type('ali');
        cy.get(':nth-child(1) > #email').type('shah@gmail.com');
        cy.get('#subject').type('python');
        cy.get('#message').type('hi how are you');
        cy.get('.genric-btn').click();
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
