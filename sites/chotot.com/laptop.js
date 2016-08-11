var keywords= ["máy bàn", "để bàn", "bộ máy","bộ core", "máy bộ", "dàn máy", "máy tính bàn", "case "];

jQuery(".listing-rows .chotot-list-row").each(function(){
	// if (jQuery(this).has('span.ad-type-suf').length ) {
	// 	jQuery(this).remove();
	// }

	var item = jQuery(this).find(".thumbs_subject a[itemprop='name']");
	var itemTitle= $(item).text().toLowerCase();
	console.log(itemTitle);

	if (containsKeywordsIn(itemTitle)) {
		jQuery(this).remove();
	}
});


function containsKeywordsIn(itemTitle) {
    for (var i = 0; i < keywords.length; i++) {
        if (itemTitle.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}