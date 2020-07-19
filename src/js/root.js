import LazyLoad from "vanilla-lazyload";
import Splide from '@splidejs/splide';
import Cookies from 'js-cookie';
/*VARIABLES*/
var iframe = document.querySelectorAll('iframe');
var img = document.querySelectorAll('img');
var video = document.querySelectorAll('video');
var protocol = window.location.protocol;
var hostname = window.location.hostname;
/*VARIABLES*/
/*Local Storage*/
function LuuVaoLocalStorage(Array,nameArray) {
    localStorage.clear();
    var jsonData = JSON.stringify(Array);
    localStorage.setItem(nameArray, jsonData);
}
/*nameArray là dạng string, array là biến array cần lưu vào*/
function LayLocalStorage(nameArray,Array) {
    var jsonData = localStorage.getItem(nameArray);
    if (!jsonData) { localStorage = []; return;}
    Array = JSON.parse(jsonData);
}
/*nameArray là dạng string, array là biến array cần lưu local vào*/
/*Local Storage*/
/* Resposive lazy load*/
function iframeResposive(){
  for (let i = 0; i < iframe.length; i++) {
      iframe[i].classList.add('lazy');
  }
}
function imgResposive(){
  for (let i = 0; i < img.length; i++) {
      img[i].classList.add('lazy');
  }
}
function videoResposive(){
  for (let i = 0; i < video.length; i++) {
      video[i].classList.add('lazy');
  }
}
iframe ? iframeResposive(): {};
img ? imgResposive(): {};
video ? videoResposive():{};
var lazyLoadInstance = new LazyLoad({elements_selector: ".lazy"});
/* Resposive lazy load*/
