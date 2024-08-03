class LoginPage {
    get emailInput() {
        return $("#email");
    }
    get passwordInput() {
        return $("#password");
    }
    get loginButton() {
        return $(".chakra-button");
    }
    get errorMsg() {
        return $(".chakra-alert");
    }

    //Definisikan action/interaksi yang dilakukan pada elemen tsb
    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage() {
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage();
