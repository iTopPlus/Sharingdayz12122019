class SummitSomething {
    visit() {
      cy.visit('http://localhost:3000/');
    }
    server() {
      cy.server();
    }
    filltext1(value) {
        const field = cy.get('input[name="text1"]');
        field.clear();
        field.type(value);
        return this;
      }
    filltext2(value) {
        const field = cy.get('input[name="text2"]');
        field.clear();
        field.type(value);
        return this;
      }
    filltext3(value) {
        const field = cy.get('input[name="text3"]');
        field.clear();
        field.type(value);
        return this;
      }
  
    submit() {
      const button = cy.get(`input[type="submit"]`);
      button.click();
    }
  }
  
  export default SummitSomething;