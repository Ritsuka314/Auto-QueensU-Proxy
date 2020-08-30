// ==UserScript==
// @name         Auto QueensU Proxy
// @namespace    https://richardyan.site/
// @version      0.1
// @license      cc-by-4.0
// @description  Automatically redirect to Queen's University Proxy for a list of selected websites for my personal use.

// @author       Richard Yan
// @homepageURL  https://github.com/RichardYan314/Auto-QueensU-Proxy#readme
// @supportURL   https://github.com/RichardYan314/Auto-QueensU-Proxy/issues
// @downloadURL  https://raw.githubusercontent.com/RichardYan314/Auto-QueensU-Proxy/master/Auto-QueensU-Proxy.user.js

// - a list of avaliable websites that are accessable from the Web Proxy
// - https://login.proxy.queensu.ca/public/menu-queens.html
// - So far, only sites frequently used by the myself is included.
// @match        https://www.sciencedirect.com/*
// @match        https://epubs.siam.org/*
// @match        https://www.jstor.org/*
// @match        https://search.proquest.com/*
// @match        https://ieeexplore.ieee.org/*
// @match        https://link.springer.com/*
// @match        https://www.tandfonline.com/*
// @match        https://dl.acm.org/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var OffCampusURL = "https://proxy.queensu.ca/login?url=" + document.URL;
  window.location.assign(OffCampusURL);
})();
