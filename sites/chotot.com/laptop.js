var keywords= ["máy bàn", "để bàn", "bộ máy","bộ core", "máy bộ", "dàn máy", "máy tính bàn", "case ", "cây cpu"];

jQuery(".div-gpt-ad-top-right, body .sunny_footer, #chotot-qc-zone-2, .listing-rows #gcsa, #main_content .cat_desc_in_list_page, #main_content .find_more_ads, #main_content #categories_container").remove();

jQuery(".listing-rows .chotot-list-row").each(function(){
	// if (jQuery(this).has('span.ad-type-suf').length ) {
	// 	jQuery(this).remove();
	// }

	var item = jQuery(this).find(".thumbs_subject a[itemprop='name']");
	var itemTitle= $(item).text().toLowerCase();
	console.log(itemTitle);

	if (containsKeywordsIn(itemTitle)) {
		jQuery(this).remove();
	} else {
		jQuery(this).find("div#div-gpt-des-mid-list").remove();
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