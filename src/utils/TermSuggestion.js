var TermSuggestion = function(data){
	return (
		{
			"term": data.name ? data.name : null
		}
	)
}


module.exports = TermSuggestion