var triangle = function(s1,s2,s3) {

var s1 = parseInt(s1);
var s2 = parseInt(s2);
var s3 = parseInt(s3);

var type = "";

if ((s1 != s2 != s3) || (s1 != s3 != s2)){
  type = "scalene";
} else if (s1 === s2 === s3) {
  type = "triangle";
} else if ((s1 === s2) || (s1 === s3) || (s2 === s3)) {
  type = "isosceles"
}
// else  {
//   "Not a triangle."
// }

return type;

};

$(document).ready(function() {
  $("form#triangle").submit(function(event){
    var s1,s2,s3 = parseInt($("input#s1,s2,s3").val());
    var result = triangle(s1,s2,s3);

    $(".result_type").text(result);

    $("#result").show();
    event.preventDefault();

  });
});
