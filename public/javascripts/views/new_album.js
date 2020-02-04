var NewAlbumView = Backbone.View.extend({
  template: App.templates.new_album,
  attributes: {
    id: 'album_new'
  },
  create: function(e) {
    e.preventDefault();
    var $f = this.$('form');

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        App.albums.add(json);
        App.indexView();
      }
    });
  },
  events: {
    submit: 'create'
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
