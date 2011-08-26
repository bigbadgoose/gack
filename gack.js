/**
 * GA
 * create and export a global google analytics helper object
 */
var GA = (function () {
  var ga = {},
      gid = 'UA-xxxxxxxx-1';

  // _gaq is global, don't use var constructor
  _gaq = _gaq || [];

  //  api method sig: _trackEvent(category, action, opt_label, opt_value)
  ga.trackEvent = function (val) {
    if (val.constructor != (new Array).constructor) return;
    var arr = ['_trackEvent'].concat(val);
    _gaq.push(arr);
  };

  return ga;
}());
