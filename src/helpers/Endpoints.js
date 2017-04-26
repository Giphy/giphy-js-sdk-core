function Endpoint(endpoint, type){
	return server_url + endpoint_list[type][endpoint]
}

var server_url = "https://api.giphy.com";

var endpoint_list = {
	gif: {
		search: "/v1/gifs/search",
		trending: "/v1/gifs/trending",
		random: "/v1/gifs/random",
		translate: "/v1/gifs/translate",
		gif_by_id: "/v1/gifs/gif",
		gif_by_ids: "/v1/gifs"
	},
	sticker: {
		search: "/v1/stickers/search",
		trending: "/v1/stickers/trending",
		random: "/v1/stickers/random"
	}
};

module.exports = Endpoint
