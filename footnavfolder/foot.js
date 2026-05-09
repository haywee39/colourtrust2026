
		fetch("footnavfolder/foot.html")
			.then(response => response.text())
			.then(data => {
			document.getElementById("footer").innerHTML = data;
			})
			.catch(error => console.error("Error loading footer:", error));
