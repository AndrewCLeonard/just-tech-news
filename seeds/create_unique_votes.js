const { seedVotes } = require("./vote-seeds");

function toFindDuplicates(array) {
	const uniqueElements = new Set(array);
	const filteredElements = array.filter((item) => {
		if (uniqueElements.has(item)) {
			uniqueElements.delete(item);
		} else {
			return item;
		}
	});

	return [...new Set(uniqueElements)];
}

const duplicateElements = toFindDuplicates(seedVotes);
console.log(duplicateElements);

module.exports = findDuplicates;
