//host = '192.168.8.105';	// hostname or IP address
host = 'broker.emqx.io';	// only for 120
//host = '127.0.0.1';	// hostname or IP address
port = 8084;
topic = 'testtopic/#';		// topic to subscribe to //th_1467562
useTLS = false;
/*username = null;
 password = null;*/
username = '';
password = '';

// path as in "scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]"
//    defaults to "/mqtt"
//    may include query and fragment
//
// path = "/mqtt";
// path = "/data/cloud?device=12345";

cleansession = true;
