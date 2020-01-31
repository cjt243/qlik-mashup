var config = {
    host: "win-h4etcap5m3h", //the address of your Qlik Engine Instance
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


      var app = qlik.openApp('ffa1241e-9e27-4d7b-9eaf-70feeca6edb2', config);

});
