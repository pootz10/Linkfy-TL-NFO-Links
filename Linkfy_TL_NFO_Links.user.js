// ==UserScript==
// @name        Linkfy TL NFO Links
// @namespace   pootz10
// @description NFO urls beginning with http become clickable
// @include     /(^https?:\/\/www\.|^https?:\/\/)torrentleech\.org\/(torrent).*/
// @version     1.4
// @history     1.4 - fix issue where script stopped working after firefox 84.x
// @history     1.3 - highlight subtitles (não lançado na net)
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

    var re = /\(?(?:https?:\/\/|www\.)(\S+)/g;
    var link = '<a href="https://' + "$1" + ' " style="color:yellow;" target="_blank">https://' + "$1" + '</a>';

    var reSUBs    = /(Subtitles|Subtitles.+?$|Subs[\W].+?$|SUBTITLES:?$)/mg;
    var subs      = '<font' + ' style="color:lime;" >' + "$1" + '<font style="color:white;">';

    var linkify = $(this).text().replace(re, link).replace(reSUBs, subs);
    linkify = linkify.replace(/https?:\/\/https?:\/\//g, "https://");
    linkify = linkify.replace(/\/'|\/"/g, "/");
    $(this).html(linkify);

});
