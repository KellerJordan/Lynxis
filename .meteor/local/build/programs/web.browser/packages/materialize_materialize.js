//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

/* Package-scope variables */
var Materialize, lStack, $caption, $curr_slide, curr_index, id, $index, $this, namesCount, createDayLabel, createWeekdayLabel, imageHeight, item_width, tweenedOpacity, zTranslation, y;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/materialize_materialize/dist/js/materialize.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 * Materialize v0.97.7 (http://materializecss.com)                                                                    // 2
 * Copyright 2014-2015 Materialize                                                                                    // 3
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)                                 // 4
 */                                                                                                                   // 5
// Check for jQuery.                                                                                                  // 6
if (typeof(jQuery) === 'undefined') {                                                                                 // 7
  var jQuery;                                                                                                         // 8
  // Check if require is a defined function.                                                                          // 9
  if (typeof(require) === 'function') {                                                                               // 10
    jQuery = $ = require('jquery');                                                                                   // 11
  // Else use the dollar sign alias.                                                                                  // 12
  } else {                                                                                                            // 13
    jQuery = $;                                                                                                       // 14
  }                                                                                                                   // 15
}                                                                                                                     // 16
;/*                                                                                                                   // 17
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/                                                      // 18
 *                                                                                                                    // 19
 * Uses the built in easing capabilities added In jQuery 1.1                                                          // 20
 * to offer multiple easing options                                                                                   // 21
 *                                                                                                                    // 22
 * TERMS OF USE - jQuery Easing                                                                                       // 23
 *                                                                                                                    // 24
 * Open source under the BSD License.                                                                                 // 25
 *                                                                                                                    // 26
 * Copyright © 2008 George McGinley Smith                                                                             // 27
 * All rights reserved.                                                                                               // 28
 *                                                                                                                    // 29
 * Redistribution and use in source and binary forms, with or without modification,                                   // 30
 * are permitted provided that the following conditions are met:                                                      // 31
 *                                                                                                                    // 32
 * Redistributions of source code must retain the above copyright notice, this list of                                // 33
 * conditions and the following disclaimer.                                                                           // 34
 * Redistributions in binary form must reproduce the above copyright notice, this list                                // 35
 * of conditions and the following disclaimer in the documentation and/or other materials                             // 36
 * provided with the distribution.                                                                                    // 37
 *                                                                                                                    // 38
 * Neither the name of the author nor the names of contributors may be used to endorse                                // 39
 * or promote products derived from this software without specific prior written permission.                          // 40
 *                                                                                                                    // 41
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY                                // 42
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF                            // 43
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE                         // 44
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,                          // 45
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE                     // 46
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED                        // 47
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING                          // 48
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED                      // 49
 * OF THE POSSIBILITY OF SUCH DAMAGE.                                                                                 // 50
 *                                                                                                                    // 51
*/                                                                                                                    // 52
                                                                                                                      // 53
// t: current time, b: begInnIng value, c: change In value, d: duration                                               // 54
jQuery.easing['jswing'] = jQuery.easing['swing'];                                                                     // 55
                                                                                                                      // 56
jQuery.extend( jQuery.easing,                                                                                         // 57
{                                                                                                                     // 58
	def: 'easeOutQuad',                                                                                                  // 59
	swing: function (x, t, b, c, d) {                                                                                    // 60
		//alert(jQuery.easing.default);                                                                                     // 61
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);                                                             // 62
	},                                                                                                                   // 63
	easeInQuad: function (x, t, b, c, d) {                                                                               // 64
		return c*(t/=d)*t + b;                                                                                              // 65
	},                                                                                                                   // 66
	easeOutQuad: function (x, t, b, c, d) {                                                                              // 67
		return -c *(t/=d)*(t-2) + b;                                                                                        // 68
	},                                                                                                                   // 69
	easeInOutQuad: function (x, t, b, c, d) {                                                                            // 70
		if ((t/=d/2) < 1) return c/2*t*t + b;                                                                               // 71
		return -c/2 * ((--t)*(t-2) - 1) + b;                                                                                // 72
	},                                                                                                                   // 73
	easeInCubic: function (x, t, b, c, d) {                                                                              // 74
		return c*(t/=d)*t*t + b;                                                                                            // 75
	},                                                                                                                   // 76
	easeOutCubic: function (x, t, b, c, d) {                                                                             // 77
		return c*((t=t/d-1)*t*t + 1) + b;                                                                                   // 78
	},                                                                                                                   // 79
	easeInOutCubic: function (x, t, b, c, d) {                                                                           // 80
		if ((t/=d/2) < 1) return c/2*t*t*t + b;                                                                             // 81
		return c/2*((t-=2)*t*t + 2) + b;                                                                                    // 82
	},                                                                                                                   // 83
	easeInQuart: function (x, t, b, c, d) {                                                                              // 84
		return c*(t/=d)*t*t*t + b;                                                                                          // 85
	},                                                                                                                   // 86
	easeOutQuart: function (x, t, b, c, d) {                                                                             // 87
		return -c * ((t=t/d-1)*t*t*t - 1) + b;                                                                              // 88
	},                                                                                                                   // 89
	easeInOutQuart: function (x, t, b, c, d) {                                                                           // 90
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;                                                                           // 91
		return -c/2 * ((t-=2)*t*t*t - 2) + b;                                                                               // 92
	},                                                                                                                   // 93
	easeInQuint: function (x, t, b, c, d) {                                                                              // 94
		return c*(t/=d)*t*t*t*t + b;                                                                                        // 95
	},                                                                                                                   // 96
	easeOutQuint: function (x, t, b, c, d) {                                                                             // 97
		return c*((t=t/d-1)*t*t*t*t + 1) + b;                                                                               // 98
	},                                                                                                                   // 99
	easeInOutQuint: function (x, t, b, c, d) {                                                                           // 100
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;                                                                         // 101
		return c/2*((t-=2)*t*t*t*t + 2) + b;                                                                                // 102
	},                                                                                                                   // 103
	easeInSine: function (x, t, b, c, d) {                                                                               // 104
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;                                                                    // 105
	},                                                                                                                   // 106
	easeOutSine: function (x, t, b, c, d) {                                                                              // 107
		return c * Math.sin(t/d * (Math.PI/2)) + b;                                                                         // 108
	},                                                                                                                   // 109
	easeInOutSine: function (x, t, b, c, d) {                                                                            // 110
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;                                                                      // 111
	},                                                                                                                   // 112
	easeInExpo: function (x, t, b, c, d) {                                                                               // 113
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;                                                            // 114
	},                                                                                                                   // 115
	easeOutExpo: function (x, t, b, c, d) {                                                                              // 116
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;                                                        // 117
	},                                                                                                                   // 118
	easeInOutExpo: function (x, t, b, c, d) {                                                                            // 119
		if (t==0) return b;                                                                                                 // 120
		if (t==d) return b+c;                                                                                               // 121
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;                                                       // 122
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;                                                                     // 123
	},                                                                                                                   // 124
	easeInCirc: function (x, t, b, c, d) {                                                                               // 125
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;                                                                      // 126
	},                                                                                                                   // 127
	easeOutCirc: function (x, t, b, c, d) {                                                                              // 128
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;                                                                          // 129
	},                                                                                                                   // 130
	easeInOutCirc: function (x, t, b, c, d) {                                                                            // 131
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;                                                       // 132
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;                                                                     // 133
	},                                                                                                                   // 134
	easeInElastic: function (x, t, b, c, d) {                                                                            // 135
		var s=1.70158;var p=0;var a=c;                                                                                      // 136
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;                                                    // 137
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                            // 138
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                       // 139
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;                                          // 140
	},                                                                                                                   // 141
	easeOutElastic: function (x, t, b, c, d) {                                                                           // 142
		var s=1.70158;var p=0;var a=c;                                                                                      // 143
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;                                                    // 144
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                            // 145
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                       // 146
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;                                             // 147
	},                                                                                                                   // 148
	easeInOutElastic: function (x, t, b, c, d) {                                                                         // 149
		var s=1.70158;var p=0;var a=c;                                                                                      // 150
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);                                            // 151
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                            // 152
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                       // 153
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;                            // 154
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;                                     // 155
	},                                                                                                                   // 156
	easeInBack: function (x, t, b, c, d, s) {                                                                            // 157
		if (s == undefined) s = 1.70158;                                                                                    // 158
		return c*(t/=d)*t*((s+1)*t - s) + b;                                                                                // 159
	},                                                                                                                   // 160
	easeOutBack: function (x, t, b, c, d, s) {                                                                           // 161
		if (s == undefined) s = 1.70158;                                                                                    // 162
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;                                                                       // 163
	},                                                                                                                   // 164
	easeInOutBack: function (x, t, b, c, d, s) {                                                                         // 165
		if (s == undefined) s = 1.70158;                                                                                    // 166
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;                                                    // 167
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;                                                             // 168
	},                                                                                                                   // 169
	easeInBounce: function (x, t, b, c, d) {                                                                             // 170
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;                                                       // 171
	},                                                                                                                   // 172
	easeOutBounce: function (x, t, b, c, d) {                                                                            // 173
		if ((t/=d) < (1/2.75)) {                                                                                            // 174
			return c*(7.5625*t*t) + b;                                                                                         // 175
		} else if (t < (2/2.75)) {                                                                                          // 176
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;                                                                     // 177
		} else if (t < (2.5/2.75)) {                                                                                        // 178
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;                                                                  // 179
		} else {                                                                                                            // 180
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;                                                               // 181
		}                                                                                                                   // 182
	},                                                                                                                   // 183
	easeInOutBounce: function (x, t, b, c, d) {                                                                          // 184
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;                                          // 185
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;                                             // 186
	}                                                                                                                    // 187
});                                                                                                                   // 188
                                                                                                                      // 189
/*                                                                                                                    // 190
 *                                                                                                                    // 191
 * TERMS OF USE - EASING EQUATIONS                                                                                    // 192
 *                                                                                                                    // 193
 * Open source under the BSD License.                                                                                 // 194
 *                                                                                                                    // 195
 * Copyright © 2001 Robert Penner                                                                                     // 196
 * All rights reserved.                                                                                               // 197
 *                                                                                                                    // 198
 * Redistribution and use in source and binary forms, with or without modification,                                   // 199
 * are permitted provided that the following conditions are met:                                                      // 200
 *                                                                                                                    // 201
 * Redistributions of source code must retain the above copyright notice, this list of                                // 202
 * conditions and the following disclaimer.                                                                           // 203
 * Redistributions in binary form must reproduce the above copyright notice, this list                                // 204
 * of conditions and the following disclaimer in the documentation and/or other materials                             // 205
 * provided with the distribution.                                                                                    // 206
 *                                                                                                                    // 207
 * Neither the name of the author nor the names of contributors may be used to endorse                                // 208
 * or promote products derived from this software without specific prior written permission.                          // 209
 *                                                                                                                    // 210
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY                                // 211
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF                            // 212
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE                         // 213
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,                          // 214
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE                     // 215
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED                        // 216
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING                          // 217
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED                      // 218
 * OF THE POSSIBILITY OF SUCH DAMAGE.                                                                                 // 219
 *                                                                                                                    // 220
 */;    // Custom Easing                                                                                              // 221
    jQuery.extend( jQuery.easing,                                                                                     // 222
    {                                                                                                                 // 223
      easeInOutMaterial: function (x, t, b, c, d) {                                                                   // 224
        if ((t/=d/2) < 1) return c/2*t*t + b;                                                                         // 225
        return c/4*((t-=2)*t*t + 2) + b;                                                                              // 226
      }                                                                                                               // 227
    });                                                                                                               // 228
                                                                                                                      // 229
;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */              // 230
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */        // 232
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));
;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (typeof define === 'function' && define.amd) {                                                                 // 236
        define(['jquery', 'hammerjs'], factory);                                                                      // 237
    } else if (typeof exports === 'object') {                                                                         // 238
        factory(require('jquery'), require('hammerjs'));                                                              // 239
    } else {                                                                                                          // 240
        factory(jQuery, Hammer);                                                                                      // 241
    }                                                                                                                 // 242
}(function($, Hammer) {                                                                                               // 243
    function hammerify(el, options) {                                                                                 // 244
        var $el = $(el);                                                                                              // 245
        if(!$el.data("hammer")) {                                                                                     // 246
            $el.data("hammer", new Hammer($el[0], options));                                                          // 247
        }                                                                                                             // 248
    }                                                                                                                 // 249
                                                                                                                      // 250
    $.fn.hammer = function(options) {                                                                                 // 251
        return this.each(function() {                                                                                 // 252
            hammerify(this, options);                                                                                 // 253
        });                                                                                                           // 254
    };                                                                                                                // 255
                                                                                                                      // 256
    // extend the emit method to also trigger jQuery events                                                           // 257
    Hammer.Manager.prototype.emit = (function(originalEmit) {                                                         // 258
        return function(type, data) {                                                                                 // 259
            originalEmit.call(this, type, data);                                                                      // 260
            $(this.element).trigger({                                                                                 // 261
                type: type,                                                                                           // 262
                gesture: data                                                                                         // 263
            });                                                                                                       // 264
        };                                                                                                            // 265
    })(Hammer.Manager.prototype.emit);                                                                                // 266
}));                                                                                                                  // 267
;// Required for Meteor package, the use of window prevents export by Meteor                                          // 268
(function(window){                                                                                                    // 269
  if(window.Package){                                                                                                 // 270
    Materialize = {};                                                                                                 // 271
  } else {                                                                                                            // 272
    window.Materialize = {};                                                                                          // 273
  }                                                                                                                   // 274
})(window);                                                                                                           // 275
                                                                                                                      // 276
                                                                                                                      // 277
// Unique ID                                                                                                          // 278
Materialize.guid = (function() {                                                                                      // 279
  function s4() {                                                                                                     // 280
    return Math.floor((1 + Math.random()) * 0x10000)                                                                  // 281
      .toString(16)                                                                                                   // 282
      .substring(1);                                                                                                  // 283
  }                                                                                                                   // 284
  return function() {                                                                                                 // 285
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +                                                              // 286
           s4() + '-' + s4() + s4() + s4();                                                                           // 287
  };                                                                                                                  // 288
})();                                                                                                                 // 289
                                                                                                                      // 290
Materialize.elementOrParentIsFixed = function(element) {                                                              // 291
    var $element = $(element);                                                                                        // 292
    var $checkElements = $element.add($element.parents());                                                            // 293
    var isFixed = false;                                                                                              // 294
    $checkElements.each(function(){                                                                                   // 295
        if ($(this).css("position") === "fixed") {                                                                    // 296
            isFixed = true;                                                                                           // 297
            return false;                                                                                             // 298
        }                                                                                                             // 299
    });                                                                                                               // 300
    return isFixed;                                                                                                   // 301
};                                                                                                                    // 302
                                                                                                                      // 303
// Velocity has conflicts when loaded with jQuery, this will check for it                                             // 304
var Vel;                                                                                                              // 305
if ($) {                                                                                                              // 306
  Vel = $.Velocity;                                                                                                   // 307
} else if (jQuery) {                                                                                                  // 308
  Vel = jQuery.Velocity;                                                                                              // 309
} else {                                                                                                              // 310
  Vel = Velocity;                                                                                                     // 311
}                                                                                                                     // 312
;(function ($) {                                                                                                      // 313
  $.fn.collapsible = function(options) {                                                                              // 314
    var defaults = {                                                                                                  // 315
        accordion: undefined                                                                                          // 316
    };                                                                                                                // 317
                                                                                                                      // 318
    options = $.extend(defaults, options);                                                                            // 319
                                                                                                                      // 320
                                                                                                                      // 321
    return this.each(function() {                                                                                     // 322
                                                                                                                      // 323
      var $this = $(this);                                                                                            // 324
                                                                                                                      // 325
      var $panel_headers = $(this).find('> li > .collapsible-header');                                                // 326
                                                                                                                      // 327
      var collapsible_type = $this.data("collapsible");                                                               // 328
                                                                                                                      // 329
      // Turn off any existing event handlers                                                                         // 330
       $this.off('click.collapse', '> li > .collapsible-header');                                                     // 331
       $panel_headers.off('click.collapse');                                                                          // 332
                                                                                                                      // 333
                                                                                                                      // 334
       /****************                                                                                              // 335
       Helper Functions                                                                                               // 336
       ****************/                                                                                              // 337
                                                                                                                      // 338
      // Accordion Open                                                                                               // 339
      function accordionOpen(object) {                                                                                // 340
        $panel_headers = $this.find('> li > .collapsible-header');                                                    // 341
        if (object.hasClass('active')) {                                                                              // 342
            object.parent().addClass('active');                                                                       // 343
        }                                                                                                             // 344
        else {                                                                                                        // 345
            object.parent().removeClass('active');                                                                    // 346
        }                                                                                                             // 347
        if (object.parent().hasClass('active')){                                                                      // 348
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                             // 350
        else{                                                                                                         // 351
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                             // 353
                                                                                                                      // 354
        $panel_headers.not(object).removeClass('active').parent().removeClass('active');                              // 355
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).slideUp(                   // 356
          {                                                                                                           // 357
            duration: 350,                                                                                            // 358
            easing: "easeOutQuart",                                                                                   // 359
            queue: false,                                                                                             // 360
            complete:                                                                                                 // 361
              function() {                                                                                            // 362
                $(this).css('height', '');                                                                            // 363
              }                                                                                                       // 364
          });                                                                                                         // 365
      }                                                                                                               // 366
                                                                                                                      // 367
      // Expandable Open                                                                                              // 368
      function expandableOpen(object) {                                                                               // 369
        if (object.hasClass('active')) {                                                                              // 370
            object.parent().addClass('active');                                                                       // 371
        }                                                                                                             // 372
        else {                                                                                                        // 373
            object.parent().removeClass('active');                                                                    // 374
        }                                                                                                             // 375
        if (object.parent().hasClass('active')){                                                                      // 376
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                             // 378
        else{                                                                                                         // 379
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                             // 381
      }                                                                                                               // 382
                                                                                                                      // 383
      /**                                                                                                             // 384
       * Check if object is children of panel header                                                                  // 385
       * @param  {Object}  object Jquery object                                                                       // 386
       * @return {Boolean} true if it is children                                                                     // 387
       */                                                                                                             // 388
      function isChildrenOfPanelHeader(object) {                                                                      // 389
                                                                                                                      // 390
        var panelHeader = getPanelHeader(object);                                                                     // 391
                                                                                                                      // 392
        return panelHeader.length > 0;                                                                                // 393
      }                                                                                                               // 394
                                                                                                                      // 395
      /**                                                                                                             // 396
       * Get panel header from a children element                                                                     // 397
       * @param  {Object} object Jquery object                                                                        // 398
       * @return {Object} panel header object                                                                         // 399
       */                                                                                                             // 400
      function getPanelHeader(object) {                                                                               // 401
                                                                                                                      // 402
        return object.closest('li > .collapsible-header');                                                            // 403
      }                                                                                                               // 404
                                                                                                                      // 405
      /*****  End Helper Functions  *****/                                                                            // 406
                                                                                                                      // 407
                                                                                                                      // 408
                                                                                                                      // 409
      // Add click handler to only direct collapsible header children                                                 // 410
      $this.on('click.collapse', '> li > .collapsible-header', function(e) {                                          // 411
        var $header = $(this),                                                                                        // 412
            element = $(e.target);                                                                                    // 413
                                                                                                                      // 414
        if (isChildrenOfPanelHeader(element)) {                                                                       // 415
          element = getPanelHeader(element);                                                                          // 416
        }                                                                                                             // 417
                                                                                                                      // 418
        element.toggleClass('active');                                                                                // 419
                                                                                                                      // 420
        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
          accordionOpen(element);                                                                                     // 422
        } else { // Handle Expandables                                                                                // 423
          expandableOpen(element);                                                                                    // 424
                                                                                                                      // 425
          if ($header.hasClass('active')) {                                                                           // 426
            expandableOpen($header);                                                                                  // 427
          }                                                                                                           // 428
        }                                                                                                             // 429
      });                                                                                                             // 430
                                                                                                                      // 431
      // Open first active                                                                                            // 432
      var $panel_headers = $this.find('> li > .collapsible-header');                                                  // 433
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
        accordionOpen($panel_headers.filter('.active').first());                                                      // 435
      }                                                                                                               // 436
      else { // Handle Expandables                                                                                    // 437
        $panel_headers.filter('.active').each(function() {                                                            // 438
          expandableOpen($(this));                                                                                    // 439
        });                                                                                                           // 440
      }                                                                                                               // 441
                                                                                                                      // 442
    });                                                                                                               // 443
  };                                                                                                                  // 444
                                                                                                                      // 445
  $(document).ready(function(){                                                                                       // 446
    $('.collapsible').collapsible();                                                                                  // 447
  });                                                                                                                 // 448
}( jQuery ));;(function ($) {                                                                                         // 449
                                                                                                                      // 450
  // Add posibility to scroll to selected option                                                                      // 451
  // usefull for select for example                                                                                   // 452
  $.fn.scrollTo = function(elem) {                                                                                    // 453
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);                             // 454
    return this;                                                                                                      // 455
  };                                                                                                                  // 456
                                                                                                                      // 457
  $.fn.dropdown = function (options) {                                                                                // 458
    var defaults = {                                                                                                  // 459
      inDuration: 300,                                                                                                // 460
      outDuration: 225,                                                                                               // 461
      constrain_width: true, // Constrains width of dropdown to the activator                                         // 462
      hover: false,                                                                                                   // 463
      gutter: 0, // Spacing from edge                                                                                 // 464
      belowOrigin: false,                                                                                             // 465
      alignment: 'left',                                                                                              // 466
      stopPropagation: false                                                                                          // 467
    };                                                                                                                // 468
                                                                                                                      // 469
    // Open dropdown.                                                                                                 // 470
    if (options === "open") {                                                                                         // 471
      this.each(function() {                                                                                          // 472
        $(this).trigger('open');                                                                                      // 473
      });                                                                                                             // 474
      return false;                                                                                                   // 475
    }                                                                                                                 // 476
                                                                                                                      // 477
    // Close dropdown.                                                                                                // 478
    if (options === "close") {                                                                                        // 479
      this.each(function() {                                                                                          // 480
        $(this).trigger('close');                                                                                     // 481
      });                                                                                                             // 482
      return false;                                                                                                   // 483
    }                                                                                                                 // 484
                                                                                                                      // 485
    this.each(function(){                                                                                             // 486
      var origin = $(this);                                                                                           // 487
      var options = $.extend({}, defaults, options);                                                                  // 488
      var isFocused = false;                                                                                          // 489
                                                                                                                      // 490
      // Dropdown menu                                                                                                // 491
      var activates = $("#"+ origin.attr('data-activates'));                                                          // 492
                                                                                                                      // 493
      function updateOptions() {                                                                                      // 494
        if (origin.data('induration') !== undefined)                                                                  // 495
          options.inDuration = origin.data('induration');                                                             // 496
        if (origin.data('outduration') !== undefined)                                                                 // 497
          options.outDuration = origin.data('outduration');                                                           // 498
        if (origin.data('constrainwidth') !== undefined)                                                              // 499
          options.constrain_width = origin.data('constrainwidth');                                                    // 500
        if (origin.data('hover') !== undefined)                                                                       // 501
          options.hover = origin.data('hover');                                                                       // 502
        if (origin.data('gutter') !== undefined)                                                                      // 503
          options.gutter = origin.data('gutter');                                                                     // 504
        if (origin.data('beloworigin') !== undefined)                                                                 // 505
          options.belowOrigin = origin.data('beloworigin');                                                           // 506
        if (origin.data('alignment') !== undefined)                                                                   // 507
          options.alignment = origin.data('alignment');                                                               // 508
        if (origin.data('stoppropagation') !== undefined)                                                             // 509
          options.stopPropagation = origin.data('stoppropagation');                                                   // 510
      }                                                                                                               // 511
                                                                                                                      // 512
      updateOptions();                                                                                                // 513
                                                                                                                      // 514
      // Attach dropdown to its activator                                                                             // 515
      origin.after(activates);                                                                                        // 516
                                                                                                                      // 517
      /*                                                                                                              // 518
        Helper function to position and resize dropdown.                                                              // 519
        Used in hover and click handler.                                                                              // 520
      */                                                                                                              // 521
      function placeDropdown(eventType) {                                                                             // 522
        // Check for simultaneous focus and click events.                                                             // 523
        if (eventType === 'focus') {                                                                                  // 524
          isFocused = true;                                                                                           // 525
        }                                                                                                             // 526
                                                                                                                      // 527
        // Check html data attributes                                                                                 // 528
        updateOptions();                                                                                              // 529
                                                                                                                      // 530
        // Set Dropdown state                                                                                         // 531
        activates.addClass('active');                                                                                 // 532
        origin.addClass('active');                                                                                    // 533
                                                                                                                      // 534
        // Constrain width                                                                                            // 535
        if (options.constrain_width === true) {                                                                       // 536
          activates.css('width', origin.outerWidth());                                                                // 537
                                                                                                                      // 538
        } else {                                                                                                      // 539
          activates.css('white-space', 'nowrap');                                                                     // 540
        }                                                                                                             // 541
                                                                                                                      // 542
        // Offscreen detection                                                                                        // 543
        var windowHeight = window.innerHeight;                                                                        // 544
        var originHeight = origin.innerHeight();                                                                      // 545
        var offsetLeft = origin.offset().left;                                                                        // 546
        var offsetTop = origin.offset().top - $(window).scrollTop();                                                  // 547
        var currAlignment = options.alignment;                                                                        // 548
        var gutterSpacing = 0;                                                                                        // 549
        var leftPosition = 0;                                                                                         // 550
                                                                                                                      // 551
        // Below Origin                                                                                               // 552
        var verticalOffset = 0;                                                                                       // 553
        if (options.belowOrigin === true) {                                                                           // 554
          verticalOffset = originHeight;                                                                              // 555
        }                                                                                                             // 556
                                                                                                                      // 557
        // Check for scrolling positioned container.                                                                  // 558
        var scrollYOffset = 0;                                                                                        // 559
        var scrollXOffset = 0;                                                                                        // 560
        var wrapper = origin.parent();                                                                                // 561
        if (!wrapper.is('body')) {                                                                                    // 562
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {                                                    // 563
            scrollYOffset = wrapper[0].scrollTop;                                                                     // 564
          }                                                                                                           // 565
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {                                                      // 566
            scrollXOffset = wrapper[0].scrollLeft;                                                                    // 567
          }                                                                                                           // 568
        }                                                                                                             // 569
                                                                                                                      // 570
                                                                                                                      // 571
        if (offsetLeft + activates.innerWidth() > $(window).width()) {                                                // 572
          // Dropdown goes past screen on right, force right alignment                                                // 573
          currAlignment = 'right';                                                                                    // 574
                                                                                                                      // 575
        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {                                   // 576
          // Dropdown goes past screen on left, force left alignment                                                  // 577
          currAlignment = 'left';                                                                                     // 578
        }                                                                                                             // 579
        // Vertical bottom offscreen detection                                                                        // 580
        if (offsetTop + activates.innerHeight() > windowHeight) {                                                     // 581
          // If going upwards still goes offscreen, just crop height of dropdown.                                     // 582
          if (offsetTop + originHeight - activates.innerHeight() < 0) {                                               // 583
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;                                           // 584
            activates.css('max-height', adjustedHeight);                                                              // 585
          } else {                                                                                                    // 586
            // Flow upwards.                                                                                          // 587
            if (!verticalOffset) {                                                                                    // 588
              verticalOffset += originHeight;                                                                         // 589
            }                                                                                                         // 590
            verticalOffset -= activates.innerHeight();                                                                // 591
          }                                                                                                           // 592
        }                                                                                                             // 593
                                                                                                                      // 594
        // Handle edge alignment                                                                                      // 595
        if (currAlignment === 'left') {                                                                               // 596
          gutterSpacing = options.gutter;                                                                             // 597
          leftPosition = origin.position().left + gutterSpacing;                                                      // 598
        }                                                                                                             // 599
        else if (currAlignment === 'right') {                                                                         // 600
          var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();                    // 601
          gutterSpacing = -options.gutter;                                                                            // 602
          leftPosition =  offsetRight + gutterSpacing;                                                                // 603
        }                                                                                                             // 604
                                                                                                                      // 605
        // Position dropdown                                                                                          // 606
        activates.css({                                                                                               // 607
          position: 'absolute',                                                                                       // 608
          top: origin.position().top + verticalOffset + scrollYOffset,                                                // 609
          left: leftPosition + scrollXOffset                                                                          // 610
        });                                                                                                           // 611
                                                                                                                      // 612
                                                                                                                      // 613
        // Show dropdown                                                                                              // 614
        activates.stop(true, true).css('opacity', 0)                                                                  // 615
          .slideDown({                                                                                                // 616
            queue: false,                                                                                             // 617
            duration: options.inDuration,                                                                             // 618
            easing: 'easeOutCubic',                                                                                   // 619
            complete: function() {                                                                                    // 620
              $(this).css('height', '');                                                                              // 621
            }                                                                                                         // 622
          })                                                                                                          // 623
          .animate( {opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});               // 624
      }                                                                                                               // 625
                                                                                                                      // 626
      function hideDropdown() {                                                                                       // 627
        // Check for simultaneous focus and click events.                                                             // 628
        isFocused = false;                                                                                            // 629
        activates.fadeOut(options.outDuration);                                                                       // 630
        activates.removeClass('active');                                                                              // 631
        origin.removeClass('active');                                                                                 // 632
        setTimeout(function() { activates.css('max-height', ''); }, options.outDuration);                             // 633
      }                                                                                                               // 634
                                                                                                                      // 635
      // Hover                                                                                                        // 636
      if (options.hover) {                                                                                            // 637
        var open = false;                                                                                             // 638
        origin.unbind('click.' + origin.attr('id'));                                                                  // 639
        // Hover handler to show dropdown                                                                             // 640
        origin.on('mouseenter', function(e){ // Mouse over                                                            // 641
          if (open === false) {                                                                                       // 642
            placeDropdown();                                                                                          // 643
            open = true;                                                                                              // 644
          }                                                                                                           // 645
        });                                                                                                           // 646
        origin.on('mouseleave', function(e){                                                                          // 647
          // If hover on origin then to something other than dropdown content, then close                             // 648
          var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element                // 649
          if(!$(toEl).closest('.dropdown-content').is(activates)) {                                                   // 650
            activates.stop(true, true);                                                                               // 651
            hideDropdown();                                                                                           // 652
            open = false;                                                                                             // 653
          }                                                                                                           // 654
        });                                                                                                           // 655
                                                                                                                      // 656
        activates.on('mouseleave', function(e){ // Mouse out                                                          // 657
          var toEl = e.toElement || e.relatedTarget;                                                                  // 658
          if(!$(toEl).closest('.dropdown-button').is(origin)) {                                                       // 659
            activates.stop(true, true);                                                                               // 660
            hideDropdown();                                                                                           // 661
            open = false;                                                                                             // 662
          }                                                                                                           // 663
        });                                                                                                           // 664
                                                                                                                      // 665
        // Click                                                                                                      // 666
      } else {                                                                                                        // 667
        // Click handler to show dropdown                                                                             // 668
        origin.unbind('click.' + origin.attr('id'));                                                                  // 669
        origin.bind('click.'+origin.attr('id'), function(e){                                                          // 670
          if (!isFocused) {                                                                                           // 671
            if ( origin[0] == e.currentTarget &&                                                                      // 672
                 !origin.hasClass('active') &&                                                                        // 673
                 ($(e.target).closest('.dropdown-content').length === 0)) {                                           // 674
              e.preventDefault(); // Prevents button click from moving window                                         // 675
              if (options.stopPropagation) {                                                                          // 676
                e.stopPropagation();                                                                                  // 677
              }                                                                                                       // 678
              placeDropdown('click');                                                                                 // 679
            }                                                                                                         // 680
            // If origin is clicked and menu is open, close menu                                                      // 681
            else if (origin.hasClass('active')) {                                                                     // 682
              hideDropdown();                                                                                         // 683
              $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));             // 684
            }                                                                                                         // 685
            // If menu open, add click close handler to document                                                      // 686
            if (activates.hasClass('active')) {                                                                       // 687
              $(document).bind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e) {
                if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length) ) {            // 689
                  hideDropdown();                                                                                     // 690
                  $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));         // 691
                }                                                                                                     // 692
              });                                                                                                     // 693
            }                                                                                                         // 694
          }                                                                                                           // 695
        });                                                                                                           // 696
                                                                                                                      // 697
      } // End else                                                                                                   // 698
                                                                                                                      // 699
      // Listen to open and close event - useful for select component                                                 // 700
      origin.on('open', function(e, eventType) {                                                                      // 701
        placeDropdown(eventType);                                                                                     // 702
      });                                                                                                             // 703
      origin.on('close', hideDropdown);                                                                               // 704
                                                                                                                      // 705
                                                                                                                      // 706
    });                                                                                                               // 707
  }; // End dropdown plugin                                                                                           // 708
                                                                                                                      // 709
  $(document).ready(function(){                                                                                       // 710
    $('.dropdown-button').dropdown();                                                                                 // 711
  });                                                                                                                 // 712
}( jQuery ));                                                                                                         // 713
;(function($) {                                                                                                       // 714
    var _stack = 0,                                                                                                   // 715
    _lastID = 0,                                                                                                      // 716
    _generateID = function() {                                                                                        // 717
      _lastID++;                                                                                                      // 718
      return 'materialize-lean-overlay-' + _lastID;                                                                   // 719
    };                                                                                                                // 720
                                                                                                                      // 721
  $.fn.extend({                                                                                                       // 722
    openModal: function(options) {                                                                                    // 723
                                                                                                                      // 724
      var $body = $('body');                                                                                          // 725
      var oldWidth = $body.innerWidth();                                                                              // 726
      $body.css('overflow', 'hidden');                                                                                // 727
      $body.width(oldWidth);                                                                                          // 728
                                                                                                                      // 729
      var defaults = {                                                                                                // 730
        opacity: 0.5,                                                                                                 // 731
        in_duration: 350,                                                                                             // 732
        out_duration: 250,                                                                                            // 733
        ready: undefined,                                                                                             // 734
        complete: undefined,                                                                                          // 735
        dismissible: true,                                                                                            // 736
        starting_top: '4%',                                                                                           // 737
        ending_top: '10%'                                                                                             // 738
      };                                                                                                              // 739
      var $modal = $(this);                                                                                           // 740
                                                                                                                      // 741
      if ($modal.hasClass('open')) {                                                                                  // 742
        return;                                                                                                       // 743
      }                                                                                                               // 744
                                                                                                                      // 745
      var overlayID = _generateID();                                                                                  // 746
      var $overlay = $('<div class="lean-overlay"></div>');                                                           // 747
      lStack = (++_stack);                                                                                            // 748
                                                                                                                      // 749
      // Store a reference of the overlay                                                                             // 750
      $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);                                               // 751
      $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);                                     // 752
      $modal.addClass('open');                                                                                        // 753
                                                                                                                      // 754
      $("body").append($overlay);                                                                                     // 755
                                                                                                                      // 756
      // Override defaults                                                                                            // 757
      options = $.extend(defaults, options);                                                                          // 758
                                                                                                                      // 759
      if (options.dismissible) {                                                                                      // 760
        $overlay.click(function() {                                                                                   // 761
          $modal.closeModal(options);                                                                                 // 762
        });                                                                                                           // 763
        // Return on ESC                                                                                              // 764
        $(document).on('keyup.leanModal' + overlayID, function(e) {                                                   // 765
          if (e.keyCode === 27) {   // ESC key                                                                        // 766
            $modal.closeModal(options);                                                                               // 767
          }                                                                                                           // 768
        });                                                                                                           // 769
      }                                                                                                               // 770
                                                                                                                      // 771
      $modal.find(".modal-close").on('click.close', function(e) {                                                     // 772
        $modal.closeModal(options);                                                                                   // 773
      });                                                                                                             // 774
                                                                                                                      // 775
      $overlay.css({ display : "block", opacity : 0 });                                                               // 776
                                                                                                                      // 777
      $modal.css({                                                                                                    // 778
        display : "block",                                                                                            // 779
        opacity: 0                                                                                                    // 780
      });                                                                                                             // 781
                                                                                                                      // 782
      $overlay.velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});
      $modal.data('associated-overlay', $overlay[0]);                                                                 // 784
                                                                                                                      // 785
      // Define Bottom Sheet animation                                                                                // 786
      if ($modal.hasClass('bottom-sheet')) {                                                                          // 787
        $modal.velocity({bottom: "0", opacity: 1}, {                                                                  // 788
          duration: options.in_duration,                                                                              // 789
          queue: false,                                                                                               // 790
          ease: "easeOutCubic",                                                                                       // 791
          // Handle modal ready callback                                                                              // 792
          complete: function() {                                                                                      // 793
            if (typeof(options.ready) === "function") {                                                               // 794
              options.ready();                                                                                        // 795
            }                                                                                                         // 796
          }                                                                                                           // 797
        });                                                                                                           // 798
      }                                                                                                               // 799
      else {                                                                                                          // 800
        $.Velocity.hook($modal, "scaleX", 0.7);                                                                       // 801
        $modal.css({ top: options.starting_top });                                                                    // 802
        $modal.velocity({top: options.ending_top, opacity: 1, scaleX: '1'}, {                                         // 803
          duration: options.in_duration,                                                                              // 804
          queue: false,                                                                                               // 805
          ease: "easeOutCubic",                                                                                       // 806
          // Handle modal ready callback                                                                              // 807
          complete: function() {                                                                                      // 808
            if (typeof(options.ready) === "function") {                                                               // 809
              options.ready();                                                                                        // 810
            }                                                                                                         // 811
          }                                                                                                           // 812
        });                                                                                                           // 813
      }                                                                                                               // 814
                                                                                                                      // 815
                                                                                                                      // 816
    }                                                                                                                 // 817
  });                                                                                                                 // 818
                                                                                                                      // 819
  $.fn.extend({                                                                                                       // 820
    closeModal: function(options) {                                                                                   // 821
      var defaults = {                                                                                                // 822
        out_duration: 250,                                                                                            // 823
        complete: undefined                                                                                           // 824
      };                                                                                                              // 825
      var $modal = $(this);                                                                                           // 826
      var overlayID = $modal.data('overlay-id');                                                                      // 827
      var $overlay = $('#' + overlayID);                                                                              // 828
      $modal.removeClass('open');                                                                                     // 829
                                                                                                                      // 830
      options = $.extend(defaults, options);                                                                          // 831
                                                                                                                      // 832
      // Enable scrolling                                                                                             // 833
      $('body').css({                                                                                                 // 834
        overflow: '',                                                                                                 // 835
        width: ''                                                                                                     // 836
      });                                                                                                             // 837
                                                                                                                      // 838
      $modal.find('.modal-close').off('click.close');                                                                 // 839
      $(document).off('keyup.leanModal' + overlayID);                                                                 // 840
                                                                                                                      // 841
      $overlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});        // 842
                                                                                                                      // 843
                                                                                                                      // 844
      // Define Bottom Sheet animation                                                                                // 845
      if ($modal.hasClass('bottom-sheet')) {                                                                          // 846
        $modal.velocity({bottom: "-100%", opacity: 0}, {                                                              // 847
          duration: options.out_duration,                                                                             // 848
          queue: false,                                                                                               // 849
          ease: "easeOutCubic",                                                                                       // 850
          // Handle modal ready callback                                                                              // 851
          complete: function() {                                                                                      // 852
            $overlay.css({display:"none"});                                                                           // 853
                                                                                                                      // 854
            // Call complete callback                                                                                 // 855
            if (typeof(options.complete) === "function") {                                                            // 856
              options.complete();                                                                                     // 857
            }                                                                                                         // 858
            $overlay.remove();                                                                                        // 859
            _stack--;                                                                                                 // 860
          }                                                                                                           // 861
        });                                                                                                           // 862
      }                                                                                                               // 863
      else {                                                                                                          // 864
        $modal.velocity(                                                                                              // 865
          { top: options.starting_top, opacity: 0, scaleX: 0.7}, {                                                    // 866
          duration: options.out_duration,                                                                             // 867
          complete:                                                                                                   // 868
            function() {                                                                                              // 869
                                                                                                                      // 870
              $(this).css('display', 'none');                                                                         // 871
              // Call complete callback                                                                               // 872
              if (typeof(options.complete) === "function") {                                                          // 873
                options.complete();                                                                                   // 874
              }                                                                                                       // 875
              $overlay.remove();                                                                                      // 876
              _stack--;                                                                                               // 877
            }                                                                                                         // 878
          }                                                                                                           // 879
        );                                                                                                            // 880
      }                                                                                                               // 881
    }                                                                                                                 // 882
  });                                                                                                                 // 883
                                                                                                                      // 884
  $.fn.extend({                                                                                                       // 885
    leanModal: function(option) {                                                                                     // 886
      return this.each(function() {                                                                                   // 887
                                                                                                                      // 888
        var defaults = {                                                                                              // 889
          starting_top: '4%'                                                                                          // 890
        },                                                                                                            // 891
        // Override defaults                                                                                          // 892
        options = $.extend(defaults, option);                                                                         // 893
                                                                                                                      // 894
        // Close Handlers                                                                                             // 895
        $(this).click(function(e) {                                                                                   // 896
          options.starting_top = ($(this).offset().top - $(window).scrollTop()) /1.15;                                // 897
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');                                        // 898
          $(modal_id).openModal(options);                                                                             // 899
          e.preventDefault();                                                                                         // 900
        }); // done set on click                                                                                      // 901
      }); // done return                                                                                              // 902
    }                                                                                                                 // 903
  });                                                                                                                 // 904
})(jQuery);                                                                                                           // 905
;(function ($) {                                                                                                      // 906
                                                                                                                      // 907
  $.fn.materialbox = function () {                                                                                    // 908
                                                                                                                      // 909
    return this.each(function() {                                                                                     // 910
                                                                                                                      // 911
      if ($(this).hasClass('initialized')) {                                                                          // 912
        return;                                                                                                       // 913
      }                                                                                                               // 914
                                                                                                                      // 915
      $(this).addClass('initialized');                                                                                // 916
                                                                                                                      // 917
      var overlayActive = false;                                                                                      // 918
      var doneAnimating = true;                                                                                       // 919
      var inDuration = 275;                                                                                           // 920
      var outDuration = 200;                                                                                          // 921
      var origin = $(this);                                                                                           // 922
      var placeholder = $('<div></div>').addClass('material-placeholder');                                            // 923
      var originalWidth = 0;                                                                                          // 924
      var originalHeight = 0;                                                                                         // 925
      var ancestorsChanged;                                                                                           // 926
      var ancestor;                                                                                                   // 927
      origin.wrap(placeholder);                                                                                       // 928
                                                                                                                      // 929
                                                                                                                      // 930
      origin.on('click', function(){                                                                                  // 931
        var placeholder = origin.parent('.material-placeholder');                                                     // 932
        var windowWidth = window.innerWidth;                                                                          // 933
        var windowHeight = window.innerHeight;                                                                        // 934
        var originalWidth = origin.width();                                                                           // 935
        var originalHeight = origin.height();                                                                         // 936
                                                                                                                      // 937
                                                                                                                      // 938
        // If already modal, return to original                                                                       // 939
        if (doneAnimating === false) {                                                                                // 940
          returnToOriginal();                                                                                         // 941
          return false;                                                                                               // 942
        }                                                                                                             // 943
        else if (overlayActive && doneAnimating===true) {                                                             // 944
          returnToOriginal();                                                                                         // 945
          return false;                                                                                               // 946
        }                                                                                                             // 947
                                                                                                                      // 948
                                                                                                                      // 949
        // Set states                                                                                                 // 950
        doneAnimating = false;                                                                                        // 951
        origin.addClass('active');                                                                                    // 952
        overlayActive = true;                                                                                         // 953
                                                                                                                      // 954
        // Set positioning for placeholder                                                                            // 955
        placeholder.css({                                                                                             // 956
          width: placeholder[0].getBoundingClientRect().width,                                                        // 957
          height: placeholder[0].getBoundingClientRect().height,                                                      // 958
          position: 'relative',                                                                                       // 959
          top: 0,                                                                                                     // 960
          left: 0                                                                                                     // 961
        });                                                                                                           // 962
                                                                                                                      // 963
        // Find ancestor with overflow: hidden; and remove it                                                         // 964
        ancestorsChanged = undefined;                                                                                 // 965
        ancestor = placeholder[0].parentNode;                                                                         // 966
        var count = 0;                                                                                                // 967
        while (ancestor !== null && !$(ancestor).is(document)) {                                                      // 968
          var curr = $(ancestor);                                                                                     // 969
          if (curr.css('overflow') !== 'visible') {                                                                   // 970
            curr.css('overflow', 'visible');                                                                          // 971
            if (ancestorsChanged === undefined) {                                                                     // 972
              ancestorsChanged = curr;                                                                                // 973
            }                                                                                                         // 974
            else {                                                                                                    // 975
              ancestorsChanged = ancestorsChanged.add(curr);                                                          // 976
            }                                                                                                         // 977
          }                                                                                                           // 978
          ancestor = ancestor.parentNode;                                                                             // 979
        }                                                                                                             // 980
                                                                                                                      // 981
        // Set css on origin                                                                                          // 982
        origin.css({position: 'absolute', 'z-index': 1000})                                                           // 983
        .data('width', originalWidth)                                                                                 // 984
        .data('height', originalHeight);                                                                              // 985
                                                                                                                      // 986
        // Add overlay                                                                                                // 987
        var overlay = $('<div id="materialbox-overlay"></div>')                                                       // 988
          .css({                                                                                                      // 989
            opacity: 0                                                                                                // 990
          })                                                                                                          // 991
          .click(function(){                                                                                          // 992
            if (doneAnimating === true)                                                                               // 993
            returnToOriginal();                                                                                       // 994
          });                                                                                                         // 995
          // Animate Overlay                                                                                          // 996
          // Put before in origin image to preserve z-index layering.                                                 // 997
          origin.before(overlay);                                                                                     // 998
          overlay.velocity({opacity: 1},                                                                              // 999
                           {duration: inDuration, queue: false, easing: 'easeOutQuad'} );                             // 1000
                                                                                                                      // 1001
        // Add and animate caption if it exists                                                                       // 1002
        if (origin.data('caption') !== "") {                                                                          // 1003
          var $photo_caption = $('<div class="materialbox-caption"></div>');                                          // 1004
          $photo_caption.text(origin.data('caption'));                                                                // 1005
          $('body').append($photo_caption);                                                                           // 1006
          $photo_caption.css({ "display": "inline" });                                                                // 1007
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});         // 1008
        }                                                                                                             // 1009
                                                                                                                      // 1010
        // Resize Image                                                                                               // 1011
        var ratio = 0;                                                                                                // 1012
        var widthPercent = originalWidth / windowWidth;                                                               // 1013
        var heightPercent = originalHeight / windowHeight;                                                            // 1014
        var newWidth = 0;                                                                                             // 1015
        var newHeight = 0;                                                                                            // 1016
                                                                                                                      // 1017
        if (widthPercent > heightPercent) {                                                                           // 1018
          ratio = originalHeight / originalWidth;                                                                     // 1019
          newWidth = windowWidth * 0.9;                                                                               // 1020
          newHeight = windowWidth * 0.9 * ratio;                                                                      // 1021
        }                                                                                                             // 1022
        else {                                                                                                        // 1023
          ratio = originalWidth / originalHeight;                                                                     // 1024
          newWidth = (windowHeight * 0.9) * ratio;                                                                    // 1025
          newHeight = windowHeight * 0.9;                                                                             // 1026
        }                                                                                                             // 1027
                                                                                                                      // 1028
        // Animate image + set z-index                                                                                // 1029
        if(origin.hasClass('responsive-img')) {                                                                       // 1030
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,                // 1031
            complete: function(){                                                                                     // 1032
              origin.css({left: 0, top: 0})                                                                           // 1033
              .velocity(                                                                                              // 1034
                {                                                                                                     // 1035
                  height: newHeight,                                                                                  // 1036
                  width: newWidth,                                                                                    // 1037
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },                                                                                                    // 1040
                {                                                                                                     // 1041
                  duration: inDuration,                                                                               // 1042
                  queue: false,                                                                                       // 1043
                  easing: 'easeOutQuad',                                                                              // 1044
                  complete: function(){doneAnimating = true;}                                                         // 1045
                }                                                                                                     // 1046
              );                                                                                                      // 1047
            } // End Complete                                                                                         // 1048
          }); // End Velocity                                                                                         // 1049
        }                                                                                                             // 1050
        else {                                                                                                        // 1051
          origin.css('left', 0)                                                                                       // 1052
          .css('top', 0)                                                                                              // 1053
          .velocity(                                                                                                  // 1054
            {                                                                                                         // 1055
              height: newHeight,                                                                                      // 1056
              width: newWidth,                                                                                        // 1057
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },                                                                                                        // 1060
            {                                                                                                         // 1061
              duration: inDuration,                                                                                   // 1062
              queue: false,                                                                                           // 1063
              easing: 'easeOutQuad',                                                                                  // 1064
              complete: function(){doneAnimating = true;}                                                             // 1065
            }                                                                                                         // 1066
            ); // End Velocity                                                                                        // 1067
        }                                                                                                             // 1068
                                                                                                                      // 1069
    }); // End origin on click                                                                                        // 1070
                                                                                                                      // 1071
                                                                                                                      // 1072
      // Return on scroll                                                                                             // 1073
      $(window).scroll(function() {                                                                                   // 1074
        if (overlayActive) {                                                                                          // 1075
          returnToOriginal();                                                                                         // 1076
        }                                                                                                             // 1077
      });                                                                                                             // 1078
                                                                                                                      // 1079
      // Return on ESC                                                                                                // 1080
      $(document).keyup(function(e) {                                                                                 // 1081
                                                                                                                      // 1082
        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key                                                // 1083
          if (overlayActive) {                                                                                        // 1084
            returnToOriginal();                                                                                       // 1085
          }                                                                                                           // 1086
        }                                                                                                             // 1087
      });                                                                                                             // 1088
                                                                                                                      // 1089
                                                                                                                      // 1090
      // This function returns the modaled image to the original spot                                                 // 1091
      function returnToOriginal() {                                                                                   // 1092
                                                                                                                      // 1093
          doneAnimating = false;                                                                                      // 1094
                                                                                                                      // 1095
          var placeholder = origin.parent('.material-placeholder');                                                   // 1096
          var windowWidth = window.innerWidth;                                                                        // 1097
          var windowHeight = window.innerHeight;                                                                      // 1098
          var originalWidth = origin.data('width');                                                                   // 1099
          var originalHeight = origin.data('height');                                                                 // 1100
                                                                                                                      // 1101
          origin.velocity("stop", true);                                                                              // 1102
          $('#materialbox-overlay').velocity("stop", true);                                                           // 1103
          $('.materialbox-caption').velocity("stop", true);                                                           // 1104
                                                                                                                      // 1105
                                                                                                                      // 1106
          $('#materialbox-overlay').velocity({opacity: 0}, {                                                          // 1107
            duration: outDuration, // Delay prevents animation overlapping                                            // 1108
            queue: false, easing: 'easeOutQuad',                                                                      // 1109
            complete: function(){                                                                                     // 1110
              // Remove Overlay                                                                                       // 1111
              overlayActive = false;                                                                                  // 1112
              $(this).remove();                                                                                       // 1113
            }                                                                                                         // 1114
          });                                                                                                         // 1115
                                                                                                                      // 1116
          // Resize Image                                                                                             // 1117
          origin.velocity(                                                                                            // 1118
            {                                                                                                         // 1119
              width: originalWidth,                                                                                   // 1120
              height: originalHeight,                                                                                 // 1121
              left: 0,                                                                                                // 1122
              top: 0                                                                                                  // 1123
            },                                                                                                        // 1124
            {                                                                                                         // 1125
              duration: outDuration,                                                                                  // 1126
              queue: false, easing: 'easeOutQuad'                                                                     // 1127
            }                                                                                                         // 1128
          );                                                                                                          // 1129
                                                                                                                      // 1130
          // Remove Caption + reset css settings on image                                                             // 1131
          $('.materialbox-caption').velocity({opacity: 0}, {                                                          // 1132
            duration: outDuration, // Delay prevents animation overlapping                                            // 1133
            queue: false, easing: 'easeOutQuad',                                                                      // 1134
            complete: function(){                                                                                     // 1135
              placeholder.css({                                                                                       // 1136
                height: '',                                                                                           // 1137
                width: '',                                                                                            // 1138
                position: '',                                                                                         // 1139
                top: '',                                                                                              // 1140
                left: ''                                                                                              // 1141
              });                                                                                                     // 1142
                                                                                                                      // 1143
              origin.css({                                                                                            // 1144
                height: '',                                                                                           // 1145
                top: '',                                                                                              // 1146
                left: '',                                                                                             // 1147
                width: '',                                                                                            // 1148
                'max-width': '',                                                                                      // 1149
                position: '',                                                                                         // 1150
                'z-index': ''                                                                                         // 1151
              });                                                                                                     // 1152
                                                                                                                      // 1153
              // Remove class                                                                                         // 1154
              origin.removeClass('active');                                                                           // 1155
              doneAnimating = true;                                                                                   // 1156
              $(this).remove();                                                                                       // 1157
                                                                                                                      // 1158
              // Remove overflow overrides on ancestors                                                               // 1159
              if (ancestorsChanged) {                                                                                 // 1160
                ancestorsChanged.css('overflow', '');                                                                 // 1161
              }                                                                                                       // 1162
            }                                                                                                         // 1163
          });                                                                                                         // 1164
                                                                                                                      // 1165
        }                                                                                                             // 1166
        });                                                                                                           // 1167
};                                                                                                                    // 1168
                                                                                                                      // 1169
$(document).ready(function(){                                                                                         // 1170
  $('.materialboxed').materialbox();                                                                                  // 1171
});                                                                                                                   // 1172
                                                                                                                      // 1173
}( jQuery ));                                                                                                         // 1174
;(function ($) {                                                                                                      // 1175
                                                                                                                      // 1176
    $.fn.parallax = function () {                                                                                     // 1177
      var window_width = $(window).width();                                                                           // 1178
      // Parallax Scripts                                                                                             // 1179
      return this.each(function(i) {                                                                                  // 1180
        var $this = $(this);                                                                                          // 1181
        $this.addClass('parallax');                                                                                   // 1182
                                                                                                                      // 1183
        function updateParallax(initial) {                                                                            // 1184
          var container_height;                                                                                       // 1185
          if (window_width < 601) {                                                                                   // 1186
            container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();                // 1187
          }                                                                                                           // 1188
          else {                                                                                                      // 1189
            container_height = ($this.height() > 0) ? $this.height() : 500;                                           // 1190
          }                                                                                                           // 1191
          var $img = $this.children("img").first();                                                                   // 1192
          var img_height = $img.height();                                                                             // 1193
          var parallax_dist = img_height - container_height;                                                          // 1194
          var bottom = $this.offset().top + container_height;                                                         // 1195
          var top = $this.offset().top;                                                                               // 1196
          var scrollTop = $(window).scrollTop();                                                                      // 1197
          var windowHeight = window.innerHeight;                                                                      // 1198
          var windowBottom = scrollTop + windowHeight;                                                                // 1199
          var percentScrolled = (windowBottom - top) / (container_height + windowHeight);                             // 1200
          var parallax = Math.round((parallax_dist * percentScrolled));                                               // 1201
                                                                                                                      // 1202
          if (initial) {                                                                                              // 1203
            $img.css('display', 'block');                                                                             // 1204
          }                                                                                                           // 1205
          if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {                                           // 1206
            $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");                                         // 1207
          }                                                                                                           // 1208
                                                                                                                      // 1209
        }                                                                                                             // 1210
                                                                                                                      // 1211
        // Wait for image load                                                                                        // 1212
        $this.children("img").one("load", function() {                                                                // 1213
          updateParallax(true);                                                                                       // 1214
        }).each(function() {                                                                                          // 1215
          if(this.complete) $(this).load();                                                                           // 1216
        });                                                                                                           // 1217
                                                                                                                      // 1218
        $(window).scroll(function() {                                                                                 // 1219
          window_width = $(window).width();                                                                           // 1220
          updateParallax(false);                                                                                      // 1221
        });                                                                                                           // 1222
                                                                                                                      // 1223
        $(window).resize(function() {                                                                                 // 1224
          window_width = $(window).width();                                                                           // 1225
          updateParallax(false);                                                                                      // 1226
        });                                                                                                           // 1227
                                                                                                                      // 1228
      });                                                                                                             // 1229
                                                                                                                      // 1230
    };                                                                                                                // 1231
}( jQuery ));;(function ($) {                                                                                         // 1232
                                                                                                                      // 1233
  var methods = {                                                                                                     // 1234
    init : function(options) {                                                                                        // 1235
      var defaults = {                                                                                                // 1236
        onShow: null                                                                                                  // 1237
      };                                                                                                              // 1238
      options = $.extend(defaults, options);                                                                          // 1239
                                                                                                                      // 1240
      return this.each(function() {                                                                                   // 1241
                                                                                                                      // 1242
      // For each set of tabs, we want to keep track of                                                               // 1243
      // which tab is active and its associated content                                                               // 1244
      var $this = $(this),                                                                                            // 1245
          window_width = $(window).width();                                                                           // 1246
                                                                                                                      // 1247
      $this.width('100%');                                                                                            // 1248
      var $active, $content, $links = $this.find('li.tab a'),                                                         // 1249
          $tabs_width = $this.width(),                                                                                // 1250
          $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,                                   // 1251
          $index = 0;                                                                                                 // 1252
                                                                                                                      // 1253
      // If the location.hash matches one of the links, use that as the active tab.                                   // 1254
      $active = $($links.filter('[href="'+location.hash+'"]'));                                                       // 1255
                                                                                                                      // 1256
      // If no match is found, use the first link or any with class 'active' as the initial active tab.               // 1257
      if ($active.length === 0) {                                                                                     // 1258
        $active = $(this).find('li.tab a.active').first();                                                            // 1259
      }                                                                                                               // 1260
      if ($active.length === 0) {                                                                                     // 1261
        $active = $(this).find('li.tab a').first();                                                                   // 1262
      }                                                                                                               // 1263
                                                                                                                      // 1264
      $active.addClass('active');                                                                                     // 1265
      $index = $links.index($active);                                                                                 // 1266
      if ($index < 0) {                                                                                               // 1267
        $index = 0;                                                                                                   // 1268
      }                                                                                                               // 1269
                                                                                                                      // 1270
      if ($active[0] !== undefined) {                                                                                 // 1271
        $content = $($active[0].hash);                                                                                // 1272
      }                                                                                                               // 1273
                                                                                                                      // 1274
      // append indicator then set indicator width to tab width                                                       // 1275
      $this.append('<div class="indicator"></div>');                                                                  // 1276
      var $indicator = $this.find('.indicator');                                                                      // 1277
      if ($this.is(":visible")) {                                                                                     // 1278
        $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});                                         // 1279
        $indicator.css({"left": $index * $tab_width});                                                                // 1280
      }                                                                                                               // 1281
      $(window).resize(function () {                                                                                  // 1282
        $tabs_width = $this.width();                                                                                  // 1283
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;                                     // 1284
        if ($index < 0) {                                                                                             // 1285
          $index = 0;                                                                                                 // 1286
        }                                                                                                             // 1287
        if ($tab_width !== 0 && $tabs_width !== 0) {                                                                  // 1288
          $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});                                       // 1289
          $indicator.css({"left": $index * $tab_width});                                                              // 1290
        }                                                                                                             // 1291
      });                                                                                                             // 1292
                                                                                                                      // 1293
      // Hide the remaining content                                                                                   // 1294
      $links.not($active).each(function () {                                                                          // 1295
        $(this.hash).hide();                                                                                          // 1296
      });                                                                                                             // 1297
                                                                                                                      // 1298
                                                                                                                      // 1299
      // Bind the click event handler                                                                                 // 1300
      $this.on('click', 'a', function(e) {                                                                            // 1301
        if ($(this).parent().hasClass('disabled')) {                                                                  // 1302
          e.preventDefault();                                                                                         // 1303
          return;                                                                                                     // 1304
        }                                                                                                             // 1305
                                                                                                                      // 1306
        // Act as regular link if target attribute is specified.                                                      // 1307
        if (!!$(this).attr("target")) {                                                                               // 1308
          return;                                                                                                     // 1309
        }                                                                                                             // 1310
                                                                                                                      // 1311
        $tabs_width = $this.width();                                                                                  // 1312
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;                                     // 1313
                                                                                                                      // 1314
        // Make the old tab inactive.                                                                                 // 1315
        $active.removeClass('active');                                                                                // 1316
        if ($content !== undefined) {                                                                                 // 1317
          $content.hide();                                                                                            // 1318
        }                                                                                                             // 1319
                                                                                                                      // 1320
        // Update the variables with the new link and content                                                         // 1321
        $active = $(this);                                                                                            // 1322
        $content = $(this.hash);                                                                                      // 1323
        $links = $this.find('li.tab a');                                                                              // 1324
                                                                                                                      // 1325
        // Make the tab active.                                                                                       // 1326
        $active.addClass('active');                                                                                   // 1327
        var $prev_index = $index;                                                                                     // 1328
        $index = $links.index($(this));                                                                               // 1329
        if ($index < 0) {                                                                                             // 1330
          $index = 0;                                                                                                 // 1331
        }                                                                                                             // 1332
        // Change url to current tab                                                                                  // 1333
        // window.location.hash = $active.attr('href');                                                               // 1334
                                                                                                                      // 1335
        if ($content !== undefined) {                                                                                 // 1336
          $content.show();                                                                                            // 1337
          if (typeof(options.onShow) === "function") {                                                                // 1338
            options.onShow.call(this, $content);                                                                      // 1339
          }                                                                                                           // 1340
        }                                                                                                             // 1341
                                                                                                                      // 1342
        // Update indicator                                                                                           // 1343
        if (($index - $prev_index) >= 0) {                                                                            // 1344
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
                                                                                                                      // 1347
        }                                                                                                             // 1348
        else {                                                                                                        // 1349
          $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});  // 1350
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
        }                                                                                                             // 1352
                                                                                                                      // 1353
        // Prevent the anchor's default click action                                                                  // 1354
        e.preventDefault();                                                                                           // 1355
      });                                                                                                             // 1356
    });                                                                                                               // 1357
                                                                                                                      // 1358
    },                                                                                                                // 1359
    select_tab : function( id ) {                                                                                     // 1360
      this.find('a[href="#' + id + '"]').trigger('click');                                                            // 1361
    }                                                                                                                 // 1362
  };                                                                                                                  // 1363
                                                                                                                      // 1364
  $.fn.tabs = function(methodOrOptions) {                                                                             // 1365
    if ( methods[methodOrOptions] ) {                                                                                 // 1366
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                     // 1367
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                          // 1368
      // Default to "init"                                                                                            // 1369
      return methods.init.apply( this, arguments );                                                                   // 1370
    } else {                                                                                                          // 1371
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );                                  // 1372
    }                                                                                                                 // 1373
  };                                                                                                                  // 1374
                                                                                                                      // 1375
  $(document).ready(function(){                                                                                       // 1376
    $('ul.tabs').tabs();                                                                                              // 1377
  });                                                                                                                 // 1378
}( jQuery ));                                                                                                         // 1379
;(function ($) {                                                                                                      // 1380
    $.fn.tooltip = function (options) {                                                                               // 1381
      var timeout = null,                                                                                             // 1382
      margin = 5;                                                                                                     // 1383
                                                                                                                      // 1384
      // Defaults                                                                                                     // 1385
      var defaults = {                                                                                                // 1386
        delay: 350,                                                                                                   // 1387
        tooltip: '',                                                                                                  // 1388
        position: 'bottom',                                                                                           // 1389
        html: false                                                                                                   // 1390
      };                                                                                                              // 1391
                                                                                                                      // 1392
      // Remove tooltip from the activator                                                                            // 1393
      if (options === "remove") {                                                                                     // 1394
        this.each(function() {                                                                                        // 1395
          $('#' + $(this).attr('data-tooltip-id')).remove();                                                          // 1396
          $(this).off('mouseenter.tooltip mouseleave.tooltip');                                                       // 1397
        });                                                                                                           // 1398
        return false;                                                                                                 // 1399
      }                                                                                                               // 1400
                                                                                                                      // 1401
      options = $.extend(defaults, options);                                                                          // 1402
                                                                                                                      // 1403
      return this.each(function() {                                                                                   // 1404
        var tooltipId = Materialize.guid();                                                                           // 1405
        var origin = $(this);                                                                                         // 1406
        origin.attr('data-tooltip-id', tooltipId);                                                                    // 1407
                                                                                                                      // 1408
        // Get attributes.                                                                                            // 1409
        var allowHtml,                                                                                                // 1410
            tooltipDelay,                                                                                             // 1411
            tooltipPosition,                                                                                          // 1412
            tooltipText,                                                                                              // 1413
            tooltipEl,                                                                                                // 1414
            backdrop;                                                                                                 // 1415
        var setAttributes = function() {                                                                              // 1416
          allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;                  // 1417
          tooltipDelay = origin.attr('data-delay');                                                                   // 1418
          tooltipDelay = (tooltipDelay === undefined || tooltipDelay === '') ?                                        // 1419
              options.delay : tooltipDelay;                                                                           // 1420
          tooltipPosition = origin.attr('data-position');                                                             // 1421
          tooltipPosition = (tooltipPosition === undefined || tooltipPosition === '') ?                               // 1422
              options.position : tooltipPosition;                                                                     // 1423
          tooltipText = origin.attr('data-tooltip');                                                                  // 1424
          tooltipText = (tooltipText === undefined || tooltipText === '') ?                                           // 1425
              options.tooltip : tooltipText;                                                                          // 1426
        };                                                                                                            // 1427
        setAttributes();                                                                                              // 1428
                                                                                                                      // 1429
        var renderTooltipEl = function() {                                                                            // 1430
          var tooltip = $('<div class="material-tooltip"></div>');                                                    // 1431
                                                                                                                      // 1432
          // Create Text span                                                                                         // 1433
          if (allowHtml) {                                                                                            // 1434
            tooltipText = $('<span></span>').html(tooltipText);                                                       // 1435
          } else{                                                                                                     // 1436
            tooltipText = $('<span></span>').text(tooltipText);                                                       // 1437
          }                                                                                                           // 1438
                                                                                                                      // 1439
          // Create tooltip                                                                                           // 1440
          tooltip.append(tooltipText)                                                                                 // 1441
            .appendTo($('body'))                                                                                      // 1442
            .attr('id', tooltipId);                                                                                   // 1443
                                                                                                                      // 1444
          // Create backdrop                                                                                          // 1445
          backdrop = $('<div class="backdrop"></div>');                                                               // 1446
          backdrop.appendTo(tooltip);                                                                                 // 1447
          return tooltip;                                                                                             // 1448
        };                                                                                                            // 1449
        tooltipEl = renderTooltipEl();                                                                                // 1450
                                                                                                                      // 1451
        // Destroy previously binded events                                                                           // 1452
        origin.off('mouseenter.tooltip mouseleave.tooltip');                                                          // 1453
        // Mouse In                                                                                                   // 1454
        var started = false, timeoutRef;                                                                              // 1455
        origin.on({'mouseenter.tooltip': function(e) {                                                                // 1456
          var showTooltip = function() {                                                                              // 1457
            setAttributes();                                                                                          // 1458
            started = true;                                                                                           // 1459
            tooltipEl.velocity('stop');                                                                               // 1460
            backdrop.velocity('stop');                                                                                // 1461
            tooltipEl.css({ display: 'block', left: '0px', top: '0px' });                                             // 1462
                                                                                                                      // 1463
            // Tooltip positioning                                                                                    // 1464
            var originWidth = origin.outerWidth();                                                                    // 1465
            var originHeight = origin.outerHeight();                                                                  // 1466
                                                                                                                      // 1467
            var tooltipHeight = tooltipEl.outerHeight();                                                              // 1468
            var tooltipWidth = tooltipEl.outerWidth();                                                                // 1469
            var tooltipVerticalMovement = '0px';                                                                      // 1470
            var tooltipHorizontalMovement = '0px';                                                                    // 1471
            var scaleXFactor = 8;                                                                                     // 1472
            var scaleYFactor = 8;                                                                                     // 1473
            var targetTop, targetLeft, newCoordinates;                                                                // 1474
                                                                                                                      // 1475
            if (tooltipPosition === "top") {                                                                          // 1476
              // Top Position                                                                                         // 1477
              targetTop = origin.offset().top - tooltipHeight - margin;                                               // 1478
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;                                     // 1479
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);            // 1480
                                                                                                                      // 1481
              tooltipVerticalMovement = '-10px';                                                                      // 1482
              backdrop.css({                                                                                          // 1483
                bottom: 0,                                                                                            // 1484
                left: 0,                                                                                              // 1485
                borderRadius: '14px 14px 0 0',                                                                        // 1486
                transformOrigin: '50% 100%',                                                                          // 1487
                marginTop: tooltipHeight,                                                                             // 1488
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)                                                   // 1489
              });                                                                                                     // 1490
            }                                                                                                         // 1491
            // Left Position                                                                                          // 1492
            else if (tooltipPosition === "left") {                                                                    // 1493
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;                                     // 1494
              targetLeft =  origin.offset().left - tooltipWidth - margin;                                             // 1495
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);            // 1496
                                                                                                                      // 1497
              tooltipHorizontalMovement = '-10px';                                                                    // 1498
              backdrop.css({                                                                                          // 1499
                top: '-7px',                                                                                          // 1500
                right: 0,                                                                                             // 1501
                width: '14px',                                                                                        // 1502
                height: '14px',                                                                                       // 1503
                borderRadius: '14px 0 0 14px',                                                                        // 1504
                transformOrigin: '95% 50%',                                                                           // 1505
                marginTop: tooltipHeight/2,                                                                           // 1506
                marginLeft: tooltipWidth                                                                              // 1507
              });                                                                                                     // 1508
            }                                                                                                         // 1509
            // Right Position                                                                                         // 1510
            else if (tooltipPosition === "right") {                                                                   // 1511
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;                                     // 1512
              targetLeft = origin.offset().left + originWidth + margin;                                               // 1513
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);            // 1514
                                                                                                                      // 1515
              tooltipHorizontalMovement = '+10px';                                                                    // 1516
              backdrop.css({                                                                                          // 1517
                top: '-7px',                                                                                          // 1518
                left: 0,                                                                                              // 1519
                width: '14px',                                                                                        // 1520
                height: '14px',                                                                                       // 1521
                borderRadius: '0 14px 14px 0',                                                                        // 1522
                transformOrigin: '5% 50%',                                                                            // 1523
                marginTop: tooltipHeight/2,                                                                           // 1524
                marginLeft: '0px'                                                                                     // 1525
              });                                                                                                     // 1526
            }                                                                                                         // 1527
            else {                                                                                                    // 1528
              // Bottom Position                                                                                      // 1529
              targetTop = origin.offset().top + origin.outerHeight() + margin;                                        // 1530
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;                                     // 1531
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);            // 1532
              tooltipVerticalMovement = '+10px';                                                                      // 1533
              backdrop.css({                                                                                          // 1534
                top: 0,                                                                                               // 1535
                left: 0,                                                                                              // 1536
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)                                                   // 1537
              });                                                                                                     // 1538
            }                                                                                                         // 1539
                                                                                                                      // 1540
            // Set tooptip css placement                                                                              // 1541
            tooltipEl.css({                                                                                           // 1542
              top: newCoordinates.y,                                                                                  // 1543
              left: newCoordinates.x                                                                                  // 1544
            });                                                                                                       // 1545
                                                                                                                      // 1546
            // Calculate Scale to fill                                                                                // 1547
            scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdrop.css('width'));                               // 1548
            scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdrop.css('height'));                             // 1549
                                                                                                                      // 1550
            tooltipEl.velocity({ marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, { duration: 350, queue: false })
              .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});                                      // 1552
            backdrop.css({ display: 'block' })                                                                        // 1553
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})                                           // 1554
              .velocity({scaleX: scaleXFactor, scaleY: scaleYFactor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});
          };                                                                                                          // 1556
                                                                                                                      // 1557
          timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval                                         // 1558
                                                                                                                      // 1559
        // Mouse Out                                                                                                  // 1560
        },                                                                                                            // 1561
        'mouseleave.tooltip': function(){                                                                             // 1562
          // Reset State                                                                                              // 1563
          started = false;                                                                                            // 1564
          clearTimeout(timeoutRef);                                                                                   // 1565
                                                                                                                      // 1566
          // Animate back                                                                                             // 1567
          setTimeout(function() {                                                                                     // 1568
            if (started !== true) {                                                                                   // 1569
              tooltipEl.velocity({                                                                                    // 1570
                opacity: 0, marginTop: 0, marginLeft: 0}, { duration: 225, queue: false});                            // 1571
              backdrop.velocity({opacity: 0, scaleX: 1, scaleY: 1}, {                                                 // 1572
                duration:225,                                                                                         // 1573
                queue: false,                                                                                         // 1574
                complete: function(){                                                                                 // 1575
                  backdrop.css('display', 'none');                                                                    // 1576
                  tooltipEl.css('display', 'none');                                                                   // 1577
                  started = false;}                                                                                   // 1578
              });                                                                                                     // 1579
            }                                                                                                         // 1580
          },225);                                                                                                     // 1581
        }                                                                                                             // 1582
        });                                                                                                           // 1583
    });                                                                                                               // 1584
  };                                                                                                                  // 1585
                                                                                                                      // 1586
  var repositionWithinScreen = function(x, y, width, height) {                                                        // 1587
    var newX = x;                                                                                                     // 1588
    var newY = y;                                                                                                     // 1589
                                                                                                                      // 1590
    if (newX < 0) {                                                                                                   // 1591
      newX = 4;                                                                                                       // 1592
    } else if (newX + width > window.innerWidth) {                                                                    // 1593
      newX -= newX + width - window.innerWidth;                                                                       // 1594
    }                                                                                                                 // 1595
                                                                                                                      // 1596
    if (newY < 0) {                                                                                                   // 1597
      newY = 4;                                                                                                       // 1598
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {                                            // 1599
      newY -= newY + height - window.innerHeight;                                                                     // 1600
    }                                                                                                                 // 1601
                                                                                                                      // 1602
    return {x: newX, y: newY};                                                                                        // 1603
  };                                                                                                                  // 1604
                                                                                                                      // 1605
  $(document).ready(function(){                                                                                       // 1606
     $('.tooltipped').tooltip();                                                                                      // 1607
   });                                                                                                                // 1608
}( jQuery ));                                                                                                         // 1609
;/*!                                                                                                                  // 1610
 * Waves v0.6.4                                                                                                       // 1611
 * http://fian.my.id/Waves                                                                                            // 1612
 *                                                                                                                    // 1613
 * Copyright 2014 Alfiana E. Sibuea and other contributors                                                            // 1614
 * Released under the MIT license                                                                                     // 1615
 * https://github.com/fians/Waves/blob/master/LICENSE                                                                 // 1616
 */                                                                                                                   // 1617
                                                                                                                      // 1618
;(function(window) {                                                                                                  // 1619
    'use strict';                                                                                                     // 1620
                                                                                                                      // 1621
    var Waves = Waves || {};                                                                                          // 1622
    var $$ = document.querySelectorAll.bind(document);                                                                // 1623
                                                                                                                      // 1624
    // Find exact position of element                                                                                 // 1625
    function isWindow(obj) {                                                                                          // 1626
        return obj !== null && obj === obj.window;                                                                    // 1627
    }                                                                                                                 // 1628
                                                                                                                      // 1629
    function getWindow(elem) {                                                                                        // 1630
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;                                       // 1631
    }                                                                                                                 // 1632
                                                                                                                      // 1633
    function offset(elem) {                                                                                           // 1634
        var docElem, win,                                                                                             // 1635
            box = {top: 0, left: 0},                                                                                  // 1636
            doc = elem && elem.ownerDocument;                                                                         // 1637
                                                                                                                      // 1638
        docElem = doc.documentElement;                                                                                // 1639
                                                                                                                      // 1640
        if (typeof elem.getBoundingClientRect !== typeof undefined) {                                                 // 1641
            box = elem.getBoundingClientRect();                                                                       // 1642
        }                                                                                                             // 1643
        win = getWindow(doc);                                                                                         // 1644
        return {                                                                                                      // 1645
            top: box.top + win.pageYOffset - docElem.clientTop,                                                       // 1646
            left: box.left + win.pageXOffset - docElem.clientLeft                                                     // 1647
        };                                                                                                            // 1648
    }                                                                                                                 // 1649
                                                                                                                      // 1650
    function convertStyle(obj) {                                                                                      // 1651
        var style = '';                                                                                               // 1652
                                                                                                                      // 1653
        for (var a in obj) {                                                                                          // 1654
            if (obj.hasOwnProperty(a)) {                                                                              // 1655
                style += (a + ':' + obj[a] + ';');                                                                    // 1656
            }                                                                                                         // 1657
        }                                                                                                             // 1658
                                                                                                                      // 1659
        return style;                                                                                                 // 1660
    }                                                                                                                 // 1661
                                                                                                                      // 1662
    var Effect = {                                                                                                    // 1663
                                                                                                                      // 1664
        // Effect delay                                                                                               // 1665
        duration: 750,                                                                                                // 1666
                                                                                                                      // 1667
        show: function(e, element) {                                                                                  // 1668
                                                                                                                      // 1669
            // Disable right click                                                                                    // 1670
            if (e.button === 2) {                                                                                     // 1671
                return false;                                                                                         // 1672
            }                                                                                                         // 1673
                                                                                                                      // 1674
            var el = element || this;                                                                                 // 1675
                                                                                                                      // 1676
            // Create ripple                                                                                          // 1677
            var ripple = document.createElement('div');                                                               // 1678
            ripple.className = 'waves-ripple';                                                                        // 1679
            el.appendChild(ripple);                                                                                   // 1680
                                                                                                                      // 1681
            // Get click coordinate and element witdh                                                                 // 1682
            var pos         = offset(el);                                                                             // 1683
            var relativeY   = (e.pageY - pos.top);                                                                    // 1684
            var relativeX   = (e.pageX - pos.left);                                                                   // 1685
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';                                             // 1686
                                                                                                                      // 1687
            // Support for touch devices                                                                              // 1688
            if ('touches' in e) {                                                                                     // 1689
              relativeY   = (e.touches[0].pageY - pos.top);                                                           // 1690
              relativeX   = (e.touches[0].pageX - pos.left);                                                          // 1691
            }                                                                                                         // 1692
                                                                                                                      // 1693
            // Attach data to element                                                                                 // 1694
            ripple.setAttribute('data-hold', Date.now());                                                             // 1695
            ripple.setAttribute('data-scale', scale);                                                                 // 1696
            ripple.setAttribute('data-x', relativeX);                                                                 // 1697
            ripple.setAttribute('data-y', relativeY);                                                                 // 1698
                                                                                                                      // 1699
            // Set ripple position                                                                                    // 1700
            var rippleStyle = {                                                                                       // 1701
                'top': relativeY+'px',                                                                                // 1702
                'left': relativeX+'px'                                                                                // 1703
            };                                                                                                        // 1704
                                                                                                                      // 1705
            ripple.className = ripple.className + ' waves-notransition';                                              // 1706
            ripple.setAttribute('style', convertStyle(rippleStyle));                                                  // 1707
            ripple.className = ripple.className.replace('waves-notransition', '');                                    // 1708
                                                                                                                      // 1709
            // Scale the ripple                                                                                       // 1710
            rippleStyle['-webkit-transform'] = scale;                                                                 // 1711
            rippleStyle['-moz-transform'] = scale;                                                                    // 1712
            rippleStyle['-ms-transform'] = scale;                                                                     // 1713
            rippleStyle['-o-transform'] = scale;                                                                      // 1714
            rippleStyle.transform = scale;                                                                            // 1715
            rippleStyle.opacity   = '1';                                                                              // 1716
                                                                                                                      // 1717
            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';                                      // 1718
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';                                      // 1719
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';                                      // 1720
            rippleStyle['transition-duration']         = Effect.duration + 'ms';                                      // 1721
                                                                                                                      // 1722
            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';           // 1723
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';           // 1724
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';           // 1725
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';           // 1726
                                                                                                                      // 1727
            ripple.setAttribute('style', convertStyle(rippleStyle));                                                  // 1728
        },                                                                                                            // 1729
                                                                                                                      // 1730
        hide: function(e) {                                                                                           // 1731
            TouchHandler.touchup(e);                                                                                  // 1732
                                                                                                                      // 1733
            var el = this;                                                                                            // 1734
            var width = el.clientWidth * 1.4;                                                                         // 1735
                                                                                                                      // 1736
            // Get first ripple                                                                                       // 1737
            var ripple = null;                                                                                        // 1738
            var ripples = el.getElementsByClassName('waves-ripple');                                                  // 1739
            if (ripples.length > 0) {                                                                                 // 1740
                ripple = ripples[ripples.length - 1];                                                                 // 1741
            } else {                                                                                                  // 1742
                return false;                                                                                         // 1743
            }                                                                                                         // 1744
                                                                                                                      // 1745
            var relativeX   = ripple.getAttribute('data-x');                                                          // 1746
            var relativeY   = ripple.getAttribute('data-y');                                                          // 1747
            var scale       = ripple.getAttribute('data-scale');                                                      // 1748
                                                                                                                      // 1749
            // Get delay beetween mousedown and mouse leave                                                           // 1750
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));                                         // 1751
            var delay = 350 - diff;                                                                                   // 1752
                                                                                                                      // 1753
            if (delay < 0) {                                                                                          // 1754
                delay = 0;                                                                                            // 1755
            }                                                                                                         // 1756
                                                                                                                      // 1757
            // Fade out ripple after delay                                                                            // 1758
            setTimeout(function() {                                                                                   // 1759
                var style = {                                                                                         // 1760
                    'top': relativeY+'px',                                                                            // 1761
                    'left': relativeX+'px',                                                                           // 1762
                    'opacity': '0',                                                                                   // 1763
                                                                                                                      // 1764
                    // Duration                                                                                       // 1765
                    '-webkit-transition-duration': Effect.duration + 'ms',                                            // 1766
                    '-moz-transition-duration': Effect.duration + 'ms',                                               // 1767
                    '-o-transition-duration': Effect.duration + 'ms',                                                 // 1768
                    'transition-duration': Effect.duration + 'ms',                                                    // 1769
                    '-webkit-transform': scale,                                                                       // 1770
                    '-moz-transform': scale,                                                                          // 1771
                    '-ms-transform': scale,                                                                           // 1772
                    '-o-transform': scale,                                                                            // 1773
                    'transform': scale,                                                                               // 1774
                };                                                                                                    // 1775
                                                                                                                      // 1776
                ripple.setAttribute('style', convertStyle(style));                                                    // 1777
                                                                                                                      // 1778
                setTimeout(function() {                                                                               // 1779
                    try {                                                                                             // 1780
                        el.removeChild(ripple);                                                                       // 1781
                    } catch(e) {                                                                                      // 1782
                        return false;                                                                                 // 1783
                    }                                                                                                 // 1784
                }, Effect.duration);                                                                                  // 1785
            }, delay);                                                                                                // 1786
        },                                                                                                            // 1787
                                                                                                                      // 1788
        // Little hack to make <input> can perform waves effect                                                       // 1789
        wrapInput: function(elements) {                                                                               // 1790
            for (var a = 0; a < elements.length; a++) {                                                               // 1791
                var el = elements[a];                                                                                 // 1792
                                                                                                                      // 1793
                if (el.tagName.toLowerCase() === 'input') {                                                           // 1794
                    var parent = el.parentNode;                                                                       // 1795
                                                                                                                      // 1796
                    // If input already have parent just pass through                                                 // 1797
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {    // 1798
                        continue;                                                                                     // 1799
                    }                                                                                                 // 1800
                                                                                                                      // 1801
                    // Put element class and style to the specified parent                                            // 1802
                    var wrapper = document.createElement('i');                                                        // 1803
                    wrapper.className = el.className + ' waves-input-wrapper';                                        // 1804
                                                                                                                      // 1805
                    var elementStyle = el.getAttribute('style');                                                      // 1806
                                                                                                                      // 1807
                    if (!elementStyle) {                                                                              // 1808
                        elementStyle = '';                                                                            // 1809
                    }                                                                                                 // 1810
                                                                                                                      // 1811
                    wrapper.setAttribute('style', elementStyle);                                                      // 1812
                                                                                                                      // 1813
                    el.className = 'waves-button-input';                                                              // 1814
                    el.removeAttribute('style');                                                                      // 1815
                                                                                                                      // 1816
                    // Put element as child                                                                           // 1817
                    parent.replaceChild(wrapper, el);                                                                 // 1818
                    wrapper.appendChild(el);                                                                          // 1819
                }                                                                                                     // 1820
            }                                                                                                         // 1821
        }                                                                                                             // 1822
    };                                                                                                                // 1823
                                                                                                                      // 1824
                                                                                                                      // 1825
    /**                                                                                                               // 1826
     * Disable mousedown event for 500ms during and after touch                                                       // 1827
     */                                                                                                               // 1828
    var TouchHandler = {                                                                                              // 1829
        /* uses an integer rather than bool so there's no issues with                                                 // 1830
         * needing to clear timeouts if another touch event occurred                                                  // 1831
         * within the 500ms. Cannot mouseup between touchstart and                                                    // 1832
         * touchend, nor in the 500ms after touchend. */                                                              // 1833
        touches: 0,                                                                                                   // 1834
        allowEvent: function(e) {                                                                                     // 1835
            var allow = true;                                                                                         // 1836
                                                                                                                      // 1837
            if (e.type === 'touchstart') {                                                                            // 1838
                TouchHandler.touches += 1; //push                                                                     // 1839
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {                                           // 1840
                setTimeout(function() {                                                                               // 1841
                    if (TouchHandler.touches > 0) {                                                                   // 1842
                        TouchHandler.touches -= 1; //pop after 500ms                                                  // 1843
                    }                                                                                                 // 1844
                }, 500);                                                                                              // 1845
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {                                          // 1846
                allow = false;                                                                                        // 1847
            }                                                                                                         // 1848
                                                                                                                      // 1849
            return allow;                                                                                             // 1850
        },                                                                                                            // 1851
        touchup: function(e) {                                                                                        // 1852
            TouchHandler.allowEvent(e);                                                                               // 1853
        }                                                                                                             // 1854
    };                                                                                                                // 1855
                                                                                                                      // 1856
                                                                                                                      // 1857
    /**                                                                                                               // 1858
     * Delegated click handler for .waves-effect element.                                                             // 1859
     * returns null when .waves-effect element not in "click tree"                                                    // 1860
     */                                                                                                               // 1861
    function getWavesEffectElement(e) {                                                                               // 1862
        if (TouchHandler.allowEvent(e) === false) {                                                                   // 1863
            return null;                                                                                              // 1864
        }                                                                                                             // 1865
                                                                                                                      // 1866
        var element = null;                                                                                           // 1867
        var target = e.target || e.srcElement;                                                                        // 1868
                                                                                                                      // 1869
        while (target.parentElement !== null) {                                                                       // 1870
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {                 // 1871
                element = target;                                                                                     // 1872
                break;                                                                                                // 1873
            } else if (target.classList.contains('waves-effect')) {                                                   // 1874
                element = target;                                                                                     // 1875
                break;                                                                                                // 1876
            }                                                                                                         // 1877
            target = target.parentElement;                                                                            // 1878
        }                                                                                                             // 1879
                                                                                                                      // 1880
        return element;                                                                                               // 1881
    }                                                                                                                 // 1882
                                                                                                                      // 1883
    /**                                                                                                               // 1884
     * Bubble the click and show effect if .waves-effect elem was found                                               // 1885
     */                                                                                                               // 1886
    function showEffect(e) {                                                                                          // 1887
        var element = getWavesEffectElement(e);                                                                       // 1888
                                                                                                                      // 1889
        if (element !== null) {                                                                                       // 1890
            Effect.show(e, element);                                                                                  // 1891
                                                                                                                      // 1892
            if ('ontouchstart' in window) {                                                                           // 1893
                element.addEventListener('touchend', Effect.hide, false);                                             // 1894
                element.addEventListener('touchcancel', Effect.hide, false);                                          // 1895
            }                                                                                                         // 1896
                                                                                                                      // 1897
            element.addEventListener('mouseup', Effect.hide, false);                                                  // 1898
            element.addEventListener('mouseleave', Effect.hide, false);                                               // 1899
        }                                                                                                             // 1900
    }                                                                                                                 // 1901
                                                                                                                      // 1902
    Waves.displayEffect = function(options) {                                                                         // 1903
        options = options || {};                                                                                      // 1904
                                                                                                                      // 1905
        if ('duration' in options) {                                                                                  // 1906
            Effect.duration = options.duration;                                                                       // 1907
        }                                                                                                             // 1908
                                                                                                                      // 1909
        //Wrap input inside <i> tag                                                                                   // 1910
        Effect.wrapInput($$('.waves-effect'));                                                                        // 1911
                                                                                                                      // 1912
        if ('ontouchstart' in window) {                                                                               // 1913
            document.body.addEventListener('touchstart', showEffect, false);                                          // 1914
        }                                                                                                             // 1915
                                                                                                                      // 1916
        document.body.addEventListener('mousedown', showEffect, false);                                               // 1917
    };                                                                                                                // 1918
                                                                                                                      // 1919
    /**                                                                                                               // 1920
     * Attach Waves to an input element (or any element which doesn't                                                 // 1921
     * bubble mouseup/mousedown events).                                                                              // 1922
     *   Intended to be used with dynamically loaded forms/inputs, or                                                 // 1923
     * where the user doesn't want a delegated click handler.                                                         // 1924
     */                                                                                                               // 1925
    Waves.attach = function(element) {                                                                                // 1926
        //FUTURE: automatically add waves classes and allow users                                                     // 1927
        // to specify them with an options param? Eg. light/classic/button                                            // 1928
        if (element.tagName.toLowerCase() === 'input') {                                                              // 1929
            Effect.wrapInput([element]);                                                                              // 1930
            element = element.parentElement;                                                                          // 1931
        }                                                                                                             // 1932
                                                                                                                      // 1933
        if ('ontouchstart' in window) {                                                                               // 1934
            element.addEventListener('touchstart', showEffect, false);                                                // 1935
        }                                                                                                             // 1936
                                                                                                                      // 1937
        element.addEventListener('mousedown', showEffect, false);                                                     // 1938
    };                                                                                                                // 1939
                                                                                                                      // 1940
    window.Waves = Waves;                                                                                             // 1941
                                                                                                                      // 1942
    document.addEventListener('DOMContentLoaded', function() {                                                        // 1943
        Waves.displayEffect();                                                                                        // 1944
    }, false);                                                                                                        // 1945
                                                                                                                      // 1946
})(window);                                                                                                           // 1947
;Materialize.toast = function (message, displayLength, className, completeCallback) {                                 // 1948
    className = className || "";                                                                                      // 1949
                                                                                                                      // 1950
    var container = document.getElementById('toast-container');                                                       // 1951
                                                                                                                      // 1952
    // Create toast container if it does not exist                                                                    // 1953
    if (container === null) {                                                                                         // 1954
        // create notification container                                                                              // 1955
        container = document.createElement('div');                                                                    // 1956
        container.id = 'toast-container';                                                                             // 1957
        document.body.appendChild(container);                                                                         // 1958
    }                                                                                                                 // 1959
                                                                                                                      // 1960
    // Select and append toast                                                                                        // 1961
    var newToast = createToast(message);                                                                              // 1962
                                                                                                                      // 1963
    // only append toast if message is not undefined                                                                  // 1964
    if(message){                                                                                                      // 1965
        container.appendChild(newToast);                                                                              // 1966
    }                                                                                                                 // 1967
                                                                                                                      // 1968
    newToast.style.top = '35px';                                                                                      // 1969
    newToast.style.opacity = 0;                                                                                       // 1970
                                                                                                                      // 1971
    // Animate toast in                                                                                               // 1972
    Vel(newToast, { "top" : "0px", opacity: 1 }, {duration: 300,                                                      // 1973
      easing: 'easeOutCubic',                                                                                         // 1974
      queue: false});                                                                                                 // 1975
                                                                                                                      // 1976
    // Allows timer to be pause while being panned                                                                    // 1977
    var timeLeft = displayLength;                                                                                     // 1978
    var counterInterval = setInterval (function(){                                                                    // 1979
                                                                                                                      // 1980
                                                                                                                      // 1981
      if (newToast.parentNode === null)                                                                               // 1982
        window.clearInterval(counterInterval);                                                                        // 1983
                                                                                                                      // 1984
      // If toast is not being dragged, decrease its time remaining                                                   // 1985
      if (!newToast.classList.contains('panning')) {                                                                  // 1986
        timeLeft -= 20;                                                                                               // 1987
      }                                                                                                               // 1988
                                                                                                                      // 1989
      if (timeLeft <= 0) {                                                                                            // 1990
        // Animate toast out                                                                                          // 1991
        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,                                            // 1992
            easing: 'easeOutExpo',                                                                                    // 1993
            queue: false,                                                                                             // 1994
            complete: function(){                                                                                     // 1995
              // Call the optional callback                                                                           // 1996
              if(typeof(completeCallback) === "function")                                                             // 1997
                completeCallback();                                                                                   // 1998
              // Remove toast after it times out                                                                      // 1999
              this[0].parentNode.removeChild(this[0]);                                                                // 2000
            }                                                                                                         // 2001
          });                                                                                                         // 2002
        window.clearInterval(counterInterval);                                                                        // 2003
      }                                                                                                               // 2004
    }, 20);                                                                                                           // 2005
                                                                                                                      // 2006
                                                                                                                      // 2007
                                                                                                                      // 2008
    function createToast(html) {                                                                                      // 2009
                                                                                                                      // 2010
        // Create toast                                                                                               // 2011
        var toast = document.createElement('div');                                                                    // 2012
        toast.classList.add('toast');                                                                                 // 2013
        if (className) {                                                                                              // 2014
            var classes = className.split(' ');                                                                       // 2015
                                                                                                                      // 2016
            for (var i = 0, count = classes.length; i < count; i++) {                                                 // 2017
                toast.classList.add(classes[i]);                                                                      // 2018
            }                                                                                                         // 2019
        }                                                                                                             // 2020
        // If type of parameter is HTML Element                                                                       // 2021
        if ( typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName==="string"
) {                                                                                                                   // 2023
          toast.appendChild(html);                                                                                    // 2024
        }                                                                                                             // 2025
        else if (html instanceof jQuery) {                                                                            // 2026
          // Check if it is jQuery object                                                                             // 2027
          toast.appendChild(html[0]);                                                                                 // 2028
        }                                                                                                             // 2029
        else {                                                                                                        // 2030
          // Insert as text;                                                                                          // 2031
          toast.innerHTML = html;                                                                                     // 2032
        }                                                                                                             // 2033
        // Bind hammer                                                                                                // 2034
        var hammerHandler = new Hammer(toast, {prevent_default: false});                                              // 2035
        hammerHandler.on('pan', function(e) {                                                                         // 2036
          var deltaX = e.deltaX;                                                                                      // 2037
          var activationDistance = 80;                                                                                // 2038
                                                                                                                      // 2039
          // Change toast state                                                                                       // 2040
          if (!toast.classList.contains('panning')){                                                                  // 2041
            toast.classList.add('panning');                                                                           // 2042
          }                                                                                                           // 2043
                                                                                                                      // 2044
          var opacityPercent = 1-Math.abs(deltaX / activationDistance);                                               // 2045
          if (opacityPercent < 0)                                                                                     // 2046
            opacityPercent = 0;                                                                                       // 2047
                                                                                                                      // 2048
          Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});  // 2049
                                                                                                                      // 2050
        });                                                                                                           // 2051
                                                                                                                      // 2052
        hammerHandler.on('panend', function(e) {                                                                      // 2053
          var deltaX = e.deltaX;                                                                                      // 2054
          var activationDistance = 80;                                                                                // 2055
                                                                                                                      // 2056
          // If toast dragged past activation point                                                                   // 2057
          if (Math.abs(deltaX) > activationDistance) {                                                                // 2058
            Vel(toast, {marginTop: '-40px'}, { duration: 375,                                                         // 2059
                easing: 'easeOutExpo',                                                                                // 2060
                queue: false,                                                                                         // 2061
                complete: function(){                                                                                 // 2062
                  if(typeof(completeCallback) === "function") {                                                       // 2063
                    completeCallback();                                                                               // 2064
                  }                                                                                                   // 2065
                  toast.parentNode.removeChild(toast);                                                                // 2066
                }                                                                                                     // 2067
            });                                                                                                       // 2068
                                                                                                                      // 2069
          } else {                                                                                                    // 2070
            toast.classList.remove('panning');                                                                        // 2071
            // Put toast back into original position                                                                  // 2072
            Vel(toast, { left: 0, opacity: 1 }, { duration: 300,                                                      // 2073
              easing: 'easeOutExpo',                                                                                  // 2074
              queue: false                                                                                            // 2075
            });                                                                                                       // 2076
                                                                                                                      // 2077
          }                                                                                                           // 2078
        });                                                                                                           // 2079
                                                                                                                      // 2080
        return toast;                                                                                                 // 2081
    }                                                                                                                 // 2082
};                                                                                                                    // 2083
;(function ($) {                                                                                                      // 2084
                                                                                                                      // 2085
  var methods = {                                                                                                     // 2086
    init : function(options) {                                                                                        // 2087
      var defaults = {                                                                                                // 2088
        menuWidth: 300,                                                                                               // 2089
        edge: 'left',                                                                                                 // 2090
        closeOnClick: false                                                                                           // 2091
      };                                                                                                              // 2092
      options = $.extend(defaults, options);                                                                          // 2093
                                                                                                                      // 2094
      $(this).each(function(){                                                                                        // 2095
        var $this = $(this);                                                                                          // 2096
        var menu_id = $("#"+ $this.attr('data-activates'));                                                           // 2097
                                                                                                                      // 2098
        // Set to width                                                                                               // 2099
        if (options.menuWidth != 300) {                                                                               // 2100
          menu_id.css('width', options.menuWidth);                                                                    // 2101
        }                                                                                                             // 2102
                                                                                                                      // 2103
        // Add Touch Area                                                                                             // 2104
        var dragTarget = $('<div class="drag-target"></div>');                                                        // 2105
        $('body').append(dragTarget);                                                                                 // 2106
                                                                                                                      // 2107
        if (options.edge == 'left') {                                                                                 // 2108
          menu_id.css('transform', 'translateX(-100%)');                                                              // 2109
          dragTarget.css({'left': 0}); // Add Touch Area                                                              // 2110
        }                                                                                                             // 2111
        else {                                                                                                        // 2112
          menu_id.addClass('right-aligned') // Change text-alignment to right                                         // 2113
            .css('transform', 'translateX(100%)');                                                                    // 2114
          dragTarget.css({'right': 0}); // Add Touch Area                                                             // 2115
        }                                                                                                             // 2116
                                                                                                                      // 2117
        // If fixed sidenav, bring menu out                                                                           // 2118
        if (menu_id.hasClass('fixed')) {                                                                              // 2119
            if (window.innerWidth > 992) {                                                                            // 2120
              menu_id.css('transform', 'translateX(0)');                                                              // 2121
            }                                                                                                         // 2122
          }                                                                                                           // 2123
                                                                                                                      // 2124
        // Window resize to reset on large screens fixed                                                              // 2125
        if (menu_id.hasClass('fixed')) {                                                                              // 2126
          $(window).resize( function() {                                                                              // 2127
            if (window.innerWidth > 992) {                                                                            // 2128
              // Close menu if window is resized bigger than 992 and user has fixed sidenav                           // 2129
              if ($('#sidenav-overlay').length !== 0 && menuOut) {                                                    // 2130
                removeMenu(true);                                                                                     // 2131
              }                                                                                                       // 2132
              else {                                                                                                  // 2133
                // menu_id.removeAttr('style');                                                                       // 2134
                menu_id.css('transform', 'translateX(0%)');                                                           // 2135
                // menu_id.css('width', options.menuWidth);                                                           // 2136
              }                                                                                                       // 2137
            }                                                                                                         // 2138
            else if (menuOut === false){                                                                              // 2139
              if (options.edge === 'left') {                                                                          // 2140
                menu_id.css('transform', 'translateX(-100%)');                                                        // 2141
              } else {                                                                                                // 2142
                menu_id.css('transform', 'translateX(100%)');                                                         // 2143
              }                                                                                                       // 2144
                                                                                                                      // 2145
            }                                                                                                         // 2146
                                                                                                                      // 2147
          });                                                                                                         // 2148
        }                                                                                                             // 2149
                                                                                                                      // 2150
        // if closeOnClick, then add close event for all a tags in side sideNav                                       // 2151
        if (options.closeOnClick === true) {                                                                          // 2152
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){                                     // 2153
            removeMenu();                                                                                             // 2154
          });                                                                                                         // 2155
        }                                                                                                             // 2156
                                                                                                                      // 2157
        function removeMenu(restoreNav) {                                                                             // 2158
          panning = false;                                                                                            // 2159
          menuOut = false;                                                                                            // 2160
          // Reenable scrolling                                                                                       // 2161
          $('body').css({                                                                                             // 2162
            overflow: '',                                                                                             // 2163
            width: ''                                                                                                 // 2164
          });                                                                                                         // 2165
                                                                                                                      // 2166
          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200,                                                // 2167
              queue: false, easing: 'easeOutQuad',                                                                    // 2168
            complete: function() {                                                                                    // 2169
              $(this).remove();                                                                                       // 2170
            } });                                                                                                     // 2171
          if (options.edge === 'left') {                                                                              // 2172
            // Reset phantom div                                                                                      // 2173
            dragTarget.css({width: '', right: '', left: '0'});                                                        // 2174
            menu_id.velocity(                                                                                         // 2175
              {'translateX': '-100%'},                                                                                // 2176
              { duration: 200,                                                                                        // 2177
                queue: false,                                                                                         // 2178
                easing: 'easeOutCubic',                                                                               // 2179
                complete: function() {                                                                                // 2180
                  if (restoreNav === true) {                                                                          // 2181
                    // Restore Fixed sidenav                                                                          // 2182
                    menu_id.removeAttr('style');                                                                      // 2183
                    menu_id.css('width', options.menuWidth);                                                          // 2184
                  }                                                                                                   // 2185
                }                                                                                                     // 2186
                                                                                                                      // 2187
            });                                                                                                       // 2188
          }                                                                                                           // 2189
          else {                                                                                                      // 2190
            // Reset phantom div                                                                                      // 2191
            dragTarget.css({width: '', right: '0', left: ''});                                                        // 2192
            menu_id.velocity(                                                                                         // 2193
              {'translateX': '100%'},                                                                                 // 2194
              { duration: 200,                                                                                        // 2195
                queue: false,                                                                                         // 2196
                easing: 'easeOutCubic',                                                                               // 2197
                complete: function() {                                                                                // 2198
                  if (restoreNav === true) {                                                                          // 2199
                    // Restore Fixed sidenav                                                                          // 2200
                    menu_id.removeAttr('style');                                                                      // 2201
                    menu_id.css('width', options.menuWidth);                                                          // 2202
                  }                                                                                                   // 2203
                }                                                                                                     // 2204
              });                                                                                                     // 2205
          }                                                                                                           // 2206
        }                                                                                                             // 2207
                                                                                                                      // 2208
                                                                                                                      // 2209
                                                                                                                      // 2210
        // Touch Event                                                                                                // 2211
        var panning = false;                                                                                          // 2212
        var menuOut = false;                                                                                          // 2213
                                                                                                                      // 2214
        dragTarget.on('click', function(){                                                                            // 2215
          if (menuOut) {                                                                                              // 2216
            removeMenu();                                                                                             // 2217
          }                                                                                                           // 2218
        });                                                                                                           // 2219
                                                                                                                      // 2220
        dragTarget.hammer({                                                                                           // 2221
          prevent_default: false                                                                                      // 2222
        }).bind('pan', function(e) {                                                                                  // 2223
                                                                                                                      // 2224
          if (e.gesture.pointerType == "touch") {                                                                     // 2225
                                                                                                                      // 2226
            var direction = e.gesture.direction;                                                                      // 2227
            var x = e.gesture.center.x;                                                                               // 2228
            var y = e.gesture.center.y;                                                                               // 2229
            var velocityX = e.gesture.velocityX;                                                                      // 2230
                                                                                                                      // 2231
            // Disable Scrolling                                                                                      // 2232
            var $body = $('body');                                                                                    // 2233
            var oldWidth = $body.innerWidth();                                                                        // 2234
            $body.css('overflow', 'hidden');                                                                          // 2235
            $body.width(oldWidth);                                                                                    // 2236
                                                                                                                      // 2237
            // If overlay does not exist, create one and if it is clicked, close menu                                 // 2238
            if ($('#sidenav-overlay').length === 0) {                                                                 // 2239
              var overlay = $('<div id="sidenav-overlay"></div>');                                                    // 2240
              overlay.css('opacity', 0).click( function(){                                                            // 2241
                removeMenu();                                                                                         // 2242
              });                                                                                                     // 2243
              $('body').append(overlay);                                                                              // 2244
            }                                                                                                         // 2245
                                                                                                                      // 2246
            // Keep within boundaries                                                                                 // 2247
            if (options.edge === 'left') {                                                                            // 2248
              if (x > options.menuWidth) { x = options.menuWidth; }                                                   // 2249
              else if (x < 0) { x = 0; }                                                                              // 2250
            }                                                                                                         // 2251
                                                                                                                      // 2252
            if (options.edge === 'left') {                                                                            // 2253
              // Left Direction                                                                                       // 2254
              if (x < (options.menuWidth / 2)) { menuOut = false; }                                                   // 2255
              // Right Direction                                                                                      // 2256
              else if (x >= (options.menuWidth / 2)) { menuOut = true; }                                              // 2257
              menu_id.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');                              // 2258
            }                                                                                                         // 2259
            else {                                                                                                    // 2260
              // Left Direction                                                                                       // 2261
              if (x < (window.innerWidth - options.menuWidth / 2)) {                                                  // 2262
                menuOut = true;                                                                                       // 2263
              }                                                                                                       // 2264
              // Right Direction                                                                                      // 2265
              else if (x >= (window.innerWidth - options.menuWidth / 2)) {                                            // 2266
               menuOut = false;                                                                                       // 2267
             }                                                                                                        // 2268
              var rightPos = (x - options.menuWidth / 2);                                                             // 2269
              if (rightPos < 0) {                                                                                     // 2270
                rightPos = 0;                                                                                         // 2271
              }                                                                                                       // 2272
                                                                                                                      // 2273
              menu_id.css('transform', 'translateX(' + rightPos + 'px)');                                             // 2274
            }                                                                                                         // 2275
                                                                                                                      // 2276
                                                                                                                      // 2277
            // Percentage overlay                                                                                     // 2278
            var overlayPerc;                                                                                          // 2279
            if (options.edge === 'left') {                                                                            // 2280
              overlayPerc = x / options.menuWidth;                                                                    // 2281
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
            }                                                                                                         // 2283
            else {                                                                                                    // 2284
              overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);                                    // 2285
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
            }                                                                                                         // 2287
          }                                                                                                           // 2288
                                                                                                                      // 2289
        }).bind('panend', function(e) {                                                                               // 2290
                                                                                                                      // 2291
          if (e.gesture.pointerType == "touch") {                                                                     // 2292
            var velocityX = e.gesture.velocityX;                                                                      // 2293
            var x = e.gesture.center.x;                                                                               // 2294
            var leftPos = x - options.menuWidth;                                                                      // 2295
            var rightPos = x - options.menuWidth / 2;                                                                 // 2296
            if (leftPos > 0 ) {                                                                                       // 2297
              leftPos = 0;                                                                                            // 2298
            }                                                                                                         // 2299
            if (rightPos < 0) {                                                                                       // 2300
              rightPos = 0;                                                                                           // 2301
            }                                                                                                         // 2302
            panning = false;                                                                                          // 2303
                                                                                                                      // 2304
            if (options.edge === 'left') {                                                                            // 2305
              // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut                      // 2306
              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {                                                // 2307
                // Return menu to open                                                                                // 2308
                if (leftPos !== 0) {                                                                                  // 2309
                  menu_id.velocity({'translateX': [0, leftPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                }                                                                                                     // 2311
                                                                                                                      // 2312
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});   // 2313
                dragTarget.css({width: '50%', right: 0, left: ''});                                                   // 2314
                menuOut = true;                                                                                       // 2315
              }                                                                                                       // 2316
              else if (!menuOut || velocityX > 0.3) {                                                                 // 2317
                // Enable Scrolling                                                                                   // 2318
                $('body').css({                                                                                       // 2319
                  overflow: '',                                                                                       // 2320
                  width: ''                                                                                           // 2321
                });                                                                                                   // 2322
                // Slide menu closed                                                                                  // 2323
                menu_id.velocity({'translateX': [-1 * options.menuWidth - 10, leftPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',    // 2325
                  complete: function () {                                                                             // 2326
                    $(this).remove();                                                                                 // 2327
                  }});                                                                                                // 2328
                dragTarget.css({width: '10px', right: '', left: 0});                                                  // 2329
              }                                                                                                       // 2330
            }                                                                                                         // 2331
            else {                                                                                                    // 2332
              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {                                                // 2333
                // Return menu to open                                                                                // 2334
                if (rightPos !== 0) {                                                                                 // 2335
                  menu_id.velocity({'translateX': [0, rightPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                }                                                                                                     // 2337
                                                                                                                      // 2338
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});   // 2339
                dragTarget.css({width: '50%', right: '', left: 0});                                                   // 2340
                menuOut = true;                                                                                       // 2341
              }                                                                                                       // 2342
              else if (!menuOut || velocityX < -0.3) {                                                                // 2343
                // Enable Scrolling                                                                                   // 2344
                $('body').css({                                                                                       // 2345
                  overflow: '',                                                                                       // 2346
                  width: ''                                                                                           // 2347
                });                                                                                                   // 2348
                                                                                                                      // 2349
                // Slide menu closed                                                                                  // 2350
                menu_id.velocity({'translateX': [options.menuWidth + 10, rightPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',    // 2352
                  complete: function () {                                                                             // 2353
                    $(this).remove();                                                                                 // 2354
                  }});                                                                                                // 2355
                dragTarget.css({width: '10px', right: 0, left: ''});                                                  // 2356
              }                                                                                                       // 2357
            }                                                                                                         // 2358
                                                                                                                      // 2359
          }                                                                                                           // 2360
        });                                                                                                           // 2361
                                                                                                                      // 2362
          $this.click(function() {                                                                                    // 2363
            if (menuOut === true) {                                                                                   // 2364
              menuOut = false;                                                                                        // 2365
              panning = false;                                                                                        // 2366
              removeMenu();                                                                                           // 2367
            }                                                                                                         // 2368
            else {                                                                                                    // 2369
                                                                                                                      // 2370
              // Disable Scrolling                                                                                    // 2371
              var $body = $('body');                                                                                  // 2372
              var oldWidth = $body.innerWidth();                                                                      // 2373
              $body.css('overflow', 'hidden');                                                                        // 2374
              $body.width(oldWidth);                                                                                  // 2375
                                                                                                                      // 2376
              // Push current drag target on top of DOM tree                                                          // 2377
              $('body').append(dragTarget);                                                                           // 2378
                                                                                                                      // 2379
              if (options.edge === 'left') {                                                                          // 2380
                dragTarget.css({width: '50%', right: 0, left: ''});                                                   // 2381
                menu_id.velocity({'translateX': [0, -1 * options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }                                                                                                       // 2383
              else {                                                                                                  // 2384
                dragTarget.css({width: '50%', right: '', left: 0});                                                   // 2385
                menu_id.velocity({'translateX': [0, options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
              }                                                                                                       // 2387
                                                                                                                      // 2388
              var overlay = $('<div id="sidenav-overlay"></div>');                                                    // 2389
              overlay.css('opacity', 0)                                                                               // 2390
              .click(function(){                                                                                      // 2391
                menuOut = false;                                                                                      // 2392
                panning = false;                                                                                      // 2393
                removeMenu();                                                                                         // 2394
                overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',                   // 2395
                  complete: function() {                                                                              // 2396
                    $(this).remove();                                                                                 // 2397
                  } });                                                                                               // 2398
                                                                                                                      // 2399
              });                                                                                                     // 2400
              $('body').append(overlay);                                                                              // 2401
              overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',                     // 2402
                complete: function () {                                                                               // 2403
                  menuOut = true;                                                                                     // 2404
                  panning = false;                                                                                    // 2405
                }                                                                                                     // 2406
              });                                                                                                     // 2407
            }                                                                                                         // 2408
                                                                                                                      // 2409
            return false;                                                                                             // 2410
          });                                                                                                         // 2411
      });                                                                                                             // 2412
                                                                                                                      // 2413
                                                                                                                      // 2414
    },                                                                                                                // 2415
    show : function() {                                                                                               // 2416
      this.trigger('click');                                                                                          // 2417
    },                                                                                                                // 2418
    hide : function() {                                                                                               // 2419
      $('#sidenav-overlay').trigger('click');                                                                         // 2420
    }                                                                                                                 // 2421
  };                                                                                                                  // 2422
                                                                                                                      // 2423
                                                                                                                      // 2424
    $.fn.sideNav = function(methodOrOptions) {                                                                        // 2425
      if ( methods[methodOrOptions] ) {                                                                               // 2426
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                   // 2427
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                        // 2428
        // Default to "init"                                                                                          // 2429
        return methods.init.apply( this, arguments );                                                                 // 2430
      } else {                                                                                                        // 2431
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sideNav' );                                // 2432
      }                                                                                                               // 2433
    }; // Plugin end                                                                                                  // 2434
}( jQuery ));                                                                                                         // 2435
;/**                                                                                                                  // 2436
 * Extend jquery with a scrollspy plugin.                                                                             // 2437
 * This watches the window scroll and fires events when elements are scrolled into viewport.                          // 2438
 *                                                                                                                    // 2439
 * throttle() and getTime() taken from Underscore.js                                                                  // 2440
 * https://github.com/jashkenas/underscore                                                                            // 2441
 *                                                                                                                    // 2442
 * @author Copyright 2013 John Smart                                                                                  // 2443
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE                                           // 2444
 * @see https://github.com/thesmart                                                                                   // 2445
 * @version 0.1.2                                                                                                     // 2446
 */                                                                                                                   // 2447
(function($) {                                                                                                        // 2448
                                                                                                                      // 2449
	var jWindow = $(window);                                                                                             // 2450
	var elements = [];                                                                                                   // 2451
	var elementsInView = [];                                                                                             // 2452
	var isSpying = false;                                                                                                // 2453
	var ticks = 0;                                                                                                       // 2454
	var unique_id = 1;                                                                                                   // 2455
	var offset = {                                                                                                       // 2456
		top : 0,                                                                                                            // 2457
		right : 0,                                                                                                          // 2458
		bottom : 0,                                                                                                         // 2459
		left : 0,                                                                                                           // 2460
	}                                                                                                                    // 2461
                                                                                                                      // 2462
	/**                                                                                                                  // 2463
	 * Find elements that are within the boundary                                                                        // 2464
	 * @param {number} top                                                                                               // 2465
	 * @param {number} right                                                                                             // 2466
	 * @param {number} bottom                                                                                            // 2467
	 * @param {number} left                                                                                              // 2468
	 * @return {jQuery}		A collection of elements                                                                        // 2469
	 */                                                                                                                  // 2470
	function findElements(top, right, bottom, left) {                                                                    // 2471
		var hits = $();                                                                                                     // 2472
		$.each(elements, function(i, element) {                                                                             // 2473
			if (element.height() > 0) {                                                                                        // 2474
				var elTop = element.offset().top,                                                                                 // 2475
					elLeft = element.offset().left,                                                                                  // 2476
					elRight = elLeft + element.width(),                                                                              // 2477
					elBottom = elTop + element.height();                                                                             // 2478
                                                                                                                      // 2479
				var isIntersect = !(elLeft > right ||                                                                             // 2480
					elRight < left ||                                                                                                // 2481
					elTop > bottom ||                                                                                                // 2482
					elBottom < top);                                                                                                 // 2483
                                                                                                                      // 2484
				if (isIntersect) {                                                                                                // 2485
					hits.push(element);                                                                                              // 2486
				}                                                                                                                 // 2487
			}                                                                                                                  // 2488
		});                                                                                                                 // 2489
                                                                                                                      // 2490
		return hits;                                                                                                        // 2491
	}                                                                                                                    // 2492
                                                                                                                      // 2493
                                                                                                                      // 2494
	/**                                                                                                                  // 2495
	 * Called when the user scrolls the window                                                                           // 2496
	 */                                                                                                                  // 2497
	function onScroll() {                                                                                                // 2498
		// unique tick id                                                                                                   // 2499
		++ticks;                                                                                                            // 2500
                                                                                                                      // 2501
		// viewport rectangle                                                                                               // 2502
		var top = jWindow.scrollTop(),                                                                                      // 2503
			left = jWindow.scrollLeft(),                                                                                       // 2504
			right = left + jWindow.width(),                                                                                    // 2505
			bottom = top + jWindow.height();                                                                                   // 2506
                                                                                                                      // 2507
		// determine which elements are in view                                                                             // 2508
//        + 60 accounts for fixed nav                                                                                 // 2509
		var intersections = findElements(top+offset.top + 200, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {                                                                        // 2511
                                                                                                                      // 2512
			var lastTick = element.data('scrollSpy:ticks');                                                                    // 2513
			if (typeof lastTick != 'number') {                                                                                 // 2514
				// entered into view                                                                                              // 2515
				element.triggerHandler('scrollSpy:enter');                                                                        // 2516
			}                                                                                                                  // 2517
                                                                                                                      // 2518
			// update tick id                                                                                                  // 2519
			element.data('scrollSpy:ticks', ticks);                                                                            // 2520
		});                                                                                                                 // 2521
                                                                                                                      // 2522
		// determine which elements are no longer in view                                                                   // 2523
		$.each(elementsInView, function(i, element) {                                                                       // 2524
			var lastTick = element.data('scrollSpy:ticks');                                                                    // 2525
			if (typeof lastTick == 'number' && lastTick !== ticks) {                                                           // 2526
				// exited from view                                                                                               // 2527
				element.triggerHandler('scrollSpy:exit');                                                                         // 2528
				element.data('scrollSpy:ticks', null);                                                                            // 2529
			}                                                                                                                  // 2530
		});                                                                                                                 // 2531
                                                                                                                      // 2532
		// remember elements in view for next tick                                                                          // 2533
		elementsInView = intersections;                                                                                     // 2534
	}                                                                                                                    // 2535
                                                                                                                      // 2536
	/**                                                                                                                  // 2537
	 * Called when window is resized                                                                                     // 2538
	*/                                                                                                                   // 2539
	function onWinSize() {                                                                                               // 2540
		jWindow.trigger('scrollSpy:winSize');                                                                               // 2541
	}                                                                                                                    // 2542
                                                                                                                      // 2543
	/**                                                                                                                  // 2544
	 * Get time in ms                                                                                                    // 2545
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE                                              // 2546
	 * @type {function}                                                                                                  // 2547
	 * @return {number}                                                                                                  // 2548
	 */                                                                                                                  // 2549
	var getTime = (Date.now || function () {                                                                             // 2550
		return new Date().getTime();                                                                                        // 2551
	});                                                                                                                  // 2552
                                                                                                                      // 2553
	/**                                                                                                                  // 2554
	 * Returns a function, that, when invoked, will only be triggered at most once                                       // 2555
	 * during a given window of time. Normally, the throttled function will run                                          // 2556
	 * as much as it can, without ever going more than once per `wait` duration;                                         // 2557
	 * but if you'd like to disable the execution on the leading edge, pass                                              // 2558
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.                                             // 2559
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE                                               // 2560
	 * @param {function} func                                                                                            // 2561
	 * @param {number} wait                                                                                              // 2562
	 * @param {Object=} options                                                                                          // 2563
	 * @returns {Function}                                                                                               // 2564
	 */                                                                                                                  // 2565
	function throttle(func, wait, options) {                                                                             // 2566
		var context, args, result;                                                                                          // 2567
		var timeout = null;                                                                                                 // 2568
		var previous = 0;                                                                                                   // 2569
		options || (options = {});                                                                                          // 2570
		var later = function () {                                                                                           // 2571
			previous = options.leading === false ? 0 : getTime();                                                              // 2572
			timeout = null;                                                                                                    // 2573
			result = func.apply(context, args);                                                                                // 2574
			context = args = null;                                                                                             // 2575
		};                                                                                                                  // 2576
		return function () {                                                                                                // 2577
			var now = getTime();                                                                                               // 2578
			if (!previous && options.leading === false) previous = now;                                                        // 2579
			var remaining = wait - (now - previous);                                                                           // 2580
			context = this;                                                                                                    // 2581
			args = arguments;                                                                                                  // 2582
			if (remaining <= 0) {                                                                                              // 2583
				clearTimeout(timeout);                                                                                            // 2584
				timeout = null;                                                                                                   // 2585
				previous = now;                                                                                                   // 2586
				result = func.apply(context, args);                                                                               // 2587
				context = args = null;                                                                                            // 2588
			} else if (!timeout && options.trailing !== false) {                                                               // 2589
				timeout = setTimeout(later, remaining);                                                                           // 2590
			}                                                                                                                  // 2591
			return result;                                                                                                     // 2592
		};                                                                                                                  // 2593
	};                                                                                                                   // 2594
                                                                                                                      // 2595
	/**                                                                                                                  // 2596
	 * Enables ScrollSpy using a selector                                                                                // 2597
	 * @param {jQuery|string} selector  The elements collection, or a selector                                           // 2598
	 * @param {Object=} options	Optional.                                                                                // 2599
        throttle : number -> scrollspy throttling. Default: 100 ms                                                    // 2600
        offsetTop : number -> offset from top. Default: 0                                                             // 2601
        offsetRight : number -> offset from right. Default: 0                                                         // 2602
        offsetBottom : number -> offset from bottom. Default: 0                                                       // 2603
        offsetLeft : number -> offset from left. Default: 0                                                           // 2604
	 * @returns {jQuery}                                                                                                 // 2605
	 */                                                                                                                  // 2606
	$.scrollSpy = function(selector, options) {                                                                          // 2607
	  var defaults = {                                                                                                   // 2608
			throttle: 100,                                                                                                     // 2609
			scrollOffset: 200 // offset - 200 allows elements near bottom of page to scroll                                    // 2610
    };                                                                                                                // 2611
    options = $.extend(defaults, options);                                                                            // 2612
                                                                                                                      // 2613
		var visible = [];                                                                                                   // 2614
		selector = $(selector);                                                                                             // 2615
		selector.each(function(i, element) {                                                                                // 2616
			elements.push($(element));                                                                                         // 2617
			$(element).data("scrollSpy:id", i);                                                                                // 2618
			// Smooth scroll to section                                                                                        // 2619
		  $('a[href="#' + $(element).attr('id') + '"]').click(function(e) {                                                 // 2620
		    e.preventDefault();                                                                                             // 2621
		    var offset = $(this.hash).offset().top + 1;                                                                     // 2622
	    	$('html, body').animate({ scrollTop: offset - options.scrollOffset }, {duration: 400, queue: false, easing: 'easeOutCubic'});
		  });                                                                                                               // 2624
		});                                                                                                                 // 2625
                                                                                                                      // 2626
		offset.top = options.offsetTop || 0;                                                                                // 2627
		offset.right = options.offsetRight || 0;                                                                            // 2628
		offset.bottom = options.offsetBottom || 0;                                                                          // 2629
		offset.left = options.offsetLeft || 0;                                                                              // 2630
                                                                                                                      // 2631
		var throttledScroll = throttle(onScroll, options.throttle || 100);                                                  // 2632
		var readyScroll = function(){                                                                                       // 2633
			$(document).ready(throttledScroll);                                                                                // 2634
		};                                                                                                                  // 2635
                                                                                                                      // 2636
		if (!isSpying) {                                                                                                    // 2637
			jWindow.on('scroll', readyScroll);                                                                                 // 2638
			jWindow.on('resize', readyScroll);                                                                                 // 2639
			isSpying = true;                                                                                                   // 2640
		}                                                                                                                   // 2641
                                                                                                                      // 2642
		// perform a scan once, after current execution context, and after dom is ready                                     // 2643
		setTimeout(readyScroll, 0);                                                                                         // 2644
                                                                                                                      // 2645
                                                                                                                      // 2646
		selector.on('scrollSpy:enter', function() {                                                                         // 2647
			visible = $.grep(visible, function(value) {                                                                        // 2648
	      return value.height() != 0;                                                                                    // 2649
	    });                                                                                                              // 2650
                                                                                                                      // 2651
			var $this = $(this);                                                                                               // 2652
                                                                                                                      // 2653
			if (visible[0]) {                                                                                                  // 2654
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');                                              // 2655
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {                                               // 2656
					visible.unshift($(this));                                                                                        // 2657
				}                                                                                                                 // 2658
				else {                                                                                                            // 2659
					visible.push($(this));                                                                                           // 2660
				}                                                                                                                 // 2661
			}                                                                                                                  // 2662
			else {                                                                                                             // 2663
				visible.push($(this));                                                                                            // 2664
			}                                                                                                                  // 2665
                                                                                                                      // 2666
                                                                                                                      // 2667
			$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');                                                  // 2668
		});                                                                                                                 // 2669
		selector.on('scrollSpy:exit', function() {                                                                          // 2670
			visible = $.grep(visible, function(value) {                                                                        // 2671
	      return value.height() != 0;                                                                                    // 2672
	    });                                                                                                              // 2673
                                                                                                                      // 2674
			if (visible[0]) {                                                                                                  // 2675
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');                                              // 2676
				var $this = $(this);                                                                                              // 2677
				visible = $.grep(visible, function(value) {                                                                       // 2678
	        return value.attr('id') != $this.attr('id');                                                                 // 2679
	      });                                                                                                            // 2680
	      if (visible[0]) { // Check if empty                                                                            // 2681
					$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');                                                // 2682
	      }                                                                                                              // 2683
			}                                                                                                                  // 2684
		});                                                                                                                 // 2685
                                                                                                                      // 2686
		return selector;                                                                                                    // 2687
	};                                                                                                                   // 2688
                                                                                                                      // 2689
	/**                                                                                                                  // 2690
	 * Listen for window resize events                                                                                   // 2691
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms            // 2692
	 * @returns {jQuery}		$(window)                                                                                      // 2693
	 */                                                                                                                  // 2694
	$.winSizeSpy = function(options) {                                                                                   // 2695
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls                                          // 2696
		options = options || {                                                                                              // 2697
			throttle: 100                                                                                                      // 2698
		};                                                                                                                  // 2699
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));                                          // 2700
	};                                                                                                                   // 2701
                                                                                                                      // 2702
	/**                                                                                                                  // 2703
	 * Enables ScrollSpy on a collection of elements                                                                     // 2704
	 * e.g. $('.scrollSpy').scrollSpy()                                                                                  // 2705
	 * @param {Object=} options	Optional.                                                                                // 2706
											throttle : number -> scrollspy throttling. Default: 100 ms                                                 // 2707
											offsetTop : number -> offset from top. Default: 0                                                          // 2708
											offsetRight : number -> offset from right. Default: 0                                                      // 2709
											offsetBottom : number -> offset from bottom. Default: 0                                                    // 2710
											offsetLeft : number -> offset from left. Default: 0                                                        // 2711
	 * @returns {jQuery}                                                                                                 // 2712
	 */                                                                                                                  // 2713
	$.fn.scrollSpy = function(options) {                                                                                 // 2714
		return $.scrollSpy($(this), options);                                                                               // 2715
	};                                                                                                                   // 2716
                                                                                                                      // 2717
})(jQuery);                                                                                                           // 2718
;(function ($) {                                                                                                      // 2719
  $(document).ready(function() {                                                                                      // 2720
                                                                                                                      // 2721
    // Function to update labels of text fields                                                                       // 2722
    Materialize.updateTextFields = function() {                                                                       // 2723
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {                                                               // 2725
        if ($(element).val().length > 0 || element.autofocus ||$(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
          $(this).siblings('label').addClass('active');                                                               // 2727
        }                                                                                                             // 2728
        else {                                                                                                        // 2729
          $(this).siblings('label').removeClass('active');                                                            // 2730
        }                                                                                                             // 2731
      });                                                                                                             // 2732
    };                                                                                                                // 2733
                                                                                                                      // 2734
    // Text based inputs                                                                                              // 2735
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
                                                                                                                      // 2737
    // Add active if form auto complete                                                                               // 2738
    $(document).on('change', input_selector, function () {                                                            // 2739
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {                                   // 2740
        $(this).siblings('label').addClass('active');                                                                 // 2741
      }                                                                                                               // 2742
      validate_field($(this));                                                                                        // 2743
    });                                                                                                               // 2744
                                                                                                                      // 2745
    // Add active if input element has been pre-populated on document ready                                           // 2746
    $(document).ready(function() {                                                                                    // 2747
      Materialize.updateTextFields();                                                                                 // 2748
    });                                                                                                               // 2749
                                                                                                                      // 2750
    // HTML DOM FORM RESET handling                                                                                   // 2751
    $(document).on('reset', function(e) {                                                                             // 2752
      var formReset = $(e.target);                                                                                    // 2753
      if (formReset.is('form')) {                                                                                     // 2754
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');                                   // 2755
        formReset.find(input_selector).each(function () {                                                             // 2756
          if ($(this).attr('value') === '') {                                                                         // 2757
            $(this).siblings('label').removeClass('active');                                                          // 2758
          }                                                                                                           // 2759
        });                                                                                                           // 2760
                                                                                                                      // 2761
        // Reset select                                                                                               // 2762
        formReset.find('select.initialized').each(function () {                                                       // 2763
          var reset_text = formReset.find('option[selected]').text();                                                 // 2764
          formReset.siblings('input.select-dropdown').val(reset_text);                                                // 2765
        });                                                                                                           // 2766
      }                                                                                                               // 2767
    });                                                                                                               // 2768
                                                                                                                      // 2769
    // Add active when element has focus                                                                              // 2770
    $(document).on('focus', input_selector, function () {                                                             // 2771
      $(this).siblings('label, .prefix').addClass('active');                                                          // 2772
    });                                                                                                               // 2773
                                                                                                                      // 2774
    $(document).on('blur', input_selector, function () {                                                              // 2775
      var $inputElement = $(this);                                                                                    // 2776
      var selector = ".prefix";                                                                                       // 2777
                                                                                                                      // 2778
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        selector += ", label";                                                                                        // 2780
      }                                                                                                               // 2781
                                                                                                                      // 2782
      $inputElement.siblings(selector).removeClass('active');                                                         // 2783
                                                                                                                      // 2784
      validate_field($inputElement);                                                                                  // 2785
    });                                                                                                               // 2786
                                                                                                                      // 2787
    window.validate_field = function(object) {                                                                        // 2788
      var hasLength = object.attr('length') !== undefined;                                                            // 2789
      var lenAttr = parseInt(object.attr('length'));                                                                  // 2790
      var len = object.val().length;                                                                                  // 2791
                                                                                                                      // 2792
      if (object.val().length === 0 && object[0].validity.badInput === false) {                                       // 2793
        if (object.hasClass('validate')) {                                                                            // 2794
          object.removeClass('valid');                                                                                // 2795
          object.removeClass('invalid');                                                                              // 2796
        }                                                                                                             // 2797
      }                                                                                                               // 2798
      else {                                                                                                          // 2799
        if (object.hasClass('validate')) {                                                                            // 2800
          // Check for character counter attributes                                                                   // 2801
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {        // 2802
            object.removeClass('invalid');                                                                            // 2803
            object.addClass('valid');                                                                                 // 2804
          }                                                                                                           // 2805
          else {                                                                                                      // 2806
            object.removeClass('valid');                                                                              // 2807
            object.addClass('invalid');                                                                               // 2808
          }                                                                                                           // 2809
        }                                                                                                             // 2810
      }                                                                                                               // 2811
    };                                                                                                                // 2812
                                                                                                                      // 2813
    // Radio and Checkbox focus class                                                                                 // 2814
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';                                                   // 2815
    $(document).on('keyup.radio', radio_checkbox, function(e) {                                                       // 2816
      // TAB, check if tabbing to radio or checkbox.                                                                  // 2817
      if (e.which === 9) {                                                                                            // 2818
        $(this).addClass('tabbed');                                                                                   // 2819
        var $this = $(this);                                                                                          // 2820
        $this.one('blur', function(e) {                                                                               // 2821
                                                                                                                      // 2822
          $(this).removeClass('tabbed');                                                                              // 2823
        });                                                                                                           // 2824
        return;                                                                                                       // 2825
      }                                                                                                               // 2826
    });                                                                                                               // 2827
                                                                                                                      // 2828
    // Textarea Auto Resize                                                                                           // 2829
    var hiddenDiv = $('.hiddendiv').first();                                                                          // 2830
    if (!hiddenDiv.length) {                                                                                          // 2831
      hiddenDiv = $('<div class="hiddendiv common"></div>');                                                          // 2832
      $('body').append(hiddenDiv);                                                                                    // 2833
    }                                                                                                                 // 2834
    var text_area_selector = '.materialize-textarea';                                                                 // 2835
                                                                                                                      // 2836
    function textareaAutoResize($textarea) {                                                                          // 2837
      // Set font properties of hiddenDiv                                                                             // 2838
                                                                                                                      // 2839
      var fontFamily = $textarea.css('font-family');                                                                  // 2840
      var fontSize = $textarea.css('font-size');                                                                      // 2841
      var lineHeight = $textarea.css('line-height');                                                                  // 2842
                                                                                                                      // 2843
      if (fontSize) { hiddenDiv.css('font-size', fontSize); }                                                         // 2844
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }                                                   // 2845
      if (lineHeight) { hiddenDiv.css('line-height', lineHeight); }                                                   // 2846
                                                                                                                      // 2847
      if ($textarea.attr('wrap') === "off") {                                                                         // 2848
        hiddenDiv.css('overflow-wrap', "normal")                                                                      // 2849
                 .css('white-space', "pre");                                                                          // 2850
      }                                                                                                               // 2851
                                                                                                                      // 2852
      hiddenDiv.text($textarea.val() + '\n');                                                                         // 2853
      var content = hiddenDiv.html().replace(/\n/g, '<br>');                                                          // 2854
      hiddenDiv.html(content);                                                                                        // 2855
                                                                                                                      // 2856
                                                                                                                      // 2857
      // When textarea is hidden, width goes crazy.                                                                   // 2858
      // Approximate with half of window size                                                                         // 2859
                                                                                                                      // 2860
      if ($textarea.is(':visible')) {                                                                                 // 2861
        hiddenDiv.css('width', $textarea.width());                                                                    // 2862
      }                                                                                                               // 2863
      else {                                                                                                          // 2864
        hiddenDiv.css('width', $(window).width()/2);                                                                  // 2865
      }                                                                                                               // 2866
                                                                                                                      // 2867
      $textarea.css('height', hiddenDiv.height());                                                                    // 2868
    }                                                                                                                 // 2869
                                                                                                                      // 2870
    $(text_area_selector).each(function () {                                                                          // 2871
      var $textarea = $(this);                                                                                        // 2872
      if ($textarea.val().length) {                                                                                   // 2873
        textareaAutoResize($textarea);                                                                                // 2874
      }                                                                                                               // 2875
    });                                                                                                               // 2876
                                                                                                                      // 2877
    $('body').on('keyup keydown autoresize', text_area_selector, function () {                                        // 2878
      textareaAutoResize($(this));                                                                                    // 2879
    });                                                                                                               // 2880
                                                                                                                      // 2881
    // File Input Path                                                                                                // 2882
    $(document).on('change', '.file-field input[type="file"]', function () {                                          // 2883
      var file_field = $(this).closest('.file-field');                                                                // 2884
      var path_input = file_field.find('input.file-path');                                                            // 2885
      var files      = $(this)[0].files;                                                                              // 2886
      var file_names = [];                                                                                            // 2887
      for (var i = 0; i < files.length; i++) {                                                                        // 2888
        file_names.push(files[i].name);                                                                               // 2889
      }                                                                                                               // 2890
      path_input.val(file_names.join(", "));                                                                          // 2891
      path_input.trigger('change');                                                                                   // 2892
    });                                                                                                               // 2893
                                                                                                                      // 2894
    /****************                                                                                                 // 2895
    *  Range Input  *                                                                                                 // 2896
    ****************/                                                                                                 // 2897
                                                                                                                      // 2898
    var range_type = 'input[type=range]';                                                                             // 2899
    var range_mousedown = false;                                                                                      // 2900
    var left;                                                                                                         // 2901
                                                                                                                      // 2902
    $(range_type).each(function () {                                                                                  // 2903
      var thumb = $('<span class="thumb"><span class="value"></span></span>');                                        // 2904
      $(this).after(thumb);                                                                                           // 2905
    });                                                                                                               // 2906
                                                                                                                      // 2907
    var range_wrapper = '.range-field';                                                                               // 2908
    $(document).on('change', range_type, function(e) {                                                                // 2909
      var thumb = $(this).siblings('.thumb');                                                                         // 2910
      thumb.find('.value').html($(this).val());                                                                       // 2911
    });                                                                                                               // 2912
                                                                                                                      // 2913
    $(document).on('input mousedown touchstart', range_type, function(e) {                                            // 2914
      var thumb = $(this).siblings('.thumb');                                                                         // 2915
      var width = $(this).outerWidth();                                                                               // 2916
                                                                                                                      // 2917
      // If thumb indicator does not exist yet, create it                                                             // 2918
      if (thumb.length <= 0) {                                                                                        // 2919
        thumb = $('<span class="thumb"><span class="value"></span></span>');                                          // 2920
        $(this).after(thumb);                                                                                         // 2921
      }                                                                                                               // 2922
                                                                                                                      // 2923
      // Set indicator value                                                                                          // 2924
      thumb.find('.value').html($(this).val());                                                                       // 2925
                                                                                                                      // 2926
      range_mousedown = true;                                                                                         // 2927
      $(this).addClass('active');                                                                                     // 2928
                                                                                                                      // 2929
      if (!thumb.hasClass('active')) {                                                                                // 2930
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
      }                                                                                                               // 2932
                                                                                                                      // 2933
      if (e.type !== 'input') {                                                                                       // 2934
        if(e.pageX === undefined || e.pageX === null){//mobile                                                        // 2935
           left = e.originalEvent.touches[0].pageX - $(this).offset().left;                                           // 2936
        }                                                                                                             // 2937
        else{ // desktop                                                                                              // 2938
           left = e.pageX - $(this).offset().left;                                                                    // 2939
        }                                                                                                             // 2940
        if (left < 0) {                                                                                               // 2941
          left = 0;                                                                                                   // 2942
        }                                                                                                             // 2943
        else if (left > width) {                                                                                      // 2944
          left = width;                                                                                               // 2945
        }                                                                                                             // 2946
        thumb.addClass('active').css('left', left);                                                                   // 2947
      }                                                                                                               // 2948
                                                                                                                      // 2949
      thumb.find('.value').html($(this).val());                                                                       // 2950
    });                                                                                                               // 2951
                                                                                                                      // 2952
    $(document).on('mouseup touchend', range_wrapper, function() {                                                    // 2953
      range_mousedown = false;                                                                                        // 2954
      $(this).removeClass('active');                                                                                  // 2955
    });                                                                                                               // 2956
                                                                                                                      // 2957
    $(document).on('mousemove touchmove', range_wrapper, function(e) {                                                // 2958
      var thumb = $(this).children('.thumb');                                                                         // 2959
      var left;                                                                                                       // 2960
      if (range_mousedown) {                                                                                          // 2961
        if (!thumb.hasClass('active')) {                                                                              // 2962
          thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' });
        }                                                                                                             // 2964
        if (e.pageX === undefined || e.pageX === null) { //mobile                                                     // 2965
          left = e.originalEvent.touches[0].pageX - $(this).offset().left;                                            // 2966
        }                                                                                                             // 2967
        else{ // desktop                                                                                              // 2968
          left = e.pageX - $(this).offset().left;                                                                     // 2969
        }                                                                                                             // 2970
        var width = $(this).outerWidth();                                                                             // 2971
                                                                                                                      // 2972
        if (left < 0) {                                                                                               // 2973
          left = 0;                                                                                                   // 2974
        }                                                                                                             // 2975
        else if (left > width) {                                                                                      // 2976
          left = width;                                                                                               // 2977
        }                                                                                                             // 2978
        thumb.addClass('active').css('left', left);                                                                   // 2979
        thumb.find('.value').html(thumb.siblings(range_type).val());                                                  // 2980
      }                                                                                                               // 2981
    });                                                                                                               // 2982
                                                                                                                      // 2983
    $(document).on('mouseout touchleave', range_wrapper, function() {                                                 // 2984
      if (!range_mousedown) {                                                                                         // 2985
                                                                                                                      // 2986
        var thumb = $(this).children('.thumb');                                                                       // 2987
                                                                                                                      // 2988
        if (thumb.hasClass('active')) {                                                                               // 2989
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px'}, { duration: 100 });             // 2990
        }                                                                                                             // 2991
        thumb.removeClass('active');                                                                                  // 2992
      }                                                                                                               // 2993
    });                                                                                                               // 2994
                                                                                                                      // 2995
    /**************************                                                                                       // 2996
     * Auto complete plugin  *                                                                                        // 2997
     *************************/                                                                                       // 2998
    $.fn.autocomplete = function (options) {                                                                          // 2999
      // Defaults                                                                                                     // 3000
      var defaults = {                                                                                                // 3001
        data: {}                                                                                                      // 3002
      };                                                                                                              // 3003
                                                                                                                      // 3004
      options = $.extend(defaults, options);                                                                          // 3005
                                                                                                                      // 3006
      return this.each(function() {                                                                                   // 3007
        var $input = $(this);                                                                                         // 3008
        var data = options.data,                                                                                      // 3009
            $inputDiv = $input.closest('.input-field'); // Div to append on                                           // 3010
                                                                                                                      // 3011
        // Check if data isn't empty                                                                                  // 3012
        if (!$.isEmptyObject(data)) {                                                                                 // 3013
          // Create autocomplete element                                                                              // 3014
          var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');                           // 3015
                                                                                                                      // 3016
          // Append autocomplete element                                                                              // 3017
          if ($inputDiv.length) {                                                                                     // 3018
            $inputDiv.append($autocomplete); // Set ul in body                                                        // 3019
          } else {                                                                                                    // 3020
            $input.after($autocomplete);                                                                              // 3021
          }                                                                                                           // 3022
                                                                                                                      // 3023
          var highlight = function(string, $el) {                                                                     // 3024
            var img = $el.find('img');                                                                                // 3025
            var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),                        // 3026
                matchEnd = matchStart + string.length - 1,                                                            // 3027
                beforeMatch = $el.text().slice(0, matchStart),                                                        // 3028
                matchText = $el.text().slice(matchStart, matchEnd + 1),                                               // 3029
                afterMatch = $el.text().slice(matchEnd + 1);                                                          // 3030
            $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
            if (img.length) {                                                                                         // 3032
              $el.prepend(img);                                                                                       // 3033
            }                                                                                                         // 3034
          };                                                                                                          // 3035
                                                                                                                      // 3036
          // Perform search                                                                                           // 3037
          $input.on('keyup', function (e) {                                                                           // 3038
            // Capture Enter                                                                                          // 3039
            if (e.which === 13) {                                                                                     // 3040
              $autocomplete.find('li').first().click();                                                               // 3041
              return;                                                                                                 // 3042
            }                                                                                                         // 3043
                                                                                                                      // 3044
            var val = $input.val().toLowerCase();                                                                     // 3045
            $autocomplete.empty();                                                                                    // 3046
                                                                                                                      // 3047
            // Check if the input isn't empty                                                                         // 3048
            if (val !== '') {                                                                                         // 3049
              for(var key in data) {                                                                                  // 3050
                if (data.hasOwnProperty(key) &&                                                                       // 3051
                    key.toLowerCase().indexOf(val) !== -1 &&                                                          // 3052
                    key.toLowerCase() !== val) {                                                                      // 3053
                  var autocompleteOption = $('<li></li>');                                                            // 3054
                  if(!!data[key]) {                                                                                   // 3055
                    autocompleteOption.append('<img src="'+ data[key] +'" class="right circle"><span>'+ key +'</span>');
                  } else {                                                                                            // 3057
                    autocompleteOption.append('<span>'+ key +'</span>');                                              // 3058
                  }                                                                                                   // 3059
                  $autocomplete.append(autocompleteOption);                                                           // 3060
                                                                                                                      // 3061
                  highlight(val, autocompleteOption);                                                                 // 3062
                }                                                                                                     // 3063
              }                                                                                                       // 3064
            }                                                                                                         // 3065
          });                                                                                                         // 3066
                                                                                                                      // 3067
          // Set input value                                                                                          // 3068
          $autocomplete.on('click', 'li', function () {                                                               // 3069
            $input.val($(this).text().trim());                                                                        // 3070
            $autocomplete.empty();                                                                                    // 3071
          });                                                                                                         // 3072
        }                                                                                                             // 3073
      });                                                                                                             // 3074
    };                                                                                                                // 3075
                                                                                                                      // 3076
  }); // End of $(document).ready                                                                                     // 3077
                                                                                                                      // 3078
  /*******************                                                                                                // 3079
   *  Select Plugin  *                                                                                                // 3080
   ******************/                                                                                                // 3081
  $.fn.material_select = function (callback) {                                                                        // 3082
    $(this).each(function(){                                                                                          // 3083
      var $select = $(this);                                                                                          // 3084
                                                                                                                      // 3085
      if ($select.hasClass('browser-default')) {                                                                      // 3086
        return; // Continue to next (return false breaks out of entire loop)                                          // 3087
      }                                                                                                               // 3088
                                                                                                                      // 3089
      var multiple = $select.attr('multiple') ? true : false,                                                         // 3090
          lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt                    // 3091
                                                                                                                      // 3092
      if (lastID) {                                                                                                   // 3093
        $select.parent().find('span.caret').remove();                                                                 // 3094
        $select.parent().find('input').remove();                                                                      // 3095
                                                                                                                      // 3096
        $select.unwrap();                                                                                             // 3097
        $('ul#select-options-'+lastID).remove();                                                                      // 3098
      }                                                                                                               // 3099
                                                                                                                      // 3100
      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.                    // 3101
      if(callback === 'destroy') {                                                                                    // 3102
        $select.data('select-id', null).removeClass('initialized');                                                   // 3103
        return;                                                                                                       // 3104
      }                                                                                                               // 3105
                                                                                                                      // 3106
      var uniqueID = Materialize.guid();                                                                              // 3107
      $select.data('select-id', uniqueID);                                                                            // 3108
      var wrapper = $('<div class="select-wrapper"></div>');                                                          // 3109
      wrapper.addClass($select.attr('class'));                                                                        // 3110
      var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),                                                      // 3112
          valuesSelected = [],                                                                                        // 3113
          optionsHover = false;                                                                                       // 3114
                                                                                                                      // 3115
      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";                // 3116
                                                                                                                      // 3117
      // Function that renders and appends the option taking into                                                     // 3118
      // account type and possible image icon.                                                                        // 3119
      var appendOptionWithIcon = function(select, option, type) {                                                     // 3120
        // Add disabled attr if disabled                                                                              // 3121
        var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';                                              // 3122
        var optgroupClass = (type === 'optgroup-option') ? 'optgroup-option ' : '';                                   // 3123
                                                                                                                      // 3124
        // add icons                                                                                                  // 3125
        var icon_url = option.data('icon');                                                                           // 3126
        var classes = option.attr('class');                                                                           // 3127
        if (!!icon_url) {                                                                                             // 3128
          var classString = '';                                                                                       // 3129
          if (!!classes) classString = ' class="' + classes + '"';                                                    // 3130
                                                                                                                      // 3131
          // Check for multiple type.                                                                                 // 3132
          if (type === 'multiple') {                                                                                  // 3133
            options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
          } else {                                                                                                    // 3135
            options.append($('<li class="' + disabledClass + optgroupClass + '"><img src="' + icon_url + '"' + classString + '><span>' + option.html() + '</span></li>'));
          }                                                                                                           // 3137
          return true;                                                                                                // 3138
        }                                                                                                             // 3139
                                                                                                                      // 3140
        // Check for multiple type.                                                                                   // 3141
        if (type === 'multiple') {                                                                                    // 3142
          options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
        } else {                                                                                                      // 3144
          options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + option.html() + '</span></li>'));
        }                                                                                                             // 3146
      };                                                                                                              // 3147
                                                                                                                      // 3148
      /* Create dropdown structure. */                                                                                // 3149
      if (selectChildren.length) {                                                                                    // 3150
        selectChildren.each(function() {                                                                              // 3151
          if ($(this).is('option')) {                                                                                 // 3152
            // Direct descendant option.                                                                              // 3153
            if (multiple) {                                                                                           // 3154
              appendOptionWithIcon($select, $(this), 'multiple');                                                     // 3155
                                                                                                                      // 3156
            } else {                                                                                                  // 3157
              appendOptionWithIcon($select, $(this));                                                                 // 3158
            }                                                                                                         // 3159
          } else if ($(this).is('optgroup')) {                                                                        // 3160
            // Optgroup.                                                                                              // 3161
            var selectOptions = $(this).children('option');                                                           // 3162
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));                // 3163
                                                                                                                      // 3164
            selectOptions.each(function() {                                                                           // 3165
              appendOptionWithIcon($select, $(this), 'optgroup-option');                                              // 3166
            });                                                                                                       // 3167
          }                                                                                                           // 3168
        });                                                                                                           // 3169
      }                                                                                                               // 3170
                                                                                                                      // 3171
      options.find('li:not(.optgroup)').each(function (i) {                                                           // 3172
        $(this).click(function (e) {                                                                                  // 3173
          // Check if option element is disabled                                                                      // 3174
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {                                       // 3175
            var selected = true;                                                                                      // 3176
                                                                                                                      // 3177
            if (multiple) {                                                                                           // 3178
              $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });                       // 3179
              selected = toggleEntryFromArray(valuesSelected, $(this).index(), $select);                              // 3180
              $newSelect.trigger('focus');                                                                            // 3181
            } else {                                                                                                  // 3182
              options.find('li').removeClass('active');                                                               // 3183
              $(this).toggleClass('active');                                                                          // 3184
              $newSelect.val($(this).text());                                                                         // 3185
            }                                                                                                         // 3186
                                                                                                                      // 3187
            activateOption(options, $(this));                                                                         // 3188
            $select.find('option').eq(i).prop('selected', selected);                                                  // 3189
            // Trigger onchange() event                                                                               // 3190
            $select.trigger('change');                                                                                // 3191
            if (typeof callback !== 'undefined') callback();                                                          // 3192
          }                                                                                                           // 3193
                                                                                                                      // 3194
          e.stopPropagation();                                                                                        // 3195
        });                                                                                                           // 3196
      });                                                                                                             // 3197
                                                                                                                      // 3198
      // Wrap Elements                                                                                                // 3199
      $select.wrap(wrapper);                                                                                          // 3200
      // Add Select Display Element                                                                                   // 3201
      var dropdownIcon = $('<span class="caret">&#9660;</span>');                                                     // 3202
      if ($select.is(':disabled'))                                                                                    // 3203
        dropdownIcon.addClass('disabled');                                                                            // 3204
                                                                                                                      // 3205
      // escape double quotes                                                                                         // 3206
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');                                                         // 3207
                                                                                                                      // 3208
      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
      $select.before($newSelect);                                                                                     // 3210
      $newSelect.before(dropdownIcon);                                                                                // 3211
                                                                                                                      // 3212
      $newSelect.after(options);                                                                                      // 3213
      // Check if section element is disabled                                                                         // 3214
      if (!$select.is(':disabled')) {                                                                                 // 3215
        $newSelect.dropdown({'hover': false, 'closeOnClick': false});                                                 // 3216
      }                                                                                                               // 3217
                                                                                                                      // 3218
      // Copy tabindex                                                                                                // 3219
      if ($select.attr('tabindex')) {                                                                                 // 3220
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));                                                  // 3221
      }                                                                                                               // 3222
                                                                                                                      // 3223
      $select.addClass('initialized');                                                                                // 3224
                                                                                                                      // 3225
      $newSelect.on({                                                                                                 // 3226
        'focus': function (){                                                                                         // 3227
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {                                               // 3228
            $('input.select-dropdown').trigger('close');                                                              // 3229
          }                                                                                                           // 3230
          if (!options.is(':visible')) {                                                                              // 3231
            $(this).trigger('open', ['focus']);                                                                       // 3232
            var label = $(this).val();                                                                                // 3233
            var selectedOption = options.find('li').filter(function() {                                               // 3234
              return $(this).text().toLowerCase() === label.toLowerCase();                                            // 3235
            })[0];                                                                                                    // 3236
            activateOption(options, selectedOption);                                                                  // 3237
          }                                                                                                           // 3238
        },                                                                                                            // 3239
        'click': function (e){                                                                                        // 3240
          e.stopPropagation();                                                                                        // 3241
        }                                                                                                             // 3242
      });                                                                                                             // 3243
                                                                                                                      // 3244
      $newSelect.on('blur', function() {                                                                              // 3245
        if (!multiple) {                                                                                              // 3246
          $(this).trigger('close');                                                                                   // 3247
        }                                                                                                             // 3248
        options.find('li.selected').removeClass('selected');                                                          // 3249
      });                                                                                                             // 3250
                                                                                                                      // 3251
      options.hover(function() {                                                                                      // 3252
        optionsHover = true;                                                                                          // 3253
      }, function () {                                                                                                // 3254
        optionsHover = false;                                                                                         // 3255
      });                                                                                                             // 3256
                                                                                                                      // 3257
      $(window).on({                                                                                                  // 3258
        'click': function () {                                                                                        // 3259
          multiple && (optionsHover || $newSelect.trigger('close'));                                                  // 3260
        }                                                                                                             // 3261
      });                                                                                                             // 3262
                                                                                                                      // 3263
      // Add initial multiple selections.                                                                             // 3264
      if (multiple) {                                                                                                 // 3265
        $select.find("option:selected:not(:disabled)").each(function () {                                             // 3266
          var index = $(this).index();                                                                                // 3267
                                                                                                                      // 3268
          toggleEntryFromArray(valuesSelected, index, $select);                                                       // 3269
          options.find("li").eq(index).find(":checkbox").prop("checked", true);                                       // 3270
        });                                                                                                           // 3271
      }                                                                                                               // 3272
                                                                                                                      // 3273
      // Make option as selected and scroll to selected position                                                      // 3274
      var activateOption = function(collection, newOption) {                                                          // 3275
        if (newOption) {                                                                                              // 3276
          collection.find('li.selected').removeClass('selected');                                                     // 3277
          var option = $(newOption);                                                                                  // 3278
          option.addClass('selected');                                                                                // 3279
          options.scrollTo(option);                                                                                   // 3280
        }                                                                                                             // 3281
      };                                                                                                              // 3282
                                                                                                                      // 3283
      // Allow user to search by typing                                                                               // 3284
      // this array is cleared after 1 second                                                                         // 3285
      var filterQuery = [],                                                                                           // 3286
          onKeyDown = function(e){                                                                                    // 3287
            // TAB - switch to another input                                                                          // 3288
            if(e.which == 9){                                                                                         // 3289
              $newSelect.trigger('close');                                                                            // 3290
              return;                                                                                                 // 3291
            }                                                                                                         // 3292
                                                                                                                      // 3293
            // ARROW DOWN WHEN SELECT IS CLOSED - open select options                                                 // 3294
            if(e.which == 40 && !options.is(':visible')){                                                             // 3295
              $newSelect.trigger('open');                                                                             // 3296
              return;                                                                                                 // 3297
            }                                                                                                         // 3298
                                                                                                                      // 3299
            // ENTER WHEN SELECT IS CLOSED - submit form                                                              // 3300
            if(e.which == 13 && !options.is(':visible')){                                                             // 3301
              return;                                                                                                 // 3302
            }                                                                                                         // 3303
                                                                                                                      // 3304
            e.preventDefault();                                                                                       // 3305
                                                                                                                      // 3306
            // CASE WHEN USER TYPE LETTERS                                                                            // 3307
            var letter = String.fromCharCode(e.which).toLowerCase(),                                                  // 3308
                nonLetters = [9,13,27,38,40];                                                                         // 3309
            if (letter && (nonLetters.indexOf(e.which) === -1)) {                                                     // 3310
              filterQuery.push(letter);                                                                               // 3311
                                                                                                                      // 3312
              var string = filterQuery.join(''),                                                                      // 3313
                  newOption = options.find('li').filter(function() {                                                  // 3314
                    return $(this).text().toLowerCase().indexOf(string) === 0;                                        // 3315
                  })[0];                                                                                              // 3316
                                                                                                                      // 3317
              if (newOption) {                                                                                        // 3318
                activateOption(options, newOption);                                                                   // 3319
              }                                                                                                       // 3320
            }                                                                                                         // 3321
                                                                                                                      // 3322
            // ENTER - select option and close when select options are opened                                         // 3323
            if (e.which == 13) {                                                                                      // 3324
              var activeOption = options.find('li.selected:not(.disabled)')[0];                                       // 3325
              if(activeOption){                                                                                       // 3326
                $(activeOption).trigger('click');                                                                     // 3327
                if (!multiple) {                                                                                      // 3328
                  $newSelect.trigger('close');                                                                        // 3329
                }                                                                                                     // 3330
              }                                                                                                       // 3331
            }                                                                                                         // 3332
                                                                                                                      // 3333
            // ARROW DOWN - move to next not disabled option                                                          // 3334
            if (e.which == 40) {                                                                                      // 3335
              if (options.find('li.selected').length) {                                                               // 3336
                newOption = options.find('li.selected').next('li:not(.disabled)')[0];                                 // 3337
              } else {                                                                                                // 3338
                newOption = options.find('li:not(.disabled)')[0];                                                     // 3339
              }                                                                                                       // 3340
              activateOption(options, newOption);                                                                     // 3341
            }                                                                                                         // 3342
                                                                                                                      // 3343
            // ESC - close options                                                                                    // 3344
            if (e.which == 27) {                                                                                      // 3345
              $newSelect.trigger('close');                                                                            // 3346
            }                                                                                                         // 3347
                                                                                                                      // 3348
            // ARROW UP - move to previous not disabled option                                                        // 3349
            if (e.which == 38) {                                                                                      // 3350
              newOption = options.find('li.selected').prev('li:not(.disabled)')[0];                                   // 3351
              if(newOption)                                                                                           // 3352
                activateOption(options, newOption);                                                                   // 3353
            }                                                                                                         // 3354
                                                                                                                      // 3355
            // Automaticaly clean filter query so user can search again by starting letters                           // 3356
            setTimeout(function(){ filterQuery = []; }, 1000);                                                        // 3357
          };                                                                                                          // 3358
                                                                                                                      // 3359
      $newSelect.on('keydown', onKeyDown);                                                                            // 3360
    });                                                                                                               // 3361
                                                                                                                      // 3362
    function toggleEntryFromArray(entriesArray, entryIndex, select) {                                                 // 3363
      var index = entriesArray.indexOf(entryIndex),                                                                   // 3364
          notAdded = index === -1;                                                                                    // 3365
                                                                                                                      // 3366
      if (notAdded) {                                                                                                 // 3367
        entriesArray.push(entryIndex);                                                                                // 3368
      } else {                                                                                                        // 3369
        entriesArray.splice(index, 1);                                                                                // 3370
      }                                                                                                               // 3371
                                                                                                                      // 3372
      select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active');                         // 3373
                                                                                                                      // 3374
      // use notAdded instead of true (to detect if the option is selected or not)                                    // 3375
      select.find('option').eq(entryIndex).prop('selected', notAdded);                                                // 3376
      setValueToInput(entriesArray, select);                                                                          // 3377
                                                                                                                      // 3378
      return notAdded;                                                                                                // 3379
    }                                                                                                                 // 3380
                                                                                                                      // 3381
    function setValueToInput(entriesArray, select) {                                                                  // 3382
      var value = '';                                                                                                 // 3383
                                                                                                                      // 3384
      for (var i = 0, count = entriesArray.length; i < count; i++) {                                                  // 3385
        var text = select.find('option').eq(entriesArray[i]).text();                                                  // 3386
                                                                                                                      // 3387
        i === 0 ? value += text : value += ', ' + text;                                                               // 3388
      }                                                                                                               // 3389
                                                                                                                      // 3390
      if (value === '') {                                                                                             // 3391
        value = select.find('option:disabled').eq(0).text();                                                          // 3392
      }                                                                                                               // 3393
                                                                                                                      // 3394
      select.siblings('input.select-dropdown').val(value);                                                            // 3395
    }                                                                                                                 // 3396
  };                                                                                                                  // 3397
                                                                                                                      // 3398
}( jQuery ));                                                                                                         // 3399
;(function ($) {                                                                                                      // 3400
                                                                                                                      // 3401
  var methods = {                                                                                                     // 3402
                                                                                                                      // 3403
    init : function(options) {                                                                                        // 3404
      var defaults = {                                                                                                // 3405
        indicators: true,                                                                                             // 3406
        height: 400,                                                                                                  // 3407
        transition: 500,                                                                                              // 3408
        interval: 6000                                                                                                // 3409
      };                                                                                                              // 3410
      options = $.extend(defaults, options);                                                                          // 3411
                                                                                                                      // 3412
      return this.each(function() {                                                                                   // 3413
                                                                                                                      // 3414
        // For each slider, we want to keep track of                                                                  // 3415
        // which slide is active and its associated content                                                           // 3416
        var $this = $(this);                                                                                          // 3417
        var $slider = $this.find('ul.slides').first();                                                                // 3418
        var $slides = $slider.find('> li');                                                                           // 3419
        var $active_index = $slider.find('.active').index();                                                          // 3420
        var $active, $indicators, $interval;                                                                          // 3421
        if ($active_index != -1) { $active = $slides.eq($active_index); }                                             // 3422
                                                                                                                      // 3423
        // Transitions the caption depending on alignment                                                             // 3424
        function captionTransition(caption, duration) {                                                               // 3425
          if (caption.hasClass("center-align")) {                                                                     // 3426
            caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});                     // 3427
          }                                                                                                           // 3428
          else if (caption.hasClass("right-align")) {                                                                 // 3429
            caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});                      // 3430
          }                                                                                                           // 3431
          else if (caption.hasClass("left-align")) {                                                                  // 3432
            caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});                     // 3433
          }                                                                                                           // 3434
        }                                                                                                             // 3435
                                                                                                                      // 3436
        // This function will transition the slide to any index of the next slide                                     // 3437
        function moveToSlide(index) {                                                                                 // 3438
          // Wrap around indices.                                                                                     // 3439
          if (index >= $slides.length) index = 0;                                                                     // 3440
          else if (index < 0) index = $slides.length -1;                                                              // 3441
                                                                                                                      // 3442
          $active_index = $slider.find('.active').index();                                                            // 3443
                                                                                                                      // 3444
          // Only do if index changes                                                                                 // 3445
          if ($active_index != index) {                                                                               // 3446
            $active = $slides.eq($active_index);                                                                      // 3447
            $caption = $active.find('.caption');                                                                      // 3448
                                                                                                                      // 3449
            $active.removeClass('active');                                                                            // 3450
            $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',        // 3451
                              complete: function() {                                                                  // 3452
                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                              } });                                                                                   // 3454
            captionTransition($caption, options.transition);                                                          // 3455
                                                                                                                      // 3456
                                                                                                                      // 3457
            // Update indicators                                                                                      // 3458
            if (options.indicators) {                                                                                 // 3459
              $indicators.eq($active_index).removeClass('active');                                                    // 3460
            }                                                                                                         // 3461
                                                                                                                      // 3462
            $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).addClass('active');                                                                     // 3465
                                                                                                                      // 3466
                                                                                                                      // 3467
            // Update indicators                                                                                      // 3468
            if (options.indicators) {                                                                                 // 3469
              $indicators.eq(index).addClass('active');                                                               // 3470
            }                                                                                                         // 3471
          }                                                                                                           // 3472
        }                                                                                                             // 3473
                                                                                                                      // 3474
        // Set height of slider                                                                                       // 3475
        // If fullscreen, do nothing                                                                                  // 3476
        if (!$this.hasClass('fullscreen')) {                                                                          // 3477
          if (options.indicators) {                                                                                   // 3478
            // Add height if indicators are present                                                                   // 3479
            $this.height(options.height + 40);                                                                        // 3480
          }                                                                                                           // 3481
          else {                                                                                                      // 3482
            $this.height(options.height);                                                                             // 3483
          }                                                                                                           // 3484
          $slider.height(options.height);                                                                             // 3485
        }                                                                                                             // 3486
                                                                                                                      // 3487
                                                                                                                      // 3488
        // Set initial positions of captions                                                                          // 3489
        $slides.find('.caption').each(function () {                                                                   // 3490
          captionTransition($(this), 0);                                                                              // 3491
        });                                                                                                           // 3492
                                                                                                                      // 3493
        // Move img src into background-image                                                                         // 3494
        $slides.find('img').each(function () {                                                                        // 3495
          var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
          if ($(this).attr('src') !== placeholderBase64) {                                                            // 3497
            $(this).css('background-image', 'url(' + $(this).attr('src') + ')' );                                     // 3498
            $(this).attr('src', placeholderBase64);                                                                   // 3499
          }                                                                                                           // 3500
        });                                                                                                           // 3501
                                                                                                                      // 3502
        // dynamically add indicators                                                                                 // 3503
        if (options.indicators) {                                                                                     // 3504
          $indicators = $('<ul class="indicators"></ul>');                                                            // 3505
          $slides.each(function( index ) {                                                                            // 3506
            var $indicator = $('<li class="indicator-item"></li>');                                                   // 3507
                                                                                                                      // 3508
            // Handle clicks on indicators                                                                            // 3509
            $indicator.click(function () {                                                                            // 3510
              var $parent = $slider.parent();                                                                         // 3511
              var curr_index = $parent.find($(this)).index();                                                         // 3512
              moveToSlide(curr_index);                                                                                // 3513
                                                                                                                      // 3514
              // reset interval                                                                                       // 3515
              clearInterval($interval);                                                                               // 3516
              $interval = setInterval(                                                                                // 3517
                function(){                                                                                           // 3518
                  $active_index = $slider.find('.active').index();                                                    // 3519
                  if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                        // 3520
                  else $active_index += 1;                                                                            // 3521
                                                                                                                      // 3522
                  moveToSlide($active_index);                                                                         // 3523
                                                                                                                      // 3524
                }, options.transition + options.interval                                                              // 3525
              );                                                                                                      // 3526
            });                                                                                                       // 3527
            $indicators.append($indicator);                                                                           // 3528
          });                                                                                                         // 3529
          $this.append($indicators);                                                                                  // 3530
          $indicators = $this.find('ul.indicators').find('li.indicator-item');                                        // 3531
        }                                                                                                             // 3532
                                                                                                                      // 3533
        if ($active) {                                                                                                // 3534
          $active.show();                                                                                             // 3535
        }                                                                                                             // 3536
        else {                                                                                                        // 3537
          $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
                                                                                                                      // 3539
          $active_index = 0;                                                                                          // 3540
          $active = $slides.eq($active_index);                                                                        // 3541
                                                                                                                      // 3542
          // Update indicators                                                                                        // 3543
          if (options.indicators) {                                                                                   // 3544
            $indicators.eq($active_index).addClass('active');                                                         // 3545
          }                                                                                                           // 3546
        }                                                                                                             // 3547
                                                                                                                      // 3548
        // Adjust height to current slide                                                                             // 3549
        $active.find('img').each(function() {                                                                         // 3550
          $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
        });                                                                                                           // 3552
                                                                                                                      // 3553
        // auto scroll                                                                                                // 3554
        $interval = setInterval(                                                                                      // 3555
          function(){                                                                                                 // 3556
            $active_index = $slider.find('.active').index();                                                          // 3557
            moveToSlide($active_index + 1);                                                                           // 3558
                                                                                                                      // 3559
          }, options.transition + options.interval                                                                    // 3560
        );                                                                                                            // 3561
                                                                                                                      // 3562
                                                                                                                      // 3563
        // HammerJS, Swipe navigation                                                                                 // 3564
                                                                                                                      // 3565
        // Touch Event                                                                                                // 3566
        var panning = false;                                                                                          // 3567
        var swipeLeft = false;                                                                                        // 3568
        var swipeRight = false;                                                                                       // 3569
                                                                                                                      // 3570
        $this.hammer({                                                                                                // 3571
            prevent_default: false                                                                                    // 3572
        }).bind('pan', function(e) {                                                                                  // 3573
          if (e.gesture.pointerType === "touch") {                                                                    // 3574
                                                                                                                      // 3575
            // reset interval                                                                                         // 3576
            clearInterval($interval);                                                                                 // 3577
                                                                                                                      // 3578
            var direction = e.gesture.direction;                                                                      // 3579
            var x = e.gesture.deltaX;                                                                                 // 3580
            var velocityX = e.gesture.velocityX;                                                                      // 3581
                                                                                                                      // 3582
            $curr_slide = $slider.find('.active');                                                                    // 3583
            $curr_slide.velocity({ translateX: x                                                                      // 3584
                }, {duration: 50, queue: false, easing: 'easeOutQuad'});                                              // 3585
                                                                                                                      // 3586
            // Swipe Left                                                                                             // 3587
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {                             // 3588
              swipeRight = true;                                                                                      // 3589
            }                                                                                                         // 3590
            // Swipe Right                                                                                            // 3591
            else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {                    // 3592
              swipeLeft = true;                                                                                       // 3593
            }                                                                                                         // 3594
                                                                                                                      // 3595
            // Make Slide Behind active slide visible                                                                 // 3596
            var next_slide;                                                                                           // 3597
            if (swipeLeft) {                                                                                          // 3598
              next_slide = $curr_slide.next();                                                                        // 3599
              if (next_slide.length === 0) {                                                                          // 3600
                next_slide = $slides.first();                                                                         // 3601
              }                                                                                                       // 3602
              next_slide.velocity({ opacity: 1                                                                        // 3603
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                           // 3604
            }                                                                                                         // 3605
            if (swipeRight) {                                                                                         // 3606
              next_slide = $curr_slide.prev();                                                                        // 3607
              if (next_slide.length === 0) {                                                                          // 3608
                next_slide = $slides.last();                                                                          // 3609
              }                                                                                                       // 3610
              next_slide.velocity({ opacity: 1                                                                        // 3611
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                           // 3612
            }                                                                                                         // 3613
                                                                                                                      // 3614
                                                                                                                      // 3615
          }                                                                                                           // 3616
                                                                                                                      // 3617
        }).bind('panend', function(e) {                                                                               // 3618
          if (e.gesture.pointerType === "touch") {                                                                    // 3619
                                                                                                                      // 3620
            $curr_slide = $slider.find('.active');                                                                    // 3621
            panning = false;                                                                                          // 3622
            curr_index = $slider.find('.active').index();                                                             // 3623
                                                                                                                      // 3624
            if (!swipeRight && !swipeLeft || $slides.length <=1) {                                                    // 3625
              // Return to original spot                                                                              // 3626
              $curr_slide.velocity({ translateX: 0                                                                    // 3627
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                           // 3628
            }                                                                                                         // 3629
            else if (swipeLeft) {                                                                                     // 3630
              moveToSlide(curr_index + 1);                                                                            // 3631
              $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {                                                            // 3633
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });                                                                             // 3635
            }                                                                                                         // 3636
            else if (swipeRight) {                                                                                    // 3637
              moveToSlide(curr_index - 1);                                                                            // 3638
              $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {                                                            // 3640
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });                                                                             // 3642
            }                                                                                                         // 3643
            swipeLeft = false;                                                                                        // 3644
            swipeRight = false;                                                                                       // 3645
                                                                                                                      // 3646
            // Restart interval                                                                                       // 3647
            clearInterval($interval);                                                                                 // 3648
            $interval = setInterval(                                                                                  // 3649
              function(){                                                                                             // 3650
                $active_index = $slider.find('.active').index();                                                      // 3651
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                          // 3652
                else $active_index += 1;                                                                              // 3653
                                                                                                                      // 3654
                moveToSlide($active_index);                                                                           // 3655
                                                                                                                      // 3656
              }, options.transition + options.interval                                                                // 3657
            );                                                                                                        // 3658
          }                                                                                                           // 3659
        });                                                                                                           // 3660
                                                                                                                      // 3661
        $this.on('sliderPause', function() {                                                                          // 3662
          clearInterval($interval);                                                                                   // 3663
        });                                                                                                           // 3664
                                                                                                                      // 3665
        $this.on('sliderStart', function() {                                                                          // 3666
          clearInterval($interval);                                                                                   // 3667
          $interval = setInterval(                                                                                    // 3668
            function(){                                                                                               // 3669
              $active_index = $slider.find('.active').index();                                                        // 3670
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                            // 3671
              else $active_index += 1;                                                                                // 3672
                                                                                                                      // 3673
              moveToSlide($active_index);                                                                             // 3674
                                                                                                                      // 3675
            }, options.transition + options.interval                                                                  // 3676
          );                                                                                                          // 3677
        });                                                                                                           // 3678
                                                                                                                      // 3679
        $this.on('sliderNext', function() {                                                                           // 3680
          $active_index = $slider.find('.active').index();                                                            // 3681
          moveToSlide($active_index + 1);                                                                             // 3682
        });                                                                                                           // 3683
                                                                                                                      // 3684
        $this.on('sliderPrev', function() {                                                                           // 3685
          $active_index = $slider.find('.active').index();                                                            // 3686
          moveToSlide($active_index - 1);                                                                             // 3687
        });                                                                                                           // 3688
                                                                                                                      // 3689
      });                                                                                                             // 3690
                                                                                                                      // 3691
                                                                                                                      // 3692
                                                                                                                      // 3693
    },                                                                                                                // 3694
    pause : function() {                                                                                              // 3695
      $(this).trigger('sliderPause');                                                                                 // 3696
    },                                                                                                                // 3697
    start : function() {                                                                                              // 3698
      $(this).trigger('sliderStart');                                                                                 // 3699
    },                                                                                                                // 3700
    next : function() {                                                                                               // 3701
      $(this).trigger('sliderNext');                                                                                  // 3702
    },                                                                                                                // 3703
    prev : function() {                                                                                               // 3704
      $(this).trigger('sliderPrev');                                                                                  // 3705
    }                                                                                                                 // 3706
  };                                                                                                                  // 3707
                                                                                                                      // 3708
                                                                                                                      // 3709
    $.fn.slider = function(methodOrOptions) {                                                                         // 3710
      if ( methods[methodOrOptions] ) {                                                                               // 3711
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                   // 3712
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                        // 3713
        // Default to "init"                                                                                          // 3714
        return methods.init.apply( this, arguments );                                                                 // 3715
      } else {                                                                                                        // 3716
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );                                // 3717
      }                                                                                                               // 3718
    }; // Plugin end                                                                                                  // 3719
}( jQuery ));                                                                                                         // 3720
;(function ($) {                                                                                                      // 3721
  $(document).ready(function() {                                                                                      // 3722
                                                                                                                      // 3723
    $(document).on('click.card', '.card', function (e) {                                                              // 3724
      if ($(this).find('> .card-reveal').length) {                                                                    // 3725
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {       // 3726
          // Make Reveal animate down and display none                                                                // 3727
          $(this).find('.card-reveal').velocity(                                                                      // 3728
            {translateY: 0}, {                                                                                        // 3729
              duration: 225,                                                                                          // 3730
              queue: false,                                                                                           // 3731
              easing: 'easeInOutQuad',                                                                                // 3732
              complete: function() { $(this).css({ display: 'none'}); }                                               // 3733
            }                                                                                                         // 3734
          );                                                                                                          // 3735
        }                                                                                                             // 3736
        else if ($(e.target).is($('.card .activator')) ||                                                             // 3737
                 $(e.target).is($('.card .activator i')) ) {                                                          // 3738
          $(e.target).closest('.card').css('overflow', 'hidden');                                                     // 3739
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }                                                                                                             // 3741
      }                                                                                                               // 3742
    });                                                                                                               // 3743
                                                                                                                      // 3744
  });                                                                                                                 // 3745
}( jQuery ));;(function ($) {                                                                                         // 3746
  var chipsHandleEvents = false;                                                                                      // 3747
  var materialChipsDefaults = {                                                                                       // 3748
    data: [],                                                                                                         // 3749
    placeholder: '',                                                                                                  // 3750
    secondaryPlaceholder: '',                                                                                         // 3751
  };                                                                                                                  // 3752
                                                                                                                      // 3753
  $(document).ready(function(){                                                                                       // 3754
    // Handle removal of static chips.                                                                                // 3755
    $(document).on('click', '.chip .close', function(e){                                                              // 3756
      var $chips = $(this).closest('.chips');                                                                         // 3757
      if ($chips.data('initialized')) {                                                                               // 3758
        return;                                                                                                       // 3759
      }                                                                                                               // 3760
      $(this).closest('.chip').remove();                                                                              // 3761
    });                                                                                                               // 3762
  });                                                                                                                 // 3763
                                                                                                                      // 3764
  $.fn.material_chip = function (options) {                                                                           // 3765
    var self = this;                                                                                                  // 3766
    this.$el = $(this);                                                                                               // 3767
    this.$document = $(document);                                                                                     // 3768
    this.SELS = {                                                                                                     // 3769
      CHIPS: '.chips',                                                                                                // 3770
      CHIP: '.chip',                                                                                                  // 3771
      INPUT: 'input',                                                                                                 // 3772
      DELETE: '.material-icons',                                                                                      // 3773
      SELECTED_CHIP: '.selected',                                                                                     // 3774
    };                                                                                                                // 3775
                                                                                                                      // 3776
    if ('data' === options) {                                                                                         // 3777
      return this.$el.data('chips');                                                                                  // 3778
    }                                                                                                                 // 3779
                                                                                                                      // 3780
    if ('options' === options) {                                                                                      // 3781
      return this.$el.data('options');                                                                                // 3782
    }                                                                                                                 // 3783
                                                                                                                      // 3784
    this.$el.data('options', $.extend({}, materialChipsDefaults, options));                                           // 3785
                                                                                                                      // 3786
    // Initialize                                                                                                     // 3787
    this.init = function() {                                                                                          // 3788
      var i = 0;                                                                                                      // 3789
      var chips;                                                                                                      // 3790
      self.$el.each(function(){                                                                                       // 3791
        var $chips = $(this);                                                                                         // 3792
        if ($chips.data('initialized')) {                                                                             // 3793
          // Prevent double initialization.                                                                           // 3794
          return;                                                                                                     // 3795
        }                                                                                                             // 3796
        var options = $chips.data('options');                                                                         // 3797
        if (!options.data || !options.data instanceof Array) {                                                        // 3798
          options.data = [];                                                                                          // 3799
        }                                                                                                             // 3800
        $chips.data('chips', options.data);                                                                           // 3801
        $chips.data('index', i);                                                                                      // 3802
        $chips.data('initialized', true);                                                                             // 3803
                                                                                                                      // 3804
        if (!$chips.hasClass(self.SELS.CHIPS)) {                                                                      // 3805
          $chips.addClass('chips');                                                                                   // 3806
        }                                                                                                             // 3807
                                                                                                                      // 3808
        self.chips($chips);                                                                                           // 3809
        i++;                                                                                                          // 3810
      });                                                                                                             // 3811
    };                                                                                                                // 3812
                                                                                                                      // 3813
    this.handleEvents = function(){                                                                                   // 3814
      var SELS = self.SELS;                                                                                           // 3815
                                                                                                                      // 3816
      self.$document.on('click', SELS.CHIPS, function(e){                                                             // 3817
        $(e.target).find(SELS.INPUT).focus();                                                                         // 3818
      });                                                                                                             // 3819
                                                                                                                      // 3820
      self.$document.on('click', SELS.CHIP, function(e){                                                              // 3821
        $(SELS.CHIP).removeClass('selected');                                                                         // 3822
        $(this).toggleClass('selected');                                                                              // 3823
      });                                                                                                             // 3824
                                                                                                                      // 3825
      self.$document.on('keydown', function(e){                                                                       // 3826
        if ($(e.target).is('input, textarea')) {                                                                      // 3827
          return;                                                                                                     // 3828
        }                                                                                                             // 3829
                                                                                                                      // 3830
        // delete                                                                                                     // 3831
        var $chip = self.$document.find(SELS.CHIP + SELS.SELECTED_CHIP);                                              // 3832
        var $chips = $chip.closest(SELS.CHIPS);                                                                       // 3833
        var length = $chip.siblings(SELS.CHIP).length;                                                                // 3834
        var index;                                                                                                    // 3835
                                                                                                                      // 3836
        if (!$chip.length) {                                                                                          // 3837
          return;                                                                                                     // 3838
        }                                                                                                             // 3839
                                                                                                                      // 3840
        if (e.which === 8 || e.which === 46) {                                                                        // 3841
          e.preventDefault();                                                                                         // 3842
          var chipsIndex = $chips.data('index');                                                                      // 3843
                                                                                                                      // 3844
          index = $chip.index();                                                                                      // 3845
          self.deleteChip(chipsIndex, index, $chips);                                                                 // 3846
                                                                                                                      // 3847
          var selectIndex = null;                                                                                     // 3848
          if ((index + 1) < length) {                                                                                 // 3849
            selectIndex = index;                                                                                      // 3850
          } else if (index === length || (index + 1) === length) {                                                    // 3851
            selectIndex = length - 1;                                                                                 // 3852
          }                                                                                                           // 3853
                                                                                                                      // 3854
          if (selectIndex < 0) selectIndex = null;                                                                    // 3855
                                                                                                                      // 3856
          if (null !== selectIndex) {                                                                                 // 3857
            self.selectChip(chipsIndex, selectIndex, $chips);                                                         // 3858
          }                                                                                                           // 3859
          if (!length) $chips.find('input').focus();                                                                  // 3860
                                                                                                                      // 3861
        // left                                                                                                       // 3862
        } else if (e.which === 37) {                                                                                  // 3863
          index = $chip.index() - 1;                                                                                  // 3864
          if (index < 0) {                                                                                            // 3865
            return;                                                                                                   // 3866
          }                                                                                                           // 3867
          $(SELS.CHIP).removeClass('selected');                                                                       // 3868
          self.selectChip($chips.data('index'), index, $chips);                                                       // 3869
                                                                                                                      // 3870
        // right                                                                                                      // 3871
        } else if (e.which === 39) {                                                                                  // 3872
          index = $chip.index() + 1;                                                                                  // 3873
          $(SELS.CHIP).removeClass('selected');                                                                       // 3874
          if (index > length) {                                                                                       // 3875
            $chips.find('input').focus();                                                                             // 3876
            return;                                                                                                   // 3877
          }                                                                                                           // 3878
          self.selectChip($chips.data('index'), index, $chips);                                                       // 3879
        }                                                                                                             // 3880
      });                                                                                                             // 3881
                                                                                                                      // 3882
      self.$document.on('focusin', SELS.CHIPS + ' ' + SELS.INPUT, function(e){                                        // 3883
        $(e.target).closest(SELS.CHIPS).addClass('focus');                                                            // 3884
        $(SELS.CHIP).removeClass('selected');                                                                         // 3885
      });                                                                                                             // 3886
                                                                                                                      // 3887
      self.$document.on('focusout', SELS.CHIPS + ' ' + SELS.INPUT, function(e){                                       // 3888
        $(e.target).closest(SELS.CHIPS).removeClass('focus');                                                         // 3889
      });                                                                                                             // 3890
                                                                                                                      // 3891
      self.$document.on('keydown', SELS.CHIPS + ' ' + SELS.INPUT, function(e){                                        // 3892
        var $target = $(e.target);                                                                                    // 3893
        var $chips = $target.closest(SELS.CHIPS);                                                                     // 3894
        var chipsIndex = $chips.data('index');                                                                        // 3895
        var chipsLength = $chips.children(SELS.CHIP).length;                                                          // 3896
                                                                                                                      // 3897
        // enter                                                                                                      // 3898
        if (13 === e.which) {                                                                                         // 3899
          e.preventDefault();                                                                                         // 3900
          self.addChip(chipsIndex, {tag: $target.val()}, $chips);                                                     // 3901
          $target.val('');                                                                                            // 3902
          return;                                                                                                     // 3903
        }                                                                                                             // 3904
                                                                                                                      // 3905
        // delete or left                                                                                             // 3906
         if ((8 === e.keyCode || 37 === e.keyCode) && '' === $target.val() && chipsLength) {                          // 3907
          self.selectChip(chipsIndex, chipsLength - 1, $chips);                                                       // 3908
          $target.blur();                                                                                             // 3909
          return;                                                                                                     // 3910
        }                                                                                                             // 3911
      });                                                                                                             // 3912
                                                                                                                      // 3913
      self.$document.on('click', SELS.CHIPS + ' ' + SELS.DELETE, function(e) {                                        // 3914
        var $target = $(e.target);                                                                                    // 3915
        var $chips = $target.closest(SELS.CHIPS);                                                                     // 3916
        var $chip = $target.closest(SELS.CHIP);                                                                       // 3917
        e.stopPropagation();                                                                                          // 3918
        self.deleteChip(                                                                                              // 3919
          $chips.data('index'),                                                                                       // 3920
          $chip.index(),                                                                                              // 3921
          $chips                                                                                                      // 3922
        );                                                                                                            // 3923
        $chips.find('input').focus();                                                                                 // 3924
      });                                                                                                             // 3925
    };                                                                                                                // 3926
                                                                                                                      // 3927
    this.chips = function($chips) {                                                                                   // 3928
      var html = '';                                                                                                  // 3929
      var options = $chips.data('options');                                                                           // 3930
      $chips.data('chips').forEach(function(elem){                                                                    // 3931
        html += self.renderChip(elem);                                                                                // 3932
      });                                                                                                             // 3933
      html += '<input class="input" placeholder="">';                                                                 // 3934
      $chips.html(html);                                                                                              // 3935
      self.setPlaceholder($chips);                                                                                    // 3936
    };                                                                                                                // 3937
                                                                                                                      // 3938
    this.renderChip = function(elem) {                                                                                // 3939
      if (!elem.tag) return;                                                                                          // 3940
                                                                                                                      // 3941
      var html = '<div class="chip">' + elem.tag;                                                                     // 3942
      if (elem.image) {                                                                                               // 3943
        html += ' <img src="' + elem.image + '"> ';                                                                   // 3944
      }                                                                                                               // 3945
      html += '<i class="material-icons close">close</i>';                                                            // 3946
      html += '</div>';                                                                                               // 3947
      return html;                                                                                                    // 3948
    };                                                                                                                // 3949
                                                                                                                      // 3950
    this.setPlaceholder = function($chips) {                                                                          // 3951
      var options = $chips.data('options');                                                                           // 3952
      if ($chips.data('chips').length && options.placeholder) {                                                       // 3953
        $chips.find('input').prop('placeholder', options.placeholder);                                                // 3954
      } else if (!$chips.data('chips').length && options.secondaryPlaceholder) {                                      // 3955
        $chips.find('input').prop('placeholder', options.secondaryPlaceholder);                                       // 3956
      }                                                                                                               // 3957
    };                                                                                                                // 3958
                                                                                                                      // 3959
    this.isValid = function($chips, elem) {                                                                           // 3960
      var chips = $chips.data('chips');                                                                               // 3961
      var exists = false;                                                                                             // 3962
      for (var i=0; i < chips.length; i++) {                                                                          // 3963
        if (chips[i].tag === elem.tag) {                                                                              // 3964
            exists = true;                                                                                            // 3965
            return;                                                                                                   // 3966
        }                                                                                                             // 3967
      }                                                                                                               // 3968
      return '' !== elem.tag && !exists;                                                                              // 3969
    };                                                                                                                // 3970
                                                                                                                      // 3971
    this.addChip = function(chipsIndex, elem, $chips) {                                                               // 3972
      if (!self.isValid($chips, elem)) {                                                                              // 3973
        return;                                                                                                       // 3974
      }                                                                                                               // 3975
      var options = $chips.data('options');                                                                           // 3976
      var chipHtml = self.renderChip(elem);                                                                           // 3977
      $chips.data('chips').push(elem);                                                                                // 3978
      $(chipHtml).insertBefore($chips.find('input'));                                                                 // 3979
      $chips.trigger('chip.add', elem);                                                                               // 3980
      self.setPlaceholder($chips);                                                                                    // 3981
    };                                                                                                                // 3982
                                                                                                                      // 3983
    this.deleteChip = function(chipsIndex, chipIndex, $chips) {                                                       // 3984
      var chip = $chips.data('chips')[chipIndex];                                                                     // 3985
      $chips.find('.chip').eq(chipIndex).remove();                                                                    // 3986
      $chips.data('chips').splice(chipIndex, 1);                                                                      // 3987
      $chips.trigger('chip.delete', chip);                                                                            // 3988
      self.setPlaceholder($chips);                                                                                    // 3989
    };                                                                                                                // 3990
                                                                                                                      // 3991
    this.selectChip = function(chipsIndex, chipIndex, $chips) {                                                       // 3992
      var $chip = $chips.find('.chip').eq(chipIndex);                                                                 // 3993
      if ($chip && false === $chip.hasClass('selected')) {                                                            // 3994
        $chip.addClass('selected');                                                                                   // 3995
        $chips.trigger('chip.select', $chips.data('chips')[chipIndex]);                                               // 3996
      }                                                                                                               // 3997
    };                                                                                                                // 3998
                                                                                                                      // 3999
    this.getChipsElement = function(index, $chips) {                                                                  // 4000
      return $chips.eq(index);                                                                                        // 4001
    };                                                                                                                // 4002
                                                                                                                      // 4003
    // init                                                                                                           // 4004
    this.init();                                                                                                      // 4005
                                                                                                                      // 4006
    if (!chipsHandleEvents) {                                                                                         // 4007
      this.handleEvents();                                                                                            // 4008
      chipsHandleEvents = true;                                                                                       // 4009
    }                                                                                                                 // 4010
  };                                                                                                                  // 4011
}( jQuery ));;(function ($) {                                                                                         // 4012
  $.fn.pushpin = function (options) {                                                                                 // 4013
    // Defaults                                                                                                       // 4014
    var defaults = {                                                                                                  // 4015
      top: 0,                                                                                                         // 4016
      bottom: Infinity,                                                                                               // 4017
      offset: 0                                                                                                       // 4018
    };                                                                                                                // 4019
                                                                                                                      // 4020
    // Remove pushpin event and classes                                                                               // 4021
    if (options === "remove") {                                                                                       // 4022
      this.each(function () {                                                                                         // 4023
        if (id = $(this).data('pushpin-id')) {                                                                        // 4024
          $(window).off('scroll.' + id);                                                                              // 4025
          $(this).removeData('pushpin-id').removeClass('pin-top pinned pin-bottom').removeAttr('style');              // 4026
        }                                                                                                             // 4027
      });                                                                                                             // 4028
      return false;                                                                                                   // 4029
    }                                                                                                                 // 4030
                                                                                                                      // 4031
    options = $.extend(defaults, options);                                                                            // 4032
                                                                                                                      // 4033
                                                                                                                      // 4034
    $index = 0;                                                                                                       // 4035
    return this.each(function() {                                                                                     // 4036
      var $uniqueId = Materialize.guid(),                                                                             // 4037
          $this = $(this),                                                                                            // 4038
          $original_offset = $(this).offset().top;                                                                    // 4039
                                                                                                                      // 4040
      function removePinClasses(object) {                                                                             // 4041
        object.removeClass('pin-top');                                                                                // 4042
        object.removeClass('pinned');                                                                                 // 4043
        object.removeClass('pin-bottom');                                                                             // 4044
      }                                                                                                               // 4045
                                                                                                                      // 4046
      function updateElements(objects, scrolled) {                                                                    // 4047
        objects.each(function () {                                                                                    // 4048
          // Add position fixed (because its between top and bottom)                                                  // 4049
          if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {                 // 4050
            removePinClasses($(this));                                                                                // 4051
            $(this).css('top', options.offset);                                                                       // 4052
            $(this).addClass('pinned');                                                                               // 4053
          }                                                                                                           // 4054
                                                                                                                      // 4055
          // Add pin-top (when scrolled position is above top)                                                        // 4056
          if (scrolled < options.top && !$(this).hasClass('pin-top')) {                                               // 4057
            removePinClasses($(this));                                                                                // 4058
            $(this).css('top', 0);                                                                                    // 4059
            $(this).addClass('pin-top');                                                                              // 4060
          }                                                                                                           // 4061
                                                                                                                      // 4062
          // Add pin-bottom (when scrolled position is below bottom)                                                  // 4063
          if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {                                         // 4064
            removePinClasses($(this));                                                                                // 4065
            $(this).addClass('pin-bottom');                                                                           // 4066
            $(this).css('top', options.bottom - $original_offset);                                                    // 4067
          }                                                                                                           // 4068
        });                                                                                                           // 4069
      }                                                                                                               // 4070
                                                                                                                      // 4071
      $(this).data('pushpin-id', $uniqueId);                                                                          // 4072
      updateElements($this, $(window).scrollTop());                                                                   // 4073
      $(window).on('scroll.' + $uniqueId, function () {                                                               // 4074
        var $scrolled = $(window).scrollTop() + options.offset;                                                       // 4075
        updateElements($this, $scrolled);                                                                             // 4076
      });                                                                                                             // 4077
                                                                                                                      // 4078
    });                                                                                                               // 4079
                                                                                                                      // 4080
  };                                                                                                                  // 4081
}( jQuery ));;(function ($) {                                                                                         // 4082
  $(document).ready(function() {                                                                                      // 4083
                                                                                                                      // 4084
    // jQuery reverse                                                                                                 // 4085
    $.fn.reverse = [].reverse;                                                                                        // 4086
                                                                                                                      // 4087
    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!                                         // 4088
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {              // 4089
      var $this = $(this);                                                                                            // 4090
      openFABMenu($this);                                                                                             // 4091
    });                                                                                                               // 4092
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {              // 4093
      var $this = $(this);                                                                                            // 4094
      closeFABMenu($this);                                                                                            // 4095
    });                                                                                                               // 4096
                                                                                                                      // 4097
    // Toggle-on-click behaviour.                                                                                     // 4098
    $(document).on('click.fixedActionBtn', '.fixed-action-btn.click-to-toggle > a', function(e) {                     // 4099
      var $this = $(this);                                                                                            // 4100
      var $menu = $this.parent();                                                                                     // 4101
      if ($menu.hasClass('active')) {                                                                                 // 4102
        closeFABMenu($menu);                                                                                          // 4103
      } else {                                                                                                        // 4104
        openFABMenu($menu);                                                                                           // 4105
      }                                                                                                               // 4106
    });                                                                                                               // 4107
                                                                                                                      // 4108
  });                                                                                                                 // 4109
                                                                                                                      // 4110
  $.fn.extend({                                                                                                       // 4111
    openFAB: function() {                                                                                             // 4112
      openFABMenu($(this));                                                                                           // 4113
    },                                                                                                                // 4114
    closeFAB: function() {                                                                                            // 4115
      closeFABMenu($(this));                                                                                          // 4116
    }                                                                                                                 // 4117
  });                                                                                                                 // 4118
                                                                                                                      // 4119
                                                                                                                      // 4120
  var openFABMenu = function (btn) {                                                                                  // 4121
    $this = btn;                                                                                                      // 4122
    if ($this.hasClass('active') === false) {                                                                         // 4123
                                                                                                                      // 4124
      // Get direction option                                                                                         // 4125
      var horizontal = $this.hasClass('horizontal');                                                                  // 4126
      var offsetY, offsetX;                                                                                           // 4127
                                                                                                                      // 4128
      if (horizontal === true) {                                                                                      // 4129
        offsetX = 40;                                                                                                 // 4130
      } else {                                                                                                        // 4131
        offsetY = 40;                                                                                                 // 4132
      }                                                                                                               // 4133
                                                                                                                      // 4134
      $this.addClass('active');                                                                                       // 4135
      $this.find('ul .btn-floating').velocity(                                                                        // 4136
        { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},                        // 4137
        { duration: 0 });                                                                                             // 4138
                                                                                                                      // 4139
      var time = 0;                                                                                                   // 4140
      $this.find('ul .btn-floating').reverse().each( function () {                                                    // 4141
        $(this).velocity(                                                                                             // 4142
          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},                                // 4143
          { duration: 80, delay: time });                                                                             // 4144
        time += 40;                                                                                                   // 4145
      });                                                                                                             // 4146
    }                                                                                                                 // 4147
  };                                                                                                                  // 4148
                                                                                                                      // 4149
  var closeFABMenu = function (btn) {                                                                                 // 4150
    $this = btn;                                                                                                      // 4151
    // Get direction option                                                                                           // 4152
    var horizontal = $this.hasClass('horizontal');                                                                    // 4153
    var offsetY, offsetX;                                                                                             // 4154
                                                                                                                      // 4155
    if (horizontal === true) {                                                                                        // 4156
      offsetX = 40;                                                                                                   // 4157
    } else {                                                                                                          // 4158
      offsetY = 40;                                                                                                   // 4159
    }                                                                                                                 // 4160
                                                                                                                      // 4161
    $this.removeClass('active');                                                                                      // 4162
    var time = 0;                                                                                                     // 4163
    $this.find('ul .btn-floating').velocity("stop", true);                                                            // 4164
    $this.find('ul .btn-floating').velocity(                                                                          // 4165
      { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},            // 4166
      { duration: 80 }                                                                                                // 4167
    );                                                                                                                // 4168
  };                                                                                                                  // 4169
                                                                                                                      // 4170
                                                                                                                      // 4171
}( jQuery ));                                                                                                         // 4172
;(function ($) {                                                                                                      // 4173
  // Image transition function                                                                                        // 4174
  Materialize.fadeInImage =  function(selectorOrEl) {                                                                 // 4175
    var element;                                                                                                      // 4176
    if (typeof(selectorOrEl) === 'string') {                                                                          // 4177
      element = $(selectorOrEl);                                                                                      // 4178
    } else if (typeof(selectorOrEl) === 'object') {                                                                   // 4179
      element = selectorOrEl;                                                                                         // 4180
    } else {                                                                                                          // 4181
      return;                                                                                                         // 4182
    }                                                                                                                 // 4183
    element.css({opacity: 0});                                                                                        // 4184
    $(element).velocity({opacity: 1}, {                                                                               // 4185
        duration: 650,                                                                                                // 4186
        queue: false,                                                                                                 // 4187
        easing: 'easeOutSine'                                                                                         // 4188
      });                                                                                                             // 4189
    $(element).velocity({opacity: 1}, {                                                                               // 4190
          duration: 1300,                                                                                             // 4191
          queue: false,                                                                                               // 4192
          easing: 'swing',                                                                                            // 4193
          step: function(now, fx) {                                                                                   // 4194
              fx.start = 100;                                                                                         // 4195
              var grayscale_setting = now/100;                                                                        // 4196
              var brightness_setting = 150 - (100 - now)/1.75;                                                        // 4197
                                                                                                                      // 4198
              if (brightness_setting < 100) {                                                                         // 4199
                brightness_setting = 100;                                                                             // 4200
              }                                                                                                       // 4201
              if (now >= 0) {                                                                                         // 4202
                $(this).css({                                                                                         // 4203
                    "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",     // 4204
                    "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"              // 4205
                });                                                                                                   // 4206
              }                                                                                                       // 4207
          }                                                                                                           // 4208
      });                                                                                                             // 4209
  };                                                                                                                  // 4210
                                                                                                                      // 4211
  // Horizontal staggered list                                                                                        // 4212
  Materialize.showStaggeredList = function(selectorOrEl) {                                                            // 4213
    var element;                                                                                                      // 4214
    if (typeof(selectorOrEl) === 'string') {                                                                          // 4215
      element = $(selectorOrEl);                                                                                      // 4216
    } else if (typeof(selectorOrEl) === 'object') {                                                                   // 4217
      element = selectorOrEl;                                                                                         // 4218
    } else {                                                                                                          // 4219
      return;                                                                                                         // 4220
    }                                                                                                                 // 4221
    var time = 0;                                                                                                     // 4222
    element.find('li').velocity(                                                                                      // 4223
        { translateX: "-100px"},                                                                                      // 4224
        { duration: 0 });                                                                                             // 4225
                                                                                                                      // 4226
    element.find('li').each(function() {                                                                              // 4227
      $(this).velocity(                                                                                               // 4228
        { opacity: "1", translateX: "0"},                                                                             // 4229
        { duration: 800, delay: time, easing: [60, 10] });                                                            // 4230
      time += 120;                                                                                                    // 4231
    });                                                                                                               // 4232
  };                                                                                                                  // 4233
                                                                                                                      // 4234
                                                                                                                      // 4235
  $(document).ready(function() {                                                                                      // 4236
    // Hardcoded .staggered-list scrollFire                                                                           // 4237
    // var staggeredListOptions = [];                                                                                 // 4238
    // $('ul.staggered-list').each(function (i) {                                                                     // 4239
                                                                                                                      // 4240
    //   var label = 'scrollFire-' + i;                                                                               // 4241
    //   $(this).addClass(label);                                                                                     // 4242
    //   staggeredListOptions.push(                                                                                   // 4243
    //     {selector: 'ul.staggered-list.' + label,                                                                   // 4244
    //      offset: 200,                                                                                              // 4245
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});                                       // 4246
    // });                                                                                                            // 4247
    // scrollFire(staggeredListOptions);                                                                              // 4248
                                                                                                                      // 4249
    // HammerJS, Swipe navigation                                                                                     // 4250
                                                                                                                      // 4251
    // Touch Event                                                                                                    // 4252
    var swipeLeft = false;                                                                                            // 4253
    var swipeRight = false;                                                                                           // 4254
                                                                                                                      // 4255
                                                                                                                      // 4256
    // Dismissible Collections                                                                                        // 4257
    $('.dismissable').each(function() {                                                                               // 4258
      $(this).hammer({                                                                                                // 4259
        prevent_default: false                                                                                        // 4260
      }).bind('pan', function(e) {                                                                                    // 4261
        if (e.gesture.pointerType === "touch") {                                                                      // 4262
          var $this = $(this);                                                                                        // 4263
          var direction = e.gesture.direction;                                                                        // 4264
          var x = e.gesture.deltaX;                                                                                   // 4265
          var velocityX = e.gesture.velocityX;                                                                        // 4266
                                                                                                                      // 4267
          $this.velocity({ translateX: x                                                                              // 4268
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});                                                // 4269
                                                                                                                      // 4270
          // Swipe Left                                                                                               // 4271
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {                               // 4272
            swipeLeft = true;                                                                                         // 4273
          }                                                                                                           // 4274
                                                                                                                      // 4275
          // Swipe Right                                                                                              // 4276
          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {                           // 4277
            swipeRight = true;                                                                                        // 4278
          }                                                                                                           // 4279
        }                                                                                                             // 4280
      }).bind('panend', function(e) {                                                                                 // 4281
        // Reset if collection is moved back into original position                                                   // 4282
        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {                                                // 4283
          swipeRight = false;                                                                                         // 4284
          swipeLeft = false;                                                                                          // 4285
        }                                                                                                             // 4286
                                                                                                                      // 4287
        if (e.gesture.pointerType === "touch") {                                                                      // 4288
          var $this = $(this);                                                                                        // 4289
          if (swipeLeft || swipeRight) {                                                                              // 4290
            var fullWidth;                                                                                            // 4291
            if (swipeLeft) { fullWidth = $this.innerWidth(); }                                                        // 4292
            else { fullWidth = -1 * $this.innerWidth(); }                                                             // 4293
                                                                                                                      // 4294
            $this.velocity({ translateX: fullWidth,                                                                   // 4295
              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:                                       // 4296
              function() {                                                                                            // 4297
                $this.css('border', 'none');                                                                          // 4298
                $this.velocity({ height: 0, padding: 0,                                                               // 4299
                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:                                   // 4300
                    function() { $this.remove(); }                                                                    // 4301
                  });                                                                                                 // 4302
              }                                                                                                       // 4303
            });                                                                                                       // 4304
          }                                                                                                           // 4305
          else {                                                                                                      // 4306
            $this.velocity({ translateX: 0,                                                                           // 4307
              }, {duration: 100, queue: false, easing: 'easeOutQuad'});                                               // 4308
          }                                                                                                           // 4309
          swipeLeft = false;                                                                                          // 4310
          swipeRight = false;                                                                                         // 4311
        }                                                                                                             // 4312
      });                                                                                                             // 4313
                                                                                                                      // 4314
    });                                                                                                               // 4315
                                                                                                                      // 4316
                                                                                                                      // 4317
    // time = 0                                                                                                       // 4318
    // // Vertical Staggered list                                                                                     // 4319
    // $('ul.staggered-list.vertical li').velocity(                                                                   // 4320
    //     { translateY: "100px"},                                                                                    // 4321
    //     { duration: 0 });                                                                                          // 4322
                                                                                                                      // 4323
    // $('ul.staggered-list.vertical li').each(function() {                                                           // 4324
    //   $(this).velocity(                                                                                            // 4325
    //     { opacity: "1", translateY: "0"},                                                                          // 4326
    //     { duration: 800, delay: time, easing: [60, 25] });                                                         // 4327
    //   time += 120;                                                                                                 // 4328
    // });                                                                                                            // 4329
                                                                                                                      // 4330
    // // Fade in and Scale                                                                                           // 4331
    // $('.fade-in.scale').velocity(                                                                                  // 4332
    //     { scaleX: .4, scaleY: .4, translateX: -600},                                                               // 4333
    //     { duration: 0});                                                                                           // 4334
    // $('.fade-in').each(function() {                                                                                // 4335
    //   $(this).velocity(                                                                                            // 4336
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},                                                      // 4337
    //     { duration: 800, easing: [60, 10] });                                                                      // 4338
    // });                                                                                                            // 4339
  });                                                                                                                 // 4340
}( jQuery ));                                                                                                         // 4341
;(function($) {                                                                                                       // 4342
                                                                                                                      // 4343
  // Input: Array of JSON objects {selector, offset, callback}                                                        // 4344
                                                                                                                      // 4345
  Materialize.scrollFire = function(options) {                                                                        // 4346
                                                                                                                      // 4347
    var didScroll = false;                                                                                            // 4348
                                                                                                                      // 4349
    window.addEventListener("scroll", function() {                                                                    // 4350
      didScroll = true;                                                                                               // 4351
    });                                                                                                               // 4352
                                                                                                                      // 4353
    // Rate limit to 100ms                                                                                            // 4354
    setInterval(function() {                                                                                          // 4355
      if(didScroll) {                                                                                                 // 4356
          didScroll = false;                                                                                          // 4357
                                                                                                                      // 4358
          var windowScroll = window.pageYOffset + window.innerHeight;                                                 // 4359
                                                                                                                      // 4360
          for (var i = 0 ; i < options.length; i++) {                                                                 // 4361
            // Get options from each line                                                                             // 4362
            var value = options[i];                                                                                   // 4363
            var selector = value.selector,                                                                            // 4364
                offset = value.offset,                                                                                // 4365
                callback = value.callback;                                                                            // 4366
                                                                                                                      // 4367
            var currentElement = document.querySelector(selector);                                                    // 4368
            if ( currentElement !== null) {                                                                           // 4369
              var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;                    // 4370
                                                                                                                      // 4371
              if (windowScroll > (elementOffset + offset)) {                                                          // 4372
                if (value.done !== true) {                                                                            // 4373
                  if (typeof(callback) === 'function') {                                                              // 4374
                    callback.call(this, currentElement);                                                              // 4375
                  } else if (typeof(callback) === 'string') {                                                         // 4376
                    var callbackFunc = new Function(callback);                                                        // 4377
                    callbackFunc(currentElement);                                                                     // 4378
                  }                                                                                                   // 4379
                  value.done = true;                                                                                  // 4380
                }                                                                                                     // 4381
              }                                                                                                       // 4382
            }                                                                                                         // 4383
          }                                                                                                           // 4384
      }                                                                                                               // 4385
    }, 100);                                                                                                          // 4386
  };                                                                                                                  // 4387
                                                                                                                      // 4388
})(jQuery);                                                                                                           // 4389
;/*!                                                                                                                  // 4390
 * pickadate.js v3.5.0, 2014/04/13                                                                                    // 4391
 * By Amsul, http://amsul.ca                                                                                          // 4392
 * Hosted on http://amsul.github.io/pickadate.js                                                                      // 4393
 * Licensed under MIT                                                                                                 // 4394
 */                                                                                                                   // 4395
                                                                                                                      // 4396
(function ( factory ) {                                                                                               // 4397
                                                                                                                      // 4398
    // AMD.                                                                                                           // 4399
    if ( typeof define == 'function' && define.amd )                                                                  // 4400
        define( 'picker', ['jquery'], factory )                                                                       // 4401
                                                                                                                      // 4402
    // Node.js/browserify.                                                                                            // 4403
    else if ( typeof exports == 'object' )                                                                            // 4404
        module.exports = factory( require('jquery') )                                                                 // 4405
                                                                                                                      // 4406
    // Browser globals.                                                                                               // 4407
    else this.Picker = factory( jQuery )                                                                              // 4408
                                                                                                                      // 4409
}(function( $ ) {                                                                                                     // 4410
                                                                                                                      // 4411
var $window = $( window )                                                                                             // 4412
var $document = $( document )                                                                                         // 4413
var $html = $( document.documentElement )                                                                             // 4414
                                                                                                                      // 4415
                                                                                                                      // 4416
/**                                                                                                                   // 4417
 * The picker constructor that creates a blank picker.                                                                // 4418
 */                                                                                                                   // 4419
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {                                                     // 4420
                                                                                                                      // 4421
    // If there’s no element, return the picker constructor.                                                          // 4422
    if ( !ELEMENT ) return PickerConstructor                                                                          // 4423
                                                                                                                      // 4424
                                                                                                                      // 4425
    var                                                                                                               // 4426
        IS_DEFAULT_THEME = false,                                                                                     // 4427
                                                                                                                      // 4428
                                                                                                                      // 4429
        // The state of the picker.                                                                                   // 4430
        STATE = {                                                                                                     // 4431
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )                                        // 4432
        },                                                                                                            // 4433
                                                                                                                      // 4434
                                                                                                                      // 4435
        // Merge the defaults and options passed.                                                                     // 4436
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},                     // 4437
                                                                                                                      // 4438
                                                                                                                      // 4439
        // Merge the default classes with the settings classes.                                                       // 4440
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),                                        // 4441
                                                                                                                      // 4442
                                                                                                                      // 4443
        // The element node wrapper into a jQuery object.                                                             // 4444
        $ELEMENT = $( ELEMENT ),                                                                                      // 4445
                                                                                                                      // 4446
                                                                                                                      // 4447
        // Pseudo picker constructor.                                                                                 // 4448
        PickerInstance = function() {                                                                                 // 4449
            return this.start()                                                                                       // 4450
        },                                                                                                            // 4451
                                                                                                                      // 4452
                                                                                                                      // 4453
        // The picker prototype.                                                                                      // 4454
        P = PickerInstance.prototype = {                                                                              // 4455
                                                                                                                      // 4456
            constructor: PickerInstance,                                                                              // 4457
                                                                                                                      // 4458
            $node: $ELEMENT,                                                                                          // 4459
                                                                                                                      // 4460
                                                                                                                      // 4461
            /**                                                                                                       // 4462
             * Initialize everything                                                                                  // 4463
             */                                                                                                       // 4464
            start: function() {                                                                                       // 4465
                                                                                                                      // 4466
                // If it’s already started, do nothing.                                                               // 4467
                if ( STATE && STATE.start ) return P                                                                  // 4468
                                                                                                                      // 4469
                                                                                                                      // 4470
                // Update the picker states.                                                                          // 4471
                STATE.methods = {}                                                                                    // 4472
                STATE.start = true                                                                                    // 4473
                STATE.open = false                                                                                    // 4474
                STATE.type = ELEMENT.type                                                                             // 4475
                                                                                                                      // 4476
                                                                                                                      // 4477
                // Confirm focus state, convert into text input to remove UA stylings,                                // 4478
                // and set as readonly to prevent keyboard popup.                                                     // 4479
                ELEMENT.autofocus = ELEMENT == getActiveElement()                                                     // 4480
                ELEMENT.readOnly = !SETTINGS.editable                                                                 // 4481
                ELEMENT.id = ELEMENT.id || STATE.id                                                                   // 4482
                if ( ELEMENT.type != 'text' ) {                                                                       // 4483
                    ELEMENT.type = 'text'                                                                             // 4484
                }                                                                                                     // 4485
                                                                                                                      // 4486
                                                                                                                      // 4487
                // Create a new picker component with the settings.                                                   // 4488
                P.component = new COMPONENT(P, SETTINGS)                                                              // 4489
                                                                                                                      // 4490
                                                                                                                      // 4491
                // Create the picker root with a holder and then prepare it.                                          // 4492
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
                prepareElementRoot()                                                                                  // 4494
                                                                                                                      // 4495
                                                                                                                      // 4496
                // If there’s a format for the hidden input element, create the element.                              // 4497
                if ( SETTINGS.formatSubmit ) {                                                                        // 4498
                    prepareElementHidden()                                                                            // 4499
                }                                                                                                     // 4500
                                                                                                                      // 4501
                                                                                                                      // 4502
                // Prepare the input element.                                                                         // 4503
                prepareElement()                                                                                      // 4504
                                                                                                                      // 4505
                                                                                                                      // 4506
                // Insert the root as specified in the settings.                                                      // 4507
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )                                   // 4508
                else $ELEMENT.after( P.$root )                                                                        // 4509
                                                                                                                      // 4510
                                                                                                                      // 4511
                // Bind the default component and settings events.                                                    // 4512
                P.on({                                                                                                // 4513
                    start: P.component.onStart,                                                                       // 4514
                    render: P.component.onRender,                                                                     // 4515
                    stop: P.component.onStop,                                                                         // 4516
                    open: P.component.onOpen,                                                                         // 4517
                    close: P.component.onClose,                                                                       // 4518
                    set: P.component.onSet                                                                            // 4519
                }).on({                                                                                               // 4520
                    start: SETTINGS.onStart,                                                                          // 4521
                    render: SETTINGS.onRender,                                                                        // 4522
                    stop: SETTINGS.onStop,                                                                            // 4523
                    open: SETTINGS.onOpen,                                                                            // 4524
                    close: SETTINGS.onClose,                                                                          // 4525
                    set: SETTINGS.onSet                                                                               // 4526
                })                                                                                                    // 4527
                                                                                                                      // 4528
                                                                                                                      // 4529
                // Once we’re all set, check the theme in use.                                                        // 4530
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )                                     // 4531
                                                                                                                      // 4532
                                                                                                                      // 4533
                // If the element has autofocus, open the picker.                                                     // 4534
                if ( ELEMENT.autofocus ) {                                                                            // 4535
                    P.open()                                                                                          // 4536
                }                                                                                                     // 4537
                                                                                                                      // 4538
                                                                                                                      // 4539
                // Trigger queued the “start” and “render” events.                                                    // 4540
                return P.trigger( 'start' ).trigger( 'render' )                                                       // 4541
            }, //start                                                                                                // 4542
                                                                                                                      // 4543
                                                                                                                      // 4544
            /**                                                                                                       // 4545
             * Render a new picker                                                                                    // 4546
             */                                                                                                       // 4547
            render: function( entireComponent ) {                                                                     // 4548
                                                                                                                      // 4549
                // Insert a new component holder in the root or box.                                                  // 4550
                if ( entireComponent ) P.$root.html( createWrappedComponent() )                                       // 4551
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )                        // 4552
                                                                                                                      // 4553
                // Trigger the queued “render” events.                                                                // 4554
                return P.trigger( 'render' )                                                                          // 4555
            }, //render                                                                                               // 4556
                                                                                                                      // 4557
                                                                                                                      // 4558
            /**                                                                                                       // 4559
             * Destroy everything                                                                                     // 4560
             */                                                                                                       // 4561
            stop: function() {                                                                                        // 4562
                                                                                                                      // 4563
                // If it’s already stopped, do nothing.                                                               // 4564
                if ( !STATE.start ) return P                                                                          // 4565
                                                                                                                      // 4566
                // Then close the picker.                                                                             // 4567
                P.close()                                                                                             // 4568
                                                                                                                      // 4569
                // Remove the hidden field.                                                                           // 4570
                if ( P._hidden ) {                                                                                    // 4571
                    P._hidden.parentNode.removeChild( P._hidden )                                                     // 4572
                }                                                                                                     // 4573
                                                                                                                      // 4574
                // Remove the root.                                                                                   // 4575
                P.$root.remove()                                                                                      // 4576
                                                                                                                      // 4577
                // Remove the input class, remove the stored data, and unbind                                         // 4578
                // the events (after a tick for IE - see `P.close`).                                                  // 4579
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )                                              // 4580
                setTimeout( function() {                                                                              // 4581
                    $ELEMENT.off( '.' + STATE.id )                                                                    // 4582
                }, 0)                                                                                                 // 4583
                                                                                                                      // 4584
                // Restore the element state                                                                          // 4585
                ELEMENT.type = STATE.type                                                                             // 4586
                ELEMENT.readOnly = false                                                                              // 4587
                                                                                                                      // 4588
                // Trigger the queued “stop” events.                                                                  // 4589
                P.trigger( 'stop' )                                                                                   // 4590
                                                                                                                      // 4591
                // Reset the picker states.                                                                           // 4592
                STATE.methods = {}                                                                                    // 4593
                STATE.start = false                                                                                   // 4594
                                                                                                                      // 4595
                return P                                                                                              // 4596
            }, //stop                                                                                                 // 4597
                                                                                                                      // 4598
                                                                                                                      // 4599
            /**                                                                                                       // 4600
             * Open up the picker                                                                                     // 4601
             */                                                                                                       // 4602
            open: function( dontGiveFocus ) {                                                                         // 4603
                                                                                                                      // 4604
                // If it’s already open, do nothing.                                                                  // 4605
                if ( STATE.open ) return P                                                                            // 4606
                                                                                                                      // 4607
                // Add the “active” class.                                                                            // 4608
                $ELEMENT.addClass( CLASSES.active )                                                                   // 4609
                aria( ELEMENT, 'expanded', true )                                                                     // 4610
                                                                                                                      // 4611
                // * A Firefox bug, when `html` has `overflow:hidden`, results in                                     // 4612
                //   killing transitions :(. So add the “opened” state on the next tick.                              // 4613
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289                                         // 4614
                setTimeout( function() {                                                                              // 4615
                                                                                                                      // 4616
                    // Add the “opened” class to the picker root.                                                     // 4617
                    P.$root.addClass( CLASSES.opened )                                                                // 4618
                    aria( P.$root[0], 'hidden', false )                                                               // 4619
                                                                                                                      // 4620
                }, 0 )                                                                                                // 4621
                                                                                                                      // 4622
                // If we have to give focus, bind the element and doc events.                                         // 4623
                if ( dontGiveFocus !== false ) {                                                                      // 4624
                                                                                                                      // 4625
                    // Set it as open.                                                                                // 4626
                    STATE.open = true                                                                                 // 4627
                                                                                                                      // 4628
                    // Prevent the page from scrolling.                                                               // 4629
                    if ( IS_DEFAULT_THEME ) {                                                                         // 4630
                        $html.                                                                                        // 4631
                            css( 'overflow', 'hidden' ).                                                              // 4632
                            css( 'padding-right', '+=' + getScrollbarWidth() )                                        // 4633
                    }                                                                                                 // 4634
                                                                                                                      // 4635
                    // Pass focus to the root element’s jQuery object.                                                // 4636
                    // * Workaround for iOS8 to bring the picker’s root into view.                                    // 4637
                    P.$root.eq(0).focus()                                                                             // 4638
                                                                                                                      // 4639
                    // Bind the document events.                                                                      // 4640
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {                   // 4641
                                                                                                                      // 4642
                        var target = event.target                                                                     // 4643
                                                                                                                      // 4644
                        // If the target of the event is not the element, close the picker picker.                    // 4645
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.          // 4646
                        //   Also, for Firefox, a click on an `option` element bubbles up directly                    // 4647
                        //   to the doc. So make sure the target wasn't the doc.                                      // 4648
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,           // 4649
                        //   which causes the picker to unexpectedly close when right-clicking it. So make            // 4650
                        //   sure the event wasn’t a right-click.                                                     // 4651
                        if ( target != ELEMENT && target != document && event.which != 3 ) {                          // 4652
                                                                                                                      // 4653
                            // If the target was the holder that covers the screen,                                   // 4654
                            // keep the element focused to maintain tabindex.                                         // 4655
                            P.close( target === P.$root.children()[0] )                                               // 4656
                        }                                                                                             // 4657
                                                                                                                      // 4658
                    }).on( 'keydown.' + STATE.id, function( event ) {                                                 // 4659
                                                                                                                      // 4660
                        var                                                                                           // 4661
                            // Get the keycode.                                                                       // 4662
                            keycode = event.keyCode,                                                                  // 4663
                                                                                                                      // 4664
                            // Translate that to a selection change.                                                  // 4665
                            keycodeToMove = P.component.key[ keycode ],                                               // 4666
                                                                                                                      // 4667
                            // Grab the target.                                                                       // 4668
                            target = event.target                                                                     // 4669
                                                                                                                      // 4670
                                                                                                                      // 4671
                        // On escape, close the picker and give focus.                                                // 4672
                        if ( keycode == 27 ) {                                                                        // 4673
                            P.close( true )                                                                           // 4674
                        }                                                                                             // 4675
                                                                                                                      // 4676
                                                                                                                      // 4677
                        // Check if there is a key movement or “enter” keypress on the element.                       // 4678
                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {                      // 4679
                                                                                                                      // 4680
                            // Prevent the default action to stop page movement.                                      // 4681
                            event.preventDefault()                                                                    // 4682
                                                                                                                      // 4683
                            // Trigger the key movement action.                                                       // 4684
                            if ( keycodeToMove ) {                                                                    // 4685
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }                                                                                         // 4687
                                                                                                                      // 4688
                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.           // 4689
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {     // 4690
                                P.set( 'select', P.component.item.highlight ).close()                                 // 4691
                            }                                                                                         // 4692
                        }                                                                                             // 4693
                                                                                                                      // 4694
                                                                                                                      // 4695
                        // If the target is within the root and “enter” is pressed,                                   // 4696
                        // prevent the default action and trigger a click on the target instead.                      // 4697
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {                               // 4698
                            event.preventDefault()                                                                    // 4699
                            target.click()                                                                            // 4700
                        }                                                                                             // 4701
                    })                                                                                                // 4702
                }                                                                                                     // 4703
                                                                                                                      // 4704
                // Trigger the queued “open” events.                                                                  // 4705
                return P.trigger( 'open' )                                                                            // 4706
            }, //open                                                                                                 // 4707
                                                                                                                      // 4708
                                                                                                                      // 4709
            /**                                                                                                       // 4710
             * Close the picker                                                                                       // 4711
             */                                                                                                       // 4712
            close: function( giveFocus ) {                                                                            // 4713
                                                                                                                      // 4714
                // If we need to give focus, do it before changing states.                                            // 4715
                if ( giveFocus ) {                                                                                    // 4716
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|                   // 4717
                    // The focus is triggered *after* the close has completed - causing it                            // 4718
                    // to open again. So unbind and rebind the event at the next tick.                                // 4719
                    P.$root.off( 'focus.toOpen' ).eq(0).focus()                                                       // 4720
                    setTimeout( function() {                                                                          // 4721
                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )                                          // 4722
                    }, 0 )                                                                                            // 4723
                }                                                                                                     // 4724
                                                                                                                      // 4725
                // Remove the “active” class.                                                                         // 4726
                $ELEMENT.removeClass( CLASSES.active )                                                                // 4727
                aria( ELEMENT, 'expanded', false )                                                                    // 4728
                                                                                                                      // 4729
                // * A Firefox bug, when `html` has `overflow:hidden`, results in                                     // 4730
                //   killing transitions :(. So remove the “opened” state on the next tick.                           // 4731
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289                                         // 4732
                setTimeout( function() {                                                                              // 4733
                                                                                                                      // 4734
                    // Remove the “opened” and “focused” class from the picker root.                                  // 4735
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )                                     // 4736
                    aria( P.$root[0], 'hidden', true )                                                                // 4737
                                                                                                                      // 4738
                }, 0 )                                                                                                // 4739
                                                                                                                      // 4740
                // If it’s already closed, do nothing more.                                                           // 4741
                if ( !STATE.open ) return P                                                                           // 4742
                                                                                                                      // 4743
                // Set it as closed.                                                                                  // 4744
                STATE.open = false                                                                                    // 4745
                                                                                                                      // 4746
                // Allow the page to scroll.                                                                          // 4747
                if ( IS_DEFAULT_THEME ) {                                                                             // 4748
                    $html.                                                                                            // 4749
                        css( 'overflow', '' ).                                                                        // 4750
                        css( 'padding-right', '-=' + getScrollbarWidth() )                                            // 4751
                }                                                                                                     // 4752
                                                                                                                      // 4753
                // Unbind the document events.                                                                        // 4754
                $document.off( '.' + STATE.id )                                                                       // 4755
                                                                                                                      // 4756
                // Trigger the queued “close” events.                                                                 // 4757
                return P.trigger( 'close' )                                                                           // 4758
            }, //close                                                                                                // 4759
                                                                                                                      // 4760
                                                                                                                      // 4761
            /**                                                                                                       // 4762
             * Clear the values                                                                                       // 4763
             */                                                                                                       // 4764
            clear: function( options ) {                                                                              // 4765
                return P.set( 'clear', null, options )                                                                // 4766
            }, //clear                                                                                                // 4767
                                                                                                                      // 4768
                                                                                                                      // 4769
            /**                                                                                                       // 4770
             * Set something                                                                                          // 4771
             */                                                                                                       // 4772
            set: function( thing, value, options ) {                                                                  // 4773
                                                                                                                      // 4774
                var thingItem, thingValue,                                                                            // 4775
                    thingIsObject = $.isPlainObject( thing ),                                                         // 4776
                    thingObject = thingIsObject ? thing : {}                                                          // 4777
                                                                                                                      // 4778
                // Make sure we have usable options.                                                                  // 4779
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}                           // 4780
                                                                                                                      // 4781
                if ( thing ) {                                                                                        // 4782
                                                                                                                      // 4783
                    // If the thing isn’t an object, make it one.                                                     // 4784
                    if ( !thingIsObject ) {                                                                           // 4785
                        thingObject[ thing ] = value                                                                  // 4786
                    }                                                                                                 // 4787
                                                                                                                      // 4788
                    // Go through the things of items to set.                                                         // 4789
                    for ( thingItem in thingObject ) {                                                                // 4790
                                                                                                                      // 4791
                        // Grab the value of the thing.                                                               // 4792
                        thingValue = thingObject[ thingItem ]                                                         // 4793
                                                                                                                      // 4794
                        // First, if the item exists and there’s a value, set it.                                     // 4795
                        if ( thingItem in P.component.item ) {                                                        // 4796
                            if ( thingValue === undefined ) thingValue = null                                         // 4797
                            P.component.set( thingItem, thingValue, options )                                         // 4798
                        }                                                                                             // 4799
                                                                                                                      // 4800
                        // Then, check to update the element value and broadcast a change.                            // 4801
                        if ( thingItem == 'select' || thingItem == 'clear' ) {                                        // 4802
                            $ELEMENT.                                                                                 // 4803
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).               // 4804
                                trigger( 'change' )                                                                   // 4805
                        }                                                                                             // 4806
                    }                                                                                                 // 4807
                                                                                                                      // 4808
                    // Render a new picker.                                                                           // 4809
                    P.render()                                                                                        // 4810
                }                                                                                                     // 4811
                                                                                                                      // 4812
                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.               // 4813
                return options.muted ? P : P.trigger( 'set', thingObject )                                            // 4814
            }, //set                                                                                                  // 4815
                                                                                                                      // 4816
                                                                                                                      // 4817
            /**                                                                                                       // 4818
             * Get something                                                                                          // 4819
             */                                                                                                       // 4820
            get: function( thing, format ) {                                                                          // 4821
                                                                                                                      // 4822
                // Make sure there’s something to get.                                                                // 4823
                thing = thing || 'value'                                                                              // 4824
                                                                                                                      // 4825
                // If a picker state exists, return that.                                                             // 4826
                if ( STATE[ thing ] != null ) {                                                                       // 4827
                    return STATE[ thing ]                                                                             // 4828
                }                                                                                                     // 4829
                                                                                                                      // 4830
                // Return the submission value, if that.                                                              // 4831
                if ( thing == 'valueSubmit' ) {                                                                       // 4832
                    if ( P._hidden ) {                                                                                // 4833
                        return P._hidden.value                                                                        // 4834
                    }                                                                                                 // 4835
                    thing = 'value'                                                                                   // 4836
                }                                                                                                     // 4837
                                                                                                                      // 4838
                // Return the value, if that.                                                                         // 4839
                if ( thing == 'value' ) {                                                                             // 4840
                    return ELEMENT.value                                                                              // 4841
                }                                                                                                     // 4842
                                                                                                                      // 4843
                // Check if a component item exists, return that.                                                     // 4844
                if ( thing in P.component.item ) {                                                                    // 4845
                    if ( typeof format == 'string' ) {                                                                // 4846
                        var thingValue = P.component.get( thing )                                                     // 4847
                        return thingValue ?                                                                           // 4848
                            PickerConstructor._.trigger(                                                              // 4849
                                P.component.formats.toString,                                                         // 4850
                                P.component,                                                                          // 4851
                                [ format, thingValue ]                                                                // 4852
                            ) : ''                                                                                    // 4853
                    }                                                                                                 // 4854
                    return P.component.get( thing )                                                                   // 4855
                }                                                                                                     // 4856
            }, //get                                                                                                  // 4857
                                                                                                                      // 4858
                                                                                                                      // 4859
                                                                                                                      // 4860
            /**                                                                                                       // 4861
             * Bind events on the things.                                                                             // 4862
             */                                                                                                       // 4863
            on: function( thing, method, internal ) {                                                                 // 4864
                                                                                                                      // 4865
                var thingName, thingMethod,                                                                           // 4866
                    thingIsObject = $.isPlainObject( thing ),                                                         // 4867
                    thingObject = thingIsObject ? thing : {}                                                          // 4868
                                                                                                                      // 4869
                if ( thing ) {                                                                                        // 4870
                                                                                                                      // 4871
                    // If the thing isn’t an object, make it one.                                                     // 4872
                    if ( !thingIsObject ) {                                                                           // 4873
                        thingObject[ thing ] = method                                                                 // 4874
                    }                                                                                                 // 4875
                                                                                                                      // 4876
                    // Go through the things to bind to.                                                              // 4877
                    for ( thingName in thingObject ) {                                                                // 4878
                                                                                                                      // 4879
                        // Grab the method of the thing.                                                              // 4880
                        thingMethod = thingObject[ thingName ]                                                        // 4881
                                                                                                                      // 4882
                        // If it was an internal binding, prefix it.                                                  // 4883
                        if ( internal ) {                                                                             // 4884
                            thingName = '_' + thingName                                                               // 4885
                        }                                                                                             // 4886
                                                                                                                      // 4887
                        // Make sure the thing methods collection exists.                                             // 4888
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []                                 // 4889
                                                                                                                      // 4890
                        // Add the method to the relative method collection.                                          // 4891
                        STATE.methods[ thingName ].push( thingMethod )                                                // 4892
                    }                                                                                                 // 4893
                }                                                                                                     // 4894
                                                                                                                      // 4895
                return P                                                                                              // 4896
            }, //on                                                                                                   // 4897
                                                                                                                      // 4898
                                                                                                                      // 4899
                                                                                                                      // 4900
            /**                                                                                                       // 4901
             * Unbind events on the things.                                                                           // 4902
             */                                                                                                       // 4903
            off: function() {                                                                                         // 4904
                var i, thingName,                                                                                     // 4905
                    names = arguments;                                                                                // 4906
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {                                    // 4907
                    thingName = names[i]                                                                              // 4908
                    if ( thingName in STATE.methods ) {                                                               // 4909
                        delete STATE.methods[thingName]                                                               // 4910
                    }                                                                                                 // 4911
                }                                                                                                     // 4912
                return P                                                                                              // 4913
            },                                                                                                        // 4914
                                                                                                                      // 4915
                                                                                                                      // 4916
            /**                                                                                                       // 4917
             * Fire off method events.                                                                                // 4918
             */                                                                                                       // 4919
            trigger: function( name, data ) {                                                                         // 4920
                var _trigger = function( name ) {                                                                     // 4921
                    var methodList = STATE.methods[ name ]                                                            // 4922
                    if ( methodList ) {                                                                               // 4923
                        methodList.map( function( method ) {                                                          // 4924
                            PickerConstructor._.trigger( method, P, [ data ] )                                        // 4925
                        })                                                                                            // 4926
                    }                                                                                                 // 4927
                }                                                                                                     // 4928
                _trigger( '_' + name )                                                                                // 4929
                _trigger( name )                                                                                      // 4930
                return P                                                                                              // 4931
            } //trigger                                                                                               // 4932
        } //PickerInstance.prototype                                                                                  // 4933
                                                                                                                      // 4934
                                                                                                                      // 4935
    /**                                                                                                               // 4936
     * Wrap the picker holder components together.                                                                    // 4937
     */                                                                                                               // 4938
    function createWrappedComponent() {                                                                               // 4939
                                                                                                                      // 4940
        // Create a picker wrapper holder                                                                             // 4941
        return PickerConstructor._.node( 'div',                                                                       // 4942
                                                                                                                      // 4943
            // Create a picker wrapper node                                                                           // 4944
            PickerConstructor._.node( 'div',                                                                          // 4945
                                                                                                                      // 4946
                // Create a picker frame                                                                              // 4947
                PickerConstructor._.node( 'div',                                                                      // 4948
                                                                                                                      // 4949
                    // Create a picker box node                                                                       // 4950
                    PickerConstructor._.node( 'div',                                                                  // 4951
                                                                                                                      // 4952
                        // Create the components nodes.                                                               // 4953
                        P.component.nodes( STATE.open ),                                                              // 4954
                                                                                                                      // 4955
                        // The picker box class                                                                       // 4956
                        CLASSES.box                                                                                   // 4957
                    ),                                                                                                // 4958
                                                                                                                      // 4959
                    // Picker wrap class                                                                              // 4960
                    CLASSES.wrap                                                                                      // 4961
                ),                                                                                                    // 4962
                                                                                                                      // 4963
                // Picker frame class                                                                                 // 4964
                CLASSES.frame                                                                                         // 4965
            ),                                                                                                        // 4966
                                                                                                                      // 4967
            // Picker holder class                                                                                    // 4968
            CLASSES.holder                                                                                            // 4969
        ) //endreturn                                                                                                 // 4970
    } //createWrappedComponent                                                                                        // 4971
                                                                                                                      // 4972
                                                                                                                      // 4973
                                                                                                                      // 4974
    /**                                                                                                               // 4975
     * Prepare the input element with all bindings.                                                                   // 4976
     */                                                                                                               // 4977
    function prepareElement() {                                                                                       // 4978
                                                                                                                      // 4979
        $ELEMENT.                                                                                                     // 4980
                                                                                                                      // 4981
            // Store the picker data by component name.                                                               // 4982
            data(NAME, P).                                                                                            // 4983
                                                                                                                      // 4984
            // Add the “input” class name.                                                                            // 4985
            addClass(CLASSES.input).                                                                                  // 4986
                                                                                                                      // 4987
            // Remove the tabindex.                                                                                   // 4988
            attr('tabindex', -1).                                                                                     // 4989
                                                                                                                      // 4990
            // If there’s a `data-value`, update the value of the element.                                            // 4991
            val( $ELEMENT.data('value') ?                                                                             // 4992
                P.get('select', SETTINGS.format) :                                                                    // 4993
                ELEMENT.value                                                                                         // 4994
            )                                                                                                         // 4995
                                                                                                                      // 4996
                                                                                                                      // 4997
        // Only bind keydown events if the element isn’t editable.                                                    // 4998
        if ( !SETTINGS.editable ) {                                                                                   // 4999
                                                                                                                      // 5000
            $ELEMENT.                                                                                                 // 5001
                                                                                                                      // 5002
                // On focus/click, focus onto the root to open it up.                                                 // 5003
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {                                   // 5004
                    event.preventDefault()                                                                            // 5005
                    P.$root.eq(0).focus()                                                                             // 5006
                }).                                                                                                   // 5007
                                                                                                                      // 5008
                // Handle keyboard event based on the picker being opened or not.                                     // 5009
                on( 'keydown.' + STATE.id, handleKeydownEvent )                                                       // 5010
        }                                                                                                             // 5011
                                                                                                                      // 5012
                                                                                                                      // 5013
        // Update the aria attributes.                                                                                // 5014
        aria(ELEMENT, {                                                                                               // 5015
            haspopup: true,                                                                                           // 5016
            expanded: false,                                                                                          // 5017
            readonly: false,                                                                                          // 5018
            owns: ELEMENT.id + '_root'                                                                                // 5019
        })                                                                                                            // 5020
    }                                                                                                                 // 5021
                                                                                                                      // 5022
                                                                                                                      // 5023
    /**                                                                                                               // 5024
     * Prepare the root picker element with all bindings.                                                             // 5025
     */                                                                                                               // 5026
    function prepareElementRoot() {                                                                                   // 5027
                                                                                                                      // 5028
        P.$root.                                                                                                      // 5029
                                                                                                                      // 5030
            on({                                                                                                      // 5031
                                                                                                                      // 5032
                // For iOS8.                                                                                          // 5033
                keydown: handleKeydownEvent,                                                                          // 5034
                                                                                                                      // 5035
                // When something within the root is focused, stop from bubbling                                      // 5036
                // to the doc and remove the “focused” state from the root.                                           // 5037
                focusin: function( event ) {                                                                          // 5038
                    P.$root.removeClass( CLASSES.focused )                                                            // 5039
                    event.stopPropagation()                                                                           // 5040
                },                                                                                                    // 5041
                                                                                                                      // 5042
                // When something within the root holder is clicked, stop it                                          // 5043
                // from bubbling to the doc.                                                                          // 5044
                'mousedown click': function( event ) {                                                                // 5045
                                                                                                                      // 5046
                    var target = event.target                                                                         // 5047
                                                                                                                      // 5048
                    // Make sure the target isn’t the root holder so it can bubble up.                                // 5049
                    if ( target != P.$root.children()[ 0 ] ) {                                                        // 5050
                                                                                                                      // 5051
                        event.stopPropagation()                                                                       // 5052
                                                                                                                      // 5053
                        // * For mousedown events, cancel the default action in order to                              // 5054
                        //   prevent cases where focus is shifted onto external elements                              // 5055
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).                // 5056
                        //   Also, for Firefox, don’t prevent action on the `option` element.                         // 5057
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {
                                                                                                                      // 5059
                            event.preventDefault()                                                                    // 5060
                                                                                                                      // 5061
                            // Re-focus onto the root so that users can click away                                    // 5062
                            // from elements focused within the picker.                                               // 5063
                            P.$root.eq(0).focus()                                                                     // 5064
                        }                                                                                             // 5065
                    }                                                                                                 // 5066
                }                                                                                                     // 5067
            }).                                                                                                       // 5068
                                                                                                                      // 5069
            // Add/remove the “target” class on focus and blur.                                                       // 5070
            on({                                                                                                      // 5071
                focus: function() {                                                                                   // 5072
                    $ELEMENT.addClass( CLASSES.target )                                                               // 5073
                },                                                                                                    // 5074
                blur: function() {                                                                                    // 5075
                    $ELEMENT.removeClass( CLASSES.target )                                                            // 5076
                }                                                                                                     // 5077
            }).                                                                                                       // 5078
                                                                                                                      // 5079
            // Open the picker and adjust the root “focused” state                                                    // 5080
            on( 'focus.toOpen', handleFocusToOpenEvent ).                                                             // 5081
                                                                                                                      // 5082
            // If there’s a click on an actionable element, carry out the actions.                                    // 5083
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {                          // 5084
                                                                                                                      // 5085
                var $target = $( this ),                                                                              // 5086
                    targetData = $target.data(),                                                                      // 5087
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),
                                                                                                                      // 5089
                    // * For IE, non-focusable elements can be active elements as well                                // 5090
                    //   (http://stackoverflow.com/a/2684561).                                                        // 5091
                    activeElement = getActiveElement()                                                                // 5092
                    activeElement = activeElement && ( activeElement.type || activeElement.href )                     // 5093
                                                                                                                      // 5094
                // If it’s disabled or nothing inside is actively focused, re-focus the element.                      // 5095
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {                  // 5096
                    P.$root.eq(0).focus()                                                                             // 5097
                }                                                                                                     // 5098
                                                                                                                      // 5099
                // If something is superficially changed, update the `highlight` based on the `nav`.                  // 5100
                if ( !targetDisabled && targetData.nav ) {                                                            // 5101
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )                         // 5102
                }                                                                                                     // 5103
                                                                                                                      // 5104
                // If something is picked, set `select` then close with focus.                                        // 5105
                else if ( !targetDisabled && 'pick' in targetData ) {                                                 // 5106
                    P.set( 'select', targetData.pick )                                                                // 5107
                }                                                                                                     // 5108
                                                                                                                      // 5109
                // If a “clear” button is pressed, empty the values and close with focus.                             // 5110
                else if ( targetData.clear ) {                                                                        // 5111
                    P.clear().close( true )                                                                           // 5112
                }                                                                                                     // 5113
                                                                                                                      // 5114
                else if ( targetData.close ) {                                                                        // 5115
                    P.close( true )                                                                                   // 5116
                }                                                                                                     // 5117
                                                                                                                      // 5118
            }) //P.$root                                                                                              // 5119
                                                                                                                      // 5120
        aria( P.$root[0], 'hidden', true )                                                                            // 5121
    }                                                                                                                 // 5122
                                                                                                                      // 5123
                                                                                                                      // 5124
     /**                                                                                                              // 5125
      * Prepare the hidden input element along with all bindings.                                                     // 5126
      */                                                                                                              // 5127
    function prepareElementHidden() {                                                                                 // 5128
                                                                                                                      // 5129
        var name                                                                                                      // 5130
                                                                                                                      // 5131
        if ( SETTINGS.hiddenName === true ) {                                                                         // 5132
            name = ELEMENT.name                                                                                       // 5133
            ELEMENT.name = ''                                                                                         // 5134
        }                                                                                                             // 5135
        else {                                                                                                        // 5136
            name = [                                                                                                  // 5137
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',                                // 5138
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'                          // 5139
            ]                                                                                                         // 5140
            name = name[0] + ELEMENT.name + name[1]                                                                   // 5141
        }                                                                                                             // 5142
                                                                                                                      // 5143
        P._hidden = $(                                                                                                // 5144
            '<input ' +                                                                                               // 5145
            'type=hidden ' +                                                                                          // 5146
                                                                                                                      // 5147
            // Create the name using the original input’s with a prefix and suffix.                                   // 5148
            'name="' + name + '"' +                                                                                   // 5149
                                                                                                                      // 5150
            // If the element has a value, set the hidden value as well.                                              // 5151
            (                                                                                                         // 5152
                $ELEMENT.data('value') || ELEMENT.value ?                                                             // 5153
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :                                       // 5154
                    ''                                                                                                // 5155
            ) +                                                                                                       // 5156
            '>'                                                                                                       // 5157
        )[0]                                                                                                          // 5158
                                                                                                                      // 5159
        $ELEMENT.                                                                                                     // 5160
                                                                                                                      // 5161
            // If the value changes, update the hidden input with the correct format.                                 // 5162
            on('change.' + STATE.id, function() {                                                                     // 5163
                P._hidden.value = ELEMENT.value ?                                                                     // 5164
                    P.get('select', SETTINGS.formatSubmit) :                                                          // 5165
                    ''                                                                                                // 5166
            })                                                                                                        // 5167
                                                                                                                      // 5168
                                                                                                                      // 5169
        // Insert the hidden input as specified in the settings.                                                      // 5170
        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )                                         // 5171
        else $ELEMENT.after( P._hidden )                                                                              // 5172
    }                                                                                                                 // 5173
                                                                                                                      // 5174
                                                                                                                      // 5175
    // For iOS8.                                                                                                      // 5176
    function handleKeydownEvent( event ) {                                                                            // 5177
                                                                                                                      // 5178
        var keycode = event.keyCode,                                                                                  // 5179
                                                                                                                      // 5180
            // Check if one of the delete keys was pressed.                                                           // 5181
            isKeycodeDelete = /^(8|46)$/.test(keycode)                                                                // 5182
                                                                                                                      // 5183
        // For some reason IE clears the input value on “escape”.                                                     // 5184
        if ( keycode == 27 ) {                                                                                        // 5185
            P.close()                                                                                                 // 5186
            return false                                                                                              // 5187
        }                                                                                                             // 5188
                                                                                                                      // 5189
        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.                      // 5190
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {                          // 5191
                                                                                                                      // 5192
            // Prevent it from moving the page and bubbling to doc.                                                   // 5193
            event.preventDefault()                                                                                    // 5194
            event.stopPropagation()                                                                                   // 5195
                                                                                                                      // 5196
            // If `delete` was pressed, clear the values and close the picker.                                        // 5197
            // Otherwise open the picker.                                                                             // 5198
            if ( isKeycodeDelete ) { P.clear().close() }                                                              // 5199
            else { P.open() }                                                                                         // 5200
        }                                                                                                             // 5201
    }                                                                                                                 // 5202
                                                                                                                      // 5203
                                                                                                                      // 5204
    // Separated for IE                                                                                               // 5205
    function handleFocusToOpenEvent( event ) {                                                                        // 5206
                                                                                                                      // 5207
        // Stop the event from propagating to the doc.                                                                // 5208
        event.stopPropagation()                                                                                       // 5209
                                                                                                                      // 5210
        // If it’s a focus event, add the “focused” class to the root.                                                // 5211
        if ( event.type == 'focus' ) {                                                                                // 5212
            P.$root.addClass( CLASSES.focused )                                                                       // 5213
        }                                                                                                             // 5214
                                                                                                                      // 5215
        // And then finally open the picker.                                                                          // 5216
        P.open()                                                                                                      // 5217
    }                                                                                                                 // 5218
                                                                                                                      // 5219
                                                                                                                      // 5220
    // Return a new picker instance.                                                                                  // 5221
    return new PickerInstance()                                                                                       // 5222
} //PickerConstructor                                                                                                 // 5223
                                                                                                                      // 5224
                                                                                                                      // 5225
                                                                                                                      // 5226
/**                                                                                                                   // 5227
 * The default classes and prefix to use for the HTML classes.                                                        // 5228
 */                                                                                                                   // 5229
PickerConstructor.klasses = function( prefix ) {                                                                      // 5230
    prefix = prefix || 'picker'                                                                                       // 5231
    return {                                                                                                          // 5232
                                                                                                                      // 5233
        picker: prefix,                                                                                               // 5234
        opened: prefix + '--opened',                                                                                  // 5235
        focused: prefix + '--focused',                                                                                // 5236
                                                                                                                      // 5237
        input: prefix + '__input',                                                                                    // 5238
        active: prefix + '__input--active',                                                                           // 5239
        target: prefix + '__input--target',                                                                           // 5240
                                                                                                                      // 5241
        holder: prefix + '__holder',                                                                                  // 5242
                                                                                                                      // 5243
        frame: prefix + '__frame',                                                                                    // 5244
        wrap: prefix + '__wrap',                                                                                      // 5245
                                                                                                                      // 5246
        box: prefix + '__box'                                                                                         // 5247
    }                                                                                                                 // 5248
} //PickerConstructor.klasses                                                                                         // 5249
                                                                                                                      // 5250
                                                                                                                      // 5251
                                                                                                                      // 5252
/**                                                                                                                   // 5253
 * Check if the default theme is being used.                                                                          // 5254
 */                                                                                                                   // 5255
function isUsingDefaultTheme( element ) {                                                                             // 5256
                                                                                                                      // 5257
    var theme,                                                                                                        // 5258
        prop = 'position'                                                                                             // 5259
                                                                                                                      // 5260
    // For IE.                                                                                                        // 5261
    if ( element.currentStyle ) {                                                                                     // 5262
        theme = element.currentStyle[prop]                                                                            // 5263
    }                                                                                                                 // 5264
                                                                                                                      // 5265
    // For normal browsers.                                                                                           // 5266
    else if ( window.getComputedStyle ) {                                                                             // 5267
        theme = getComputedStyle( element )[prop]                                                                     // 5268
    }                                                                                                                 // 5269
                                                                                                                      // 5270
    return theme == 'fixed'                                                                                           // 5271
}                                                                                                                     // 5272
                                                                                                                      // 5273
                                                                                                                      // 5274
                                                                                                                      // 5275
/**                                                                                                                   // 5276
 * Get the width of the browser’s scrollbar.                                                                          // 5277
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js                                // 5278
 */                                                                                                                   // 5279
function getScrollbarWidth() {                                                                                        // 5280
                                                                                                                      // 5281
    if ( $html.height() <= $window.height() ) {                                                                       // 5282
        return 0                                                                                                      // 5283
    }                                                                                                                 // 5284
                                                                                                                      // 5285
    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).                                                // 5286
        appendTo( 'body' )                                                                                            // 5287
                                                                                                                      // 5288
    // Get the width without scrollbars.                                                                              // 5289
    var widthWithoutScroll = $outer[0].offsetWidth                                                                    // 5290
                                                                                                                      // 5291
    // Force adding scrollbars.                                                                                       // 5292
    $outer.css( 'overflow', 'scroll' )                                                                                // 5293
                                                                                                                      // 5294
    // Add the inner div.                                                                                             // 5295
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )                                                 // 5296
                                                                                                                      // 5297
    // Get the width with scrollbars.                                                                                 // 5298
    var widthWithScroll = $inner[0].offsetWidth                                                                       // 5299
                                                                                                                      // 5300
    // Remove the divs.                                                                                               // 5301
    $outer.remove()                                                                                                   // 5302
                                                                                                                      // 5303
    // Return the difference between the widths.                                                                      // 5304
    return widthWithoutScroll - widthWithScroll                                                                       // 5305
}                                                                                                                     // 5306
                                                                                                                      // 5307
                                                                                                                      // 5308
                                                                                                                      // 5309
/**                                                                                                                   // 5310
 * PickerConstructor helper methods.                                                                                  // 5311
 */                                                                                                                   // 5312
PickerConstructor._ = {                                                                                               // 5313
                                                                                                                      // 5314
    /**                                                                                                               // 5315
     * Create a group of nodes. Expects:                                                                              // 5316
     * `                                                                                                              // 5317
        {                                                                                                             // 5318
            min:    {Integer},                                                                                        // 5319
            max:    {Integer},                                                                                        // 5320
            i:      {Integer},                                                                                        // 5321
            node:   {String},                                                                                         // 5322
            item:   {Function}                                                                                        // 5323
        }                                                                                                             // 5324
     * `                                                                                                              // 5325
     */                                                                                                               // 5326
    group: function( groupObject ) {                                                                                  // 5327
                                                                                                                      // 5328
        var                                                                                                           // 5329
            // Scope for the looped object                                                                            // 5330
            loopObjectScope,                                                                                          // 5331
                                                                                                                      // 5332
            // Create the nodes list                                                                                  // 5333
            nodesList = '',                                                                                           // 5334
                                                                                                                      // 5335
            // The counter starts from the `min`                                                                      // 5336
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )                                     // 5337
                                                                                                                      // 5338
                                                                                                                      // 5339
        // Loop from the `min` to `max`, incrementing by `i`                                                          // 5340
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {
                                                                                                                      // 5342
            // Trigger the `item` function within scope of the object                                                 // 5343
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )               // 5344
                                                                                                                      // 5345
            // Splice the subgroup and create nodes out of the sub nodes                                              // 5346
            nodesList += PickerConstructor._.node(                                                                    // 5347
                groupObject.node,                                                                                     // 5348
                loopObjectScope[ 0 ],   // the node                                                                   // 5349
                loopObjectScope[ 1 ],   // the classes                                                                // 5350
                loopObjectScope[ 2 ]    // the attributes                                                             // 5351
            )                                                                                                         // 5352
        }                                                                                                             // 5353
                                                                                                                      // 5354
        // Return the list of nodes                                                                                   // 5355
        return nodesList                                                                                              // 5356
    }, //group                                                                                                        // 5357
                                                                                                                      // 5358
                                                                                                                      // 5359
    /**                                                                                                               // 5360
     * Create a dom node string                                                                                       // 5361
     */                                                                                                               // 5362
    node: function( wrapper, item, klass, attribute ) {                                                               // 5363
                                                                                                                      // 5364
        // If the item is false-y, just return an empty string                                                        // 5365
        if ( !item ) return ''                                                                                        // 5366
                                                                                                                      // 5367
        // If the item is an array, do a join                                                                         // 5368
        item = $.isArray( item ) ? item.join( '' ) : item                                                             // 5369
                                                                                                                      // 5370
        // Check for the class                                                                                        // 5371
        klass = klass ? ' class="' + klass + '"' : ''                                                                 // 5372
                                                                                                                      // 5373
        // Check for any attributes                                                                                   // 5374
        attribute = attribute ? ' ' + attribute : ''                                                                  // 5375
                                                                                                                      // 5376
        // Return the wrapped item                                                                                    // 5377
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'                                  // 5378
    }, //node                                                                                                         // 5379
                                                                                                                      // 5380
                                                                                                                      // 5381
    /**                                                                                                               // 5382
     * Lead numbers below 10 with a zero.                                                                             // 5383
     */                                                                                                               // 5384
    lead: function( number ) {                                                                                        // 5385
        return ( number < 10 ? '0': '' ) + number                                                                     // 5386
    },                                                                                                                // 5387
                                                                                                                      // 5388
                                                                                                                      // 5389
    /**                                                                                                               // 5390
     * Trigger a function otherwise return the value.                                                                 // 5391
     */                                                                                                               // 5392
    trigger: function( callback, scope, args ) {                                                                      // 5393
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback                         // 5394
    },                                                                                                                // 5395
                                                                                                                      // 5396
                                                                                                                      // 5397
    /**                                                                                                               // 5398
     * If the second character is a digit, length is 2 otherwise 1.                                                   // 5399
     */                                                                                                               // 5400
    digits: function( string ) {                                                                                      // 5401
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1                                                                   // 5402
    },                                                                                                                // 5403
                                                                                                                      // 5404
                                                                                                                      // 5405
    /**                                                                                                               // 5406
     * Tell if something is a date object.                                                                            // 5407
     */                                                                                                               // 5408
    isDate: function( value ) {                                                                                       // 5409
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )                  // 5410
    },                                                                                                                // 5411
                                                                                                                      // 5412
                                                                                                                      // 5413
    /**                                                                                                               // 5414
     * Tell if something is an integer.                                                                               // 5415
     */                                                                                                               // 5416
    isInteger: function( value ) {                                                                                    // 5417
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0                                  // 5418
    },                                                                                                                // 5419
                                                                                                                      // 5420
                                                                                                                      // 5421
    /**                                                                                                               // 5422
     * Create ARIA attribute strings.                                                                                 // 5423
     */                                                                                                               // 5424
    ariaAttr: ariaAttr                                                                                                // 5425
} //PickerConstructor._                                                                                               // 5426
                                                                                                                      // 5427
                                                                                                                      // 5428
                                                                                                                      // 5429
/**                                                                                                                   // 5430
 * Extend the picker with a component and defaults.                                                                   // 5431
 */                                                                                                                   // 5432
PickerConstructor.extend = function( name, Component ) {                                                              // 5433
                                                                                                                      // 5434
    // Extend jQuery.                                                                                                 // 5435
    $.fn[ name ] = function( options, action ) {                                                                      // 5436
                                                                                                                      // 5437
        // Grab the component data.                                                                                   // 5438
        var componentData = this.data( name )                                                                         // 5439
                                                                                                                      // 5440
        // If the picker is requested, return the data object.                                                        // 5441
        if ( options == 'picker' ) {                                                                                  // 5442
            return componentData                                                                                      // 5443
        }                                                                                                             // 5444
                                                                                                                      // 5445
        // If the component data exists and `options` is a string, carry out the action.                              // 5446
        if ( componentData && typeof options == 'string' ) {                                                          // 5447
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )                 // 5448
        }                                                                                                             // 5449
                                                                                                                      // 5450
        // Otherwise go through each matched element and if the component                                             // 5451
        // doesn’t exist, create a new picker using `this` element                                                    // 5452
        // and merging the defaults and options with a deep copy.                                                     // 5453
        return this.each( function() {                                                                                // 5454
            var $this = $( this )                                                                                     // 5455
            if ( !$this.data( name ) ) {                                                                              // 5456
                new PickerConstructor( this, name, Component, options )                                               // 5457
            }                                                                                                         // 5458
        })                                                                                                            // 5459
    }                                                                                                                 // 5460
                                                                                                                      // 5461
    // Set the defaults.                                                                                              // 5462
    $.fn[ name ].defaults = Component.defaults                                                                        // 5463
} //PickerConstructor.extend                                                                                          // 5464
                                                                                                                      // 5465
                                                                                                                      // 5466
                                                                                                                      // 5467
function aria(element, attribute, value) {                                                                            // 5468
    if ( $.isPlainObject(attribute) ) {                                                                               // 5469
        for ( var key in attribute ) {                                                                                // 5470
            ariaSet(element, key, attribute[key])                                                                     // 5471
        }                                                                                                             // 5472
    }                                                                                                                 // 5473
    else {                                                                                                            // 5474
        ariaSet(element, attribute, value)                                                                            // 5475
    }                                                                                                                 // 5476
}                                                                                                                     // 5477
function ariaSet(element, attribute, value) {                                                                         // 5478
    element.setAttribute(                                                                                             // 5479
        (attribute == 'role' ? '' : 'aria-') + attribute,                                                             // 5480
        value                                                                                                         // 5481
    )                                                                                                                 // 5482
}                                                                                                                     // 5483
function ariaAttr(attribute, data) {                                                                                  // 5484
    if ( !$.isPlainObject(attribute) ) {                                                                              // 5485
        attribute = { attribute: data }                                                                               // 5486
    }                                                                                                                 // 5487
    data = ''                                                                                                         // 5488
    for ( var key in attribute ) {                                                                                    // 5489
        var attr = (key == 'role' ? '' : 'aria-') + key,                                                              // 5490
            attrVal = attribute[key]                                                                                  // 5491
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'                                             // 5492
    }                                                                                                                 // 5493
    return data                                                                                                       // 5494
}                                                                                                                     // 5495
                                                                                                                      // 5496
// IE8 bug throws an error for activeElements within iframes.                                                         // 5497
function getActiveElement() {                                                                                         // 5498
    try {                                                                                                             // 5499
        return document.activeElement                                                                                 // 5500
    } catch ( err ) { }                                                                                               // 5501
}                                                                                                                     // 5502
                                                                                                                      // 5503
                                                                                                                      // 5504
                                                                                                                      // 5505
// Expose the picker constructor.                                                                                     // 5506
return PickerConstructor                                                                                              // 5507
                                                                                                                      // 5508
                                                                                                                      // 5509
}));                                                                                                                  // 5510
                                                                                                                      // 5511
                                                                                                                      // 5512
;/*!                                                                                                                  // 5513
 * Date picker for pickadate.js v3.5.0                                                                                // 5514
 * http://amsul.github.io/pickadate.js/date.htm                                                                       // 5515
 */                                                                                                                   // 5516
                                                                                                                      // 5517
(function ( factory ) {                                                                                               // 5518
                                                                                                                      // 5519
    // AMD.                                                                                                           // 5520
    if ( typeof define == 'function' && define.amd )                                                                  // 5521
        define( ['picker', 'jquery'], factory )                                                                       // 5522
                                                                                                                      // 5523
    // Node.js/browserify.                                                                                            // 5524
    else if ( typeof exports == 'object' )                                                                            // 5525
        module.exports = factory( require('./picker.js'), require('jquery') )                                         // 5526
                                                                                                                      // 5527
    // Browser globals.                                                                                               // 5528
    else factory( Picker, jQuery )                                                                                    // 5529
                                                                                                                      // 5530
}(function( Picker, $ ) {                                                                                             // 5531
                                                                                                                      // 5532
                                                                                                                      // 5533
/**                                                                                                                   // 5534
 * Globals and constants                                                                                              // 5535
 */                                                                                                                   // 5536
var DAYS_IN_WEEK = 7,                                                                                                 // 5537
    WEEKS_IN_CALENDAR = 6,                                                                                            // 5538
    _ = Picker._                                                                                                      // 5539
                                                                                                                      // 5540
                                                                                                                      // 5541
                                                                                                                      // 5542
/**                                                                                                                   // 5543
 * The date picker constructor                                                                                        // 5544
 */                                                                                                                   // 5545
function DatePicker( picker, settings ) {                                                                             // 5546
                                                                                                                      // 5547
    var calendar = this,                                                                                              // 5548
        element = picker.$node[ 0 ],                                                                                  // 5549
        elementValue = element.value,                                                                                 // 5550
        elementDataValue = picker.$node.data( 'value' ),                                                              // 5551
        valueString = elementDataValue || elementValue,                                                               // 5552
        formatString = elementDataValue ? settings.formatSubmit : settings.format,                                    // 5553
        isRTL = function() {                                                                                          // 5554
                                                                                                                      // 5555
            return element.currentStyle ?                                                                             // 5556
                                                                                                                      // 5557
                // For IE.                                                                                            // 5558
                element.currentStyle.direction == 'rtl' :                                                             // 5559
                                                                                                                      // 5560
                // For normal browsers.                                                                               // 5561
                getComputedStyle( picker.$root[0] ).direction == 'rtl'                                                // 5562
        }                                                                                                             // 5563
                                                                                                                      // 5564
    calendar.settings = settings                                                                                      // 5565
    calendar.$node = picker.$node                                                                                     // 5566
                                                                                                                      // 5567
    // The queue of methods that will be used to build item objects.                                                  // 5568
    calendar.queue = {                                                                                                // 5569
        min: 'measure create',                                                                                        // 5570
        max: 'measure create',                                                                                        // 5571
        now: 'now create',                                                                                            // 5572
        select: 'parse create validate',                                                                              // 5573
        highlight: 'parse navigate create validate',                                                                  // 5574
        view: 'parse create validate viewset',                                                                        // 5575
        disable: 'deactivate',                                                                                        // 5576
        enable: 'activate'                                                                                            // 5577
    }                                                                                                                 // 5578
                                                                                                                      // 5579
    // The component's item object.                                                                                   // 5580
    calendar.item = {}                                                                                                // 5581
                                                                                                                      // 5582
    calendar.item.clear = null                                                                                        // 5583
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )                                                     // 5584
    calendar.item.enable = -(function( collectionDisabled ) {                                                         // 5585
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1                                     // 5586
    })( calendar.item.disable )                                                                                       // 5587
                                                                                                                      // 5588
    calendar.                                                                                                         // 5589
        set( 'min', settings.min ).                                                                                   // 5590
        set( 'max', settings.max ).                                                                                   // 5591
        set( 'now' )                                                                                                  // 5592
                                                                                                                      // 5593
    // When there’s a value, set the `select`, which in turn                                                          // 5594
    // also sets the `highlight` and `view`.                                                                          // 5595
    if ( valueString ) {                                                                                              // 5596
        calendar.set( 'select', valueString, { format: formatString })                                                // 5597
    }                                                                                                                 // 5598
                                                                                                                      // 5599
    // If there’s no value, default to highlighting “today”.                                                          // 5600
    else {                                                                                                            // 5601
        calendar.                                                                                                     // 5602
            set( 'select', null ).                                                                                    // 5603
            set( 'highlight', calendar.item.now )                                                                     // 5604
    }                                                                                                                 // 5605
                                                                                                                      // 5606
                                                                                                                      // 5607
    // The keycode to movement mapping.                                                                               // 5608
    calendar.key = {                                                                                                  // 5609
        40: 7, // Down                                                                                                // 5610
        38: -7, // Up                                                                                                 // 5611
        39: function() { return isRTL() ? -1 : 1 }, // Right                                                          // 5612
        37: function() { return isRTL() ? 1 : -1 }, // Left                                                           // 5613
        go: function( timeChange ) {                                                                                  // 5614
            var highlightedObject = calendar.item.highlight,                                                          // 5615
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(                                                                                             // 5617
                'highlight',                                                                                          // 5618
                targetDate,                                                                                           // 5619
                { interval: timeChange }                                                                              // 5620
            )                                                                                                         // 5621
            this.render()                                                                                             // 5622
        }                                                                                                             // 5623
    }                                                                                                                 // 5624
                                                                                                                      // 5625
                                                                                                                      // 5626
    // Bind some picker events.                                                                                       // 5627
    picker.                                                                                                           // 5628
        on( 'render', function() {                                                                                    // 5629
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {                          // 5630
                var value = this.value                                                                                // 5631
                if ( value ) {                                                                                        // 5632
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )   // 5633
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )                          // 5634
                }                                                                                                     // 5635
            })                                                                                                        // 5636
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {                           // 5637
                var value = this.value                                                                                // 5638
                if ( value ) {                                                                                        // 5639
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )  // 5640
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )                           // 5641
                }                                                                                                     // 5642
            })                                                                                                        // 5643
        }, 1 ).                                                                                                       // 5644
        on( 'open', function() {                                                                                      // 5645
            var includeToday = ''                                                                                     // 5646
            if ( calendar.disabled( calendar.get('now') ) ) {                                                         // 5647
                includeToday = ':not(.' + settings.klass.buttonToday + ')'                                            // 5648
            }                                                                                                         // 5649
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )                       // 5650
        }, 1 ).                                                                                                       // 5651
        on( 'close', function() {                                                                                     // 5652
            picker.$root.find( 'button, select' ).attr( 'disabled', true )                                            // 5653
        }, 1 )                                                                                                        // 5654
                                                                                                                      // 5655
} //DatePicker                                                                                                        // 5656
                                                                                                                      // 5657
                                                                                                                      // 5658
/**                                                                                                                   // 5659
 * Set a datepicker item object.                                                                                      // 5660
 */                                                                                                                   // 5661
DatePicker.prototype.set = function( type, value, options ) {                                                         // 5662
                                                                                                                      // 5663
    var calendar = this,                                                                                              // 5664
        calendarItem = calendar.item                                                                                  // 5665
                                                                                                                      // 5666
    // If the value is `null` just set it immediately.                                                                // 5667
    if ( value === null ) {                                                                                           // 5668
        if ( type == 'clear' ) type = 'select'                                                                        // 5669
        calendarItem[ type ] = value                                                                                  // 5670
        return calendar                                                                                               // 5671
    }                                                                                                                 // 5672
                                                                                                                      // 5673
    // Otherwise go through the queue of methods, and invoke the functions.                                           // 5674
    // Update this as the time unit, and set the final value as this item.                                            // 5675
    // * In the case of `enable`, keep the queue but set `disable` instead.                                           // 5676
    //   And in the case of `flip`, keep the queue but set `enable` instead.                                          // 5677
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )                                                            // 5679
        return value                                                                                                  // 5680
    }).pop()                                                                                                          // 5681
                                                                                                                      // 5682
    // Check if we need to cascade through more updates.                                                              // 5683
    if ( type == 'select' ) {                                                                                         // 5684
        calendar.set( 'highlight', calendarItem.select, options )                                                     // 5685
    }                                                                                                                 // 5686
    else if ( type == 'highlight' ) {                                                                                 // 5687
        calendar.set( 'view', calendarItem.highlight, options )                                                       // 5688
    }                                                                                                                 // 5689
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {                                                     // 5690
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {                                      // 5691
            calendar.set( 'select', calendarItem.select, options )                                                    // 5692
        }                                                                                                             // 5693
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {                                // 5694
            calendar.set( 'highlight', calendarItem.highlight, options )                                              // 5695
        }                                                                                                             // 5696
    }                                                                                                                 // 5697
                                                                                                                      // 5698
    return calendar                                                                                                   // 5699
} //DatePicker.prototype.set                                                                                          // 5700
                                                                                                                      // 5701
                                                                                                                      // 5702
/**                                                                                                                   // 5703
 * Get a datepicker item object.                                                                                      // 5704
 */                                                                                                                   // 5705
DatePicker.prototype.get = function( type ) {                                                                         // 5706
    return this.item[ type ]                                                                                          // 5707
} //DatePicker.prototype.get                                                                                          // 5708
                                                                                                                      // 5709
                                                                                                                      // 5710
/**                                                                                                                   // 5711
 * Create a picker date object.                                                                                       // 5712
 */                                                                                                                   // 5713
DatePicker.prototype.create = function( type, value, options ) {                                                      // 5714
                                                                                                                      // 5715
    var isInfiniteValue,                                                                                              // 5716
        calendar = this                                                                                               // 5717
                                                                                                                      // 5718
    // If there’s no value, use the type as the value.                                                                // 5719
    value = value === undefined ? type : value                                                                        // 5720
                                                                                                                      // 5721
                                                                                                                      // 5722
    // If it’s infinity, update the value.                                                                            // 5723
    if ( value == -Infinity || value == Infinity ) {                                                                  // 5724
        isInfiniteValue = value                                                                                       // 5725
    }                                                                                                                 // 5726
                                                                                                                      // 5727
    // If it’s an object, use the native date object.                                                                 // 5728
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {                                               // 5729
        value = value.obj                                                                                             // 5730
    }                                                                                                                 // 5731
                                                                                                                      // 5732
    // If it’s an array, convert it into a date and make sure                                                         // 5733
    // that it’s a valid date – otherwise default to today.                                                           // 5734
    else if ( $.isArray( value ) ) {                                                                                  // 5735
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )                                                        // 5736
        value = _.isDate( value ) ? value : calendar.create().obj                                                     // 5737
    }                                                                                                                 // 5738
                                                                                                                      // 5739
    // If it’s a number or date object, make a normalized date.                                                       // 5740
    else if ( _.isInteger( value ) || _.isDate( value ) ) {                                                           // 5741
        value = calendar.normalize( new Date( value ), options )                                                      // 5742
    }                                                                                                                 // 5743
                                                                                                                      // 5744
    // If it’s a literal true or any other case, set it to now.                                                       // 5745
    else /*if ( value === true )*/ {                                                                                  // 5746
        value = calendar.now( type, value, options )                                                                  // 5747
    }                                                                                                                 // 5748
                                                                                                                      // 5749
    // Return the compiled object.                                                                                    // 5750
    return {                                                                                                          // 5751
        year: isInfiniteValue || value.getFullYear(),                                                                 // 5752
        month: isInfiniteValue || value.getMonth(),                                                                   // 5753
        date: isInfiniteValue || value.getDate(),                                                                     // 5754
        day: isInfiniteValue || value.getDay(),                                                                       // 5755
        obj: isInfiniteValue || value,                                                                                // 5756
        pick: isInfiniteValue || value.getTime()                                                                      // 5757
    }                                                                                                                 // 5758
} //DatePicker.prototype.create                                                                                       // 5759
                                                                                                                      // 5760
                                                                                                                      // 5761
/**                                                                                                                   // 5762
 * Create a range limit object using an array, date object,                                                           // 5763
 * literal “true”, or integer relative to another time.                                                               // 5764
 */                                                                                                                   // 5765
DatePicker.prototype.createRange = function( from, to ) {                                                             // 5766
                                                                                                                      // 5767
    var calendar = this,                                                                                              // 5768
        createDate = function( date ) {                                                                               // 5769
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {                                           // 5770
                return calendar.create( date )                                                                        // 5771
            }                                                                                                         // 5772
            return date                                                                                               // 5773
        }                                                                                                             // 5774
                                                                                                                      // 5775
    // Create objects if possible.                                                                                    // 5776
    if ( !_.isInteger( from ) ) {                                                                                     // 5777
        from = createDate( from )                                                                                     // 5778
    }                                                                                                                 // 5779
    if ( !_.isInteger( to ) ) {                                                                                       // 5780
        to = createDate( to )                                                                                         // 5781
    }                                                                                                                 // 5782
                                                                                                                      // 5783
    // Create relative dates.                                                                                         // 5784
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {                                                             // 5785
        from = [ to.year, to.month, to.date + from ];                                                                 // 5786
    }                                                                                                                 // 5787
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {                                                        // 5788
        to = [ from.year, from.month, from.date + to ];                                                               // 5789
    }                                                                                                                 // 5790
                                                                                                                      // 5791
    return {                                                                                                          // 5792
        from: createDate( from ),                                                                                     // 5793
        to: createDate( to )                                                                                          // 5794
    }                                                                                                                 // 5795
} //DatePicker.prototype.createRange                                                                                  // 5796
                                                                                                                      // 5797
                                                                                                                      // 5798
/**                                                                                                                   // 5799
 * Check if a date unit falls within a date range object.                                                             // 5800
 */                                                                                                                   // 5801
DatePicker.prototype.withinRange = function( range, dateUnit ) {                                                      // 5802
    range = this.createRange(range.from, range.to)                                                                    // 5803
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick                                         // 5804
}                                                                                                                     // 5805
                                                                                                                      // 5806
                                                                                                                      // 5807
/**                                                                                                                   // 5808
 * Check if two date range objects overlap.                                                                           // 5809
 */                                                                                                                   // 5810
DatePicker.prototype.overlapRanges = function( one, two ) {                                                           // 5811
                                                                                                                      // 5812
    var calendar = this                                                                                               // 5813
                                                                                                                      // 5814
    // Convert the ranges into comparable dates.                                                                      // 5815
    one = calendar.createRange( one.from, one.to )                                                                    // 5816
    two = calendar.createRange( two.from, two.to )                                                                    // 5817
                                                                                                                      // 5818
    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||                            // 5819
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )                                  // 5820
}                                                                                                                     // 5821
                                                                                                                      // 5822
                                                                                                                      // 5823
/**                                                                                                                   // 5824
 * Get the date today.                                                                                                // 5825
 */                                                                                                                   // 5826
DatePicker.prototype.now = function( type, value, options ) {                                                         // 5827
    value = new Date()                                                                                                // 5828
    if ( options && options.rel ) {                                                                                   // 5829
        value.setDate( value.getDate() + options.rel )                                                                // 5830
    }                                                                                                                 // 5831
    return this.normalize( value, options )                                                                           // 5832
}                                                                                                                     // 5833
                                                                                                                      // 5834
                                                                                                                      // 5835
/**                                                                                                                   // 5836
 * Navigate to next/prev month.                                                                                       // 5837
 */                                                                                                                   // 5838
DatePicker.prototype.navigate = function( type, value, options ) {                                                    // 5839
                                                                                                                      // 5840
    var targetDateObject,                                                                                             // 5841
        targetYear,                                                                                                   // 5842
        targetMonth,                                                                                                  // 5843
        targetDate,                                                                                                   // 5844
        isTargetArray = $.isArray( value ),                                                                           // 5845
        isTargetObject = $.isPlainObject( value ),                                                                    // 5846
        viewsetObject = this.item.view/*,                                                                             // 5847
        safety = 100*/                                                                                                // 5848
                                                                                                                      // 5849
                                                                                                                      // 5850
    if ( isTargetArray || isTargetObject ) {                                                                          // 5851
                                                                                                                      // 5852
        if ( isTargetObject ) {                                                                                       // 5853
            targetYear = value.year                                                                                   // 5854
            targetMonth = value.month                                                                                 // 5855
            targetDate = value.date                                                                                   // 5856
        }                                                                                                             // 5857
        else {                                                                                                        // 5858
            targetYear = +value[0]                                                                                    // 5859
            targetMonth = +value[1]                                                                                   // 5860
            targetDate = +value[2]                                                                                    // 5861
        }                                                                                                             // 5862
                                                                                                                      // 5863
        // If we’re navigating months but the view is in a different                                                  // 5864
        // month, navigate to the view’s year and month.                                                              // 5865
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {                       // 5866
            targetYear = viewsetObject.year                                                                           // 5867
            targetMonth = viewsetObject.month                                                                         // 5868
        }                                                                                                             // 5869
                                                                                                                      // 5870
        // Figure out the expected target year and month.                                                             // 5871
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )      // 5872
        targetYear = targetDateObject.getFullYear()                                                                   // 5873
        targetMonth = targetDateObject.getMonth()                                                                     // 5874
                                                                                                                      // 5875
        // If the month we’re going to doesn’t have enough days,                                                      // 5876
        // keep decreasing the date until we reach the month’s last date.                                             // 5877
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {          // 5878
            targetDate -= 1                                                                                           // 5879
            /*safety -= 1                                                                                             // 5880
            if ( !safety ) {                                                                                          // 5881
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/                                                                                                       // 5883
        }                                                                                                             // 5884
                                                                                                                      // 5885
        value = [ targetYear, targetMonth, targetDate ]                                                               // 5886
    }                                                                                                                 // 5887
                                                                                                                      // 5888
    return value                                                                                                      // 5889
} //DatePicker.prototype.navigate                                                                                     // 5890
                                                                                                                      // 5891
                                                                                                                      // 5892
/**                                                                                                                   // 5893
 * Normalize a date by setting the hours to midnight.                                                                 // 5894
 */                                                                                                                   // 5895
DatePicker.prototype.normalize = function( value/*, options*/ ) {                                                     // 5896
    value.setHours( 0, 0, 0, 0 )                                                                                      // 5897
    return value                                                                                                      // 5898
}                                                                                                                     // 5899
                                                                                                                      // 5900
                                                                                                                      // 5901
/**                                                                                                                   // 5902
 * Measure the range of dates.                                                                                        // 5903
 */                                                                                                                   // 5904
DatePicker.prototype.measure = function( type, value/*, options*/ ) {                                                 // 5905
                                                                                                                      // 5906
    var calendar = this                                                                                               // 5907
                                                                                                                      // 5908
    // If it’s anything false-y, remove the limits.                                                                   // 5909
    if ( !value ) {                                                                                                   // 5910
        value = type == 'min' ? -Infinity : Infinity                                                                  // 5911
    }                                                                                                                 // 5912
                                                                                                                      // 5913
    // If it’s a string, parse it.                                                                                    // 5914
    else if ( typeof value == 'string' ) {                                                                            // 5915
        value = calendar.parse( type, value )                                                                         // 5916
    }                                                                                                                 // 5917
                                                                                                                      // 5918
    // If it's an integer, get a date relative to today.                                                              // 5919
    else if ( _.isInteger( value ) ) {                                                                                // 5920
        value = calendar.now( type, value, { rel: value } )                                                           // 5921
    }                                                                                                                 // 5922
                                                                                                                      // 5923
    return value                                                                                                      // 5924
} ///DatePicker.prototype.measure                                                                                     // 5925
                                                                                                                      // 5926
                                                                                                                      // 5927
/**                                                                                                                   // 5928
 * Create a viewset object based on navigation.                                                                       // 5929
 */                                                                                                                   // 5930
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {                                            // 5931
    return this.create([ dateObject.year, dateObject.month, 1 ])                                                      // 5932
}                                                                                                                     // 5933
                                                                                                                      // 5934
                                                                                                                      // 5935
/**                                                                                                                   // 5936
 * Validate a date as enabled and shift if needed.                                                                    // 5937
 */                                                                                                                   // 5938
DatePicker.prototype.validate = function( type, dateObject, options ) {                                               // 5939
                                                                                                                      // 5940
    var calendar = this,                                                                                              // 5941
                                                                                                                      // 5942
        // Keep a reference to the original date.                                                                     // 5943
        originalDateObject = dateObject,                                                                              // 5944
                                                                                                                      // 5945
        // Make sure we have an interval.                                                                             // 5946
        interval = options && options.interval ? options.interval : 1,                                                // 5947
                                                                                                                      // 5948
        // Check if the calendar enabled dates are inverted.                                                          // 5949
        isFlippedBase = calendar.item.enable === -1,                                                                  // 5950
                                                                                                                      // 5951
        // Check if we have any enabled dates after/before now.                                                       // 5952
        hasEnabledBeforeTarget, hasEnabledAfterTarget,                                                                // 5953
                                                                                                                      // 5954
        // The min & max limits.                                                                                      // 5955
        minLimitObject = calendar.item.min,                                                                           // 5956
        maxLimitObject = calendar.item.max,                                                                           // 5957
                                                                                                                      // 5958
        // Check if we’ve reached the limit during shifting.                                                          // 5959
        reachedMin, reachedMax,                                                                                       // 5960
                                                                                                                      // 5961
        // Check if the calendar is inverted and at least one weekday is enabled.                                     // 5962
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {                       // 5963
                                                                                                                      // 5964
            // If there’s a date, check where it is relative to the target.                                           // 5965
            if ( $.isArray( value ) ) {                                                                               // 5966
                var dateTime = calendar.create( value ).pick                                                          // 5967
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true                                       // 5968
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true                                   // 5969
            }                                                                                                         // 5970
                                                                                                                      // 5971
            // Return only integers for enabled weekdays.                                                             // 5972
            return _.isInteger( value )                                                                               // 5973
        }).length/*,                                                                                                  // 5974
                                                                                                                      // 5975
        safety = 100*/                                                                                                // 5976
                                                                                                                      // 5977
                                                                                                                      // 5978
                                                                                                                      // 5979
    // Cases to validate for:                                                                                         // 5980
    // [1] Not inverted and date disabled.                                                                            // 5981
    // [2] Inverted and some dates enabled.                                                                           // 5982
    // [3] Not inverted and out of range.                                                                             // 5983
    //                                                                                                                // 5984
    // Cases to **not** validate for:                                                                                 // 5985
    // • Navigating months.                                                                                           // 5986
    // • Not inverted and date enabled.                                                                               // 5987
    // • Inverted and all dates disabled.                                                                             // 5988
    // • ..and anything else.                                                                                         // 5989
    if ( !options || !options.nav ) if (                                                                              // 5990
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||                                              // 5991
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {                                                                                                               // 5994
                                                                                                                      // 5995
                                                                                                                      // 5996
        // When inverted, flip the direction if there aren’t any enabled weekdays                                     // 5997
        // and there are no enabled dates in the direction of the interval.                                           // 5998
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1                                                                                            // 6000
        }                                                                                                             // 6001
                                                                                                                      // 6002
                                                                                                                      // 6003
        // Keep looping until we reach an enabled date.                                                               // 6004
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {                                                     // 6005
                                                                                                                      // 6006
            /*safety -= 1                                                                                             // 6007
            if ( !safety ) {                                                                                          // 6008
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'                           // 6009
            }*/                                                                                                       // 6010
                                                                                                                      // 6011
                                                                                                                      // 6012
            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject                                                                       // 6015
                interval = interval > 0 ? 1 : -1                                                                      // 6016
            }                                                                                                         // 6017
                                                                                                                      // 6018
                                                                                                                      // 6019
            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {                                                           // 6021
                reachedMin = true                                                                                     // 6022
                interval = 1                                                                                          // 6023
                dateObject = calendar.create([                                                                        // 6024
                    minLimitObject.year,                                                                              // 6025
                    minLimitObject.month,                                                                             // 6026
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)                          // 6027
                ])                                                                                                    // 6028
            }                                                                                                         // 6029
            else if ( dateObject.pick >= maxLimitObject.pick ) {                                                      // 6030
                reachedMax = true                                                                                     // 6031
                interval = -1                                                                                         // 6032
                dateObject = calendar.create([                                                                        // 6033
                    maxLimitObject.year,                                                                              // 6034
                    maxLimitObject.month,                                                                             // 6035
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)                           // 6036
                ])                                                                                                    // 6037
            }                                                                                                         // 6038
                                                                                                                      // 6039
                                                                                                                      // 6040
            // If we’ve reached both limits, just break out of the loop.                                              // 6041
            if ( reachedMin && reachedMax ) {                                                                         // 6042
                break                                                                                                 // 6043
            }                                                                                                         // 6044
                                                                                                                      // 6045
                                                                                                                      // 6046
            // Finally, create the shifted date using the interval and keep looping.                                  // 6047
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])           // 6048
        }                                                                                                             // 6049
                                                                                                                      // 6050
    } //endif                                                                                                         // 6051
                                                                                                                      // 6052
                                                                                                                      // 6053
    // Return the date object settled on.                                                                             // 6054
    return dateObject                                                                                                 // 6055
} //DatePicker.prototype.validate                                                                                     // 6056
                                                                                                                      // 6057
                                                                                                                      // 6058
/**                                                                                                                   // 6059
 * Check if a date is disabled.                                                                                       // 6060
 */                                                                                                                   // 6061
DatePicker.prototype.disabled = function( dateToVerify ) {                                                            // 6062
                                                                                                                      // 6063
    var                                                                                                               // 6064
        calendar = this,                                                                                              // 6065
                                                                                                                      // 6066
        // Filter through the disabled dates to check if this is one.                                                 // 6067
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {                                   // 6068
                                                                                                                      // 6069
            // If the date is a number, match the weekday with 0index and `firstDay` check.                           // 6070
            if ( _.isInteger( dateToDisable ) ) {                                                                     // 6071
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7    // 6072
            }                                                                                                         // 6073
                                                                                                                      // 6074
            // If it’s an array or a native JS date, create and match the exact date.                                 // 6075
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {                                          // 6076
                return dateToVerify.pick === calendar.create( dateToDisable ).pick                                    // 6077
            }                                                                                                         // 6078
                                                                                                                      // 6079
            // If it’s an object, match a date within the “from” and “to” range.                                      // 6080
            if ( $.isPlainObject( dateToDisable ) ) {                                                                 // 6081
                return calendar.withinRange( dateToDisable, dateToVerify )                                            // 6082
            }                                                                                                         // 6083
        })                                                                                                            // 6084
                                                                                                                      // 6085
    // If this date matches a disabled date, confirm it’s not inverted.                                               // 6086
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {                   // 6087
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||                                        // 6088
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted                                                // 6089
    }).length                                                                                                         // 6090
                                                                                                                      // 6091
    // Check the calendar “enabled” flag and respectively flip the                                                    // 6092
    // disabled state. Then also check if it’s beyond the min/max limits.                                             // 6093
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||                                        // 6094
        dateToVerify.pick < calendar.item.min.pick ||                                                                 // 6095
        dateToVerify.pick > calendar.item.max.pick                                                                    // 6096
                                                                                                                      // 6097
} //DatePicker.prototype.disabled                                                                                     // 6098
                                                                                                                      // 6099
                                                                                                                      // 6100
/**                                                                                                                   // 6101
 * Parse a string into a usable type.                                                                                 // 6102
 */                                                                                                                   // 6103
DatePicker.prototype.parse = function( type, value, options ) {                                                       // 6104
                                                                                                                      // 6105
    var calendar = this,                                                                                              // 6106
        parsingObject = {}                                                                                            // 6107
                                                                                                                      // 6108
    // If it’s already parsed, we’re good.                                                                            // 6109
    if ( !value || typeof value != 'string' ) {                                                                       // 6110
        return value                                                                                                  // 6111
    }                                                                                                                 // 6112
                                                                                                                      // 6113
    // We need a `.format` to parse the value with.                                                                   // 6114
    if ( !( options && options.format ) ) {                                                                           // 6115
        options = options || {}                                                                                       // 6116
        options.format = calendar.settings.format                                                                     // 6117
    }                                                                                                                 // 6118
                                                                                                                      // 6119
    // Convert the format into an array and then map through it.                                                      // 6120
    calendar.formats.toArray( options.format ).map( function( label ) {                                               // 6121
                                                                                                                      // 6122
        var                                                                                                           // 6123
            // Grab the formatting label.                                                                             // 6124
            formattingLabel = calendar.formats[ label ],                                                              // 6125
                                                                                                                      // 6126
            // The format length is from the formatting label function or the                                         // 6127
            // label length without the escaping exclamation (!) mark.                                                // 6128
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length
                                                                                                                      // 6130
        // If there's a format label, split the value up to the format length.                                        // 6131
        // Then add it to the parsing object with appropriate label.                                                  // 6132
        if ( formattingLabel ) {                                                                                      // 6133
            parsingObject[ label ] = value.substr( 0, formatLength )                                                  // 6134
        }                                                                                                             // 6135
                                                                                                                      // 6136
        // Update the value as the substring from format length to end.                                               // 6137
        value = value.substr( formatLength )                                                                          // 6138
    })                                                                                                                // 6139
                                                                                                                      // 6140
    // Compensate for month 0index.                                                                                   // 6141
    return [                                                                                                          // 6142
        parsingObject.yyyy || parsingObject.yy,                                                                       // 6143
        +( parsingObject.mm || parsingObject.m ) - 1,                                                                 // 6144
        parsingObject.dd || parsingObject.d                                                                           // 6145
    ]                                                                                                                 // 6146
} //DatePicker.prototype.parse                                                                                        // 6147
                                                                                                                      // 6148
                                                                                                                      // 6149
/**                                                                                                                   // 6150
 * Various formats to display the object in.                                                                          // 6151
 */                                                                                                                   // 6152
DatePicker.prototype.formats = (function() {                                                                          // 6153
                                                                                                                      // 6154
    // Return the length of the first word in a collection.                                                           // 6155
    function getWordLengthFromCollection( string, collection, dateObject ) {                                          // 6156
                                                                                                                      // 6157
        // Grab the first word from the string.                                                                       // 6158
        var word = string.match( /\w+/ )[ 0 ]                                                                         // 6159
                                                                                                                      // 6160
        // If there's no month index, add it to the date object                                                       // 6161
        if ( !dateObject.mm && !dateObject.m ) {                                                                      // 6162
            dateObject.m = collection.indexOf( word ) + 1                                                             // 6163
        }                                                                                                             // 6164
                                                                                                                      // 6165
        // Return the length of the word.                                                                             // 6166
        return word.length                                                                                            // 6167
    }                                                                                                                 // 6168
                                                                                                                      // 6169
    // Get the length of the first word in a string.                                                                  // 6170
    function getFirstWordLength( string ) {                                                                           // 6171
        return string.match( /\w+/ )[ 0 ].length                                                                      // 6172
    }                                                                                                                 // 6173
                                                                                                                      // 6174
    return {                                                                                                          // 6175
                                                                                                                      // 6176
        d: function( string, dateObject ) {                                                                           // 6177
                                                                                                                      // 6178
            // If there's string, then get the digits length.                                                         // 6179
            // Otherwise return the selected date.                                                                    // 6180
            return string ? _.digits( string ) : dateObject.date                                                      // 6181
        },                                                                                                            // 6182
        dd: function( string, dateObject ) {                                                                          // 6183
                                                                                                                      // 6184
            // If there's a string, then the length is always 2.                                                      // 6185
            // Otherwise return the selected date with a leading zero.                                                // 6186
            return string ? 2 : _.lead( dateObject.date )                                                             // 6187
        },                                                                                                            // 6188
        ddd: function( string, dateObject ) {                                                                         // 6189
                                                                                                                      // 6190
            // If there's a string, then get the length of the first word.                                            // 6191
            // Otherwise return the short selected weekday.                                                           // 6192
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]              // 6193
        },                                                                                                            // 6194
        dddd: function( string, dateObject ) {                                                                        // 6195
                                                                                                                      // 6196
            // If there's a string, then get the length of the first word.                                            // 6197
            // Otherwise return the full selected weekday.                                                            // 6198
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]               // 6199
        },                                                                                                            // 6200
        m: function( string, dateObject ) {                                                                           // 6201
                                                                                                                      // 6202
            // If there's a string, then get the length of the digits                                                 // 6203
            // Otherwise return the selected month with 0index compensation.                                          // 6204
            return string ? _.digits( string ) : dateObject.month + 1                                                 // 6205
        },                                                                                                            // 6206
        mm: function( string, dateObject ) {                                                                          // 6207
                                                                                                                      // 6208
            // If there's a string, then the length is always 2.                                                      // 6209
            // Otherwise return the selected month with 0index and leading zero.                                      // 6210
            return string ? 2 : _.lead( dateObject.month + 1 )                                                        // 6211
        },                                                                                                            // 6212
        mmm: function( string, dateObject ) {                                                                         // 6213
                                                                                                                      // 6214
            var collection = this.settings.monthsShort                                                                // 6215
                                                                                                                      // 6216
            // If there's a string, get length of the relevant month from the short                                   // 6217
            // months collection. Otherwise return the selected month from that collection.                           // 6218
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },                                                                                                            // 6220
        mmmm: function( string, dateObject ) {                                                                        // 6221
                                                                                                                      // 6222
            var collection = this.settings.monthsFull                                                                 // 6223
                                                                                                                      // 6224
            // If there's a string, get length of the relevant month from the full                                    // 6225
            // months collection. Otherwise return the selected month from that collection.                           // 6226
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },                                                                                                            // 6228
        yy: function( string, dateObject ) {                                                                          // 6229
                                                                                                                      // 6230
            // If there's a string, then the length is always 2.                                                      // 6231
            // Otherwise return the selected year by slicing out the first 2 digits.                                  // 6232
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )                                                   // 6233
        },                                                                                                            // 6234
        yyyy: function( string, dateObject ) {                                                                        // 6235
                                                                                                                      // 6236
            // If there's a string, then the length is always 4.                                                      // 6237
            // Otherwise return the selected year.                                                                    // 6238
            return string ? 4 : dateObject.year                                                                       // 6239
        },                                                                                                            // 6240
                                                                                                                      // 6241
        // Create an array by splitting the formatting string passed.                                                 // 6242
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },             // 6243
                                                                                                                      // 6244
        // Format an object into a string using the formatting options.                                               // 6245
        toString: function ( formatString, itemObject ) {                                                             // 6246
            var calendar = this                                                                                       // 6247
            return calendar.formats.toArray( formatString ).map( function( label ) {                                  // 6248
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )                                                                                             // 6250
        }                                                                                                             // 6251
    }                                                                                                                 // 6252
})() //DatePicker.prototype.formats                                                                                   // 6253
                                                                                                                      // 6254
                                                                                                                      // 6255
                                                                                                                      // 6256
                                                                                                                      // 6257
/**                                                                                                                   // 6258
 * Check if two date units are the exact.                                                                             // 6259
 */                                                                                                                   // 6260
DatePicker.prototype.isDateExact = function( one, two ) {                                                             // 6261
                                                                                                                      // 6262
    var calendar = this                                                                                               // 6263
                                                                                                                      // 6264
    // When we’re working with weekdays, do a direct comparison.                                                      // 6265
    if (                                                                                                              // 6266
        ( _.isInteger( one ) && _.isInteger( two ) ) ||                                                               // 6267
        ( typeof one == 'boolean' && typeof two == 'boolean' )                                                        // 6268
     ) {                                                                                                              // 6269
        return one === two                                                                                            // 6270
    }                                                                                                                 // 6271
                                                                                                                      // 6272
    // When we’re working with date representations, compare the “pick” value.                                        // 6273
    if (                                                                                                              // 6274
        ( _.isDate( one ) || $.isArray( one ) ) &&                                                                    // 6275
        ( _.isDate( two ) || $.isArray( two ) )                                                                       // 6276
    ) {                                                                                                               // 6277
        return calendar.create( one ).pick === calendar.create( two ).pick                                            // 6278
    }                                                                                                                 // 6279
                                                                                                                      // 6280
    // When we’re working with range objects, compare the “from” and “to”.                                            // 6281
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {                                                         // 6282
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )                   // 6283
    }                                                                                                                 // 6284
                                                                                                                      // 6285
    return false                                                                                                      // 6286
}                                                                                                                     // 6287
                                                                                                                      // 6288
                                                                                                                      // 6289
/**                                                                                                                   // 6290
 * Check if two date units overlap.                                                                                   // 6291
 */                                                                                                                   // 6292
DatePicker.prototype.isDateOverlap = function( one, two ) {                                                           // 6293
                                                                                                                      // 6294
    var calendar = this,                                                                                              // 6295
        firstDay = calendar.settings.firstDay ? 1 : 0                                                                 // 6296
                                                                                                                      // 6297
    // When we’re working with a weekday index, compare the days.                                                     // 6298
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {                                            // 6299
        one = one % 7 + firstDay                                                                                      // 6300
        return one === calendar.create( two ).day + 1                                                                 // 6301
    }                                                                                                                 // 6302
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {                                            // 6303
        two = two % 7 + firstDay                                                                                      // 6304
        return two === calendar.create( one ).day + 1                                                                 // 6305
    }                                                                                                                 // 6306
                                                                                                                      // 6307
    // When we’re working with range objects, check if the ranges overlap.                                            // 6308
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {                                                         // 6309
        return calendar.overlapRanges( one, two )                                                                     // 6310
    }                                                                                                                 // 6311
                                                                                                                      // 6312
    return false                                                                                                      // 6313
}                                                                                                                     // 6314
                                                                                                                      // 6315
                                                                                                                      // 6316
/**                                                                                                                   // 6317
 * Flip the “enabled” state.                                                                                          // 6318
 */                                                                                                                   // 6319
DatePicker.prototype.flipEnable = function(val) {                                                                     // 6320
    var itemObject = this.item                                                                                        // 6321
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)                                                     // 6322
}                                                                                                                     // 6323
                                                                                                                      // 6324
                                                                                                                      // 6325
/**                                                                                                                   // 6326
 * Mark a collection of dates as “disabled”.                                                                          // 6327
 */                                                                                                                   // 6328
DatePicker.prototype.deactivate = function( type, datesToDisable ) {                                                  // 6329
                                                                                                                      // 6330
    var calendar = this,                                                                                              // 6331
        disabledItems = calendar.item.disable.slice(0)                                                                // 6332
                                                                                                                      // 6333
                                                                                                                      // 6334
    // If we’re flipping, that’s all we need to do.                                                                   // 6335
    if ( datesToDisable == 'flip' ) {                                                                                 // 6336
        calendar.flipEnable()                                                                                         // 6337
    }                                                                                                                 // 6338
                                                                                                                      // 6339
    else if ( datesToDisable === false ) {                                                                            // 6340
        calendar.flipEnable(1)                                                                                        // 6341
        disabledItems = []                                                                                            // 6342
    }                                                                                                                 // 6343
                                                                                                                      // 6344
    else if ( datesToDisable === true ) {                                                                             // 6345
        calendar.flipEnable(-1)                                                                                       // 6346
        disabledItems = []                                                                                            // 6347
    }                                                                                                                 // 6348
                                                                                                                      // 6349
    // Otherwise go through the dates to disable.                                                                     // 6350
    else {                                                                                                            // 6351
                                                                                                                      // 6352
        datesToDisable.map(function( unitToDisable ) {                                                                // 6353
                                                                                                                      // 6354
            var matchFound                                                                                            // 6355
                                                                                                                      // 6356
            // When we have disabled items, check for matches.                                                        // 6357
            // If something is matched, immediately break out.                                                        // 6358
            for ( var index = 0; index < disabledItems.length; index += 1 ) {                                         // 6359
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {                                  // 6360
                    matchFound = true                                                                                 // 6361
                    break                                                                                             // 6362
                }                                                                                                     // 6363
            }                                                                                                         // 6364
                                                                                                                      // 6365
            // If nothing was found, add the validated unit to the collection.                                        // 6366
            if ( !matchFound ) {                                                                                      // 6367
                if (                                                                                                  // 6368
                    _.isInteger( unitToDisable ) ||                                                                   // 6369
                    _.isDate( unitToDisable ) ||                                                                      // 6370
                    $.isArray( unitToDisable ) ||                                                                     // 6371
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )                    // 6372
                ) {                                                                                                   // 6373
                    disabledItems.push( unitToDisable )                                                               // 6374
                }                                                                                                     // 6375
            }                                                                                                         // 6376
        })                                                                                                            // 6377
    }                                                                                                                 // 6378
                                                                                                                      // 6379
    // Return the updated collection.                                                                                 // 6380
    return disabledItems                                                                                              // 6381
} //DatePicker.prototype.deactivate                                                                                   // 6382
                                                                                                                      // 6383
                                                                                                                      // 6384
/**                                                                                                                   // 6385
 * Mark a collection of dates as “enabled”.                                                                           // 6386
 */                                                                                                                   // 6387
DatePicker.prototype.activate = function( type, datesToEnable ) {                                                     // 6388
                                                                                                                      // 6389
    var calendar = this,                                                                                              // 6390
        disabledItems = calendar.item.disable,                                                                        // 6391
        disabledItemsCount = disabledItems.length                                                                     // 6392
                                                                                                                      // 6393
    // If we’re flipping, that’s all we need to do.                                                                   // 6394
    if ( datesToEnable == 'flip' ) {                                                                                  // 6395
        calendar.flipEnable()                                                                                         // 6396
    }                                                                                                                 // 6397
                                                                                                                      // 6398
    else if ( datesToEnable === true ) {                                                                              // 6399
        calendar.flipEnable(1)                                                                                        // 6400
        disabledItems = []                                                                                            // 6401
    }                                                                                                                 // 6402
                                                                                                                      // 6403
    else if ( datesToEnable === false ) {                                                                             // 6404
        calendar.flipEnable(-1)                                                                                       // 6405
        disabledItems = []                                                                                            // 6406
    }                                                                                                                 // 6407
                                                                                                                      // 6408
    // Otherwise go through the disabled dates.                                                                       // 6409
    else {                                                                                                            // 6410
                                                                                                                      // 6411
        datesToEnable.map(function( unitToEnable ) {                                                                  // 6412
                                                                                                                      // 6413
            var matchFound,                                                                                           // 6414
                disabledUnit,                                                                                         // 6415
                index,                                                                                                // 6416
                isExactRange                                                                                          // 6417
                                                                                                                      // 6418
            // Go through the disabled items and try to find a match.                                                 // 6419
            for ( index = 0; index < disabledItemsCount; index += 1 ) {                                               // 6420
                                                                                                                      // 6421
                disabledUnit = disabledItems[index]                                                                   // 6422
                                                                                                                      // 6423
                // When an exact match is found, remove it from the collection.                                       // 6424
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {                                           // 6425
                    matchFound = disabledItems[index] = null                                                          // 6426
                    isExactRange = true                                                                               // 6427
                    break                                                                                             // 6428
                }                                                                                                     // 6429
                                                                                                                      // 6430
                // When an overlapped match is found, add the “inverted” state to it.                                 // 6431
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {                                    // 6432
                    if ( $.isPlainObject( unitToEnable ) ) {                                                          // 6433
                        unitToEnable.inverted = true                                                                  // 6434
                        matchFound = unitToEnable                                                                     // 6435
                    }                                                                                                 // 6436
                    else if ( $.isArray( unitToEnable ) ) {                                                           // 6437
                        matchFound = unitToEnable                                                                     // 6438
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )                                           // 6439
                    }                                                                                                 // 6440
                    else if ( _.isDate( unitToEnable ) ) {                                                            // 6441
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }                                                                                                 // 6443
                    break                                                                                             // 6444
                }                                                                                                     // 6445
            }                                                                                                         // 6446
                                                                                                                      // 6447
            // If a match was found, remove a previous duplicate entry.                                               // 6448
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {                             // 6449
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {                                   // 6450
                    disabledItems[index] = null                                                                       // 6451
                    break                                                                                             // 6452
                }                                                                                                     // 6453
            }                                                                                                         // 6454
                                                                                                                      // 6455
            // In the event that we’re dealing with an exact range of dates,                                          // 6456
            // make sure there are no “inverted” dates because of it.                                                 // 6457
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {                           // 6458
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {                                 // 6459
                    disabledItems[index] = null                                                                       // 6460
                    break                                                                                             // 6461
                }                                                                                                     // 6462
            }                                                                                                         // 6463
                                                                                                                      // 6464
            // If something is still matched, add it into the collection.                                             // 6465
            if ( matchFound ) {                                                                                       // 6466
                disabledItems.push( matchFound )                                                                      // 6467
            }                                                                                                         // 6468
        })                                                                                                            // 6469
    }                                                                                                                 // 6470
                                                                                                                      // 6471
    // Return the updated collection.                                                                                 // 6472
    return disabledItems.filter(function( val ) { return val != null })                                               // 6473
} //DatePicker.prototype.activate                                                                                     // 6474
                                                                                                                      // 6475
                                                                                                                      // 6476
/**                                                                                                                   // 6477
 * Create a string for the nodes in the picker.                                                                       // 6478
 */                                                                                                                   // 6479
DatePicker.prototype.nodes = function( isOpen ) {                                                                     // 6480
                                                                                                                      // 6481
    var                                                                                                               // 6482
        calendar = this,                                                                                              // 6483
        settings = calendar.settings,                                                                                 // 6484
        calendarItem = calendar.item,                                                                                 // 6485
        nowObject = calendarItem.now,                                                                                 // 6486
        selectedObject = calendarItem.select,                                                                         // 6487
        highlightedObject = calendarItem.highlight,                                                                   // 6488
        viewsetObject = calendarItem.view,                                                                            // 6489
        disabledCollection = calendarItem.disable,                                                                    // 6490
        minLimitObject = calendarItem.min,                                                                            // 6491
        maxLimitObject = calendarItem.max,                                                                            // 6492
                                                                                                                      // 6493
                                                                                                                      // 6494
        // Create the calendar table head using a copy of weekday labels collection.                                  // 6495
        // * We do a copy so we don't mutate the original array.                                                      // 6496
        tableHead = (function( collection, fullCollection ) {                                                         // 6497
                                                                                                                      // 6498
            // If the first day should be Monday, move Sunday to the end.                                             // 6499
            if ( settings.firstDay ) {                                                                                // 6500
                collection.push( collection.shift() )                                                                 // 6501
                fullCollection.push( fullCollection.shift() )                                                         // 6502
            }                                                                                                         // 6503
                                                                                                                      // 6504
            // Create and return the table head group.                                                                // 6505
            return _.node(                                                                                            // 6506
                'thead',                                                                                              // 6507
                _.node(                                                                                               // 6508
                    'tr',                                                                                             // 6509
                    _.group({                                                                                         // 6510
                        min: 0,                                                                                       // 6511
                        max: DAYS_IN_WEEK - 1,                                                                        // 6512
                        i: 1,                                                                                         // 6513
                        node: 'th',                                                                                   // 6514
                        item: function( counter ) {                                                                   // 6515
                            return [                                                                                  // 6516
                                collection[ counter ],                                                                // 6517
                                settings.klass.weekdays,                                                              // 6518
                                'scope=col title="' + fullCollection[ counter ] + '"'                                 // 6519
                            ]                                                                                         // 6520
                        }                                                                                             // 6521
                    })                                                                                                // 6522
                )                                                                                                     // 6523
            ) //endreturn                                                                                             // 6524
                                                                                                                      // 6525
        // Materialize modified                                                                                       // 6526
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead
                                                                                                                      // 6528
                                                                                                                      // 6529
        // Create the nav for next/prev month.                                                                        // 6530
        createMonthNav = function( next ) {                                                                           // 6531
                                                                                                                      // 6532
            // Otherwise, return the created month tag.                                                               // 6533
            return _.node(                                                                                            // 6534
                'div',                                                                                                // 6535
                ' ',                                                                                                  // 6536
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (                                              // 6537
                                                                                                                      // 6538
                    // If the focused month is outside the range, disabled the button.                                // 6539
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''                                                             // 6542
                ),                                                                                                    // 6543
                'data-nav=' + ( next || -1 ) + ' ' +                                                                  // 6544
                _.ariaAttr({                                                                                          // 6545
                    role: 'button',                                                                                   // 6546
                    controls: calendar.$node[0].id + '_table'                                                         // 6547
                }) + ' ' +                                                                                            // 6548
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'                         // 6549
            ) //endreturn                                                                                             // 6550
        }, //createMonthNav                                                                                           // 6551
                                                                                                                      // 6552
                                                                                                                      // 6553
        // Create the month label.                                                                                    // 6554
        //Materialize modified                                                                                        // 6555
        createMonthLabel = function(override) {                                                                       // 6556
                                                                                                                      // 6557
            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull              // 6558
                                                                                                                      // 6559
             // Materialize modified                                                                                  // 6560
            if (override == "short_months") {                                                                         // 6561
              monthsCollection = settings.monthsShort;                                                                // 6562
            }                                                                                                         // 6563
                                                                                                                      // 6564
            // If there are months to select, add a dropdown menu.                                                    // 6565
            if ( settings.selectMonths  && override == undefined) {                                                   // 6566
                                                                                                                      // 6567
                return _.node( 'select',                                                                              // 6568
                    _.group({                                                                                         // 6569
                        min: 0,                                                                                       // 6570
                        max: 11,                                                                                      // 6571
                        i: 1,                                                                                         // 6572
                        node: 'option',                                                                               // 6573
                        item: function( loopedMonth ) {                                                               // 6574
                                                                                                                      // 6575
                            return [                                                                                  // 6576
                                                                                                                      // 6577
                                // The looped month and no classes.                                                   // 6578
                                monthsCollection[ loopedMonth ], 0,                                                   // 6579
                                                                                                                      // 6580
                                // Set the value and selected index.                                                  // 6581
                                'value=' + loopedMonth +                                                              // 6582
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +                           // 6583
                                (                                                                                     // 6584
                                    (                                                                                 // 6585
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?                                                                               // 6588
                                    ' disabled' : ''                                                                  // 6589
                                )                                                                                     // 6590
                            ]                                                                                         // 6591
                        }                                                                                             // 6592
                    }),                                                                                               // 6593
                    settings.klass.selectMonth + ' browser-default',                                                  // 6594
                    ( isOpen ? '' : 'disabled' ) + ' ' +                                                              // 6595
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +                                 // 6596
                    'title="' + settings.labelMonthSelect + '"'                                                       // 6597
                )                                                                                                     // 6598
            }                                                                                                         // 6599
                                                                                                                      // 6600
            // Materialize modified                                                                                   // 6601
            if (override == "short_months")                                                                           // 6602
                if (selectedObject != null)                                                                           // 6603
                return _.node( 'div', monthsCollection[ selectedObject.month ] );                                     // 6604
                else return _.node( 'div', monthsCollection[ viewsetObject.month ] );                                 // 6605
                                                                                                                      // 6606
            // If there's a need for a month selector                                                                 // 6607
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )                     // 6608
        }, //createMonthLabel                                                                                         // 6609
                                                                                                                      // 6610
                                                                                                                      // 6611
        // Create the year label.                                                                                     // 6612
        // Materialize modified                                                                                       // 6613
        createYearLabel = function(override) {                                                                        // 6614
                                                                                                                      // 6615
            var focusedYear = viewsetObject.year,                                                                     // 6616
                                                                                                                      // 6617
            // If years selector is set to a literal "true", set it to 5. Otherwise                                   // 6618
            // divide in half to get half before and half after focused year.                                         // 6619
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )                          // 6620
                                                                                                                      // 6621
            // If there are years to select, add a dropdown menu.                                                     // 6622
            if ( numberYears ) {                                                                                      // 6623
                                                                                                                      // 6624
                var                                                                                                   // 6625
                    minYear = minLimitObject.year,                                                                    // 6626
                    maxYear = maxLimitObject.year,                                                                    // 6627
                    lowestYear = focusedYear - numberYears,                                                           // 6628
                    highestYear = focusedYear + numberYears                                                           // 6629
                                                                                                                      // 6630
                // If the min year is greater than the lowest year, increase the highest year                         // 6631
                // by the difference and set the lowest year to the min year.                                         // 6632
                if ( minYear > lowestYear ) {                                                                         // 6633
                    highestYear += minYear - lowestYear                                                               // 6634
                    lowestYear = minYear                                                                              // 6635
                }                                                                                                     // 6636
                                                                                                                      // 6637
                // If the max year is less than the highest year, decrease the lowest year                            // 6638
                // by the lower of the two: available and needed years. Then set the                                  // 6639
                // highest year to the max year.                                                                      // 6640
                if ( maxYear < highestYear ) {                                                                        // 6641
                                                                                                                      // 6642
                    var availableYears = lowestYear - minYear,                                                        // 6643
                        neededYears = highestYear - maxYear                                                           // 6644
                                                                                                                      // 6645
                    lowestYear -= availableYears > neededYears ? neededYears : availableYears                         // 6646
                    highestYear = maxYear                                                                             // 6647
                }                                                                                                     // 6648
                                                                                                                      // 6649
                if ( settings.selectYears  && override == undefined ) {                                               // 6650
                    return _.node( 'select',                                                                          // 6651
                        _.group({                                                                                     // 6652
                            min: lowestYear,                                                                          // 6653
                            max: highestYear,                                                                         // 6654
                            i: 1,                                                                                     // 6655
                            node: 'option',                                                                           // 6656
                            item: function( loopedYear ) {                                                            // 6657
                                return [                                                                              // 6658
                                                                                                                      // 6659
                                    // The looped year and no classes.                                                // 6660
                                    loopedYear, 0,                                                                    // 6661
                                                                                                                      // 6662
                                    // Set the value and selected index.                                              // 6663
                                    'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )          // 6664
                                ]                                                                                     // 6665
                            }                                                                                         // 6666
                        }),                                                                                           // 6667
                        settings.klass.selectYear + ' browser-default',                                               // 6668
                        ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                        'title="' + settings.labelYearSelect + '"'                                                    // 6670
                    )                                                                                                 // 6671
                }                                                                                                     // 6672
            }                                                                                                         // 6673
                                                                                                                      // 6674
            // Materialize modified                                                                                   // 6675
            if (override == "raw")                                                                                    // 6676
                return _.node( 'div', focusedYear )                                                                   // 6677
                                                                                                                      // 6678
            // Otherwise just return the year focused                                                                 // 6679
            return _.node( 'div', focusedYear, settings.klass.year )                                                  // 6680
        } //createYearLabel                                                                                           // 6681
                                                                                                                      // 6682
                                                                                                                      // 6683
        // Materialize modified                                                                                       // 6684
        createDayLabel = function() {                                                                                 // 6685
                if (selectedObject != null)                                                                           // 6686
                    return _.node( 'div', selectedObject.date)                                                        // 6687
                else return _.node( 'div', nowObject.date)                                                            // 6688
            }                                                                                                         // 6689
        createWeekdayLabel = function() {                                                                             // 6690
            var display_day;                                                                                          // 6691
                                                                                                                      // 6692
            if (selectedObject != null)                                                                               // 6693
                display_day = selectedObject.day;                                                                     // 6694
            else                                                                                                      // 6695
                display_day = nowObject.day;                                                                          // 6696
            var weekday = settings.weekdaysFull[ display_day ]                                                        // 6697
            return weekday                                                                                            // 6698
        }                                                                                                             // 6699
                                                                                                                      // 6700
                                                                                                                      // 6701
    // Create and return the entire calendar.                                                                         // 6702
return _.node(                                                                                                        // 6703
        // Date presentation View                                                                                     // 6704
        'div',                                                                                                        // 6705
            _.node(                                                                                                   // 6706
                'div',                                                                                                // 6707
                createWeekdayLabel(),                                                                                 // 6708
                "picker__weekday-display"                                                                             // 6709
            )+                                                                                                        // 6710
            _.node(                                                                                                   // 6711
                // Div for short Month                                                                                // 6712
                'div',                                                                                                // 6713
                createMonthLabel("short_months"),                                                                     // 6714
                settings.klass.month_display                                                                          // 6715
            )+                                                                                                        // 6716
            _.node(                                                                                                   // 6717
                // Div for Day                                                                                        // 6718
                'div',                                                                                                // 6719
                createDayLabel() ,                                                                                    // 6720
                settings.klass.day_display                                                                            // 6721
            )+                                                                                                        // 6722
            _.node(                                                                                                   // 6723
                // Div for Year                                                                                       // 6724
                'div',                                                                                                // 6725
                createYearLabel("raw") ,                                                                              // 6726
                settings.klass.year_display                                                                           // 6727
            ),                                                                                                        // 6728
        settings.klass.date_display                                                                                   // 6729
    )+                                                                                                                // 6730
    // Calendar container                                                                                             // 6731
    _.node('div',                                                                                                     // 6732
        _.node('div',                                                                                                 // 6733
        ( settings.selectYears ?  createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),                                                                       // 6735
        settings.klass.header                                                                                         // 6736
    ) + _.node(                                                                                                       // 6737
        'table',                                                                                                      // 6738
        tableHead +                                                                                                   // 6739
        _.node(                                                                                                       // 6740
            'tbody',                                                                                                  // 6741
            _.group({                                                                                                 // 6742
                min: 0,                                                                                               // 6743
                max: WEEKS_IN_CALENDAR - 1,                                                                           // 6744
                i: 1,                                                                                                 // 6745
                node: 'tr',                                                                                           // 6746
                item: function( rowCounter ) {                                                                        // 6747
                                                                                                                      // 6748
                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.         // 6749
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0
                                                                                                                      // 6751
                    return [                                                                                          // 6752
                        _.group({                                                                                     // 6753
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {                                                                         // 6755
                                return this.min + DAYS_IN_WEEK - 1                                                    // 6756
                            },                                                                                        // 6757
                            i: 1,                                                                                     // 6758
                            node: 'td',                                                                               // 6759
                            item: function( targetDate ) {                                                            // 6760
                                                                                                                      // 6761
                                // Convert the time date from a relative date to a target date.                       // 6762
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])
                                                                                                                      // 6764
                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,            // 6765
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,   // 6766
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )
                                                                                                                      // 6769
                                return [                                                                              // 6770
                                    _.node(                                                                           // 6771
                                        'div',                                                                        // 6772
                                        targetDate.date,                                                              // 6773
                                        (function( klasses ) {                                                        // 6774
                                                                                                                      // 6775
                                            // Add the `infocus` or `outfocus` classes based on month in view.        // 6776
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )
                                                                                                                      // 6778
                                            // Add the `today` class if needed.                                       // 6779
                                            if ( nowObject.pick == targetDate.pick ) {                                // 6780
                                                klasses.push( settings.klass.now )                                    // 6781
                                            }                                                                         // 6782
                                                                                                                      // 6783
                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {                                                       // 6785
                                                klasses.push( settings.klass.selected )                               // 6786
                                            }                                                                         // 6787
                                                                                                                      // 6788
                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {                                                    // 6790
                                                klasses.push( settings.klass.highlighted )                            // 6791
                                            }                                                                         // 6792
                                                                                                                      // 6793
                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {                                                       // 6795
                                                klasses.push( settings.klass.disabled )                               // 6796
                                            }                                                                         // 6797
                                                                                                                      // 6798
                                            return klasses.join( ' ' )                                                // 6799
                                        })([ settings.klass.day ]),                                                   // 6800
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({                           // 6801
                                            role: 'gridcell',                                                         // 6802
                                            label: formattedDate,                                                     // 6803
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,                            // 6805
                                            disabled: isDisabled ? true : null                                        // 6806
                                        })                                                                            // 6807
                                    ),                                                                                // 6808
                                    '',                                                                               // 6809
                                    _.ariaAttr({ role: 'presentation' })                                              // 6810
                                ] //endreturn                                                                         // 6811
                            }                                                                                         // 6812
                        })                                                                                            // 6813
                    ] //endreturn                                                                                     // 6814
                }                                                                                                     // 6815
            })                                                                                                        // 6816
        ),                                                                                                            // 6817
        settings.klass.table,                                                                                         // 6818
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({                                                // 6819
            role: 'grid',                                                                                             // 6820
            controls: calendar.$node[0].id,                                                                           // 6821
            readonly: true                                                                                            // 6822
        })                                                                                                            // 6823
    )                                                                                                                 // 6824
    , settings.klass.calendar_container) // end calendar                                                              // 6825
                                                                                                                      // 6826
     +                                                                                                                // 6827
                                                                                                                      // 6828
    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.                    // 6829
    _.node(                                                                                                           // 6830
        'div',                                                                                                        // 6831
        _.node( 'button', settings.today, "btn-flat picker__today",                                                   // 6832
            'type=button data-pick=' + nowObject.pick +                                                               // 6833
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +                                    // 6834
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +                                                        // 6835
        _.node( 'button', settings.clear, "btn-flat picker__clear",                                                   // 6836
            'type=button data-clear=1' +                                                                              // 6837
            ( isOpen ? '' : ' disabled' ) + ' ' +                                                                     // 6838
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +                                                        // 6839
        _.node('button', settings.close, "btn-flat picker__close",                                                    // 6840
            'type=button data-close=true ' +                                                                          // 6841
            ( isOpen ? '' : ' disabled' ) + ' ' +                                                                     // 6842
            _.ariaAttr({ controls: calendar.$node[0].id }) ),                                                         // 6843
        settings.klass.footer                                                                                         // 6844
    ) //endreturn                                                                                                     // 6845
} //DatePicker.prototype.nodes                                                                                        // 6846
                                                                                                                      // 6847
                                                                                                                      // 6848
                                                                                                                      // 6849
                                                                                                                      // 6850
/**                                                                                                                   // 6851
 * The date picker defaults.                                                                                          // 6852
 */                                                                                                                   // 6853
DatePicker.defaults = (function( prefix ) {                                                                           // 6854
                                                                                                                      // 6855
    return {                                                                                                          // 6856
                                                                                                                      // 6857
        // The title label to use for the month nav buttons                                                           // 6858
        labelMonthNext: 'Next month',                                                                                 // 6859
        labelMonthPrev: 'Previous month',                                                                             // 6860
                                                                                                                      // 6861
        // The title label to use for the dropdown selectors                                                          // 6862
        labelMonthSelect: 'Select a month',                                                                           // 6863
        labelYearSelect: 'Select a year',                                                                             // 6864
                                                                                                                      // 6865
        // Months and weekdays                                                                                        // 6866
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],          // 6868
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],               // 6869
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],                                           // 6870
                                                                                                                      // 6871
        // Materialize modified                                                                                       // 6872
        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],                                                        // 6873
                                                                                                                      // 6874
        // Today and clear                                                                                            // 6875
        today: 'Today',                                                                                               // 6876
        clear: 'Clear',                                                                                               // 6877
        close: 'Close',                                                                                               // 6878
                                                                                                                      // 6879
        // The format to show on the `input` element                                                                  // 6880
        format: 'd mmmm, yyyy',                                                                                       // 6881
                                                                                                                      // 6882
        // Classes                                                                                                    // 6883
        klass: {                                                                                                      // 6884
                                                                                                                      // 6885
            table: prefix + 'table',                                                                                  // 6886
                                                                                                                      // 6887
            header: prefix + 'header',                                                                                // 6888
                                                                                                                      // 6889
                                                                                                                      // 6890
            // Materialize Added klasses                                                                              // 6891
            date_display: prefix + 'date-display',                                                                    // 6892
            day_display: prefix + 'day-display',                                                                      // 6893
            month_display: prefix + 'month-display',                                                                  // 6894
            year_display: prefix + 'year-display',                                                                    // 6895
            calendar_container: prefix + 'calendar-container',                                                        // 6896
            // end                                                                                                    // 6897
                                                                                                                      // 6898
                                                                                                                      // 6899
                                                                                                                      // 6900
            navPrev: prefix + 'nav--prev',                                                                            // 6901
            navNext: prefix + 'nav--next',                                                                            // 6902
            navDisabled: prefix + 'nav--disabled',                                                                    // 6903
                                                                                                                      // 6904
            month: prefix + 'month',                                                                                  // 6905
            year: prefix + 'year',                                                                                    // 6906
                                                                                                                      // 6907
            selectMonth: prefix + 'select--month',                                                                    // 6908
            selectYear: prefix + 'select--year',                                                                      // 6909
                                                                                                                      // 6910
            weekdays: prefix + 'weekday',                                                                             // 6911
                                                                                                                      // 6912
            day: prefix + 'day',                                                                                      // 6913
            disabled: prefix + 'day--disabled',                                                                       // 6914
            selected: prefix + 'day--selected',                                                                       // 6915
            highlighted: prefix + 'day--highlighted',                                                                 // 6916
            now: prefix + 'day--today',                                                                               // 6917
            infocus: prefix + 'day--infocus',                                                                         // 6918
            outfocus: prefix + 'day--outfocus',                                                                       // 6919
                                                                                                                      // 6920
            footer: prefix + 'footer',                                                                                // 6921
                                                                                                                      // 6922
            buttonClear: prefix + 'button--clear',                                                                    // 6923
            buttonToday: prefix + 'button--today',                                                                    // 6924
            buttonClose: prefix + 'button--close'                                                                     // 6925
        }                                                                                                             // 6926
    }                                                                                                                 // 6927
})( Picker.klasses().picker + '__' )                                                                                  // 6928
                                                                                                                      // 6929
                                                                                                                      // 6930
                                                                                                                      // 6931
                                                                                                                      // 6932
                                                                                                                      // 6933
/**                                                                                                                   // 6934
 * Extend the picker to add the date picker.                                                                          // 6935
 */                                                                                                                   // 6936
Picker.extend( 'pickadate', DatePicker )                                                                              // 6937
                                                                                                                      // 6938
                                                                                                                      // 6939
}));                                                                                                                  // 6940
                                                                                                                      // 6941
                                                                                                                      // 6942
;(function ($) {                                                                                                      // 6943
                                                                                                                      // 6944
  $.fn.characterCounter = function(){                                                                                 // 6945
    return this.each(function(){                                                                                      // 6946
      var $input = $(this);                                                                                           // 6947
      var $counterElement = $input.parent().find('span[class="character-counter"]');                                  // 6948
                                                                                                                      // 6949
      // character counter has already been added appended to the parent container                                    // 6950
      if ($counterElement.length) {                                                                                   // 6951
        return;                                                                                                       // 6952
      }                                                                                                               // 6953
                                                                                                                      // 6954
      var itHasLengthAttribute = $input.attr('length') !== undefined;                                                 // 6955
                                                                                                                      // 6956
      if(itHasLengthAttribute){                                                                                       // 6957
        $input.on('input', updateCounter);                                                                            // 6958
        $input.on('focus', updateCounter);                                                                            // 6959
        $input.on('blur', removeCounterElement);                                                                      // 6960
                                                                                                                      // 6961
        addCounterElement($input);                                                                                    // 6962
      }                                                                                                               // 6963
                                                                                                                      // 6964
    });                                                                                                               // 6965
  };                                                                                                                  // 6966
                                                                                                                      // 6967
  function updateCounter(){                                                                                           // 6968
    var maxLength     = +$(this).attr('length'),                                                                      // 6969
    actualLength      = +$(this).val().length,                                                                        // 6970
    isValidLength     = actualLength <= maxLength;                                                                    // 6971
                                                                                                                      // 6972
    $(this).parent().find('span[class="character-counter"]')                                                          // 6973
                    .html( actualLength + '/' + maxLength);                                                           // 6974
                                                                                                                      // 6975
    addInputStyle(isValidLength, $(this));                                                                            // 6976
  }                                                                                                                   // 6977
                                                                                                                      // 6978
  function addCounterElement($input) {                                                                                // 6979
    var $counterElement = $input.parent().find('span[class="character-counter"]');                                    // 6980
                                                                                                                      // 6981
    if ($counterElement.length) {                                                                                     // 6982
      return;                                                                                                         // 6983
    }                                                                                                                 // 6984
                                                                                                                      // 6985
    $counterElement = $('<span/>')                                                                                    // 6986
                        .addClass('character-counter')                                                                // 6987
                        .css('float','right')                                                                         // 6988
                        .css('font-size','12px')                                                                      // 6989
                        .css('height', 1);                                                                            // 6990
                                                                                                                      // 6991
    $input.parent().append($counterElement);                                                                          // 6992
  }                                                                                                                   // 6993
                                                                                                                      // 6994
  function removeCounterElement(){                                                                                    // 6995
    $(this).parent().find('span[class="character-counter"]').html('');                                                // 6996
  }                                                                                                                   // 6997
                                                                                                                      // 6998
  function addInputStyle(isValidLength, $input){                                                                      // 6999
    var inputHasInvalidClass = $input.hasClass('invalid');                                                            // 7000
    if (isValidLength && inputHasInvalidClass) {                                                                      // 7001
      $input.removeClass('invalid');                                                                                  // 7002
    }                                                                                                                 // 7003
    else if(!isValidLength && !inputHasInvalidClass){                                                                 // 7004
      $input.removeClass('valid');                                                                                    // 7005
      $input.addClass('invalid');                                                                                     // 7006
    }                                                                                                                 // 7007
  }                                                                                                                   // 7008
                                                                                                                      // 7009
  $(document).ready(function(){                                                                                       // 7010
    $('input, textarea').characterCounter();                                                                          // 7011
  });                                                                                                                 // 7012
                                                                                                                      // 7013
}( jQuery ));                                                                                                         // 7014
;(function ($) {                                                                                                      // 7015
                                                                                                                      // 7016
  var methods = {                                                                                                     // 7017
                                                                                                                      // 7018
    init : function(options) {                                                                                        // 7019
      var defaults = {                                                                                                // 7020
        time_constant: 200, // ms                                                                                     // 7021
        dist: -100, // zoom scale TODO: make this more intuitive as an option                                         // 7022
        shift: 0, // spacing for center image                                                                         // 7023
        padding: 0, // Padding between non center items                                                               // 7024
        full_width: false, // Change to full width styles                                                             // 7025
        indicators: false, // Toggle indicators                                                                       // 7026
        no_wrap: false // Don't wrap around and cycle through items.                                                  // 7027
      };                                                                                                              // 7028
      options = $.extend(defaults, options);                                                                          // 7029
                                                                                                                      // 7030
      return this.each(function() {                                                                                   // 7031
                                                                                                                      // 7032
        var images, offset, center, pressed, dim, count,                                                              // 7033
            reference, referenceY, amplitude, target, velocity,                                                       // 7034
            xform, frame, timestamp, ticker, dragged, vertical_dragged;                                               // 7035
        var $indicators = $('<ul class="indicators"></ul>');                                                          // 7036
                                                                                                                      // 7037
                                                                                                                      // 7038
        // Initialize                                                                                                 // 7039
        var view = $(this);                                                                                           // 7040
        var showIndicators = view.attr('data-indicators') || options.indicators;                                      // 7041
                                                                                                                      // 7042
        // Don't double initialize.                                                                                   // 7043
        if (view.hasClass('initialized')) {                                                                           // 7044
          // Redraw carousel.                                                                                         // 7045
          $(this).trigger('carouselNext', [0.000001]);                                                                // 7046
          return true;                                                                                                // 7047
        }                                                                                                             // 7048
                                                                                                                      // 7049
                                                                                                                      // 7050
        // Options                                                                                                    // 7051
        if (options.full_width) {                                                                                     // 7052
          options.dist = 0;                                                                                           // 7053
          var firstImage = view.find('.carousel-item img').first();                                                   // 7054
          if (firstImage.length) {                                                                                    // 7055
            imageHeight = firstImage.load(function(){                                                                 // 7056
              view.css('height', $(this).height());                                                                   // 7057
            });                                                                                                       // 7058
          } else {                                                                                                    // 7059
            imageHeight = view.find('.carousel-item').first().height();                                               // 7060
            view.css('height', imageHeight);                                                                          // 7061
          }                                                                                                           // 7062
                                                                                                                      // 7063
          // Offset fixed items when indicators.                                                                      // 7064
          if (showIndicators) {                                                                                       // 7065
            view.find('.carousel-fixed-item').addClass('with-indicators');                                            // 7066
          }                                                                                                           // 7067
        }                                                                                                             // 7068
                                                                                                                      // 7069
                                                                                                                      // 7070
        view.addClass('initialized');                                                                                 // 7071
        pressed = false;                                                                                              // 7072
        offset = target = 0;                                                                                          // 7073
        images = [];                                                                                                  // 7074
        item_width = view.find('.carousel-item').first().innerWidth();                                                // 7075
        dim = item_width * 2 + options.padding;                                                                       // 7076
                                                                                                                      // 7077
        view.find('.carousel-item').each(function (i) {                                                               // 7078
          images.push($(this)[0]);                                                                                    // 7079
          if (showIndicators) {                                                                                       // 7080
            var $indicator = $('<li class="indicator-item"></li>');                                                   // 7081
                                                                                                                      // 7082
            // Add active to first by default.                                                                        // 7083
            if (i === 0) {                                                                                            // 7084
              $indicator.addClass('active');                                                                          // 7085
            }                                                                                                         // 7086
                                                                                                                      // 7087
            // Handle clicks on indicators.                                                                           // 7088
            $indicator.click(function () {                                                                            // 7089
              var index = $(this).index();                                                                            // 7090
              cycleTo(index);                                                                                         // 7091
            });                                                                                                       // 7092
            $indicators.append($indicator);                                                                           // 7093
          }                                                                                                           // 7094
        });                                                                                                           // 7095
                                                                                                                      // 7096
        if (showIndicators) {                                                                                         // 7097
          view.append($indicators);                                                                                   // 7098
        }                                                                                                             // 7099
        count = images.length;                                                                                        // 7100
                                                                                                                      // 7101
                                                                                                                      // 7102
        function setupEvents() {                                                                                      // 7103
          if (typeof window.ontouchstart !== 'undefined') {                                                           // 7104
            view[0].addEventListener('touchstart', tap);                                                              // 7105
            view[0].addEventListener('touchmove', drag);                                                              // 7106
            view[0].addEventListener('touchend', release);                                                            // 7107
          }                                                                                                           // 7108
          view[0].addEventListener('mousedown', tap);                                                                 // 7109
          view[0].addEventListener('mousemove', drag);                                                                // 7110
          view[0].addEventListener('mouseup', release);                                                               // 7111
          view[0].addEventListener('mouseleave', release);                                                            // 7112
          view[0].addEventListener('click', click);                                                                   // 7113
        }                                                                                                             // 7114
                                                                                                                      // 7115
        function xpos(e) {                                                                                            // 7116
          // touch event                                                                                              // 7117
          if (e.targetTouches && (e.targetTouches.length >= 1)) {                                                     // 7118
            return e.targetTouches[0].clientX;                                                                        // 7119
          }                                                                                                           // 7120
                                                                                                                      // 7121
          // mouse event                                                                                              // 7122
          return e.clientX;                                                                                           // 7123
        }                                                                                                             // 7124
                                                                                                                      // 7125
        function ypos(e) {                                                                                            // 7126
          // touch event                                                                                              // 7127
          if (e.targetTouches && (e.targetTouches.length >= 1)) {                                                     // 7128
            return e.targetTouches[0].clientY;                                                                        // 7129
          }                                                                                                           // 7130
                                                                                                                      // 7131
          // mouse event                                                                                              // 7132
          return e.clientY;                                                                                           // 7133
        }                                                                                                             // 7134
                                                                                                                      // 7135
        function wrap(x) {                                                                                            // 7136
          return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;                                // 7137
        }                                                                                                             // 7138
                                                                                                                      // 7139
        function scroll(x) {                                                                                          // 7140
          var i, half, delta, dir, tween, el, alignment, xTranslation;                                                // 7141
                                                                                                                      // 7142
          offset = (typeof x === 'number') ? x : offset;                                                              // 7143
          center = Math.floor((offset + dim / 2) / dim);                                                              // 7144
          delta = offset - center * dim;                                                                              // 7145
          dir = (delta < 0) ? 1 : -1;                                                                                 // 7146
          tween = -dir * delta * 2 / dim;                                                                             // 7147
          half = count >> 1;                                                                                          // 7148
                                                                                                                      // 7149
          if (!options.full_width) {                                                                                  // 7150
            alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';                              // 7151
            alignment += 'translateY(' + (view[0].clientHeight - item_width) / 2 + 'px)';                             // 7152
          } else {                                                                                                    // 7153
            alignment = 'translateX(0)';                                                                              // 7154
          }                                                                                                           // 7155
                                                                                                                      // 7156
          // Set indicator active                                                                                     // 7157
          if (showIndicators) {                                                                                       // 7158
            var diff = (center % count);                                                                              // 7159
            var activeIndicator = $indicators.find('.indicator-item.active');                                         // 7160
            if (activeIndicator.index() !== diff) {                                                                   // 7161
              activeIndicator.removeClass('active');                                                                  // 7162
              $indicators.find('.indicator-item').eq(diff).addClass('active');                                        // 7163
            }                                                                                                         // 7164
          }                                                                                                           // 7165
                                                                                                                      // 7166
          // center                                                                                                   // 7167
          // Don't show wrapped items.                                                                                // 7168
          if (!options.no_wrap || (center >= 0 && center < count)) {                                                  // 7169
            el = images[wrap(center)];                                                                                // 7170
            el.style[xform] = alignment +                                                                             // 7171
              ' translateX(' + (-delta / 2) + 'px)' +                                                                 // 7172
              ' translateX(' + (dir * options.shift * tween * i) + 'px)' +                                            // 7173
              ' translateZ(' + (options.dist * tween) + 'px)';                                                        // 7174
            el.style.zIndex = 0;                                                                                      // 7175
            if (options.full_width) { tweenedOpacity = 1; }                                                           // 7176
            else { tweenedOpacity = 1 - 0.2 * tween; }                                                                // 7177
            el.style.opacity = tweenedOpacity;                                                                        // 7178
            el.style.display = 'block';                                                                               // 7179
          }                                                                                                           // 7180
                                                                                                                      // 7181
          for (i = 1; i <= half; ++i) {                                                                               // 7182
            // right side                                                                                             // 7183
            if (options.full_width) {                                                                                 // 7184
              zTranslation = options.dist;                                                                            // 7185
              tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;                                             // 7186
            } else {                                                                                                  // 7187
              zTranslation = options.dist * (i * 2 + tween * dir);                                                    // 7188
              tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);                                                       // 7189
            }                                                                                                         // 7190
            // Don't show wrapped items.                                                                              // 7191
            if (!options.no_wrap || center + i < count) {                                                             // 7192
              el = images[wrap(center + i)];                                                                          // 7193
              el.style[xform] = alignment +                                                                           // 7194
                ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' +                                    // 7195
                ' translateZ(' + zTranslation + 'px)';                                                                // 7196
              el.style.zIndex = -i;                                                                                   // 7197
              el.style.opacity = tweenedOpacity;                                                                      // 7198
              el.style.display = 'block';                                                                             // 7199
            }                                                                                                         // 7200
                                                                                                                      // 7201
                                                                                                                      // 7202
            // left side                                                                                              // 7203
            if (options.full_width) {                                                                                 // 7204
              zTranslation = options.dist;                                                                            // 7205
              tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;                                             // 7206
            } else {                                                                                                  // 7207
              zTranslation = options.dist * (i * 2 - tween * dir);                                                    // 7208
              tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);                                                       // 7209
            }                                                                                                         // 7210
            // Don't show wrapped items.                                                                              // 7211
            if (!options.no_wrap || center - i >= 0) {                                                                // 7212
              el = images[wrap(center - i)];                                                                          // 7213
              el.style[xform] = alignment +                                                                           // 7214
                ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' +                                  // 7215
                ' translateZ(' + zTranslation + 'px)';                                                                // 7216
              el.style.zIndex = -i;                                                                                   // 7217
              el.style.opacity = tweenedOpacity;                                                                      // 7218
              el.style.display = 'block';                                                                             // 7219
            }                                                                                                         // 7220
          }                                                                                                           // 7221
                                                                                                                      // 7222
          // center                                                                                                   // 7223
          // Don't show wrapped items.                                                                                // 7224
          if (!options.no_wrap || (center >= 0 && center < count)) {                                                  // 7225
            el = images[wrap(center)];                                                                                // 7226
            el.style[xform] = alignment +                                                                             // 7227
              ' translateX(' + (-delta / 2) + 'px)' +                                                                 // 7228
              ' translateX(' + (dir * options.shift * tween) + 'px)' +                                                // 7229
              ' translateZ(' + (options.dist * tween) + 'px)';                                                        // 7230
            el.style.zIndex = 0;                                                                                      // 7231
            if (options.full_width) { tweenedOpacity = 1; }                                                           // 7232
            else { tweenedOpacity = 1 - 0.2 * tween; }                                                                // 7233
            el.style.opacity = tweenedOpacity;                                                                        // 7234
            el.style.display = 'block';                                                                               // 7235
          }                                                                                                           // 7236
        }                                                                                                             // 7237
                                                                                                                      // 7238
        function track() {                                                                                            // 7239
          var now, elapsed, delta, v;                                                                                 // 7240
                                                                                                                      // 7241
          now = Date.now();                                                                                           // 7242
          elapsed = now - timestamp;                                                                                  // 7243
          timestamp = now;                                                                                            // 7244
          delta = offset - frame;                                                                                     // 7245
          frame = offset;                                                                                             // 7246
                                                                                                                      // 7247
          v = 1000 * delta / (1 + elapsed);                                                                           // 7248
          velocity = 0.8 * v + 0.2 * velocity;                                                                        // 7249
        }                                                                                                             // 7250
                                                                                                                      // 7251
        function autoScroll() {                                                                                       // 7252
          var elapsed, delta;                                                                                         // 7253
                                                                                                                      // 7254
          if (amplitude) {                                                                                            // 7255
            elapsed = Date.now() - timestamp;                                                                         // 7256
            delta = amplitude * Math.exp(-elapsed / options.time_constant);                                           // 7257
            if (delta > 2 || delta < -2) {                                                                            // 7258
                scroll(target - delta);                                                                               // 7259
                requestAnimationFrame(autoScroll);                                                                    // 7260
            } else {                                                                                                  // 7261
                scroll(target);                                                                                       // 7262
            }                                                                                                         // 7263
          }                                                                                                           // 7264
        }                                                                                                             // 7265
                                                                                                                      // 7266
        function click(e) {                                                                                           // 7267
          // Disable clicks if carousel was dragged.                                                                  // 7268
          if (dragged) {                                                                                              // 7269
            e.preventDefault();                                                                                       // 7270
            e.stopPropagation();                                                                                      // 7271
            return false;                                                                                             // 7272
                                                                                                                      // 7273
          } else if (!options.full_width) {                                                                           // 7274
            var clickedIndex = $(e.target).closest('.carousel-item').index();                                         // 7275
            var diff = (center % count) - clickedIndex;                                                               // 7276
                                                                                                                      // 7277
            // Disable clicks if carousel was shifted by click                                                        // 7278
            if (diff !== 0) {                                                                                         // 7279
              e.preventDefault();                                                                                     // 7280
              e.stopPropagation();                                                                                    // 7281
            }                                                                                                         // 7282
            cycleTo(clickedIndex);                                                                                    // 7283
          }                                                                                                           // 7284
        }                                                                                                             // 7285
                                                                                                                      // 7286
        function cycleTo(n) {                                                                                         // 7287
          var diff = (center % count) - n;                                                                            // 7288
                                                                                                                      // 7289
          // Account for wraparound.                                                                                  // 7290
          if (!options.no_wrap) {                                                                                     // 7291
            if (diff < 0) {                                                                                           // 7292
              if (Math.abs(diff + count) < Math.abs(diff)) { diff += count; }                                         // 7293
                                                                                                                      // 7294
            } else if (diff > 0) {                                                                                    // 7295
              if (Math.abs(diff - count) < diff) { diff -= count; }                                                   // 7296
            }                                                                                                         // 7297
          }                                                                                                           // 7298
                                                                                                                      // 7299
          // Call prev or next accordingly.                                                                           // 7300
          if (diff < 0) {                                                                                             // 7301
            view.trigger('carouselNext', [Math.abs(diff)]);                                                           // 7302
                                                                                                                      // 7303
          } else if (diff > 0) {                                                                                      // 7304
            view.trigger('carouselPrev', [diff]);                                                                     // 7305
          }                                                                                                           // 7306
        }                                                                                                             // 7307
                                                                                                                      // 7308
        function tap(e) {                                                                                             // 7309
          pressed = true;                                                                                             // 7310
          dragged = false;                                                                                            // 7311
          vertical_dragged = false;                                                                                   // 7312
          reference = xpos(e);                                                                                        // 7313
          referenceY = ypos(e);                                                                                       // 7314
                                                                                                                      // 7315
          velocity = amplitude = 0;                                                                                   // 7316
          frame = offset;                                                                                             // 7317
          timestamp = Date.now();                                                                                     // 7318
          clearInterval(ticker);                                                                                      // 7319
          ticker = setInterval(track, 100);                                                                           // 7320
                                                                                                                      // 7321
        }                                                                                                             // 7322
                                                                                                                      // 7323
        function drag(e) {                                                                                            // 7324
          var x, delta, deltaY;                                                                                       // 7325
          if (pressed) {                                                                                              // 7326
            x = xpos(e);                                                                                              // 7327
            y = ypos(e);                                                                                              // 7328
            delta = reference - x;                                                                                    // 7329
            deltaY = Math.abs(referenceY - y);                                                                        // 7330
            if (deltaY < 30 && !vertical_dragged) {                                                                   // 7331
              // If vertical scrolling don't allow dragging.                                                          // 7332
              if (delta > 2 || delta < -2) {                                                                          // 7333
                dragged = true;                                                                                       // 7334
                reference = x;                                                                                        // 7335
                scroll(offset + delta);                                                                               // 7336
              }                                                                                                       // 7337
                                                                                                                      // 7338
            } else if (dragged) {                                                                                     // 7339
              // If dragging don't allow vertical scroll.                                                             // 7340
              e.preventDefault();                                                                                     // 7341
              e.stopPropagation();                                                                                    // 7342
              return false;                                                                                           // 7343
                                                                                                                      // 7344
            } else {                                                                                                  // 7345
              // Vertical scrolling.                                                                                  // 7346
              vertical_dragged = true;                                                                                // 7347
            }                                                                                                         // 7348
          }                                                                                                           // 7349
                                                                                                                      // 7350
          if (dragged) {                                                                                              // 7351
            // If dragging don't allow vertical scroll.                                                               // 7352
            e.preventDefault();                                                                                       // 7353
            e.stopPropagation();                                                                                      // 7354
            return false;                                                                                             // 7355
          }                                                                                                           // 7356
        }                                                                                                             // 7357
                                                                                                                      // 7358
        function release(e) {                                                                                         // 7359
          if (pressed) {                                                                                              // 7360
            pressed = false;                                                                                          // 7361
          } else {                                                                                                    // 7362
            return;                                                                                                   // 7363
          }                                                                                                           // 7364
                                                                                                                      // 7365
          clearInterval(ticker);                                                                                      // 7366
          target = offset;                                                                                            // 7367
          if (velocity > 10 || velocity < -10) {                                                                      // 7368
            amplitude = 0.9 * velocity;                                                                               // 7369
            target = offset + amplitude;                                                                              // 7370
          }                                                                                                           // 7371
          target = Math.round(target / dim) * dim;                                                                    // 7372
                                                                                                                      // 7373
          // No wrap of items.                                                                                        // 7374
          if (options.no_wrap) {                                                                                      // 7375
            if (target >= dim * (count - 1)) {                                                                        // 7376
              target = dim * (count - 1);                                                                             // 7377
            } else if (target < 0) {                                                                                  // 7378
              target = 0;                                                                                             // 7379
            }                                                                                                         // 7380
          }                                                                                                           // 7381
          amplitude = target - offset;                                                                                // 7382
          timestamp = Date.now();                                                                                     // 7383
          requestAnimationFrame(autoScroll);                                                                          // 7384
                                                                                                                      // 7385
          if (dragged) {                                                                                              // 7386
            e.preventDefault();                                                                                       // 7387
            e.stopPropagation();                                                                                      // 7388
          }                                                                                                           // 7389
          return false;                                                                                               // 7390
        }                                                                                                             // 7391
                                                                                                                      // 7392
        xform = 'transform';                                                                                          // 7393
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {                                                        // 7394
          var e = prefix + 'Transform';                                                                               // 7395
          if (typeof document.body.style[e] !== 'undefined') {                                                        // 7396
            xform = e;                                                                                                // 7397
            return false;                                                                                             // 7398
          }                                                                                                           // 7399
          return true;                                                                                                // 7400
        });                                                                                                           // 7401
                                                                                                                      // 7402
                                                                                                                      // 7403
                                                                                                                      // 7404
        window.onresize = scroll;                                                                                     // 7405
                                                                                                                      // 7406
        setupEvents();                                                                                                // 7407
        scroll(offset);                                                                                               // 7408
                                                                                                                      // 7409
        $(this).on('carouselNext', function(e, n) {                                                                   // 7410
          if (n === undefined) {                                                                                      // 7411
            n = 1;                                                                                                    // 7412
          }                                                                                                           // 7413
          target = offset + dim * n;                                                                                  // 7414
          if (offset !== target) {                                                                                    // 7415
            amplitude = target - offset;                                                                              // 7416
            timestamp = Date.now();                                                                                   // 7417
            requestAnimationFrame(autoScroll);                                                                        // 7418
          }                                                                                                           // 7419
        });                                                                                                           // 7420
                                                                                                                      // 7421
        $(this).on('carouselPrev', function(e, n) {                                                                   // 7422
          if (n === undefined) {                                                                                      // 7423
            n = 1;                                                                                                    // 7424
          }                                                                                                           // 7425
          target = offset - dim * n;                                                                                  // 7426
          if (offset !== target) {                                                                                    // 7427
            amplitude = target - offset;                                                                              // 7428
            timestamp = Date.now();                                                                                   // 7429
            requestAnimationFrame(autoScroll);                                                                        // 7430
          }                                                                                                           // 7431
        });                                                                                                           // 7432
                                                                                                                      // 7433
        $(this).on('carouselSet', function(e, n) {                                                                    // 7434
          if (n === undefined) {                                                                                      // 7435
            n = 0;                                                                                                    // 7436
          }                                                                                                           // 7437
          cycleTo(n);                                                                                                 // 7438
        });                                                                                                           // 7439
                                                                                                                      // 7440
      });                                                                                                             // 7441
                                                                                                                      // 7442
                                                                                                                      // 7443
                                                                                                                      // 7444
    },                                                                                                                // 7445
    next : function(n) {                                                                                              // 7446
      $(this).trigger('carouselNext', [n]);                                                                           // 7447
    },                                                                                                                // 7448
    prev : function(n) {                                                                                              // 7449
      $(this).trigger('carouselPrev', [n]);                                                                           // 7450
    },                                                                                                                // 7451
    set : function(n) {                                                                                               // 7452
      $(this).trigger('carouselSet', [n]);                                                                            // 7453
    }                                                                                                                 // 7454
  };                                                                                                                  // 7455
                                                                                                                      // 7456
                                                                                                                      // 7457
    $.fn.carousel = function(methodOrOptions) {                                                                       // 7458
      if ( methods[methodOrOptions] ) {                                                                               // 7459
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                   // 7460
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                        // 7461
        // Default to "init"                                                                                          // 7462
        return methods.init.apply( this, arguments );                                                                 // 7463
      } else {                                                                                                        // 7464
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.carousel' );                               // 7465
      }                                                                                                               // 7466
    }; // Plugin end                                                                                                  // 7467
}( jQuery ));                                                                                                         // 7468
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['materialize:materialize'] = {}, {
  Materialize: Materialize
});

})();
