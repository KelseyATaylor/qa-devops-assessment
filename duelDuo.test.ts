import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
	driver.get("http://localhost:3000/");
});

afterAll(async () => {
	driver.quit();
});

test("Title shows up when page loads", async () => {
	const title = await driver.findElement(By.id("title"));
	const displayed = await title.isDisplayed();
	expect(displayed).toBe(true);
});

//Test 1
// test("Clicking Draw displays div with id = choices", async () => {
// 	expect(await driver.findElement(By.id("choices"))).toBeTruthy();
// 	await driver.sleep(2000);
// });

//Test 2 - "Check that add to duo dusplays the dive with id = player duo"
// test("Clicking Add to duo displays div with id = player duo", async () => {
// 	expect(await driver.findElement(By.id("player-duo"))).toBeTruthy();
// 	await driver.sleep(2000);
// });

//Assessment Review Solutions

//Test1
test("Choices display when draw button is clicked", async () => {
	await driver.findElement(By.id("draw")).click();
	await driver.sleep(300);
	const choicesDiv = await driver.findElement(By.id("choices"));

	expect(choicesDiv).not.toBe("");
});

test("Selecting a box displays in our new div", async () => {
	await driver.findElement(By.id("draw")).click();
	await driver.sleep(300);
	await driver.findElement(By.xpath('(//*[text()="Add to Duo)[1]')).click();

	const playerDuoDiv = await driver.findElement(By.id("player-duo"));
	const displayed = await playerDuoDiv.isDisplayed();

	expect(displayed).toBe(true);
});
