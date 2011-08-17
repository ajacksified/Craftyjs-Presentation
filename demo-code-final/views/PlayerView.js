(function($, window){
  window.PlayerView = Backbone.View.extend({
    className: "Player",

    initialize: function(){
      _.bindAll(this, 'render');

      this._craftyEntity = Crafty.e("Player");
      this.render();
    },

    render: function(){
      var x = this.model.get("x");
      var y = this.model.get("y");

      this._craftyEntity.makePlayer(x, y);
      console.log(this._craftyEntity);
    }
  });

  Crafty.sprite(24, 'http://i.imgur.com/vQuTM.png', {
    player: [0,0,1,1.5]
  });

  Crafty.c("Player", {
    init: function(){
      this.addComponent('2D, Canvas, Fourway, player');
    },

    makePlayer: function(x, y){
      this.fourway(2);  
      this.attr({ x: x, y: y });

      return this; 
    } 
  });
})(jQuery, window);
