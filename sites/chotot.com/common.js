$("#search_form, #resultbox > h2, #left_menu, #main_content >ol, #sunny_navbar_container, #div-gpt-ad-top-right, body .sunny_footer, #chotot-qc-zone-2, .listing-rows #gcsa, #main_content .cat_desc_in_list_page, #main_content .find_more_ads, #main_content #categories_container, #div-gpt-des-bottom-list, #main_content > br").remove();
$('#sunny_wall').css('margin', '0 auto');
$('.TabContainer .paging_table').css({'padding-top':'0', 'position': 'fixed', 'top': '0'});
$('.TabContainer .paging_table .pagination_ul li > span.pagination_span').css({'border-color':'red'});
$('.box_container .listing-rows, #container').css('min-height', '0');
$(".paging_container").prependTo(".box_container .TabContainer");