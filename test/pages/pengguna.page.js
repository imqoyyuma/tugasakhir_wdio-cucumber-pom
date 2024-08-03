class PenggunaPage {
    getPenggunaPageUrl() {
        return "https://kasirdemo.vercel.app/users";
    }
    get tambahButton() {
        return $(".chakra-button");
    }
    get userList() {
        return $(".css-1t33j5j");
    }
    get searchBar() {
        return $(".chakra-input");
    }
    get threeDotsButton() {
        return $(".css-pu8osu");
    }
    get hapusButton() {
        return $("//button[text()='hapus']");
    }
    get deleteButton() {
        return $(".css-n45e6f");
    }

    async assertPenggunaUrl() {
        await expect(browser).toHaveUrlContaining(this.getPenggunaPageUrl());
    }
    async tambah() {
        await this.tambahButton.click();
    }
    async assertListedUser(expectedNewUser) {
        await expect(this.userList).toHaveTextContaining(expectedNewUser);
    }
    async hapusPengguna(findUser) {
        await this.searchBar.setValue(findUser);
        await this.threeDotsButton.click();
        await this.hapusButton.click();
        await this.deleteButton.click();
    }
}

module.exports = new PenggunaPage();
