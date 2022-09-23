const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
	test("Shuffle array should return an array", () => {
		expect(typeof shuffleArray).toBe("array");
	});

	test("Shuffle array length", () => {
		expect(shuffleArray.length).toEqual(shuffleArray.length);
		// ^^ Lol this def doesn't work Kelsey. Come back to this
	});
});
