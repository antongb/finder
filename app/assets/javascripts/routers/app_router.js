window.Finder.Routers.AppRouter = Backbone.Router.extend({

  initialize: function (options) {
    this.$table1 = options.$table1;
    this.$table2 = options.$table2;

    //venue view
    // this._venueView = new Finder.Views.VenueIndex({
    //   collection: Finder.Collections.venues
    // });
    // this.$table1.html(this._venueView.render().$el);
  },

  routes: {
    "": "venueIndex",
  },

  venueIndex: function () {
    //center view
    var indexView = new Finder.Views.VenuesIndex({
      collection: Finder.Collections.venues
    });

    Finder.Collections.venues.fetch();
    this._swapView(indexView, this.$table1);
  },

  //for adding more views later
  _swapView: function (view, el) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;

    el.html(view.render().$el);
  }

});
