// ==UserScript==
// @name         Cookie Clicker Hack 2020 Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download the CCH2020 Script into the game.
// @author       NewCodeApps
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    javascript:(function(){
	var script=document.createElement('script');
	script.type='text/javascript';
	script.src='https://rawcdn.githack.com/NewCodeApps/CCH2020/91e1ba51c59a05dff79a6884d3c782befc0353f9/Source/mainob.js';
	document.getElementsByTagName('head')[0].appendChild(script);
})();
})();
