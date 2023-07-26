beforeEach(async() => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
})


describe("testing acamady", async() => {


    // it("Login should faik", async() => {
    //     await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    //     expect(browser).toHaveTitleContaining("jdjfkljflkjfglkjlkfji")
    //     await browser.pause(3000)
    //     $("#username").setValue("jfojfh")
    //     await browser.pause(5000)
    //     $("#username").setValue("jfnjfgngjotti")
    // })

    xit("Login success page title", async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[name='username']").setval("rahulshettyacademy")
        const password = $("//input[@type='password")
        await password.setValue("learning")
        await $("#signInBtn").click();
        await expect(browser).toHaveUrlContaining("https://rahulshettyacademy.com/angularpractice/shop")

    })

    it("Checking RadioButton", async() => {

        browser.pause(100000)
        await $("input[name='username']").setValue("rahulshettyacademy")
        browser.pause(100000)
        const password = $("//input[@type='password']")
        browser.pause(100000)
        await password.setValue("learning")
        browser.pause(1000000)
        await $("#signInBtn").click();
        await $(".btn-primary").waitForExist();
        await expect(browser).toHaveUrlContaining("shop")
            // const RadioButton = await $$(".checkmark");
            // browser.pause(100000000000000000000)
            // await RadioButton[0].click();

    })

})