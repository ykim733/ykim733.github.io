$(document).ready(function(){
    $(document).click(function(){
        $(".understand").toggle();
        $(".dont-understand").toggle();
    });
});
// var fb = new Firebase("https://lmao-be345.firebaseio.com/");
var flag = 0;

// monitors changes and updates UI
firebase.database().ref().on('value', updatePre);

// creates a new, incremental record
$(document).on('click', incId);

// resets the data
// $('#clear').on('click', function() {
//     fb.child('counter').transaction(function(currentValue) {
//     	flag = 0
//         	return 0
//     });});

// attempts to create any id you put in
// $('#customButton').on('click', function() {
//    addRecord($('#custom').val());
// });
var flag = 0;
var errId = 0;
// creates a new, incremental record
function incId() {
    // increment the counter
    firebase.database().ref().child('counter').transaction(function(currentValue) {
    			if(flag == 0){
            flag = 1
        		return (currentValue||0) + 1
          }else{
            flag = 0
          	return (currentValue||0) - 1
          }
    });
}

// for demo purposes
function updatePre(ss) {
   $('#data').text(JSON.stringify(ss.val(), null, 2));
}
//
// // for demo purposes
// function setError(msg) {
//     var id = ++errId;
//     $('body').append('<p id="err'+id+'">'+msg+'</p>');
//     setTimeout(function() { $('#err'+id).fadeOut(); }, 2500);
// }
