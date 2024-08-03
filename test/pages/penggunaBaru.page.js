class PenggunaBaruPage {
    getPenggunaBaruUrl() {
        return "https://kasirdemo.vercel.app/users/create";
    }
    get namaInput() {
        return $("#nama");
    }
    get emailInput() {
        return $("#email");
    }
    get passwordInput() {
        return $("#password");
    }
    get simpanButton() {
        return $(".css-l5lnz6");
    }
    get successMsg() {
        return $(".chakra-toast__inner");
    }

    async assertPenggunaBaruUrl() {
        await expect(browser).toHaveUrlContaining(this.getPenggunaBaruUrl());
    }
    async createUser(nama, email, password) {
        await this.namaInput.setValue(nama);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.simpanButton.click();
    }

    async assertSuccessMessage(expectedSuccessMessage) {
        await expect(this.successMsg).toHaveTextContaining(
            expectedSuccessMessage
        );
    }
}

module.exports = new PenggunaBaruPage();
