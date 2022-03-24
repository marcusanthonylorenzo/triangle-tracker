
$(document).ready(function () {
  $("#Triangle").submit(function (event) {
    
    event.preventDefault();

    const base = parseInt($("#base").val());
    const height = parseInt($("#height").val());
    const angle = parseInt($("#angle").val());
    const output = $("#output");

    if (base === height && base === angle) {
      output.text("an Equilateral");
    } else if (base === height && angle > 0) {
      output.text("an Isosceles");
    } else if ((base + height) > angle){
      output.text("a Scalene");
    } else {
      output.text("NO")
    }
      
  });

});