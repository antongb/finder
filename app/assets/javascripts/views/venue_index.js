window.Finder.Views.VenuesIndex = Backbone.View.extend({
  template: JST['templates/venues/index'],

  initialize: function (options) {
    this.collection = options.collection;
    this.listenTo(this.collection, "sync add", this.render);
  },

  events: {
    "click tr": "selected",
  },

  selected: function (e) {
    var $selected = $(e.currentTarget).clone();
    $($selected).click(function(){
      $(this).remove();
    });
    $(table2).append($selected);
  },

  render: function () {

    var renderedContent = this.template({
      venues: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }
});
