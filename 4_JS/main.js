$(document).ready(loadOk);

function loadOk(){
  var menuItem = $("nav").find("li")
  menuItem.on("mouseenter",function(){
    $(this).addClass("hovered");
  });
  menuItem.on("mouseleave",function(){
    $(this).removeClass("hovered");
  });

  var testBtn = $("button");
  testBtn.on("click", clickBtn);
}

function clickBtn(){
  $.ajax('test.html',{
      success: function(response){
        $("button").html("HEY ").append(response);
      },
      error: function(req, errTy, errMsg){
        alert("Err: " + errTy + " \nMessage: " + errMsg);
      }
  })
}
