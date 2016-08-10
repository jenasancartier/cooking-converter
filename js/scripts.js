// BACK END
var litersConvert = function(gallons){
  return gallons * 3.79;
};
var gramsConvert = function(ounces){
  return ounces * 28.35;
};

// FRONT END
$(document).ready(function() {

  $("form#unit1").submit(function(event){
    var gallons = parseInt($("input#gallons").val());
    var result = litersConvert(gallons)
    $("#result1").text(result);
    event.preventDefault();
  });
// oz to grams
  $("form#unit2").submit(function(event){
    var ounces = parseInt($("input#ounces").val());
    var result = gramsConvert(ounces);
    $("#result2").text(result);
    event.preventDefault();
  });

});
