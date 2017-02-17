import Backbone from 'backbone'

export const BbcModel = Backbone.Model.extend({})

export const BbcRadio1Collection = Backbone.Collection.extend({
	model: BbcModel,
	url : `proxy/?api=http://www.bbc.co.uk/radio1/playlist.json?`,
   parse: function(rawJsonRes){
	 return rawJsonRes.data
	},
	initialize: function(){ /* no op */ }
})

export const BbcRadio2Collection = Backbone.Collection.extend({
	model: BbcModel,
	url : `proxy/?api=http://www.bbc.co.uk/radio2/playlist.json?`,
   parse: function(rawJsonRes){
		return rawJsonRes.data
	},
	initialize: function(){ /* no op */ }
})


export const SpotifyCollection = Backbone.Collection.extend({
	model: BbcModel,
	url: ``,
	parse: function(rawJsonRes){
		return rawJsonRes.data
	},
	initialize: function(artist){
		this.url = 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist'
	}
})
