(function($, window){
  window.GameView = Backbone.View.extend({
    className: 'Game',

    initialize: function(){
      _.bindAll(this, 'render');

      this.model.bind('change:points', this.updatePoints);
    },

    render: function(){
      Crafty.init(this.model.get('width'), this.model.get('height'));
      
      var that = this;
      _.each(this.model.coins.models, function(coin) { that.renderCoin(coin) });
      
      var playerView = new PlayerView({ model: this.model.player });
    },

    renderCoin: function(coin){
      var coinView = new CoinView({ model: coin });
      coinView.render();
    },

    updatePoints: function(){
      $("#points").text(this.get("points"));
    }
  });
})(jQuery, window);
