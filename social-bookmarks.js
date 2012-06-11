// AJAX.js
function ajax(a,b){var c="XMLHttpRequest"in window?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP"),d=a.url||a,e=a.method||a.params?"POST":"GET",f=a.loading||null,b=a.callback||b;c.onreadystatechange=function(){f&&c.readyState===2&&f.call();b&&c.readyState===4&&b.call(c.responseText)};c.open(e,d,true);if(e==="POST"){c.setRequestHeader("X-requested-With","XMLHttpRequest");c.setRequestHeader("Content-type","application/x-www-form-urlencoded")}c.send(a.params||null);return c.responseText};

// Social-bookmarks

(function () {
	// getElementById alias

	I=function(a){return document.getElementById(a)};

	// innerHTML alias

	H=function(a,b){a.innerHTML=b};

	var a = I("tweet"),
		b = I("facebook"),
		c = I("googleplus"), // gets the elements
		d = function (e, f, g) { // defines our window-opening function
			e.onclick = function () {
				window.open(e.href, '', 'width=' + (f || 500) + ',height=' + (g || 200));
				// A 500x200 window fits for both twitter and G+, so that is the default value
				// However, we let the possibility fo set a custom size for Facebook
				return false;
				// Prevents the link from opening the link in the same window
			}
		};
	if (a && b && c) { // checks if links are in the DOM
		ajax("count.php?url=" + b.href.split("?u=")[1], function() {
			h = JSON.parse(this);
			H(a,h.tweet + " tweets");
			H(b,h.facebook + " shares");
			H(c,h.gplus + " G+1");
		 });
		d(a);
		d(b, 640, 280); // custom size for Facebook's sharer.php
		d(c);
	};
})();
//
// HTML structure should be :
/*
	<a id="tweet" href="http://twitter.com/?status={Title} {Link} via {@username}">Tweeter</a>
	<a id="facebook" href="http://www.facebook.com/sharer/sharer.php?u={Link}">Partager</a>
	<a id="googleplus" href="https://plusone.google.com/_/+1/confirm?url={Link}">Google +1</a>
*/

