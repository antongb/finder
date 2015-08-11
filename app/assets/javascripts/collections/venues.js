window.Finder.Collections.Venues = Backbone.Collection.extend({
  url: "/api/venues",
  model: Finder.Models.Venue,

  getOrFetch: function (id) {
    var model;
    var venue = this;

    if (model = this.get(id)) {
      return model;
    } else {
      model = new Finder.Models.Venue({id: id});
      model.fetch({
        success: function () { venues.add(model) }
      });
      return model;
    }
  }
});

window.Finder.Collections.venues = new Finder.Collections.Venues();
