// ==UserScript==
// @name        Linkfy TL NFO Links
// @namespace   pootz10
// @description NFO urls beginning with http become clickable
// @include     /(^https?:\/\/www\.|^https?:\/\/)torrentleech\.org\/(torrent).*/
// @version     1.2
// @history     1.2 - minor fix, a missing space between ' " could not change color of the link on some browsers
// @history     1.1 - update regex to detect when url has only www.
// @license     GNU
// @require     https://code.jquery.com/jquery-2.1.1.min.js
// @updateURL   https://github.com/pootz10/Linkfy-TL-NFO-Links/raw/master/Linkfy_TL_NFO_Links.user.js
// @downloadURL https://github.com/pootz10/Linkfy-TL-NFO-Links/raw/master/Linkfy_TL_NFO_Links.user.js
// @grant       GM_addStyle
// @run-at      document-idle
// ==/UserScript==

$('#nfo_text').each( function() {

    //var re = /https?:\/\/(\S+)/g
    var re = /\(?(?:https?:\/\/|www\.)(\S+)/g
    var link = '<a href="https://' + "$1" + ' " style="color:yellow;" target="_blank">https://' + "$1" + '</a>';

    var linkify = $(this).text().replace(re, link);
    linkify = linkify.replace(/https?:\/\/https?:\/\//g, "https://");
    linkify = linkify.replace(/\/'|\/"/g, "/");
    $(this).html(linkify);

});
