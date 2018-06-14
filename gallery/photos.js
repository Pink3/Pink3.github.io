var render = function(page, data){
	var img = "";
	for (var i = 0; i < data.length; i++) {
		img += '<li><div class="img-box">' + '<a class="img-bg " rel="example_group" data-fancybox="images" href="https://tangjianpeng.com/' + data[i] + '"></a>' + '<img class="lazy" data-original="https://tangjianpeng.com/' + data[i] + '">'  + '</div></li>';
	}
	$(".img-box-ul").append(img);
	$(".img-box-ul").lazyload();
	$("a[rel=example_group]").fancybox();
}