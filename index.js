var corpus = {};
module.exports = function(text) {
  text = text.replace(/\s+/g, " ")
					   .replace(/[^a-zA-Z ]/g, "")
					   .toLowerCase();

	text.split(" ").forEach(function (word) {

				if (word.length < 4 || word.length > 20) {
					return;
				}

				if (corpus[word]) {
					corpus[word]++;
				} else {
					corpus[word] = 1;
				}
			});

      var words = [];
    	for (prop in corpus) {
    		words.push({
    			word: prop,
    			count: corpus[prop]
    		});
    	}
    	words.sort(function (a, b) {
    		return b.count - a.count;
    	});

    	return words.slice(0, 20);
}
