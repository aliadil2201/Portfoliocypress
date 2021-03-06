describe('The Services Page', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8000/services');
        cy.get('.services-area > .container > .d-flex > .menu-content > .title > .mb-10').contains('My');
        cy.get('.services-area > .container > .d-flex > .menu-content > .title > p').contains('At about');
        cy.get(':nth-child(1) > .single-services > a > h4').contains('Web');
        cy.get(':nth-child(1) > .single-services > p').contains('It is not because');
        cy.get(':nth-child(2) > .single-services > a > h4').contains('Development');
        cy.get(':nth-child(2) > .single-services > p').contains('If you are an');
        cy.get(':nth-child(3) > .single-services > a > h4').contains('Photography');
        cy.get(':nth-child(3) > .single-services > p').contains('Do you want to be');
        cy.get(':nth-child(4) > .single-services > a > h4').contains('Path');
        cy.get(':nth-child(4) > .single-services > p').contains('There is a lot of');
        cy.get(':nth-child(5) > .single-services > a > h4').contains('Apps');
        cy.get(':nth-child(5) > .single-services > p').contains('Many of my');
        cy.get(':nth-child(6) > .single-services > a > h4').contains('Design');
        cy.get(':nth-child(6) > .single-services > p').contains('Just believe it');
        cy.get(':nth-child(1) > .counter').contains('2536');
        cy.get('#facts-area > .container > .row > :nth-child(1) > p').contains('Projects');
        cy.get(':nth-child(2) > .counter').contains('6784');
        cy.get('#facts-area > .container > .row > :nth-child(2) > p').contains('Happy');
        cy.get(':nth-child(3) > .counter').contains('2239');
        cy.get('#facts-area > .container > .row > :nth-child(3) > p').contains('Cups of');
        cy.get(':nth-child(4) > .counter').contains('434');
        cy.get(':nth-child(4) > p').contains('Real');
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
        cy.get('.testimonial-area > .container > .justify-content-center > .menu-content > .title > .mb-10').contains('Feedback');
        cy.get('.testimonial-area > .container > .justify-content-center > .menu-content > .title > p').contains('It is very');
        cy.get(':nth-child(4) > .single-testimonial > .desc > :nth-child(1)').contains('Do you want to be');
        cy.get(':nth-child(4) > .single-testimonial > .desc > h4').contains('Maxwell');
        cy.get(':nth-child(4) > .single-testimonial > .desc > :nth-child(3)').contains('Google');
        cy.get(':nth-child(3) > .single-testimonial > .desc > :nth-child(1)').contains('A purpose is the');
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