var Images = require('./Images');
var Image = require('./Image');
var User = require('./User');

	var MediaItem = function(data){
		return (
			{
			id: data.id ? data.id : null,
			slug: data.slug ? data.slug : null,
			url: data.url ? data.url : null,
			bitly_gif_url: data.bitly_url ? data.bitly_url : null,
			embed_url: data.embed_url ? data.embed_url : null,
			source: data.source ? data.source : null,
			rating: data.rating ? data.rating : null,
			content_url: data.content_url ? data.content_url : null,
			tags: data.tags ? data.tags : null,
			featured_tags: data.features_tags ? data.features_tags : null,
			user: data.user ? User(data.user) : User({}),
			images: data.images ? Images(data.images, data.id) : Images({}),
			source_tld: data.source_tld ? data.source_tld : null,
			source_post_url: data.source_post_url ? data.source_post_url : null,
			update_datetime: data.update_datetime ? data.update_datetime : null,
			create_datetime: data.create_datetime ? data.create_datetime : null,
			import_datetime: data.import_datetime ? data.import_datetime : null,
			trending_datetime: data.trending_datetime ? data.trending_datetime : null,
			is_hidden: data.is_hidden ? data.is_hidden : null,
			is_removed: data.is_removed ? data.is_removed : null,
			is_community: data.is_community ? data.is_community : null,
			is_anonymous: data.is_anonymous ? data.is_anonymous : null,
			is_featured: data.is_featured ? data.is_featured : null,
			is_realtime: data.is_realtime ? data.is_realtime : null,
			is_indexable: data.is_indexable ? data.is_indexable : null ,
			is_sticker: data.is_sticker ? data.is_sticker : null
			}
		)
	}

module.exports = MediaItem
