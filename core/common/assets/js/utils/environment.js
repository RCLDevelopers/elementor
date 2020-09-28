const userAgent = navigator.userAgent,
	environment = {
		webkit: -1 !== userAgent.indexOf( 'AppleWebKit' ),
		firefox: -1 !== userAgent.indexOf( 'Firefox' ),
		ie: /Trident|MSIE/.test( userAgent ),
		edge: -1 !== userAgent.indexOf( 'Edg' ),
		mac: -1 !== userAgent.indexOf( 'Macintosh' ),
		safari: /^((?!chrome|android).)*safari/i.test( userAgent ),
	};

environment.chrome = -1 !== userAgent.indexOf( 'Chrome' ) && -1 === userAgent.indexOf( 'OPR' ) && ! environment.edge;

export default environment;
