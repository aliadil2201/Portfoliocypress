describe('The About Page', function () {
    it('successfully loads', function () {
        cy.visit('http://127.0.0.1:8000/about/');
        cy.get('.nav-menu > :nth-child(1) > a').contains('Home');
        cy.get('.nav-menu > :nth-child(2) > a').contains('About');
        cy.get('.nav-menu > :nth-child(3) > a').contains('Services');
        cy.get('.nav-menu > :nth-child(4) > a').contains('Portfolio');
        cy.get('.nav-menu > :nth-child(5) > a').contains('Pricing');
        cy.get('.nav-menu > :nth-child(6) > .sf-with-ul').contains('Blog');
        cy.get('.nav-menu > :nth-child(7) > :nth-child(1)').contains('Pages');
        cy.get('.nav-menu > :nth-child(8) > a').contains('Contact');
        cy.get('.col-lg-5 > h6').contains('About');
        cy.get('h1.text-uppercase').contains('Personal');
        cy.get('.col-lg-5 > p').contains('I focus on');
        cy.get('.col-lg-5 > .primary-btn').contains('View');
        cy.get('.home-about-area > .container > .align-items-center > .col-lg-12 > :nth-child(1)').contains('so far');
        cy.get('.home-about-area > .container > .align-items-center > .col-lg-12 > :nth-child(2)').contains('The quality');
        cy.get('.pt-30').contains('Tools');
        cy.get(':nth-child(1) > .single-skill > p').contains('After');
        cy.get(':nth-child(2) > .single-skill > p').contains('Photoshop');
        cy.get(':nth-child(3) > .single-skill > p').contains('70');
        cy.get(':nth-child(4) > .single-skill > p').contains('Sublime');
        cy.get(':nth-child(5) > .single-skill > p').contains('Sketch');
        cy.get('.timeline > :nth-child(1) > .menu-content > .title > .mb-10').contains('My');
        cy.get('.timeline > :nth-child(1) > .menu-content > .title > p').contains('Who are in');
        cy.get(':nth-child(1) > .content > h4 > time').contains('Masters in');
        cy.get(':nth-child(1) > .content > :nth-child(2)').contains('Session');
        cy.get(':nth-child(1) > .content > :nth-child(3)').contains('Result');
        cy.get(':nth-child(2) > .content > h4 > time').contains('Content');
        cy.get(':nth-child(2) > .content > p').contains('July');
        cy.get(':nth-child(3) > .content > h4 > time').contains('Graphics');
        cy.get(':nth-child(3) > .content > :nth-child(2)').contains('Session');
        cy.get(':nth-child(3) > .content > :nth-child(3)').contains('Result');
        cy.get(':nth-child(4) > .content > h4 > time').contains('Designer');
        cy.get(':nth-child(4) > .content > p').contains('July');
        cy.get(':nth-child(5) > .content > h4 > time').contains('Fine');
        cy.get(':nth-child(5) > .content > :nth-child(2)').contains('Session');
        cy.get(':nth-child(5) > .content > :nth-child(3)').contains('Result');
        cy.get('.testimonial-area > .container > .justify-content-center > .menu-content > .title > .mb-10').contains('Feedback');
        cy.get('.testimonial-area > .container > .justify-content-center > .menu-content > .title > p').contains('It is very');
        cy.get(':nth-child(4) > .single-testimonial > .desc > :nth-child(1)').contains('Do you want to be');
        cy.get(':nth-child(4) > .single-testimonial > .desc > h4').contains('Maxwell');
        cy.get(':nth-child(4) > .single-testimonial > .desc > :nth-child(3)').contains('Google');
        cy.get('.cloned.active > .single-testimonial > .desc > :nth-child(1)').contains('A purpose is the');
        cy.get(':nth-child(3) > .single-testimonial > .desc > h4').contains('Craig');
        cy.get(':nth-child(3) > .single-testimonial > .desc > :nth-child(3)').contains('Facebook');
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
