var renderZhao=(function () {
    var $Nav=$('.nav'),导航栏盒子
        $Navl=$Nav.find('.navL'),//导航栏li盒子
        $Navlist=$Navl.children('li'),//导航栏li
        $Nava=$Navlist.find('.a'),//导航栏装扮的a按钮
        $Release=$('#release'),//内容中间发布部分
        $Inputbox=$('#inputbox'),//发表输入框
        $Emoticon=$('#emoticon'),//表情包按钮
        $Emobox=$('.emoticon'),//隐藏表情包盒子
        $flip=$Emobox.find('#flip'),//表情包上下翻页按钮
        $flipa=$flip.children('a'),//表情包上下翻页a
        $flipp=$flip.children('span'),//表情包上下翻页数
        $Bq=$Emobox.find('.bq'),//表情包ul
        $Closeemoticon=$('#closeemoticon'),//关闭表情包
        $Published=$('#published');//发表按钮

    //导航栏li下拉列表
    function navList(){
        $Navlist.each(function () {
            $(this).mouseenter(function () {
                $(this).children('.waibu').css('display')==='none'?$(this).children('.waibu').show(200)&&$(this).css('background','#fff')&&$(this).children('a').css('color','#000'):null;
            });
            $(this).mouseleave(function () {
                $(this).children('.waibu').css('display')==='block'?$(this).children('.waibu').hide(200)&&$(this).css('background','')&&$(this).children('a').css('color',''):null;

            });
        });
        };
    //导航栏li下拉列表装扮a切换
    function navA() {
        $Nava.each(function () {
            $(this).mouseenter(function (index,da) {
                $(this).siblings('a').removeClass('biaoa');
                $(this).addClass('biaoa');
                $(this).siblings('ul').removeClass('dis');
                $(this).siblings('ul').eq($(this).index()).addClass('dis');
            })
        })
    };
    //发表框表情包
    function facePack(){
        $Emoticon.click(function (event) {
            event.stopPropagation();
            $Emobox.css('display')==='none'?$Emobox.slideDown():$Emobox.slideUp();
        });
        $Emobox.click(function (event) {
            event.stopPropagation();
        });
        function lost() {
            $Emobox.slideUp();
        }
        $(document).click(function (e) {
            e.stopPropagation();
            lost();
            $('.review').css('height','40px');
            $('.comment').css('height','50px');
            $('.review').css('background','#2e2e2e');
            $('.issued').slideUp(0);
        });
        $Closeemoticon.click(function () {
            lost();
        });
    };
    //表情包上下翻页按钮
    /*function faceFlip() {
        $flipa.eq(0).click(function () {
            $flipp.html($flipp.html()>1?$flipp.html()-1:$flipp.html());
        });
        $flipa.eq(1).click(function () {
            $flipp.html($flipp.html()<5?$flipp.html()-1+2:$flipp.html());
        });
        $flipa.each(function () {
            $(this).click(function () {
                $flipp.html()==1?$flipa.eq(0).addClass('no'):$flipa.eq(0).removeClass('no');
                $flipp.html()==5?$flipa.eq(1).addClass('no'):$flipa.eq(1).removeClass('no');
            })
        })
    }*/
    function faceFlip() {
        $flipa.each(function () {
            $(this).click(function () {
                if($(this).index()===0){
                    $flipp.html($flipp.html()>1?$flipp.html()-1:$flipp.html());
                }else {
                    $flipp.html($flipp.html()<5?$flipp.html()-1+2:$flipp.html());

                }
                $flipp.html()==1?$flipa.eq(0).addClass('no'):$flipa.eq(0).removeClass('no');
                $flipp.html()==5?$flipa.eq(1).addClass('no'):$flipa.eq(1).removeClass('no');
                $Bq.eq($flipp.html()-1).siblings().removeClass('bq-block');
                $Bq.eq($flipp.html()-1).addClass('bq-block');
            });
        })
    }
    //发表框
    function publishedHTML(){
        $Published.click(function () {
            var txt=$Inputbox.text(),
                htm=$Inputbox.html(),
                htm=htm.replace(/&nbsp;+/g,' '),
                reg=/[\u4E00-\u9FFF]|\d+|[a-zA-Z]/g,
            str='';
            str+='<div class="frame"><div class="framehead clear"><div class="lt clear"></div><span>学霸爹</span><span>00:00</span><div class="rt"></div></div><div class="txt">'+htm+'</div><!--发表图片区域--><div class="picture"></div><!--发表点赞、评论、转发--><div class="forward" ><p>浏览<span>555</span>浏览次</p><a href=""></a><a href=""></a><a href=""></a></div><!--发表评论--><div class="comment"><div class="review" contenteditable="true"></div><i></i></div><!--发表按钮--><div class="issued"><p></p><p></p><span>发表</span></div></div></div>';
            reg.test(txt)? $Release.append(str)&&$Inputbox.html(''):$Inputbox.blur()&&$Inputbox.html('');
        });
        $Release.on('click','.review',function (e) {
            e.stopPropagation();
            $('.comment').css('height','50px');
            $('.review').css('height','40px');
            $('.review').css('background','#2e2e2e');
            $(this).css('height','70px')&&$(this).parent().css('height','85px');
            $(this).css('background','#383838');
            $('.issued').slideUp(0);
            $(this).parents().next().slideDown(0);
            $('.issued').click(function (e) {
                e.stopPropagation();
            })
            });
    };
    return {
        init:function () {
            navList();//导航栏li下拉列表
            navA();//导航栏li下拉列表装扮a切换
            facePack();//发表框表情包
            faceFlip();//表情包上下翻页按钮
            publishedHTML();//发表框
        }
    }
})();
renderZhao.init();


