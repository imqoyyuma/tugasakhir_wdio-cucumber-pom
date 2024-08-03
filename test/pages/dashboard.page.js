class DashboardPage {
    getDashboardPageUrl() {
        return "https://kasirdemo.vercel.app/dashboard";
    }
    get penggunaButton() {
        return $("[href='/users']");
    }

    async assertDashboardUrl() {
        await expect(browser).toHaveUrlContaining(this.getDashboardPageUrl());
    }

    async pengguna() {
        await this.penggunaButton.click();
    }
}

module.exports = new DashboardPage();
