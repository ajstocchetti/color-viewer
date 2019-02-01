var STEP = 2;

function createAndShowBoard(blue, step) {
  var numSteps = 256 / step;

  // create <table> element
  var goltable = document.createElement("tbody");

  // build Table HTML
  var tablehtml = '';
  for (var h=0; h < numSteps; h++) {
    tablehtml += "<tr id='row+" + h + "'>";
    for (var w=0; w < numSteps; w++) {
      var style = `background-color:rgb(${h*step},${w*step},${blue});`;
      tablehtml += `<td id="${w}-${h}" style="${style}"></td>`;
    }
    tablehtml += "</tr>";
  }
  goltable.innerHTML = tablehtml;

  // add table to the #board element
  // var board = document.getElementById('board');
  // board.appendChild(goltable);
  $("#board").html(goltable);
  $("#blueVal").text(blue);
}

$("#blueRange").change(function handleRangeChange(evt) {
  var blue = evt.target.value;
  console.log(blue);
  createAndShowBoard(blue, STEP);
});

createAndShowBoard(26, STEP);
