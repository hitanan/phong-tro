var keywords= ["canon", "máy ảnh", "Bao Cao Su", "Tủ Lạnh", "Đồng Hồ", "Tai Nghe", "Thẻ Nhớ", "iPhone 6s", "Samsung Galaxy J7", "Máy In", "OPPO", "Quạt Bàn", "Máy Ép Trái Cây", "Máy Cạo Đa Năng", "laptop"];

$("#headerContainer, tiki-dzut-banner, tiki-dzut-main center.round-timeline").remove();
$('#shuffle > tiki-dzut-product').css('width', '160');
//document.write("<style>tiki-dzut-home .container { max-width: 5000; }</style>");


setTimeout( function() {
$("tiki-dzut-product-list tiki-dzut-product").each(function(){
	var item = $(this).find(".product.name.tiki-dzut-product");
	//console.log(item);
	var itemTitle= $(item).html().toLowerCase();
	if (!(containsKeywordsIn(itemTitle) )) {
		$(this).remove();
	} else {
		console.log("template:" + $(this).find("paper-button template").html().trim());
		if ( $(this).find("paper-button").html().trim() != 'CHƯA TỚI GIỜ') {
			$(this).find("paper-button").click();
		}
	}
});
}, 1000);


function containsKeywordsIn(itemTitle) {
    for (var i = 0; i < keywords.length; i++) {
        if (itemTitle.includes(keywords[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}
