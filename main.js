(function () {

	'use strict';

	var sound = new Audio(chrome.extension.getURL('sound.wav'));
	sound.volume = '1.0';

	function init (target) {
		new MutationObserver(handleMutation).observe(target, { childList: true });
	}

	function handleMutation (mutations) {
		/active/.test(mutations[0].addedNodes[0].className) && sound.play();
	}

	function checkForElement () {
		var target = document.querySelector('ul.activity-log');
		if (target !== null) {
			clearInterval(interval);
			init(target);
		}
	}

	var interval = setInterval(checkForElement, 100);
	
})();
