$(document).ready(loadOk);

function loadOk(){
  var menuBtn = $("#mainMenu");
  var title = $("#titleContainer");
  var titleTxt = $("#titleContainer").find(".title");

  menuBtn.on("mouseover", function(){
    mOver($(this));
  });
  menuBtn.on("mouseleave", function(){
    mOut($(this));
  });
  menuBtn.on("click", function(){
    mClick($(this));
  });

  title.on("mouseover", function(){
    mOver($(titleTxt));
  });
  title.on("mouseleave", function(){
    mOut($(titleTxt));
  });

  /*
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
  */
}

function mOver(a){
  $(a).addClass("hovered");
}

function mOut(a){
  $(a).removeClass("hovered");
}

function mClick(a){
  if ($(a).hasClass("selected")) {
      $(a).removeClass("selected");
      $(a).addClass("hovered");
  }else{
      $(a).removeClass("hovered");
      $(a).addClass("selected");
  }
}
