/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 265);
/******/ })
/************************************************************************/
/******/ ({

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__starter_google_map_js_script__ = __webpack_require__(266);\n/**\n * Block\n * \n * This is where all the block front end code for our plugin goes. \n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2Jsb2NrLmpzPzYzNWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCbG9ja1xuICogXG4gKiBUaGlzIGlzIHdoZXJlIGFsbCB0aGUgYmxvY2sgZnJvbnQgZW5kIGNvZGUgZm9yIG91ciBwbHVnaW4gZ29lcy4gXG4gKi9cbmltcG9ydCAnLi9zdGFydGVyLWdvb2dsZS1tYXAvanMvc2NyaXB0JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///265\n");

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initMap__ = __webpack_require__(38);\n/**\n * Block Front-end Scripts.\n */\n\n// Import dependencies.\n\n\n// Get the block container element.\nvar mapEmbedEl = document.getElementsByClassName('starter-google-map')[0];\n\n// Harvest the attribute data that we need to pass to initMap.\nvar attributes = [];\n\nattributes['gMapEmbedAPIKey'] = mapEmbedEl.getAttribute('data-apikey');\nattributes['gMapEmbedLocation'] = mapEmbedEl.getAttribute('data-location');\nattributes['gMapEmbedInfoWindowTitle'] = mapEmbedEl.getAttribute('data-title');\nattributes['gMapEmbedInfoWindowContent'] = mapEmbedEl.getAttribute('data-text');\nattributes['gMapEmbedZoom'] = mapEmbedEl.getAttribute('data-zoom');\nattributes['gMapEmbedType'] = mapEmbedEl.getAttribute('data-type');\nattributes['gMapEmbedDisableUI'] = mapEmbedEl.getAttribute('data-disableui');\n\n// Bind our Google Maps API callback to the window, which lets us call initMap.\nwindow.initGoogleMapEmbed = function () {\n  Object(__WEBPACK_IMPORTED_MODULE_0__initMap__[\"a\" /* default */])(attributes);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3N0YXJ0ZXItZ29vZ2xlLW1hcC9qcy9zY3JpcHQuanM/N2M2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJsb2NrIEZyb250LWVuZCBTY3JpcHRzLlxuICovXG5cbi8vIEltcG9ydCBkZXBlbmRlbmNpZXMuXG5pbXBvcnQgaW5pdE1hcCBmcm9tICcuL2luaXRNYXAnO1xuXG4vLyBHZXQgdGhlIGJsb2NrIGNvbnRhaW5lciBlbGVtZW50LlxudmFyIG1hcEVtYmVkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydGVyLWdvb2dsZS1tYXAnKVswXTtcblxuLy8gSGFydmVzdCB0aGUgYXR0cmlidXRlIGRhdGEgdGhhdCB3ZSBuZWVkIHRvIHBhc3MgdG8gaW5pdE1hcC5cbnZhciBhdHRyaWJ1dGVzID0gW107XG5cbmF0dHJpYnV0ZXNbJ2dNYXBFbWJlZEFQSUtleSddID0gbWFwRW1iZWRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBpa2V5Jyk7XG5hdHRyaWJ1dGVzWydnTWFwRW1iZWRMb2NhdGlvbiddID0gbWFwRW1iZWRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYXRpb24nKTtcbmF0dHJpYnV0ZXNbJ2dNYXBFbWJlZEluZm9XaW5kb3dUaXRsZSddID0gbWFwRW1iZWRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbmF0dHJpYnV0ZXNbJ2dNYXBFbWJlZEluZm9XaW5kb3dDb250ZW50J10gPSBtYXBFbWJlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS10ZXh0Jyk7XG5hdHRyaWJ1dGVzWydnTWFwRW1iZWRab29tJ10gPSBtYXBFbWJlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS16b29tJyk7XG5hdHRyaWJ1dGVzWydnTWFwRW1iZWRUeXBlJ10gPSBtYXBFbWJlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG5hdHRyaWJ1dGVzWydnTWFwRW1iZWREaXNhYmxlVUknXSA9IG1hcEVtYmVkRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc2FibGV1aScpO1xuXG4vLyBCaW5kIG91ciBHb29nbGUgTWFwcyBBUEkgY2FsbGJhY2sgdG8gdGhlIHdpbmRvdywgd2hpY2ggbGV0cyB1cyBjYWxsIGluaXRNYXAuXG53aW5kb3cuaW5pdEdvb2dsZU1hcEVtYmVkID0gZnVuY3Rpb24gKCkge1xuICBpbml0TWFwKGF0dHJpYnV0ZXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9zdGFydGVyLWdvb2dsZS1tYXAvanMvc2NyaXB0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///266\n");

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * initMap\n *\n * Fetches the lat and long of the supplied location, before initialising\n * the required Google Maps object.\n *\n * API Key for development purposes: AIzaSyB7_KuQcbep3FZD5FvWQ6B2D8NGYIJb7A0\n *\n * @see https://developers.google.com/maps/documentation/javascript/tutorial\n */\n\nvar initMap = function initMap(attributes) {\n  var doFetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n\n  // Abort if we have no location or API key.\n  if (!attributes['gMapEmbedLocation'] || !attributes['gMapEmbedAPIKey']) {\n    return;\n  }\n\n  // Ensure spaces in the location are replaced with the plus symbol.\n  var location = attributes['gMapEmbedLocation'].replace(' ', '+');\n\n  // Define the DOM element we're creating the Map with.\n  var mapEl = document.getElementById('starter-google-map');\n\n  if (!mapEl) {\n    return;\n  }\n\n  // Initialise the Google Map. (fires below)\n  var init = function init(lat, lng) {\n    // Create our location aspect a.k.a \"center\".\n    var loc = { lat: parseFloat(lat), lng: parseFloat(lng) };\n\n    // Build our options object, handling default values.\n    var options = {\n      center: loc,\n      zoom: attributes['gMapEmbedZoom'] ? parseInt(attributes['gMapEmbedZoom']) : 14,\n      mapTypeId: attributes['gMapEmbedType'] ? attributes['gMapEmbedType'] : 'roadmap',\n      disableDefaultUI: attributes['gMapEmbedDisableUI'] === 'true' ? true : false,\n      scrollwheel: false // Prevents zoom when scrolling.\n    };\n\n    // Create the Map.\n    var map = new google.maps.Map(mapEl, options);\n\n    // Add data attributes containing the current Lat, Long to the element.\n    mapEl.setAttribute('data-lat', lat);\n    mapEl.setAttribute('data-lng', lng);\n\n    // Create the Marker.\n    var marker = new google.maps.Marker({\n      position: loc,\n      map: map,\n      title: attributes['gMapEmbedInfoWindowTitle']\n    });\n\n    // Prepare our Info Window content.\n    var title = attributes['gMapEmbedInfoWindowTitle'] ? attributes['gMapEmbedInfoWindowTitle'] : 'About this Location';\n    var text = attributes['gMapEmbedInfoWindowContent'] ? '<div class=\"description full-width\">' + attributes['gMapEmbedInfoWindowContent'] + '</div>' : '';\n    var link = '<a target=\"_blank\" href=\"https://maps.google.com/maps?ll=' + loc.lat + ',' + loc.lng + '&amp;z=' + attributes['gMapEmbedZoom'] + '<span>View on Google Maps</span></a>' + '\">';\n    var contentString = '<div class=\"gm-style\">' + '<div class=\"gm-style-iw\">' + '<div class=\"poi-info-window gm-style\">' + '<div class=\"title full-width\">' + title + '</div>' + text + '<div class=\"address\">' + '<div class=\"address-line full-width\">' + attributes['gMapEmbedLocation'].replace(/ *, */g, ',<br>') + '</div>' + '<div class=\"view-link\">' + link + '</div>' + '</div></div></div></div>';\n\n    // Create the Info Window.\n    var infowindow = new google.maps.InfoWindow({\n      content: contentString\n    });\n\n    // Trigger the Info Window on Marker click.\n    marker.addListener('click', function () {\n      infowindow.open(map, marker);\n    });\n  };\n\n  // Supply co-ordinates to out init function.\n  var lat = '';\n  var lng = '';\n  if (doFetch) {\n    // Fetch the Lat and Long from the Geocoding API based on the supplied address.\n    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + attributes['gMapEmbedAPIKey']).then(function (response) {\n      // Convert the response to JSON.\n      return response.json();\n    }).then(function (json) {\n      // Convert to JSON and extract the co-ordinates.\n      var result = json.results;\n\n      lat = result[0].geometry.location.lat;\n      lng = result[0].geometry.location.lng;\n\n      // Initialise the Map.\n      init(lat, lng);\n    });\n  } else {\n    // If we're not updating the address, we haven't fetched fresh co-ordinates,\n    // therefore we need to use the ones we've stored on the map element.\n    lat = mapEl.getAttribute('data-lat', lat);\n    lng = mapEl.getAttribute('data-lng', lng);\n\n    // Initialise the Map.\n    init(lat, lng);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (initMap);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3RhcnRlci1nb29nbGUtbWFwL2pzL2luaXRNYXAuanM/NmQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGluaXRNYXBcbiAqXG4gKiBGZXRjaGVzIHRoZSBsYXQgYW5kIGxvbmcgb2YgdGhlIHN1cHBsaWVkIGxvY2F0aW9uLCBiZWZvcmUgaW5pdGlhbGlzaW5nXG4gKiB0aGUgcmVxdWlyZWQgR29vZ2xlIE1hcHMgb2JqZWN0LlxuICpcbiAqIEFQSSBLZXkgZm9yIGRldmVsb3BtZW50IHB1cnBvc2VzOiBBSXphU3lCN19LdVFjYmVwM0ZaRDVGdldRNkIyRDhOR1lJSmI3QTBcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3R1dG9yaWFsXG4gKi9cblxudmFyIGluaXRNYXAgPSBmdW5jdGlvbiBpbml0TWFwKGF0dHJpYnV0ZXMpIHtcbiAgdmFyIGRvRmV0Y2ggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cblxuICAvLyBBYm9ydCBpZiB3ZSBoYXZlIG5vIGxvY2F0aW9uIG9yIEFQSSBrZXkuXG4gIGlmICghYXR0cmlidXRlc1snZ01hcEVtYmVkTG9jYXRpb24nXSB8fCAhYXR0cmlidXRlc1snZ01hcEVtYmVkQVBJS2V5J10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBFbnN1cmUgc3BhY2VzIGluIHRoZSBsb2NhdGlvbiBhcmUgcmVwbGFjZWQgd2l0aCB0aGUgcGx1cyBzeW1ib2wuXG4gIHZhciBsb2NhdGlvbiA9IGF0dHJpYnV0ZXNbJ2dNYXBFbWJlZExvY2F0aW9uJ10ucmVwbGFjZSgnICcsICcrJyk7XG5cbiAgLy8gRGVmaW5lIHRoZSBET00gZWxlbWVudCB3ZSdyZSBjcmVhdGluZyB0aGUgTWFwIHdpdGguXG4gIHZhciBtYXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydGVyLWdvb2dsZS1tYXAnKTtcblxuICBpZiAoIW1hcEVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSW5pdGlhbGlzZSB0aGUgR29vZ2xlIE1hcC4gKGZpcmVzIGJlbG93KVxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQobGF0LCBsbmcpIHtcbiAgICAvLyBDcmVhdGUgb3VyIGxvY2F0aW9uIGFzcGVjdCBhLmsuYSBcImNlbnRlclwiLlxuICAgIHZhciBsb2MgPSB7IGxhdDogcGFyc2VGbG9hdChsYXQpLCBsbmc6IHBhcnNlRmxvYXQobG5nKSB9O1xuXG4gICAgLy8gQnVpbGQgb3VyIG9wdGlvbnMgb2JqZWN0LCBoYW5kbGluZyBkZWZhdWx0IHZhbHVlcy5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIGNlbnRlcjogbG9jLFxuICAgICAgem9vbTogYXR0cmlidXRlc1snZ01hcEVtYmVkWm9vbSddID8gcGFyc2VJbnQoYXR0cmlidXRlc1snZ01hcEVtYmVkWm9vbSddKSA6IDE0LFxuICAgICAgbWFwVHlwZUlkOiBhdHRyaWJ1dGVzWydnTWFwRW1iZWRUeXBlJ10gPyBhdHRyaWJ1dGVzWydnTWFwRW1iZWRUeXBlJ10gOiAncm9hZG1hcCcsXG4gICAgICBkaXNhYmxlRGVmYXVsdFVJOiBhdHRyaWJ1dGVzWydnTWFwRW1iZWREaXNhYmxlVUknXSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlIC8vIFByZXZlbnRzIHpvb20gd2hlbiBzY3JvbGxpbmcuXG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSB0aGUgTWFwLlxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsLCBvcHRpb25zKTtcblxuICAgIC8vIEFkZCBkYXRhIGF0dHJpYnV0ZXMgY29udGFpbmluZyB0aGUgY3VycmVudCBMYXQsIExvbmcgdG8gdGhlIGVsZW1lbnQuXG4gICAgbWFwRWwuc2V0QXR0cmlidXRlKCdkYXRhLWxhdCcsIGxhdCk7XG4gICAgbWFwRWwuc2V0QXR0cmlidXRlKCdkYXRhLWxuZycsIGxuZyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIE1hcmtlci5cbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogbG9jLFxuICAgICAgbWFwOiBtYXAsXG4gICAgICB0aXRsZTogYXR0cmlidXRlc1snZ01hcEVtYmVkSW5mb1dpbmRvd1RpdGxlJ11cbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgb3VyIEluZm8gV2luZG93IGNvbnRlbnQuXG4gICAgdmFyIHRpdGxlID0gYXR0cmlidXRlc1snZ01hcEVtYmVkSW5mb1dpbmRvd1RpdGxlJ10gPyBhdHRyaWJ1dGVzWydnTWFwRW1iZWRJbmZvV2luZG93VGl0bGUnXSA6ICdBYm91dCB0aGlzIExvY2F0aW9uJztcbiAgICB2YXIgdGV4dCA9IGF0dHJpYnV0ZXNbJ2dNYXBFbWJlZEluZm9XaW5kb3dDb250ZW50J10gPyAnPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uIGZ1bGwtd2lkdGhcIj4nICsgYXR0cmlidXRlc1snZ01hcEVtYmVkSW5mb1dpbmRvd0NvbnRlbnQnXSArICc8L2Rpdj4nIDogJyc7XG4gICAgdmFyIGxpbmsgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/bGw9JyArIGxvYy5sYXQgKyAnLCcgKyBsb2MubG5nICsgJyZhbXA7ej0nICsgYXR0cmlidXRlc1snZ01hcEVtYmVkWm9vbSddICsgJzxzcGFuPlZpZXcgb24gR29vZ2xlIE1hcHM8L3NwYW4+PC9hPicgKyAnXCI+JztcbiAgICB2YXIgY29udGVudFN0cmluZyA9ICc8ZGl2IGNsYXNzPVwiZ20tc3R5bGVcIj4nICsgJzxkaXYgY2xhc3M9XCJnbS1zdHlsZS1pd1wiPicgKyAnPGRpdiBjbGFzcz1cInBvaS1pbmZvLXdpbmRvdyBnbS1zdHlsZVwiPicgKyAnPGRpdiBjbGFzcz1cInRpdGxlIGZ1bGwtd2lkdGhcIj4nICsgdGl0bGUgKyAnPC9kaXY+JyArIHRleHQgKyAnPGRpdiBjbGFzcz1cImFkZHJlc3NcIj4nICsgJzxkaXYgY2xhc3M9XCJhZGRyZXNzLWxpbmUgZnVsbC13aWR0aFwiPicgKyBhdHRyaWJ1dGVzWydnTWFwRW1iZWRMb2NhdGlvbiddLnJlcGxhY2UoLyAqLCAqL2csICcsPGJyPicpICsgJzwvZGl2PicgKyAnPGRpdiBjbGFzcz1cInZpZXctbGlua1wiPicgKyBsaW5rICsgJzwvZGl2PicgKyAnPC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+JztcblxuICAgIC8vIENyZWF0ZSB0aGUgSW5mbyBXaW5kb3cuXG4gICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICBjb250ZW50OiBjb250ZW50U3RyaW5nXG4gICAgfSk7XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBJbmZvIFdpbmRvdyBvbiBNYXJrZXIgY2xpY2suXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gU3VwcGx5IGNvLW9yZGluYXRlcyB0byBvdXQgaW5pdCBmdW5jdGlvbi5cbiAgdmFyIGxhdCA9ICcnO1xuICB2YXIgbG5nID0gJyc7XG4gIGlmIChkb0ZldGNoKSB7XG4gICAgLy8gRmV0Y2ggdGhlIExhdCBhbmQgTG9uZyBmcm9tIHRoZSBHZW9jb2RpbmcgQVBJIGJhc2VkIG9uIHRoZSBzdXBwbGllZCBhZGRyZXNzLlxuICAgIGZldGNoKCdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JyArIGxvY2F0aW9uICsgJyZrZXk9JyArIGF0dHJpYnV0ZXNbJ2dNYXBFbWJlZEFQSUtleSddKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgLy8gQ29udmVydCB0aGUgcmVzcG9uc2UgdG8gSlNPTi5cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgLy8gQ29udmVydCB0byBKU09OIGFuZCBleHRyYWN0IHRoZSBjby1vcmRpbmF0ZXMuXG4gICAgICB2YXIgcmVzdWx0ID0ganNvbi5yZXN1bHRzO1xuXG4gICAgICBsYXQgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xuICAgICAgbG5nID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcblxuICAgICAgLy8gSW5pdGlhbGlzZSB0aGUgTWFwLlxuICAgICAgaW5pdChsYXQsIGxuZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgd2UncmUgbm90IHVwZGF0aW5nIHRoZSBhZGRyZXNzLCB3ZSBoYXZlbid0IGZldGNoZWQgZnJlc2ggY28tb3JkaW5hdGVzLFxuICAgIC8vIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIHVzZSB0aGUgb25lcyB3ZSd2ZSBzdG9yZWQgb24gdGhlIG1hcCBlbGVtZW50LlxuICAgIGxhdCA9IG1hcEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXQnLCBsYXQpO1xuICAgIGxuZyA9IG1hcEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sbmcnLCBsbmcpO1xuXG4gICAgLy8gSW5pdGlhbGlzZSB0aGUgTWFwLlxuICAgIGluaXQobGF0LCBsbmcpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0TWFwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL3N0YXJ0ZXItZ29vZ2xlLW1hcC9qcy9pbml0TWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ })

/******/ });