const { shuffleArray } = require("./utils");

// describe("shuffleArray should", () => {
// 	test("Shuffle array should return an array", () => {
// 		expect(typeof shuffleArray).toBe("array");
// 	});

// 	test("Shuffle array length", () => {
// 		expect(shuffleArray.length).toEqual(shuffleArray.length);
// 		// ^^ Lol this def doesn't work Kelsey. Come back to this
// 	});
// });

//Assessment Review Solution

describe("shuffleArray should", () => {
	test("check to see if th length is the same after runnin gthe function", () => {
		let arr = [1, 2, 3, 4, 5];
		let result = shuffleArray(arr);
		expect(arr.length).toBe(result.length);
	});

	test("return array with same items", () => {
		//create array
		//run through shuffle array function
		//check to make sure all original values are included in new array

		let arr = [1, 2, 3, 4, 5];
		let result = shuffleArray(arr);

		expect(result).toEqual(expect.arrayContaining(arr));

		// let myVar = true;

		// for (let i = 0; i < result.length; i++) {
		// 	if (arr.includes(result[i]) === false) {
		// 		myVar = false;
		// 		return;
		// 	}
		// }

		// expect(myVar).toBe(true);
	});
});
