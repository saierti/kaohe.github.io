var map1 = document.getElementById("top-1");
var map2 = document.getElementById("top1");
var i = 0;
function show(){
	if(i==0){
 	map2.style.width="410px";
 	i++;
 }
 else{
 	map2.style.width="0px";
 	i--;
 }
}
function overflowshow(){
	if(i==1) 	map2.style.overflow = "visible";
}
function overflowhide(){
	if(i==0)  	map2.style.overflow = "hidden";
}
map1.onclick = function(){
	show();
	if(i==1) movement=setTimeout("overflowshow()",300);
	else	overflowhide();
}
/*二级菜单向右滑出*/

var map2_1 = document.getElementById("map2-1");
var map3_1 = document.getElementById("map3-1");
var map2_2 = document.getElementById("map2-2");
var map3_2 = document.getElementById("map3-2")
function show2(){
	map3_1.style.height = "144px";
}
function hide2(){
	map3_1.style.height = "0px";
}
function show3(){
	map3_2.style.height = "144px";
}
function hide3(){
	map3_2.style.height = "0px";
}
map3_1.onmouseover = function(){
	show2()
}
map3_1.onmouseout = function(){
	hide2();
}
map2_1.onmouseover = function(){
	show2();
}
map2_1.onmouseout = function(){
	hide2();
}
map2_2.onmouseover = function(){
	show3();
}
map2_2.onmouseout = function(){
	hide3();
}
map3_2.onmouseover = function(){
	show3();
}
map3_2.onmouseout = function(){
	hide3();
}
/*三级菜单滑出*/
var signlink = document.getElementsByClassName("linksign");
var signbox = document.getElementById("sign");
function show4(){
	signbox.style.height = "180px";
}
signlink[0].onclick = function(){
	show4();
}
signlink[1].onclick = function(){
	show4();
}