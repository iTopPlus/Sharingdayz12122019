describe('Buy product from first to last step',()=>{
    beforeEach(() => {
        cy.beforeEachCommand()
    })
    it('Add product to cart',()=>{
        cy.visit('http://demo99.itopplus.com/%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%A5%E0%B8%9A%E0%B8%9C%E0%B8%A1%E0%B8%97%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B8%99%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%9Aitoplanding/54affd28fbbebbdc270000de/5594f011ad4b4a9c3402018c/Products_5d9eac25a22fc70012439eb0/5ca458ba5bfc3c001a947a06');
        // cy.reload();
        cy.wait('@getComponent', {timeout:10000}).then(function(xhr){
            expect(xhr.status).to.equal(200);
        })
        cy.get('div[ng-click="Addtocart(0,maxQuan.quantity,Sizeyourpick,color1,$event,myQuantity,detailOrderID,PriceMember,vipPriceMember,Unit,CateSizeName,Position,Weigth,CagID,BrandID);getlanguage();AnimatedCart(null,$event,cmpDetailID);"]').click()
        cy.get('.shopcart').click()
   
        cy.wait('@getShopPayment',{timeout: 10000}).then(function(xhr){
            const response = xhr.status
            expect(response).to.equal(200)
        })
        cy.contains('รายการสินค้าที่สั่งซื้อ').should('be.visible')
        cy.get('div[ng-hide="next==3||bLogin||next==1 || next==2 || next==4 ||next==5"]').click()
        cy.wait('@getshopshipping',{timeout: 10000}).then(function(xhr){
            const response = xhr.status
            expect(response).to.equal(200)
        })
        cy.contains('เข้าสู่ระบบ').should('be.visible')
        cy.wait(1)
        cy.get('div[ng-click="SkipThisStep();"]').click({force: true})
        cy.get('input[name="CustomerFirstname"]').clear()
        cy.get('input[name="CustomerLastname"]').clear()
        cy.get('input[id="zipcodesc1"]').clear()
        cy.get('input[id="fixEmail"]').clear()
        cy.get('input[id="addressmainsc1"]').clear()
        cy.get('input[name="CustomerFirstname"]').type("firstname");
        cy.wait(1)
        cy.get('input[name="CustomerLastname"]').type("lastname");
        cy.wait(1)
        cy.get('input[name="telephone"]').type("0815556548");
        cy.wait(1)
        cy.get('input[id="fixEmail"]').type("testshopcart@test.com");        
        cy.wait(1)
        cy.get('input[id="addressmainsc1"]').type("123456789");     
        cy.wait(1)
        cy.get('input[id="zipcodesc1"]').type("20000");
        cy.wait(1)
        cy.get('input[id="provincesc1"]').type('ชลบุรี');
        cy.wait(1)
        cy.get('input[id="amphoesc1"]').type('เมืองชลบุรี');
        cy.wait(1)
        cy.get('input[id="districtsc1"]').type('คลองตำหรุ');
        cy.wait(1)
        cy.get('div[ng-show="next==1 && !bLogin"]:eq(1)').click({force: true});
        cy.wait('@getSupplierData',{timeout: 15000}).then(function(xhr){
           expect(xhr.status).to.equal(200)
        })
        cy.wait(1)
        cy.get('a:eq(50)').trigger('mousedown',{force: true});
        cy.contains('การชำระเงิน').click();
        cy.contains('สรุปรายการสั่งซื้อ').click();
        cy.wait(1)
        cy.contains('สรุปรายการสั่งซื้อ').click();
        cy.wait(1)
        cy.contains('ยืนยันการสั่งซื้อ').click();
        cy.wait(1)
        cy.get('.btnCheckoutprevious:eq(1)').click();
        cy.contains('การสั่งซื้อเรียบร้อย').should('be.visible');
    });
});
