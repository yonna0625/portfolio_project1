/* $=jQuery */

$(function(){

    /* 타이틀 전체 메뉴 드롭다운 */

    $('#gnb > li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    
    $('#gnb > li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });

    
    btn = 1;

    $('#total_btn, #total_close').click(function(){
        if(btn == 1){
            $('#total_menu').slideDown();
            btn = 0; 
        } else{
            $('#total_menu').slideUp(); 
        };
    });


    /* ----------------------------배너------------------------------ */

    var visual = $('#banner>ul>li'); 
    var button = $('#buttonList>li'); 
    var leftBtn = $('.btnImg .prev'); 
    var rightBtn = $('.btnImg .next'); 
    var current = 0; 
    var setIntervalId;

    timer(); 

    function timer(){

        setIntervalId = setInterval(function(){

            var prev = visual.eq(current);
            var pn = button.eq(current);
            
            move(prev, 0, '-100%');
            pn.removeClass('on'); 

            current++;

            if(current == visual.size()){current=0}

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0);
            pnn.addClass('on');

        }, 3000);
    };

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end}, 500);
    }

     button.on({click:function(){

        var tg = $(this);
        var i = tg.index();

        button.removeClass('on');
        tg.addClass('on');

        move1(i);
        }
    });

    function move1(i){
        if(current == i) return 

        var currentEl = visual.eq(current); 
        var nextEl = visual.eq(i); 

        currentEl.css({left:0}).stop().animate({left:'-100%'},500);
        nextEl.css({left:'100%'}).stop().animate({left:0},500); 

        current = i;
    }

    $('#banner').on({

        mouseover: function(){
            clearInterval(setIntervalId);
        }, mouseout:function(){
            timer();
        }

    });

    /* 우측 버튼 */
    rightBtn.click(function(){

        var prev = visual.eq(current);
        var pn = button.eq(current);

        move(prev, 0, '-100%');
        pn.removeClass('on');

        current++;

        if(current == visual.size()){current=0}

        var next = visual.eq(current);
        var pnn = button.eq(current); 
        move(next, '100%', 0);
        pnn.addClass('on'); 

        return;

    });

    /* 좌측 버튼 */
    leftBtn.click(function(){

        var prev = visual.eq(current);
        var pn = button.eq(current);

        move(prev, 0, '100%');
        
        pn.removeClass('on');
        current--;

        if(current == -visual.size()){current=0}

        var next = visual.eq(current);
        var pnn = button.eq(current);


        move(next, '-100%', 0);
        pnn.addClass('on'); 

        return; 

    });

    function move(tg, start, end){ 
        tg.css('left', start).stop().animate({left:end}, {duration:500, ease:'easeOutCubic'});
    }




/* ----------------------------메인 상품 슬라이드------------------------------ */

    var slide1 = $('.m_pro_pic>ul.slide1')
    var slideList1 = $('.m_pro_pic>ul.slide1>li');
    var slideListWidth1 = $('.m_pro_pic>ul>li').width();
    var current = 0;

    var setIterval01;

    mainSlide1();

    function mainSlide1(){
        setIterval01 = setInterval(function(){
            
            slide1.stop().animate({left:-slideListWidth1*1.3},1000, function(){
                $('ul.slide1>li:first').insertAfter('ul.slide1>li:last');
                slide1.css('left', 0);

            })

        },2500);
    }

    $('.slide1, .next1_1, .prev1_1').hover(function(){
 
        clearInterval(setIterval01);
        
    }, function(){

        mainSlide1(); 
    });


    function next1_1(){
        slide1.stop().animate({left:-slideListWidth1}, 500, function(){
            $('ul.slide1>li:first').insertAfter('ul.slide1>li:last');
            slide1.css('left', 0);
        });
    }

    function prev1_1(){
        $('ul.slide1>li:last').insertBefore('ul.slide1>li:first');
        slide1.css('left', -slideListWidth1);
        slide1.animate({left:0},500);
    }

    $('.prev1_1').click(function(){
        prev1_1(); 
    });

    $('.next1_1').click(function(){
        next1_1();
    });

    //slide1 end


/* ----------------------------비디오------------------------------ */


    $('.m_video > img').click(function(){
        
        var path = $('.m_video > .video_sub1').attr('src');
        $('#m_video_main video').attr('src', path);
        $('#m_video_main video').css('opacity', 0).stop().animate({opacity:1}, 1000)
        $('.m_video > img').css('opacity', 0.5)
        
        return false; 
    
    })

});