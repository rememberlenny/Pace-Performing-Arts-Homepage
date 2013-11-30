var lp_app = lp_app || {};

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
