async function logout() {
	const response = await fetch("/api/users/logout", {
		method: "post",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		console.log(`\nresponse.ok\n`);
		document.location.replace("/");
	} else {
		console.log(`\nresponse NOT ok\n`);
		alert(response.statusText);
	}
}

document.querySelector("#logout").addEventListener("click", logout);
