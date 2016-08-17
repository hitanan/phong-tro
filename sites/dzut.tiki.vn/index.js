var keywords= ["laptop", "canon", "máy ảnh", "Bao Cao Su", "Tủ Lạnh", "Đồng Hồ", "Tai Nghe", "Thẻ Nhớ"];
setTimeout( function() {
$("tiki-dzut-product-list tiki-dzut-product").each(function(){
	var item = $(this).find(".product.name.tiki-dzut-product");
	//console.log(item);
	var itemTitle= $(item).html().toLowerCase();
	if (!(containsKeywordsIn(itemTitle) )) {
		$(this).remove();
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
