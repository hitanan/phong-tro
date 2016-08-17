$(".listing-rows .chotot-list-row").each(function(){
	if ($(this).has('span.ad-type-suf').length ) {
		$(this).remove();
	} else {
		$(this).find("div#div-gpt-des-mid-list").remove();
		$(this).find("a").attr('target', '_blank');
	}
});
