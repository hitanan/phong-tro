var keywords= ["máy bàn", "để bàn", "bộ máy","bộ core", "máy bộ", "dàn máy", "máy tính bàn", "thùng máy", "case ", "cây cpu", "màn hình máy tính"];

jQuery(".div-gpt-ad-top-right, body .sunny_footer, #chotot-qc-zone-2, .listing-rows #gcsa, #main_content .cat_desc_in_list_page, #main_content .find_more_ads, #main_content #categories_container").remove();

var DEBUG = false;

// get options data
var dataObj = {'laptop-max-value':'0','open-only-first':false};
chrome.storage.local.get(dataObj, function(obj) {
	
	var laptopMaxValue = parseInt(obj['laptop-max-value'], 10);
	if (DEBUG) {
		console.log(laptopMaxValue);
	}
	jQuery(".listing-rows .chotot-list-row").each(function(){
		// if (jQuery(this).has('span.ad-type-suf').length ) {
		// 	jQuery(this).remove();
		// }

		// get title
		var item = jQuery(this).find(".thumbs_subject a[itemprop='name']");
		var itemTitle= $(item).text().toLowerCase();
		if (DEBUG) {
			console.log(itemTitle);
		}
		
		// get price
		var price = jQuery(this).find(".ad-price").text().trim().replace(/\./g, '');
		if (containsKeywordsIn(itemTitle) || (price && isHighPrice(price, laptopMaxValue))) {
			jQuery(this).remove();
		} else {
			jQuery(this).find("div#div-gpt-des-mid-list").remove();
			jQuery(this).find("span.ad-type-suf").remove();
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
