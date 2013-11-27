var lp_app = lp_app || {};

(function($){
  'use strict';

  lp_app.PageEvents = {};

  _.extend(lp_app.PageEvents, Backbone.Events);

  new lp_app.AppView();

})(jQuery)
