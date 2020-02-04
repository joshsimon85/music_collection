this["JST"] = this["JST"] || {};

this["JST"]["album"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"cover") || (depth0 != null ? lookupProperty(depth0,"cover") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":19}}}) : helper)))
    + "\" /><h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":36}}}) : helper)))
    + "</h2><h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"artist") || (depth0 != null ? lookupProperty(depth0,"artist") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data,"loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":55}}}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":71}}}) : helper)))
    + "</p><p>$"
    + alias4((lookupProperty(helpers,"format_price")||(depth0 && lookupProperty(depth0,"format_price"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"price") : depth0),{"name":"format_price","hash":{},"data":data,"loc":{"start":{"line":1,"column":79},"end":{"line":1,"column":101}}}))
    + "</p><a class=\"button\" href=\"#\">Add to cart</a>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Albums</h1><ul></ul><footer><a class=\"button\" href='/albums/new'>Add album</a></footer>";
},"useData":true});

this["JST"]["new_album"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action='/albums' method='post'><h1>Add Album</h1><fieldset><dl><dt><label>Title</label></dt><dd><input type='text' name='title' /></dd><dt><label>Artist</label></dt><dd><input type='text' name='artist' /></dd><dt><label>Date</label></dt><dd><input type='date' name='date' /></dd><dt><label>Cover</label></dt><dd><input type='url' name='cover' /></dd><dt><label>Price</label></dt><dd><input type='text' name='price' /><fieldset class=\"actions\"><input type='submit' value='Create' /></fieldset></form>";
},"useData":true});