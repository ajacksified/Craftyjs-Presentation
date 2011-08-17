(function($, window){
  $(function(){
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
