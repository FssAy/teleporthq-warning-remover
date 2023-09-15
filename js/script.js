// ==UserScript==
// @name         TeleportHQ - Firefox warning remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the warning overlay which prevents access from Firefox browser.
// @author       FssAy
// @match        https://play.teleporthq.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teleporthq.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideWarningOverlay() {
        const warningOverlay = document.querySelector('.thq-warning-overlay');

        if (warningOverlay) {
            warningOverlay.style.display = 'none';
            return;
        }

        // Check again after 1 second (the overlay might appear after this script is executed)
        setTimeout(hideWarningOverlay, 1000);
    }

    // Start the initial check
    hideWarningOverlay();
})();
