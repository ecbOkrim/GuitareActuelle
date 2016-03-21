$(document).ready(loadOk);

function loadOk(){
  var menuItems = $("nav").find("li");
  var menuBar = $("nav").find("ul");
  var menuBox = $("nav").find(".slideIn");

  menuItems.on("mouseover",function(){
    menuItems.removeClass("hovered");
    $(this).addClass("hovered");
    var myUrl = '../menu_' + $(this).data('pos') + '.html';
    $.ajax(myUrl, {
      success: function(response) {
        menuBox.html(response);
        menuBox.addClass("hovered");
      },
      error: function(request, errorType, errorMessage) {
        console.log('Error: ' + errorType + ' with message: ' + errorMessage);
        menuBox.removeClass("hovered");
      }
    });
  });

  menuBox.on("mouseover",function(){
    $(this).addClass("hovered");
  });
  menuBox.on("mouseleave",function(){
    menuItems.removeClass("hovered");
    menuBox.removeClass("hovered");
  });
}
