(function() {
  'use strict';
  checkSlideSize('frame','section',3);
}());

var frameBtn = document.getElementById("frameBtn");
frameBtn.addEventListener("click",countClick,false);

var clicks = 0;
frameBtn.innerHTML = "next";

function countClick(){
  clicks++;
  console.log("original text");
  if(clicks > 1){
    console.log("new text")
    frameBtn.innerHTML = "back";
  }
  if(clicks > 2){
    frameBtn.innerHTML = "more";
    clicks = 0;
  }
}

//
var toolTipBtn = document.getElementsByClassName("tool-tip-btn");

var toolTip = document.getElementsByClassName("tool-tip");

function closeAllTip(){
  for (var i = 0; i < toolTip.length; i++) {
    toolTip[i].className = "tool-tip";
    toolTipBtn[i].className = "tool-tip-btn";
  };
}

function toggleTip(){
  for (var i = 0; i < toolTip.length; i++) {
    toolTip[i].className = "tool-tip";
  };

  for (var i = 0; i < toolTipBtn.length; i++) {
    toolTipBtn[i].className = "tool-tip-btn";
  };

  toggleThis(this,'active');

  nextSiblingToggle(this,'active');

}

function closeTip(){

  for (var i = 0; i < toolTip.length; i++) {
    toolTip[i].className = "tool-tip";
  };

  for (var i = 0; i < toolTipBtn.length; i++) {
    toolTipBtn[i].className = "tool-tip-btn";
  };

}

for (var i = 0; i < toolTipBtn.length; i++) {

  toolTipBtn[i].addEventListener("click",toggleTip,false);

}
for (var i = 0; i < toolTip.length; i++) {

  toolTip[i].addEventListener("click",closeTip,false);

}
