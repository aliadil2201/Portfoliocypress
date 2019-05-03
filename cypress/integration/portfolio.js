describe('The Portfolio Page', function () {
    it('successfully loads', function () {
        cy.visit('http://127.0.0.1:8000/portfolio/');
        cy.get('#portfolio > .container > .justify-content-center > .menu-content > .title > .mb-10').contains('Our');
        cy.get('#portfolio > .container > .justify-content-center > .menu-content > .title > p').contains('Who are in');
        cy.get('ul > .active').contains('All');
        cy.get('[data-filter=".vector"]').contains('Vector');
        cy.get('[data-filter=".raster"]').contains('Raster');
        cy.get('[data-filter=".ui"]').contains('UI');
        // cy.get('[data-filter=".ui"]').contains('Printing');
        cy.get(':nth-child(1) > .p-inner > h4').contains('2D');
        cy.get(':nth-child(1) > .p-inner > .cat').contains('Vector');
        cy.get(':nth-child(2) > .p-inner > h4').contains('2D');
        cy.get(':nth-child(2) > .p-inner > .cat').contains('Vector');
        cy.get(':nth-child(3) > .p-inner > h4').contains('Creative Poster');
        cy.get(':nth-child(3) > .p-inner > .cat').contains('Agency');
        cy.get(':nth-child(4) > .p-inner > h4').contains('Logo Design');
        cy.get(':nth-child(4) > .p-inner > .cat').contains('Portal');
        cy.get(':nth-child(5) > .p-inner > h4').contains('Design');
        cy.get(':nth-child(5) > .p-inner > .cat').contains('Vector');
        cy.get(':nth-child(6) > .p-inner > h4').contains('Vinyl');
        cy.get(':nth-child(6) > .p-inner > .cat').contains('raster');
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
