import { Given, When, Then } from "@cucumber/cucumber";
import { isJavaScript } from "@cucumber/cucumber/lib/cli/helpers";

Given(/^Playstation page is opened$/, async function () {
  await browser.url("https://www.PlayStation.com/");
  await browser.setTimeout({ implicit: 10000, pageLoad: 5000 });
  expect(browser).toHaveTitle(
    "PlayStation® Official Site: Consoles, Games, Accessories & More"
  );
});

When(/^the window is resized to 1920x1080$/, async function () {
  browser.setWindowSize(1920, 1080);
  const AcceptCookieButton = await $("#_evidon-accept-button");
  await AcceptCookieButton.waitForExist({ timeout: 10000 });
  await AcceptCookieButton.click();
});

When(/^verifying the homepage slider is working$/, async function () {
  const Slider = await $("#gdk__content");
  await Slider.waitForExist({ timeout: 5000 });
  expect(Slider).toBeDisplayed();
});

When(/^scrolling to New Releases section$/, async function () {
  const NewReleases = await $("h3=New releases");
  await NewReleases.waitForExist({ timeout: 5000 });
  await NewReleases.scrollIntoView();
});

When(
  /^clicking on the right arrow to see the Games Coming Soon$/,
  async function () {
    const ComingSoonButton = await $(
      "a.button--next.btn-round__primary.button--balance"
    );
    browser.addCommand("jsClick", function (this: any) {
      browser.execute("arguments[0].click();", this.ComingSoonButton().value);
    });
  }
);

When(/^taking a screenshot of the page$/, async function () {
  const timestamp = Math.floor(new Date().getTime() / 1000);
  await browser.saveScreenshot(
    "./test/screenshotOfComingSoonGames/ComingSoonGames" + timestamp + ".png"
  );
});

When(
  /^verify the last game title in the Coming Soon games$/,
  async function () {
    const ComingSoonTitle = await $("(//figcaption[@id='fig-caption-'])[29]");
    expect(ComingSoonTitle).toBeDisplayed();
  }
);