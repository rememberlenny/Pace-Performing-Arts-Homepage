var lp_app = lp_app || {};

(function(){
  'use strict';

  var Workspace = Backbone.Router.extend({
    routes: {
      '':'homepage'
    },
    homepage: function(){
      lp_app.PageEvents.trigger('loadPage');
    }

  });

  lp_app.PageRouter = new Workspace();

})();
