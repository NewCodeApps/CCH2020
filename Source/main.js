//CCH2020

//Give 10 cookies
function startcookie10() {
  Game.Earn(10);
}

//Give 100 cookies
function startcookie100() {
  Game.Earn(100);
}

//Give 1000 cookies
function startcookie1000() {
  Game.Earn(1000);
}

//Give 10000 cookies
function startcookie10000() {
  Game.Earn(10000);
}


//Roll the ads
var ss = document.getElementById("smallSupport");
while (ss.hasChildNodes()) {  
  ss.removeChild(ss.firstChild);
}
var img = document.createElement('img'); 
            img.src =  
'https://github.com/NewCodeApps/CCH2020/raw/master/CCH2020.jpg'; 
            document.getElementById('smallSupport').appendChild(img);

// Add control panel
// remove ads for panel
var s = document.getElementById("support");
while (s.hasChildNodes()) {  
  s.removeChild(s.firstChild);
} 

//cp
var h1 = document.createElement('h1');
var linkh1 = document.createTextNode("Control Panel");
 h1.appendChild(linkh1);
document.getElementById("support").appendChild(h1);

//make 10 cookies every 1 sec
var a = document.createElement('a');
var link = document.createTextNode("Give 10 cookies every 1 sec  ");
 a.appendChild(link);
a.title = "Give 10 cookies every 1 sec  ";
a.href = "javascript:var sc10=setInterval(startcookie10,1000)";    
document.getElementById("support").appendChild(a);

//make 100 cookies every 1 sec
var a1 = document.createElement('a');
var link1 = document.createTextNode("Give 100 cookies every 1 sec  ");
 a1.appendChild(link1);
a1.title = "Give 100 cookies every 1 sec  ";
a1.href = "javascript:var sc100=setInterval(startcookie100,1000)";    
document.getElementById("support").appendChild(a1);

//make 1000 cookies every 1 sec
var a11 = document.createElement('a');
var link11 = document.createTextNode("Give 1000 cookies every 1 sec  ");
 a11.appendChild(link11);
a11.title = "Give 1000 cookies every 1 sec  ";
a11.href = "javascript:var sc1000=setInterval(startcookie1000,1000)";    
document.getElementById("support").appendChild(a11);

//make 10000 cookies every 1 sec
var a111 = document.createElement('a');
var link111 = document.createTextNode("Give 10000 cookies every 1 sec  ");
 a111.appendChild(link111);
a111.title = "Give 10000 cookies every 1 sec  ";
a111.href = "javascript:var sc10000=setInterval(startcookie10000,1000)";    
document.getElementById("support").appendChild(a111);
