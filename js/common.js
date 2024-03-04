function head() {
	$.ajax({
		url: "../head.html",
		cache: false,
		async: false,
		dataType: "html",
		success: function (html) {
			document.write(html);
		},
	});
}

function header() {
	$.ajax({
		url: "../header.html",
		cache: false,
		async: false,
		dataType: "html",
		success: function (html) {
			document.write(html);
		},
	});
}

function footer() {
	$.ajax({
		url: "../footer.html",
		cache: false,
		async: false,
		dataType: "html",
		success: function (html) {
			document.write(html);
		},
	});
}
