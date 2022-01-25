async function commentFormHandler(event) {
	event.preventDefault();

	// for the comment text
	const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

	// extracts `post_id` from the URL
	const post_id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];

	// `if` statement prevents empty strings
	// POST method
	if (comment_text) {
		const response = await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({
				post_id,
				comment_text,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
}

document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);
