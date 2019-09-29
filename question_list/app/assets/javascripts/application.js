// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


function send_ans() {
	$('#btn_submit').click(function () {
		var boxes = document.querySelectorAll('input[type="checkbox"]');
		var counter = 0;
			for (var i = 0; i < boxes.length; i++) {
				if((boxes[i].checked && boxes[i].value == "yes") || (boxes[i].checked == false && boxes[i].value == "no")){
						counter += 1;
				}
			}

	counter = (counter/5)*100;
	localStorage.setItem("score", counter);

	return counter;
	});
}

function get_res() {
	var x = window.localStorage.getItem("score");
	$('#res_output').append("<h3>"+"Ваш результат: " + x + " %"+"</h3>");
	window.localStorage.clear();

}
