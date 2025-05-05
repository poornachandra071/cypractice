import loginPage from '../../cypress/support/pageObjects/loginPage';  // ✅ Fixed import
const login = new loginPage()
describe('test', function(){

    before(function () {  
        cy.fixture('example').then((data) => {
            this.data = data;   
        });
    });
      
    it('Verify login', function () { 
        login.goTo(this.data.url);
        login.login(this.data.email, this.data.password);
    });
})

