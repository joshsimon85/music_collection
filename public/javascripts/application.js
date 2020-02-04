var App = {
  templates: JST,
  $el: $('main'),
  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.bindEvents();
  },
  renderAlbumView: function(album) {
    new AlbumView({
      model: album
    });
  },
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },
  newAlbum: function() {
    new NewAlbumView();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, 'add_album', this.newAlbum);
  }
};

Handlebars.registerHelper('format_price', function(price) {
  return (+price).toFixed(2);
});
