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
//= require jquery3
//= require jquery_ujs
//= require jquery-ui
//= require jquery-ui/widgets/dialog
//= require rails-ujs
//= require turbolinks
//= require_tree .

function list_post(user_id) {
	alert("list post");
	$.getJSON( "/users/getPostByUser/"+user_id, function( data ) {
		$("#list").empty();
		$("#list").append('<p> User: '+user_id+'</p>');


		data.microposts.forEach(function (micropost,index){
			$("#list").append('<p>'+micropost.content+'</p>');
		});
		
		$( "#list" ).dialog({closeText: 'X'});
	});
	
}

function edit_user(id) {
alert("edit_user");

	$.get( "/users/"+id+"/edit", function( data ) {
		$("#edit_user").empty();
		$("#edit_user").dialog({closeText:"X"});
	  	$("#edit_user").html( data );
	  	$("#buttons").remove();	
	});
}

function show_user (id) {
alert("show_user");
	
	$.getJSON( "/users/" + id, function( data ) {
		$("#name").text(data.name);
		$("#email").text(data.email);
		$( "#show" ).dialog({closeText: "X"});
	});
	
}