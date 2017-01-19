/**
* @Author: Yannik Buerkle <yannik>
* @Date:   2017-01-19
* @Email:  mail@yannik-buerkle.de
* @Last modified by:   yannik
* @Last modified time: 2017-01-19
* @License: MIT
*/


var _paq = _paq || [];
// tracker methods like "setCustomDimension" should be called before "trackPageView"
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//piwik.yannik-buerkle.de/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
