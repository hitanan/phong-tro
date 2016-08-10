jQuery(".listing-rows .chotot-list-row").each(function(){
	if (jQuery(this).has('span.ad-type-suf').length ) {
		jQuery(this).remove();
	}
});