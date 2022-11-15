const voteData = [
	{ id: 1, user_id: 20, post_id: 612 },
	{ id: 2, user_id: 20, post_id: 924 },
	{ id: 3, user_id: 27, post_id: 283 },
	{ id: 4, user_id: 43, post_id: 665 },
	{ id: 5, user_id: 1, post_id: 789 },
	{ id: 6, user_id: 1, post_id: 789 },
	{ id: 7, user_id: 27, post_id: 789 },
];

let uniqueArray = [];

console.log("=====START======");
for (const userIdPostId of voteData) {
	// console.log(`${userIdPostId.user_id}-${userIdPostId.post_id}`);
	if (uniqueArray.indexOf(userIdPostId.user_id) > -1) {
		userIdPostId.user_id++;
		console.log(userIdPostId.user_id);
		uniqueArray.push(userIdPostId.user_id);
	} else {
		uniqueArray.push(userIdPostId.user_id);
		console.log(`user_id: ${userIdPostId.user_id}`);
	}
}
console.log(uniqueArray);
