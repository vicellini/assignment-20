export const createPageTemplate = function(playList){
	let finalHTMLString = playList.map(function(songObj){
		return `
							  <div class="col-xs-4">
							    <div class="thumbnail">
							      <img src="${songObj.image}">
							      <div class="caption song">
							        <h3 class="song-title">${songObj.title}</h3>
							        <p class="song-artist">${songObj.artist}</p>
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
							        <p class="song-artist">${songObj.artist}</p>
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
										 <p class="song-artist">${songObj.artist}</p>
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
										 <p class="song-artist">${songObj.artist}</p>
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
