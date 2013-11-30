var lp_app = lp_app || {};

(function(){
  'use strict';

  var PagesCollection = Backbone.Collection.extend({

    model: lp_app.PageModel

  });

  lp_app.PagesCollection = new PagesCollection();
})();
