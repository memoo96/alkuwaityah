var width = $(window).width();

$(document).ready(function () {


    $('[data-toggle="tooltip"]').tooltip();


    $('.navbar-toggler-icon').click(function(){
        $('.Body_overlay').css('display','block');
        $('body').css({
            'height':'100vh',
            'overflow-y':'hidden'
        });
        $('.navbar-light .navbar-toggler').css('top','28px')
    })

    $('#CloseNavMenu').click(function(){
        $('.Body_overlay').css('display','none');
        $('body').css({
            'height':'auto',
            'overflow-y':'auto'
        });
        $('.navbar-light .navbar-toggler').css('top','72px')
    })

    $('.search_box_popup .search_input').focus(function(){
        $('.search_box_popup .search_btn').css({
            'visibility':'visible',
            'opacity':'1'
        })
        $(this).css('margin-bottom','20px');
    })


    $(function () {
        $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            $(this).siblings().toggleClass("show");


            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

        });
    });

    $(document).on("click", function (event) {
        if ($(this).width() <= 991) {
            var $trigger = $(".navbar-new-bottom");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $("#navbarContent").removeClass('show');
                $('.navbar-toggler').addClass("collapsed");
                $('.Body_overlay').css('display','none');
                $('body').css({
                    'height':'auto',
                    'overflow-y':'auto'
                });
                $('.navbar-light .navbar-toggler').css('top','72px')
                
            }
        }
    });


    var scrollButton = $(".scroll_top");
    $(window).scroll(function () {
        if($(this).scrollTop() > 500) {
            scrollButton.css({
                'opacity': '1',
                'visibility': 'visible',
                'left': '50px'
            })
        }
        else {
            scrollButton.css({
                'opacity': '0',
                'visibility': 'hidden',
                'left': '0px'
            })
        }
    });

    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });


    $(window).resize(function () {
        if ($(this).width() != width) {
            if ($(window).width() > 991) {
                $('.Body_overlay').css('display','none');
            } 
            width = $(window).width();
        }
    });


    // $(window).scroll(function () {
    //     var sc = $(this).scrollTop();
    //     if ($(this).width() > 991) {
    //         if (sc > 10) {
    //             $('.headSection').css({'display': 'none'});
    //             $('.navbar-new-top').css({'top': '0'});
    //             $('.navbar-new-bottom').css({'top': '138px'});
    //         }    
    //         else {
    //             $('.headSection').css({'display': 'block'});
    //             $('.navbar-new-top').css({'top': '46px'});
    //             $('.navbar-new-bottom').css({'top': '170px'});
    //         }
    //     }
    //     else {
    //         if (sc > 10) {
    //             $('.headSection').css({'display': 'none'});
    //             $('.navbar-new-top').css({'top': '0'});
    //             $('.navbar-new-bottom').css({'top': '0px'});
    //             $('.navbar-light .navbar-toggler').css('top','37px')
    //         }    
    //         else {
    //             $('.headSection').css({'display': 'block'});
    //             $('.navbar-new-top').css({'top': '48px'});
    //             $('.navbar-new-bottom').css({'top': '0px'});
    //             $('.navbar-light .navbar-toggler').css('top','72px')
    //         }
    //     }
    // });



    // $(window).resize(function () {
    //     if ($(this).width() != width) {
    //     var sc = $(this).scrollTop();
    //     if ($(this).width() > 991) {
    //         if (sc > 10) {
    //             $('.headSection').css({'display': 'none'});
    //             $('.navbar-new-top').css({'top': '0'});
    //             $('.navbar-new-bottom').css({'top': '138px'});
    //         }    
    //         else {
    //             $('.headSection').css({'display': 'block'});
    //             $('.navbar-new-top').css({'top': '46px'});
    //             $('.navbar-new-bottom').css({'top': '170px'});
    //         }
    //         $('.Body_overlay').css('display','none');
    //     }
    //     else {
    //         if (sc > 10) {
    //             $('.headSection').css({'display': 'none'});
    //             $('.navbar-new-top').css({'top': '0'});
    //             $('.navbar-new-bottom').css({'top': '0px'});
    //             $('.navbar-light .navbar-toggler').css('top','37px')
    //         }    
    //         else {
    //             $('.headSection').css({'display': 'block'});
    //             $('.navbar-new-top').css({'top': '48px'});
    //             $('.navbar-new-bottom').css({'top': '0px'});
    //             $('.navbar-light .navbar-toggler').css('top','72px')
    //         }
    //     }
    //     width = $(window).width();
    // }
    // });


    // $(window).resize(function () {
    //     if ($(this).width() != width) {
    //         if ($(window).width() <= 991) {
    //             $('.navbar-new-bottom').css({'top': '0'});
    //         } 
    //         else {
    //             $('.navbar-new-bottom').css({'top': '170px'});
    //             $('.Body_overlay').css('display','none');
    //         }
    //         width = $(window).width();
    //     }
    // });


    $("#ads img,#CaricatureArt img,.footer .footerLogo img,.news_item .image img,.small_news .Image img,#Local .Content .carousel-inner img,#Local .Content .item img,#Parliament .Content .carousel-inner img,#Parliament .Content .item img,.navbar .HeadAds img,.navbar-brand img,#NewsLine .newsLogo img").on("error", function () {
        $(this).attr('src', 'images/NoImage.png');
    });

});






