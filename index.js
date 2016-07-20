$(function () {
	var authorBoxWidth = $('.author-box').width();
    var authorWidth =  authorBoxWidth * 33.33 / 100;
    var authorBoxMargin = 0;
    var index = 0;
    var scroll = function () {
    	index ++;
    	authorBoxMargin -=  authorWidth;
    	if (index % 3 == 0) {
    		authorBoxMargin = 0;
    	}
    	$('.author-box').css({'margin-left': authorBoxMargin});
    }
    var key = window.setInterval(scroll, 3000);

    var bannerMargin = 0;
    $('.banner-left').click(function(){
        bannerMargin -= 224;
        if (bannerMargin < -224) {
            bannerMargin = -224;
            return false;
        } 
        $('.banner-scroll').css({'margin-left' : bannerMargin});
    })
    $('.banner-right').click(function(){
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