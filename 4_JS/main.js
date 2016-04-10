var delayId = null;
var delayActive = false;
var menuBase = null;

$(document).ready(loadOk);

function loadOk(){
  menuBase = $(".menuBase");
  menuBase.on("mouseover", function(){
    menuBase.not(this).each(function(){
      mOut($(this));
    });
    mOver($(this));
  });

  menuBase.on("mouseleave", function(){
    mOutDelay($(this));
  });
}

function mOver(a){
  if(delayActive){
    clearTimeout(delayId);
    delayActive = false;
  }
  if(!$(a).hasClass("empty")){
    $(a).find(".title").addClass("active");
    $(a).find("li").addClass("active");
  }
  $(a).find(".titleBorder").addClass("active");
}

function mOutDelay(a){
  var me = $(a);
  delayActive = true;
  delayId = setTimeout(mOut, 500, me);
}

function mOut(a){
  $(a).find(".title").removeClass("active");
  $(a).find(".titleBorder").removeClass("active");
  $(a).find("li").removeClass("active");
}
