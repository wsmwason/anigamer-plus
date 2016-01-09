// ==UserScript==
// @name        AniGamer Plus
// @namespace   wsmwason.anigamer.plus
// @description For ani.gamer.com.tw auto play and other features
// @include     http://ani.gamer.com.tw/animeVideo.php*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require     https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
// @auther      wsmwason
// @version     0.5
// @license     MIT
// @grant       none
// ==/UserScript==

// Setting
var maximumPlayer = false;

// Watch ad
window.localStorage['lastSuccessfullAd'] = Date.now() + (3600*1000);

// Agree R18
waitForKeyElements('div.R18', function(){
		$('div.R18').find('.choose').find('a').first().click();
});

// Auto play
waitForKeyElements('.vjs-big-play-button', function(){
		$('.vjs-big-play-button').click();
		$('.vjs-big-play-button').hide();
		setTimeout(function(){

				$('.vjs-big-play-button').click();
				
				setTimeout(function(){
						$('#ani_video').click();
						$('.vjs-paused').click();
					
					  // Maximum player
					  if (maximumPlayer==true) {
								$('.vjs-indent-button').click();
						}
				}, 1000);
		}, 5000);
});

// Video top border space
$('#BH_background').css('margin-top', '95px');
