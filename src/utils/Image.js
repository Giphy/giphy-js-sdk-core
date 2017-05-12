var Image = function(data, id, rendition_type){
	return (
		{
			media_id : id ? id : null,
			rendition_type : rendition_type ? rendition_type : null,
			gif_url : data.url ? data.url : null,
			width : data.width ? data.width : null,
			height : data.height ? data.height : null,
			gif_size : data.size ? data.size : null,
			frames : data.frames ? data.frames : null,
			mp4_url : data.mp4 ? data.mp4 : null,
			mp4_size : data.mp4_size ? data.mp4_size : null,
			webp_url : data.webp_url ? data.webp_url : null,
			webp_size : data.webp_size ? data.webp_size : null,
		}
	)
}


module.exports = Image
