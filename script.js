  //var curTab = browser.tabs.getCurrent();
  //var curUrl = curTab.url();
//  var txt = "hi"
  // var createBookmark = browser.bookmarks.create({
  //   title: "bookmarks.create() on MDN",
  //   url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create"
  // });
  //var  a= 10;
  // document.body.textContent = "";
  // var header = document.createElement('h1');
  // header.textContent = txt;
  // document.body.appendChild(header);
//document.body.style.border = "5px solid green";
//var gettingCurrent = browser.tabs.getCurrent()
//document.onload = function(){

var appHere = document.getElementsByClassName("mtq_question_label");
var i =0;
var but;
var url = window.location.href;
localStorage.setItem("key", "she");
for( i = 0 ; i < appHere.length; i++){
  but = document.createElement("input");
  but.type = "button"; //High My name is Pulkit Gupta, doing this for hactoberfest tshirt
  but.value = "save";
  but.onclick = function(){
  document.body.style.border = "5px solid red";
  //var createBookmark = browser.bookmarks.create({title: "bookmarks.create() on MDN",url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create"});

  };
  appHere[i].appendChild(but);
}
document.body.style.border = "5px solid green";
  //appHere[0].onclick = function(){
  //  document.body.style.border = "5px solid green";
    // browser.bookmarks.create({
    // title: "bookmarks.create() on MDN",
    // url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create"
    // });
    //document.body.style.border = "5px solid red";
  //};
  //document.body.style.border = "5px solid blue";

  // var but = document.createElement("BUTTON");
  // but.innerHTML = "Bookmark-It";
  // var but = document.createElement('input');
  // but.type = "button";
  // but.value = "Bookmark-It";
  // but.onclick = function(){
  //   alert("Hello World");
  // };
//var i= 0;
//for(i =0; i < appHere.length; i++){
  // appHere[0].insertAdjacentElement("beforeend", but);
  // document.body.style.border = "5px solid green";
  //appHere.innerHTML = "BookMark";
//}
//}
