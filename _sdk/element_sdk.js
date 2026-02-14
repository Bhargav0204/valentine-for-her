(function(){
  // Minimal stub for element_sdk used by index.html
  if (!window.elementSdk) {
    window.elementSdk = {
      _opts: null,
      init: function(opts) {
        this._opts = opts || {};
        if (this._opts && this._opts.onConfigChange) {
          // call with defaultConfig if provided
          try { this._opts.onConfigChange(this._opts.defaultConfig || {}); } catch(e) {}
        }
        console.info('elementSdk stub initialized');
      },
      setConfig: function(cfg) {
        console.info('elementSdk.setConfig stub called', cfg);
      }
    };
  }
})();
