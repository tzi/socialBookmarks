(function () {
	var a = document.getElementById("tweet"), 
		b = document.getElementById("facebook"),
		c = document.getElementById("googleplus"), // gets the elements
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
		d(a);
		d(b, 640, 280); // custom size for Facebook's sharer.php
		d(c);
	};
})(); 

// HTML structure should be : 
/*	
	<a id="tweet" href="http://twitter.com/?status={Title} {Link} via {@username}">Tweeter</a>
	<a id="facebook" href="http://www.facebook.com/sharer/sharer.php?u={Link}">Partager</a>
	<a id="googleplus" href="https://plusone.google.com/_/+1/confirm?url={Link}">Google +1</a>
*/ 

// Compressed : 284 bytes

(function(){var a=document.getElementById("tweet"),b=document.getElementById("facebook"),c=document.getElementById("googleplus"),d=function(e,f,g){e.onclick=function(){window.open(e.href,'','width='+(f||500)+',height='+(g||200));return false}};if(a&&b&&c){d(a);d(b,640,280);d(c)}})();