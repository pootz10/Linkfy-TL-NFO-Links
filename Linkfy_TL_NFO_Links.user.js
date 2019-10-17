// ==UserScript==
// @name        Linkfy TL NFO Links
// @namespace   pootz10
// @description NFO urls beginning with http become clickable
// @include     /(^https?:\/\/www\.|^https?:\/\/)torrentleech\.org\/(torrent).*/
// @version     1.0
// @history     1.0 -
// @license     GNU
// @require     https://code.jquery.com/jquery-2.1.1.min.js
// @updateURL   https://raw.githubusercontent.com/pootz10/Linkfy-TL-NFO-Links/master/Linkfy_TL_NFO_Links.user.js
// @downloadURL https://raw.githubusercontent.com/pootz10/Linkfy-TL-NFO-Links/master/Linkfy_TL_NFO_Links.user.js
// @grant       GM_addStyle
// @run-at      document-idle
// ==/UserScript==


$('#nfo_text').each( function() {

    var re = /https?:\/\/(\S+)/g
    var link = '<a href="https://' + "$1" + '" style="color:yellow" target="_blank">https://' + "$1" + '</a>';

    var linkify = $(this).text().replace(re, link);
    linkify = linkify.replace(/https?:\/\/https?:\/\//g, "https://");
    $(this).html(linkify);

});
