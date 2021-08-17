const { Builder, By, Key, util } = require("selenium-webdriver");

const url = "http://127.0.0.1:5500/index.html";

describe("Testing", () => {
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
      await (element = result.findElement(By.css(shadowDomElement)));
    });

    return element;
  };

  beforeEach(() => {
    driver = new Builder().forBrowser("chrome").build();
  });

  it("Profile Card is rendering", async function () {
    try {
      await driver.get(url);
      let profileCard = await driver.findElement(By.css("profile-card"));
      if (!profileCard) throw new Error();
    } finally {
      await driver.quit();
    }
  });

  it("Profile card name is rendering as expected", async function () {
    try {
      await driver.get(url);
      let profileCard = await driver.findElement(By.css("profile-card"));
      let profileName = await findShadowDomElement("h2");

      const expectName = await profileCard.getAttribute("name");
      const currentName = await profileName.getAttribute("textContent");

      if (expectName !== currentName) throw new Error();
    } finally {
      await driver.quit();
    }
  });

  it("Profile card position is rendering as expected", async function () {
    try {
      await driver.get(url);
      let profileCard = await driver.findElement(By.css("profile-card"));
      let profileName = await findShadowDomElement("p");

      const expectName = await profileCard.getAttribute("position");
      const currentName = await profileName.getAttribute("textContent");

      if (expectName !== currentName) throw new Error();
    } finally {
      await driver.quit();
    }
  });

  it("Profile card image is rendering as expected", async function () {
    try {
      await driver.get(url);
      let profileCard = await driver.findElement(By.css("profile-card"));
      let profileImg = await findShadowDomElement("img");

      let expectImg = (await profileCard.getAttribute("img")).substring(1);
      let currentImg = await profileImg.getAttribute("src");
      currentImg = currentImg.substring(currentImg.lastIndexOf(expectImg));

      if (!currentImg.includes(expectImg)) throw new Error();
    } finally {
      await driver.quit();
    }
  });
});
