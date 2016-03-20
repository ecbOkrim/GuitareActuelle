$(document).ready(loadOk);

function loadOk(){
  var menuItem = $("nav").find("li");
  menuItem.on("mouseenter mouseleave",function(){
    $(this).toggleClass("hovered");
  });
}
