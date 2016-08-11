jQuery(".listing-rows .chotot-list-row").each(function(){
	if (jQuery(this).has('span.ad-type-suf').length ) {
		jQuery(this).remove();
	} else {
		jQuery(this).find("div#div-gpt-des-mid-list").remove();
	}
});

jQuery(".div-gpt-ad-top-right, body .sunny_footer, #chotot-qc-zone-2, .listing-rows #gcsa, #main_content .cat_desc_in_list_page, #main_content .find_more_ads, #main_content #categories_container").remove();