var config = {
    host: "win-h4etcap5m3h.tripp.lan", //the address of your Qlik Engine Instance
    prefix: "/mashup/", //the virtual proxy to be used. for example "/anonymous/"
    port: "443", //the port to be used if different from the current port
    isSecure: true //should be true if connecting over HTTPS
};

require.config({
    baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources",
  });

  require(['js/qlik'], function(qlik) {
      //if there's any error we catch it here
      qlik.setOnError( function ( error ) {
          console.log(error);
      });

      //open app
      var app = qlik.openApp('5c666a4e-17bf-4502-b4bb-b16857d5349d', config);

      //get Objects
      app.getObject('QV03','DPJZU');
	    app.getObject('QV02','JYH');
	    app.getObject('QV01','SJHnGdV');

});
