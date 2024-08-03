const { Given, When, Then } = require("@cucumber/cucumber");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const DashboardPage = require("../pages/dashboard.page");
const PenggunaPage = require("../pages/pengguna.page");
const PenggunaBaruPage = require("../pages/penggunaBaru.page");

// Given(/^<text>$/, async () => {});
Given(/^I open kasirAja login page$/, async () => {
    await Page.open("/");
});

When(
    /^I log in with email "invalid@email.com" and password "123456"$/,
    async () => {
        await LoginPage.login("invalid@email.com", "123456");
    }
);

When(
    /^I log in with email "toko@ane.com" and password "invalid_password"$/,
    async () => {
        await LoginPage.login("toko@ane.com", "invalid_password");
    }
);

Then(/^I will see error message$/, async () => {
    await LoginPage.assertErrorMessage("Kredensial yang Anda berikan salah");
});

When(/^I log in with email "toko@ane.com" and password "123456"$/, async () => {
    await LoginPage.login("toko@ane.com", "123456");
});

Then(/^I should be on dashboard page$/, async () => {
    await DashboardPage.assertDashboardUrl;
});

When(/^I navigate to "pengguna" page$/, async () => {
    await DashboardPage.pengguna();
});

Then(/^I should see the list of users$/, async () => {
    await PenggunaPage.assertPenggunaUrl();
});

When(/^I click "tambah" button$/, async () => {
    await PenggunaPage.tambah();
});

Then(/^I should see the form of creating new user$/, async () => {
    await PenggunaBaruPage.assertPenggunaBaruUrl();
});

When(
    /^I input name "User1", email "user1@gmail.com", password "123", and click "simpan" button$/,
    async () => {
        await PenggunaBaruPage.createUser("User1", "user1@gmail.com", "123");
    }
);

Then(/^I can see the message "success | item ditambahkan"$/, async () => {
    await PenggunaBaruPage.assertSuccessMessage("item ditambahkan");
});

Then(/^I should see "User1" on the list$/, async () => {
    await PenggunaPage.assertListedUser("User1");
});

When(
    /^I search "User1", click the three dots button and click "hapus"$/,
    async () => {
        await PenggunaPage.hapusPengguna("User1");
    }
);
