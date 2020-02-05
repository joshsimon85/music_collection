var AlbumView = Backbone.View.extend({
  tagName: 'li',
  addToCart: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.model);
  },
  events: {
    'click a.button': 'addToCart'
  },
  template: App.templates.album,
  render: function() {
    var id = this.model.get('id');

    this.$el.attr('id', 'album_' + id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find('ul'));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
