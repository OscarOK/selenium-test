const { Builder, By, Key, util } = require("selenium-webdriver");
const url = "http://127.0.0.1:5500/index.html";

async function example() {
  const getExtShadowRoot = async function () {
    let shadowHost;
    await (shadowHost = driver.findElement(By.css("profile-card")));
    return driver.executeScript("return arguments[0].shadowRoot", shadowHost);
  };

  const findShadowDomElement = async function (shadowDomElement) {
    let shadowRoot;
    let element;
    await (shadowRoot = getExtShadowRoot());
    await shadowRoot.then(async (result) => {
      await (element = result.findElements(By.className(shadowDomElement)));
    });

    return element;
  };

  driver = new Builder().forBrowser("chrome").build();
  try {
    await driver.get(url);
    let profileCard = await driver.findElement(By.css("profile-card"));
    const expectIcons = JSON.parse(await profileCard.getAttribute("icons"));

    console.log(expectIcons);

    let profileIconLinks = await findShadowDomElement("icon-link");

    // for (let e of profileIconLinks) {
    //   const icon = await e.findElement(By.css("i"));

    //   const temp = await driver.executeScript(
    //     "return window.getComputedStyle(arguments[0], ':before').getPropertyValue('background-color');",
    //     icon
    //   );
    //   console.log(await temp);
    // }

    if (!profileCard) throw new Error();
  } finally {
    await driver.quit();
  }
}

example();
