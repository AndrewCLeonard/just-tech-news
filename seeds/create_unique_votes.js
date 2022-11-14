const { seedVotes } = require("./vote-seeds");

function toFindDuplicates(seedVotes) {
	const uniqueElements = new Set(seedVotes);
	const filteredElements = seedVotes.filter((item) => {
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
