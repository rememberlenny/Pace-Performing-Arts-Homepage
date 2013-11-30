var lp_app = lp_app || {};

(function(){
  'use strict';

  lp_app.PageModel = Backbone.Model.extend({

    defaults: {

    }

  });

})();
;var lp_app = lp_app || {};

(function(){
  'use strict';

  var PagesCollection = Backbone.Collection.extend({

    model: lp_app.PageModel

  });

  lp_app.PagesCollection = new PagesCollection();
})();
;var lp_app = lp_app || {};

(function($){
  'use strict';

  lp_app.AppView = Backbone.View.extend({
    el: '#page-content',

    initialize: function(){
      this.getContent();
    },
    initData: function(){

    },
    getContent: function(){
      var self = this;

      $.ajax({
        type: "GET",
        url: "",
        contentType: "application/json",
        beforeSend: function(jqXHR, settings){
          jqXHR.setRequestHeader("Accept", "application/json");
        }
      }).done(function(data){
        self.initData(data)
      });
    }

  });

})(jQuery);
;var lp_app = lp_app || {};

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
;var lp_app = lp_app || {};

(function($){
  'use strict';

  lp_app.PageEvents = {};

  _.extend(lp_app.PageEvents, Backbone.Events);

  new lp_app.AppView();

})(jQuery)
