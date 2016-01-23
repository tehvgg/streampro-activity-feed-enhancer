(function () {

	'use strict';

	var volume = document.querySelector('#volume');
	var save = document.querySelector('#save');
	var status = document.querySelector('#status');
	var timeout;

	function setValue (data) {
		volume.value = data.volume * 100;
	}

	function saveOptions () {
		timeout && clearTimeout(timeout);
		chrome.storage.sync.set({ volume: volume.valueAsNumber / 100 }, showStatus);
	}

	function showStatus () {
		status.style.visibility = 'visible';
		timeout = setTimeout(hideStatus, 3000);
	}

	function hideStatus () {
		status.style.visibility = 'hidden';
	}

	save.addEventListener('click', saveOptions);
	chrome.storage.sync.get({ volume: 1 }, setValue);

})();
