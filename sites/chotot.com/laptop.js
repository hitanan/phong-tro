var keywords= [];

var DEBUG = false;

// get options data
var dataObj = {
	'laptop-max-value':'',
	'open-only-first':false, 
	'laptop-title-exclude': ''
};
chrome.storage.local.get(dataObj, function(obj) {
	var laptopMaxValue = parseInt(obj['laptop-max-value'], 10);
	keywords = obj['laptop-title-exclude'].split('\n').map(t => t.toLowerCase());
	if (DEBUG) {
		console.log(keywords);
	}
	
	
	if (DEBUG) {
		console.log(laptopMaxValue);
	}
	$(".listing-rows .chotot-list-row").each(function(){
		// if ($(this).has('span.ad-type-suf').length ) {
		// 	$(this).remove();
		// }

		// get title
		var item = $(this).find(".thumbs_subject a[itemprop='name']");
		var itemTitle= $(item).text().toLowerCase();
		if (DEBUG) {
			console.log(itemTitle);
		}
		
		// get price
		var price = $(this).find(".ad-price").text().trim().replace(/\./g, '');
		if (containsKeywordsIn(itemTitle) || (price && isHighPrice(price, laptopMaxValue))) {
			jQuery(this).remove();
		} else {
			jQuery(this).find("div#div-gpt-des-mid-list").remove();
			jQuery(this).find("span.ad-type-suf").remove();
			if (DEBUG) {
				console.log($(this).find("a"));
			}
			$(this).find("a").attr('target', '_blank');
		}

	});
});

function isHighPrice(price, laptopMaxValue) {
	var d_idx = price.indexOf(" đ");
	var real = price.substr(0, d_idx);
	if (DEBUG) {
		console.log(real);
	}
	real = parseInt(real, 10);
	return real > laptopMaxValue;
}

function containsKeywordsIn(itemTitle) {
    for (var i = 0; i < keywords.length; i++) {
        if (itemTitle.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}
