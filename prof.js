firebase.database().ref().child('counter').on('value', updateDiv);

firebase.database().ref().child('counter').on('value', function(snapshot) {
  anotherfunction(snapshot.val());
});

function updateDiv(ss) {
   $('#number').text(ss.val()||0);
   $('#custom').val('rec'+(parseInt(ss.val(), 10)+1));
}


function anotherfunction(num) {
  var colorThreshold = num,
      circle = document.querySelector('#circle');
      changeColor(colorThreshold);
      $("#circle #number").html(colorThreshold);
}

function changeColor(val) {
    var color = "#47cc55";

    if (val > 3 && val < 6) {
        color = "#ffff1e";
    } else if (val >= 6) {
        color = "#cc0000";
    }

    circle.style.background = color;
}



// Using the jQuery library
