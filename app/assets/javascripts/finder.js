window.Finder = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    // sets up routes
    this.router = new Finder.Routers.AppRouter({
      //pass in div name
      $table1: $("#table1"),
      $table2: $("#table2"),
    });
    // starts listening to changes to the location (url)
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Finder.initialize();
});
