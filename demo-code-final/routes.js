(function($, window){
  window.CraftyDemo = Backbone.Router.extend({
    routes: {
      '': 'home'
    },

    initialize: function(){
      this.gameView = new GameView({ model: window.game });
    },

    home: function(){
      this.gameView.render();
    }
  });
})(jQuery, window);
