(function($, window){
  $(function(){
    $("#addBox").bind("click", function(){ 
      var coin = Crafty.e("Coin").makeCoin("#FF0000");
    });

    $("#addMovableBox").bind("click", function(){ 
      var me = Crafty.e("Person");
    });

    window.game = new Game();
    window.App = new CraftyDemo();

    if(Modernizr.history){
      Backbone.history.start({ pushState: true });
    }else{
      Backbone.history.start();
    }

    window.App.home();
  });
})(jQuery, window);
