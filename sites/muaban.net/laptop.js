var keywords= [];

var DEBUG = true;

// get options data
var dataObj = {
	'laptop-max-value':'',
	'open-only-first':false, 
	'laptop-title-exclude': ''
};
chrome.storage.local.get(dataObj, function(obj) {
	dataObj['laptop-max-value'] = parseInt(obj['laptop-max-value'], 10);
	keywords = obj['laptop-title-exclude'].split('\n').filter((t) => t != '').map(t => t.toLowerCase());
	if (DEBUG) {
		console.log(keywords);
	}
	
	
	if (DEBUG) {
		console.log(dataObj['laptop-max-value']);
	}
	
	var outlist = $(".mbn-body.container .mbn-box-list:eq(2)");
	$(outlist).find('.mbn-box-list-content').each(function(){
		// if ($(this).has('span.ad-type-suf').length ) {
		// 	$(this).remove();
		// }

		// get title
		var item = $(this).find("h2.mbn-title");
		var itemTitle= $(item).text().toLowerCase();
		if (DEBUG) {
			console.log(itemTitle);
		}
		
		// get price
		var price = $(this).find("span.mbn-price").text().trim().replace(/\./g, '');
		if ((keywords.length > 0 && containsKeywordsIn(itemTitle)) || (price && isHighPrice(price))) {
			jQuery(this).remove();
		} else {
			/*jQuery(this).find("div#div-gpt-des-mid-list").remove();
			jQuery(this).find("span.ad-type-suf").remove();*/
			if (DEBUG) {
				console.log($(this).find("a"));
			}
			$(this).find("a").attr('target', '_blank');
		}

	});
});

function isHighPrice(price) {
	if(DEBUG) { console.log(dataObj['laptop-max-value']); }
	if(dataObj['laptop-max-value'] == '') {
		return false;
	}
	var d_idx = price.indexOf(" đ");
	var real = price.substr(0, d_idx);
	if (DEBUG) {
		console.log('real' + real);
	}
	real = parseInt(real, 10);
	return real > dataObj['laptop-max-value'];
}

function containsKeywordsIn(itemTitle) {
    for (var i = 0; i < keywords.length; i++) {
        if (itemTitle.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}
