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


      var app = qlik.openApp('05609216-e170-421a-a284-e495c1606b93', config);
      app.getObject('QV01','KxXmqg');

});
