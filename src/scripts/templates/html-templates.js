export const createPageTemplate = function(playList){
	let finalHTMLString = playList.map(function(songObj){
		return `
							  <div class="col-xs-4">
							    <div class="thumbnail">
							      <img src="${songObj.image}">
							      <div class="caption song">
							        <h3 class="song-title">${songObj.title}</h3>
							        <a href="#artist/${songObj.artist}" class="song-artist">${songObj.artist}</a>
							      </div>
							    </div>
							  </div>

					`
	}).join("")
	 return `<div class="row">${finalHTMLString}</div>`

}

export const createPageTemplateMulti = function(playlist1, playlist2, playlist3){
	let firstHTMLString = playlist1.map(function(songObj){
		return `
							  <div class="col-xs-4">
							    <div class="thumbnail">
							      <img src="${songObj.image}">
							      <div class="caption song">
							        <h3 class="song-title">${songObj.title}</h3>
							        <a href="#artist/${songObj.artist}" class="song-artist">${songObj.artist}</a>
							      </div>
							    </div>
							  </div>

					`
 }).join("")
 let secondHTMLString = playlist2.map(function(songObj){
	 return `
							 <div class="col-xs-4">
								 <div class="thumbnail">
									 <img src="${songObj.image}">
									 <div class="caption song">
										 <h3 class="song-title">${songObj.title}</h3>
										 <a href="#artist/${songObj.artist}" class="song-artist">${songObj.artist}</a>
									 </div>
								 </div>
							 </div>

				 `
	 }).join("")
	 let thirdHTMLString = playlist3.map(function(songObj){
		 return `
								 <div class="col-xs-4">
									 <div class="thumbnail">
										 <img src="${songObj.image}">
										 <div class="caption song">
											 <h3 class="song-title">${songObj.title}</h3>
											 <a href="#artist/${songObj.artist}" class="song-artist">${songObj.artist}</a>
										 </div>
									 </div>
								 </div>

					 `
	 }).join("")
	 return `<div class="row">${firstHTMLString}${secondHTMLString}${thirdHTMLString}</div>`

}

export const createHeaderHTML = function(station, time){
	if(time !== undefined){
	return `
			<h2>${station} Playlist: ${time}</h2>
			`
	}else{
		return `
		<h2>${station} Playlist</h2>
		`
	}
}

export const featureHTMlPage = function(play1, play2, play3){
	let firstString = play1.map(function(songObj){
	return`
			<div class="col-xs-4">
			<h2 class="feature-header">Track of the Day</h2>
				<div class="thumbnail">
					<img src="${songObj.image}">
					<div class="caption song">
						<h3 class="song-title">${songObj.title}</h3>
						<a href="#artist/${songObj.artist}" class="song-artist">${songObj.artist}</a>
					</div>
				</div>
			</div>
			`
 }).join("")
 let secondString = play2.map(function(songObj){
 return`
		 			  <div class="col-xs-4">
						<h2 class="feature-header">Artist of the Week</h2>
								 <div class="thumbnail">
									 <img src="${songObj.image}">
									 <div class="caption song">
										 <h3 class="song-title">${songObj.title}</h3>
										 <a href="#artist/${songObj.artist}" class="song-artist">${songObj.artist}</a>
									 </div>
								 </div>
							 </div>
							 `
 }).join("")
 let finalString = play3.map(function(songObj){
 return`
		 <div class="col-xs-4">
		 <h2 class="feature-header">Rhythms of the World</h2>
				<div class="thumbnail">
					<img src="${songObj.image}">
					<div class="caption song">
						<h3 class="song-title">${songObj.title}</h3>
						<a href="#artist/${songObj.artist}" class="song-artist">${songObj.artist}</a>
					</div>
				</div>
			</div>

		 `
 }).join("")
 return `<div class="row">${firstString}${secondString}${finalString}</div>`
 }

export const createArtistPage = function(artistObj){
		return `
							  <div class="col-xs-12">
							    <div class="thumbnail">
							      <img src="${artistObj.images[0].url}">
							      <div class="caption song">
							        <h3 class="artist-name">${artistObj.name}</h3>
							        <a href="${artistObj.external_urls.spotify}" target="_blank" class="artist-spotify">Listen On Spotify!</a>
							      </div>
							    </div>
							  </div>

					`
	}
