$(function () {
  $("#m1").click(function () {
    $("#menuicon").css("display", "none");
    $("#menuicon1").css("display", "block");
    $("#pop").addClass("popmenu");
  });
  $("#m2").click(function () {
    $("#menuicon").css("display", "block");
    $("#menuicon1").css("display", "none");
    $("#pop").removeClass("popmenu");
  });
  $("#unordered").click(function () {
    $("#menuicon").css("display", "block");
    $("#menuicon1").css("display", "none");
    $("#pop").removeClass("popmenu");
  });
  $("#t1").click(function () {
    $("#t1").css("color", "red");
    $("#t2").css("color", "#004248");
    $("#t3").css("color", "#004248");
    $("#tab1").css("display", "block");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "none");
  });
  $("#t2").click(function () {
    $("#t1").css("color", "#004248");
    $("#t2").css("color", "red");
    $("#t3").css("color", "#004248");
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "block");
    $("#tab3").css("display", "none");
  });
  $("#t3").click(function () {
    $("#t1").css("color", "#004248");
    $("#t2").css("color", "#004248");
    $("#t3").css("color", "red");
    $("#tab1").css("display", "none");
    $("#tab2").css("display", "none");
    $("#tab3").css("display", "block");
  });
});

// function pop() {
//   var a = document.getElementById("pop");
//   document.getElementById("menuicon").style.display = "none";
//   document.getElementById("menuicon1").style.display = "block";

//   a.classList.add("popmenu");
//   // a.style.top = "25%";
// }
// function popdown() {
//   var a = document.getElementById("pop");
//   document.getElementById("menuicon").style.display = "block";
//   document.getElementById("menuicon1").style.display = "none";

//   a.classList.remove("popmenu");
// a.style.top = "-200%";
// }
// function popup() {
//   var element = document.getElementById("element");
//   element.classList.add("popmenu");
// }
// function popup() {
//   let x = document.getElementById("popmenu");
//   document.getElementById("menuicon").style.display = "none";
//   document.getElementById("menuicon1").style.display = "block";
//   x.style.top = "13.8%";
// }
// function popdown() {
//   let x = document.getElementById("popmenu");
//   x.style.top = "-60%";
//   document.getElementById("menuicon").style.display = "block";
//   document.getElementById("menuicon1").style.display = "none";
// }
