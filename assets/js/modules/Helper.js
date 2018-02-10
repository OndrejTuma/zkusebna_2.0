export const getViewportHeight = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
export const getViewportWidth = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
export const detectIE = () => {
	const ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}