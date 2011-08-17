(function($, window){
  window.Game = Backbone.Model.extend({
    defaults: {
      'width': 600,
      'height': 400,
      'points': 0
    },

    initialize: function(){
      this.coins = new CoinCollection();
      coins = this.coins;

      for(var x = 0; x < 25; x++){
        var xPos = Math.random() * (this.get('width') - 20)  >> 0;
        var yPos = Math.random() * (this.get('height') - 20) >> 0;

        coins.add(new Coin({ x: xPos, y: yPos }));
      }

      this.player = new Player();
    },

    collectCoin: function(){
      var points = this.get('points') + 1;
      this.set({ points: points });
      this.trigger('change:points');
    }
  });
})(jQuery, window);

