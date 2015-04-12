var triangle = function(s1,s2,s3) {

//the return type of what type of triangle
var triangleType = "none";


//compare each side of the triangle to make sure they are all the same
if ((s1 === s2) && (s2 ===s3) && (s3 === s1)) {
    triangleType = "equilateral";
//compare two sides of the triangle to make sure they are same
 } else if ((s1 === s2) || (s2 ===s3) || (s1 === s3)) {
    triangleType = "isosceles";
//if anything else, it becomes a scalene
 } else {
     triangleType = "scalene"
 }

return triangleType;






};


















// var s1 = parseInt(s1);
// var s2 = parseInt(s2);
// var s3 = parseInt(s3);
//
// var type = "";
//
// if ((s1 != s2 != s3) || (s1 != s3 != s2)){
//   type = "scalene";
// } else if ((s1 === s2) && (s1 === s3) && (s2 === s3)) {
//   type = "equilateral";
// } else if ((s1 === s2) || (s1 === s3) || (s2 === s3)) {
//   type = "isosceles"
// }
// else  {
//   "Not a triangle."
// }

// return type;
//
// };















$(document).ready(function() {
  $("form#triangle").submit(function(event){
    var s1 = parseInt($("input#s1").val());

    var s2 = parseInt($("input#s2").val());

    var s3 = parseInt($("input#s3").val());
    var result = triangle(s1,s2,s3);

    $(".result_triangleType").text(result);

    $("#result").show();
    event.preventDefault();

  });
});
