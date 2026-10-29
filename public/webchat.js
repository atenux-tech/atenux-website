(function () {
  if (window.chatwootSDK || document.getElementById('atenux-webchat-sdk')) return;

  var baseUrl = 'https://chat.atenux.com';
  window.chatwootSettings = {
    locale: 'pt_BR',
    position: 'right',
    type: 'standard',
    launcherTitle: 'Converse com a Atenux',
  };

  var script = document.createElement('script');
  script.id = 'atenux-webchat-sdk';
  script.src = baseUrl + '/packs/js/sdk.js';
  script.async = true;
  script.onload = function () {
    window.chatwootSDK.run({
      websiteToken: 'JVc8cQk3d3uBL4ngjMFfj475',
      baseUrl: baseUrl,
    });
  };
  document.head.appendChild(script);
})();
