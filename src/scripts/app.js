import Backbone from 'backbone'
import $ from 'jquery'
import {createPageTemplate, createPageTemplateMulti, createHeaderHTML } from './templates/html-templates.js'
import {BbcModel, BbcRadio1Collection, BbcRadio2Collection} from './models/model-bbc.js'

document.querySelectorAll('.navbar')

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

	routes: {
		 'featured-content' : 'showFeaturesPage',
		 'radio/2/:time' : 'showRadio2AtTimePage',
		 'radio/1/:time' : 'showRadio1AtTimePage',
	   'radio/1' : 'showRadio1Page',
		 'radio/2' : 'showRadio2Page',
     '' : 'showHomePage',
   },

	 events: {
	 "click .radio-2-pm" : "handleRadio2EveningPage",
	 "click .radio-2-afternoon" : "handleRadio2AfternoonPage",
	 "click .radio-2-am" : "handleRadio2MorningPage",
	 "click .radio-1-pm" : "handleRadio1EveningPage",
	 "click .radio-1-afternoon" : "handleRadio1AfternoonPage",
	 "click .radio-1-am" : "handleRadio1MorningPage",
	 "click .radio-1-all" : "handleAllRadio1",
	 "click .radio-2-all" : "handleAllRadio2",
	 "click .home" : "handleHomePage",
 	},

	handleHomePage: function(){
		window.location.hash = ''
	},

	handleAllRadio1: function(){
		window.location.hash = 'radio/1'
	},

	handleAllRadio1: function(){
		window.location.hash = 'radio/2'
	},

	handleRadio1MorningPage: function(){
		window.location.hash = 'radio/1/:time'
	},

	handleRadio1AfternoonPage: function(){
		window.location.hash = 'radio/1/:time'
	},

	handleRadio1EveningPage: function(){
		window.location.hash = 'radio/1/:time'
	},

	handleRadio2MorningPage: function(){
		window.location.hash = 'radio/2/:time'
	},

	handleRadio2AfternoonPage: function(){
		window.location.hash = 'radio/2/:time'
	},

	handleRadio2EveningPage: function(){
		window.location.hash = 'radio/2/:time'
	},



  showHomePage: function(){
    let playlistInfoEl = document.querySelector('.playlist-info')
		let playlistInstance = new BbcRadio1Collection()
		playlistInstance.fetch().then(function(serverRes){
		let finalHTML = `<h2>Introducing...</h2> ${createPageTemplate(serverRes.playlist.introducing)}`
		playlistInfoEl.innerHTML = finalHTML
  })
 },

	showRadio1Page: function(){
	 let playlistInfoEl = document.querySelector('.playlist-info');
	 let playlistInstance = new BbcRadio1Collection()
	 playlistInstance.fetch().then(function(serverRes){
	 playlistInfoEl.innerHTML = `${createHeaderHTML('Radio 1')} ${createPageTemplateMulti(serverRes.playlist.a, serverRes.playlist.b, serverRes.playlist.c)}`
	 })
 },

 showRadio1AtTimePage: function(time){
	let playlistInfoEl = document.querySelector('.playlist-info');
	let playlistInstance = new BbcRadio1Collection()
	playlistInstance.fetch().then(function(serverRes){
		if(time === 'a'){
			playlistInfoEl.innerHTML = `${createHeaderHTML('Radio 1', 'Morning')} ${createPageTemplate(serverRes.playlist.a)}`;
		}else if(time === 'b'){
			playlistInfoEl.innerHTML = `${createHeaderHTML('Radio 1', 'Afternoon')} ${createPageTemplate(serverRes.playlist.b)}`;
		}else{
			playlistInfoEl.innerHTML = `${createHeaderHTML('Radio 1', 'Evening')} ${createPageTemplate(serverRes.playlist.c)}`;
		}
	})
 },

 showRadio2Page: function(){
	 let playlistInfoEl = document.querySelector('.playlist-info');
	 let playlistInstance = new BbcRadio2Collection()
	 playlistInstance.fetch().then(function(serverRes){
	 playlistInfoEl.innerHTML = `${createHeaderHTML('Radio 2')} ${createPageTemplateMulti(serverRes.playlist.a, serverRes.playlist.b, serverRes.playlist.c)}`
	 })
 },

 showRadio2AtTimePage: function(time){
 let playlistInfoEl = document.querySelector('.playlist-info');
 let playlistInstance = new BbcRadio2Collection()
 playlistInstance.fetch().then(function(serverRes){
	 if(time === 'a'){
		 playlistInfoEl.innerHTML = `${createHeaderHTML('Radio 2', 'Morning')} ${createPageTemplate(serverRes.playlist.a)}`;
	 }else if(time === 'b'){
		 playlistInfoEl.innerHTML = `${createHeaderHTML('Radio 2', 'Afternoon')} ${createPageTemplate(serverRes.playlist.b)}`;
	 }else{
		 playlistInfoEl.innerHTML = `${createHeaderHTML('Radio 2', 'Evening')} ${createPageTemplate(serverRes.playlist.c)}`;
	 }
 })
 },

})


let myApplication = new AppRouter();
