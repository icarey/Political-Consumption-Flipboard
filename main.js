$(document).ready(function () {
	$(".flipcard").on("click", function (e) {
		e.preventDefault();

		var flipcard_clicked = $(this),
			text = flipcard_clicked.data("text"),
			popUp = flipcard_clicked.find(".info_slides"),
			popUp_text = popUp.find(".info_popIn");

		popUp_text.find(".headline").text(flipcard_clicked.data("headline"));
		popUp_text.find(".dems").text(flipcard_clicked.data("dems"));
		popUp_text.find(".reps").text(flipcard_clicked.data("reps"));
		// popUp_text.find(".total").text(flipcard_clicked.data("total"));
		popUp_text.find(".summary").text(flipcard_clicked.data("summary"));
		popUp_text.find(".methodology").text(flipcard_clicked.data("methodology"));
		popUp.removeClass("dems").removeClass("reps").addClass(flipcard_clicked.data("party"))
		popUp.addClass("active");
	});

	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		e.stopImmediatePropagation();

		var close_button_clicked = $(this),
			popUp = close_button_clicked.closest(".info_slides");

		console.log(popUp);
		console.log("close button activated");
		popUp.removeClass("active");

	});

});
