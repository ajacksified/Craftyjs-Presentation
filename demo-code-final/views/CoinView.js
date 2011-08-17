(function($, window){
  window.CoinView = Backbone.View.extend({
    className: "Coin",

    initialize: function(){
      _.bindAll(this, 'render');
      this._craftyEntity = Crafty.e('Coin');
    },

    render: function(){
      this._craftyEntity.makeCoin(this.model.get("x"), this.model.get("y"));
    }
  });

  Crafty.c('Coin', {
    init: function() {
      this.addComponent('2D, Canvas, Color, Collision, Tween');
      this.collision();
      this.collected = false;
        
      this.onHit('Player', function() {
        if(!this.collected){
          window.game.collectCoin();

          this.tween({ y: 0, alpha: 0.0 }, 30);
          this.collected = true;
        }
      });
    },
    
    makeCoin: function(x, y){
      this.attr({x: x, y: y, w: 20, h: 20}).color('#F90');
      return this;
    }
  });
})(jQuery, window);
