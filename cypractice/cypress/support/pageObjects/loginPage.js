class LoginPage {  // ✅ Fixed class name

    goTo(url) {
        cy.visit(url);
    }

    login(email, password) {
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('[type="submit"]').click();
    }
}

// ✅ Export an instance of the class
export default LoginPage;
