class registerStep {
     fillName(value) {
        const field = cy.get('input[ng-model="member.Firstname"]');
        field.clear();
        field.type(value);
        return this;
    } 
    fillLastName(value) {
        const field = cy.get('input[ng-model="member.Lastname"]');
        field.clear();
        field.type(value);
        return this;
    } 
    fillTelNumber(value) {
        const field = cy.get('input[ng-model="member.MemberTelephone"]');
        field.clear();
        field.type(value);
        return this;
    }
    // id="districtmr1"
    fillAddress(value) {
        const field = cy.get('input[id="addressmainmr1"]');
        field.clear();
        field.type(value);
        return this;
    }
    filltumbung(value) {
        const field = cy.get('input[id="districtmr1"]');
        field.clear();
        field.type(value);
        return this;
    }
  }
  
  export default registerStep;