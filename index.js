var corpus = {};

var tm = function(options) {
  if(typeof options === 'object'){
    var text = options.text;
    if(typeof options.sw === 'string'){
      var sw = options.sw.split(" ");
    }
    else{
      var sw = options.sw;
    }
    var checkSW = true;
  }
  else{
    var text = options;
    var checkSW = false;
  }

  text = text.replace(/\s+/g, " ")
					   .replace(/[^a-zA-Z ]/g, "")
					   .toLowerCase();

	text.split(" ").forEach(function (word) {

				/*if (word.length < 4 || word.length > 20) {
					return;
				}*/

        if(checkSW){
          var trueSW = sw.find(function(check){return check === word;});
          if(trueSW){
            return;
          }
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

module.exports = function(opts){
  return new tm(opts);
}
