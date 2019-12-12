describe("RENDER : Website",()=>{
    beforeEach(()=>{
        cy.beforeEachCommand() 
    })

// curl http://demo99.itopplus.com/Member
// curl http://demo99.itopplus.com/Text
// curl http://demo99.itopplus.com/Layout
// curl http://demo99.itopplus.com/Images
// curl http://demo99.itopplus.com/Menus
// curl http://demo99.itopplus.com/SocialMedia
// curl http://demo99.itopplus.com/ShopcartComponent
// curl http://demo99.itopplus.com/Forms
// curl http://demo99.itopplus.com/StatsComponent
// curl http://demo99.itopplus.com/Searchs
// curl http://demo99.itopplus.com/Webboardsxx

    it('Visit Check and http://demo99.itopplus.com Success', () => {
        cy.visit('http://demo99.itopplus.com/')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/Member Success', () => {
        cy.visit('http://demo99.itopplus.com/Member')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/Text Success', () => {
        cy.visit('http://demo99.itopplus.com/Text')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/Layout Success', () => {
        cy.visit('http://demo99.itopplus.com/Layout')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/ImageComponent Success', () => {
        cy.visit('http://demo99.itopplus.com/ImageComponent')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/Menus Success', () => {
        cy.visit('http://demo99.itopplus.com/Menus')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/SocialMedia Success', () => {
        cy.visit('http://demo99.itopplus.com/SocialMedia')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/ShopcartComponent Success', () => {
        cy.visit('http://demo99.itopplus.com/ShopcartComponent')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    
    it('Visit Check and http://demo99.itopplus.com/Forms Success', () => {
        cy.visit('http://demo99.itopplus.com/Forms')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/StatsComponent Success', () => {
        cy.visit('http://demo99.itopplus.com/StatsComponent')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });

    it('Visit Check and http://demo99.itopplus.com/Searchs Success', () => {
        cy.visit('http://demo99.itopplus.com/Webboardsxx')
        cy.wait('@getComponent',{timeout: 60000}).then(function(xhr){
            const response = xhr.responseBody;
            expect(response.bRedis).to.not.be.null;
          })
    });
});