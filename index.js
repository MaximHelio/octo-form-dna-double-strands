const webdriver = require('selenium-webdriver');
require('chromedriver');
const {Options} = require('selenium-webdriver/chrome');
const {By} = webdriver; // 드라이버 빌드
const {Key} = require('selenium-webdriver/lib/input');

let builder = new webdriver.Builder();
var driver = builder.forBrowser('chrome').build();
(async () => {
    await driver.sleep(500);
    await driver.get("https://www.tistory.com/auth/login/?redirectUrl=https%3A%2F%2Flifelonglog.tistory.com%2Fmanage#");
    await driver.sleep(1500);

    const aLinkKakaoId = await driver.findElement(By.css('a.link_kakao_id'));
    aLinkKakaoId.click();
    await driver.sleep(2000);

    const loginId = await driver.findElement(By.css("#id_email_2"));
    loginId.sendKeys("Id");
    await driver.sleep(100);

    const loginPw = await driver.findElement(By.css("#id_password_3"));
    loginPw.sendKeys("password");
    await driver.sleep(100);

    const loginBtn = await driver.findElement(By.css("button.btn_confirm.submit"));
    loginBtn.click();
    await driver.sleep(3000);

    ///////////////// PASSWORD ISSUE //////////////




})();
