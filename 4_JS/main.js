$(document).ready(loadOk);

function loadOk(){
  var menuBtn = $("#mainMenu");
  var title = $("#titleContainer");
  var titleTxt = $("#titleContainer").find(".content");

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
}

function mOver(a){
  if (!$(a).hasClass("selected")) {
      $(a).addClass("hovered");
  }
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
