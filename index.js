$(function () {
	var authorBoxWidth = $('.author-box').width();
    var authorWidth =  authorBoxWidth * 50 / 100;
    var authorBoxMargin = 0;
    var index = 0;
    var scroll = function () {
    	index ++;
    	authorBoxMargin -=  authorWidth;
    	if (index % 2 == 0) {
    		authorBoxMargin = 0;
    	}
    	$('.author-box').css({'margin-left': authorBoxMargin});
    }
    var key = window.setInterval(scroll, 3000);

    var insetMargin = 0;
    $('.inset-right').click(function(){
        insetMargin -= 224;
        if (insetMargin < -224) {
            insetMargin = -224;
            return false;
        } 
        $('.inset-scroll').css({'margin-left' : insetMargin});
    })
    $('.inset-left').click(function(){
        insetMargin += 224;
        if (insetMargin > 0) {
            insetMargin = 0;
            return false;
        };
        $('.inset-scroll').css({'margin-left' : insetMargin});
    })

    var bannerMargin = 0;
    $('.banner-right').click(function(){
        bannerMargin -= 224;
        if (bannerMargin < -448) {
            bannerMargin = -448;
            return false;
        } 
        $('.banner-scroll').css({'margin-left' : bannerMargin});
    })
    $('.banner-left').click(function(){
        bannerMargin += 224;
        if (bannerMargin > 0) {
            bannerMargin = 0;
            return false;
        };
        $('.banner-scroll').css({'margin-left' : bannerMargin});
    })

    $('.shadow-point').click(function () {
        var shadowPoint = $(this).attr('data-pic');
        $('.shadow-box').empty().append(shadowPoint);
        $('body').css({'overflow':'hidden'});
        $('.shadow').css({'display':'block'}).animate({'opacity': 1});
    })
    $('.shadow').click(function(){
        $('body').css({'overflow':'auto'});
        $('.shadow').animate({'opacity': 0},function(){
            $('.shadow').css({'display':'none'});
        })
    })
})