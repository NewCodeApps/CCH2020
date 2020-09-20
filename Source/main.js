//CCH2020

//Do the function
function startcookie() {
  Game.Earn(100);
}

setInterval(startcookie, 2000);

//Roll the ads
var ss = document.getElementById("smallSupport");
while (ss.hasChildNodes()) {  
  ss.removeChild(list.firstChild);
}
var img = document.createElement('img'); 
            img.src =  
'https://github.com/NewCodeApps/CCH2020/raw/master/CCH2020.jpg'; 
            document.getElementById('smallSupport').appendChild(img);
