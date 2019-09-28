Script_Class = function () {
},
Script_Class.prototype = {
    Process_Init: function () {
        '' != location.hash && $('#ProductGroup .Home-Product, #ProductGroup .ProductRelate, #ProductGroup #ReadMore').remove(),
        $('img[data-original]').lazyload({
            effect: 'fadeIn',
            skip_invisible: !0
        }),
        $('table').addClass('table').wrap('<div class="table-responsive">'),
        Script.Process_Cookie(),
        Script.Process_Menu(),
        Script.Process_ByUrl(),
        Script.Process_Search(),
        Script.Process_isActiveMenu(),
        Order.PrepareGroup(),
        $('.image-youtube').each(function () {
            getUrlImageYoutube = $(this).attr('src'),
            imageYoutube = Other.youtubeThumbnailImage('' + getUrlImageYoutube, ''),
            $(this).attr('src', imageYoutube)
        })
    },
    Process_ByUrl: function () {
        url = window.location.href;
        var e = $('meta[name=Template]').attr('content');
        switch (e) {
            case 'Home':
                Script.Process_HomeSlide(),
                Product.Process_ByUrl_Home_Block();
                //$('#Control-Home-Support').css('height', $('.Menu-Top').height()),
                //$('#Control-Home-Support').css('display', 'block'),
                
                //Script.Process_nicescroll();
                $('#chatpanel').click(function(){
					jQuery("#Home-Support").toggle("fast");
				});
				
				$('#Home-Support button').click(function(){
					jQuery("#Home-Support").toggle("fast");
				});
                break;
            case 'ProductGroup':
                Script.Process_menuTopHover(),
                Product.Process_ByUrl_ProductGroup(),
                Script.Process_stickyMenu();
                break;
            case 'NewsGroup':
                Script.Process_menuTopHover(),
                News.Process_ByUrl_NewsGroup(),
                Script.Process_Paging(),
                Script.Process_stickyMenu();
                break;
            case 'Product':
                Modernizr.load([{
                    load: [
                        '/Script/utility/readmore/readmore.min.js'
                    ],
                    complete: function () {
                        $('#Product .quickSpecs').readmore({
                            collapsedHeight: 216,
                            speed: 200,
                            lessLink: '<div class=\'clearfix\'><a class=\'viewMore View-Less\' href=\'#\' title=\'Thu gọn\'><i class=\'fa fa-minus-square\'></i> Thu gọn</a></div>',
                            moreLink: '<div class=\'clearfix\'><a class=\'viewMore View-More\' href=\'#\' title=\'Xem thêm\'><i class=\'fa fa-plus-square\'></i> Xem thêm</a></div>'
                        })
                    }
                }
                ]),
                Script.Process_menuTopHover(),
                Product.Process_ByUrl_Product(),
                Script.Process_stickyMenu();
                break;
            case 'News':
                Script.Process_menuTopHover(),
                News.Process_ByUrl_News(),
                Script.Process_stickyMenu()
        }
    },
    Process_isMobileDevice: function () {
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i) ? !0 : !1
    },
    Process_isActiveMenu: function () {
        var e = $('ul.Menu-Top-Bar > li'),
        o = window.location.pathname.replace('/', '');
        e.each(function (e, r) {
            var t = $(r).find('>a').attr('href');
            return t === o ? ($(r).parent().find('>li').removeClass('active'), $(r).addClass('active'), !1)  : void 0
        }),
        urlBreadcrumbs = $('.Breadcrumbs span:last-child a').attr('href'),
        $('.Menu-Left li').each(function (e, o) {
            var r = $(o).find('>a').attr('href');
            return r === urlBreadcrumbs ? ($(o).removeClass('active'), $(o).addClass('active'), !1)  : void 0
        })
    },
    Process_homeMenuProduct: function () {
        $('nav.main-top').each(function (e, o) {
            $(this).appendTo('#Home-Product-Block #FullTitle-' + (e + 1) + ' ')
        })
    },
    Process_menuTopHover: function () {
        $('#Control-Menu-Top').hover(function (e) {
            $('#Control-Menu-Top').css('z-index', 999),
            $('#Control-Menu-Top .navbar').removeClass('close').addClass('open')
        }, function (e) {
            $('#Control-Menu-Top .navbar').removeClass('open').addClass('close')
        })
    },
    Process_nicescroll: function () {
        $('#Control-Home-Support').length > 0 && Modernizr.load([{
            load: [
                '/Script/utility/nicescroll/nicescroll.min.js'
            ],
            complete: function () {
                $('#Support-Right.Support-Right').niceScroll({
                    styler: 'fb',
                    cursorcolor: '#999',
                    autohidemode: !0
                })
            }
        }
        ])
    },
    Process_stickyMenu: function () {
        $('#header-nav').sticky({
            topSpacing: 0
        })
    },
    Process_Menu: function () {
        windowsize = $(window).width(),
        Other.Process_isMobileDevice() === !1 && $(window).width() >= 992 && ($('.Menu-Top> li').each(function (e, o) {
            $(this).find('>a').addClass('dropdown-toggle').parent().find('ul').parent().addClass('dropdown'),
            $(this).find('img').length > 0 ? ($(this).find('>a').append('<span >' + $(this).find('img').attr('alt') + '</span>'), $(this).find('>ul').addClass('row').wrapAll('<div class="dropdown-menu">').find('>li').addClass('col-sm-4 column').find('>a').wrap('<div class="menu-title">'), $(this).find('.dropdown-menu').parent().find('>a').append('<b class="round-arrow"></b>'), $(this).find('ul ul').parent().parent().addClass('parent'), $(this).find('.dropdown.column').wrapAll('<div class="col-sm-9">'), $(this).find('img').appendTo($(this).find('.dropdown-menu .parent')).wrap('<div class="col-sm-3 column">'), 'dropdown' != $(this).attr('class') && $(this).find('.col-sm-3.column').wrapInner('<a target="_blank" href="' + $(this).attr('class').replace('dropdown', '') + '">'))  : ($(this).find('>ul').addClass('row').wrapAll('<div class="dropdown-menu">').find('>li').addClass('col-sm-6 column').find('>a').wrap('<div class="menu-title">'), $(this).find('.dropdown-menu').parent().find('>a').append('<b class="round-arrow"></b>'), $(this).find('ul ul').parent().parent().addClass('parent'), $(this).find('img').appendTo($(this).find('.dropdown-menu .parent')).wrap('<div class="col-sm-3 column">'))
        }), $('.Menu-Top .dropdown-menu').css('min-height', $('.Menu-Top').height()), $('#Control-Home-Slide .Home-Slide > ul').css('height', $('.Menu-Top').height()), $('.Menu-Top .dropdown-menu').css('max-height', $('.Menu-Top').height()), $('.Home-Slide, #Support-Right.Support-Right').css('height', $('.Menu-Top').height() - 2), $('.Menu-Top').css('display', 'block'), jQuery('.Menu-Top-Bar.sf-menu').superfish({
            animation: {
                height: 'show'
            },
            delay: 1200
        }), $('#nav-right li a[title = \'' + $('.NewsGroupName, .NewsName h1').text() + '\']').parent().addClass('active')),
        windowsize >= 0 && windowsize < 992 && $.getScript('/Script/utility/mmenu/js/jquery.mmenu.min.all.js', function (e, o) {
            $('#mobile-menu').mmenu({
                extensions: [
                    'pagedim-black'
                ],
                offCanvas: {
                    position: 'left',
                    zposition: 'front'
                },
                counters: !0,
                navbar: {
                    title: 'Danh mục'
                },
                clone: !0
            });
            var r = $('#wraper-tool'),
            t = $('html, body');
            r.mmenu({
                extensions: [
                    'pageshadow'
                ],
                offCanvas: {
                    position: 'right',
                    zposition: 'front'
                },
                navbar: {
                    title: 'Thông tin'
                }
            }).removeClass('hidden-xs hidden-sm');
            var n = r.data('mmenu');
            n.setSelected(r.find('li').first());
            var i = null;
            r.find('a').on('click', function () {
                i = $(this).attr('href')
            }),
            n.bind('closed', function () {
                i && setTimeout(function () {
                    t.animate({
                        scrollTop: $(i).offset().top
                    }),
                    i = null
                }, 25)
            })
        })
    },
    Process_HomeSlide: function () {
        if ($('.Home-Slide').length > 0 && ($('.TitleSlider, .DescriptionSlider').remove(), $('.Home-Slide').owlCarousel({
            dots: !1,
            nav: !0,
            autoplay: !0,
            autoplayTimeout: 5000,
            autoplayHoverPause: !0,
            loop: !0,
            animateOut: 'fadeOut',
            items: 1,
            margin: 0,
            smartSpeed: 450
        })), $('.Menu-Branch').length > 0) {
            for (var e = 0; e < $('.Menu-Branch li').length; e += 5) $('.Menu-Branch li').slice(e, e + 5).wrapAll('<ul class=\'nav\'/>');
            for (var e = 0; e < $('.Menu-Branch .nav').length; e += 4) $('.Menu-Branch .nav').slice(e, e + 4).wrapAll('<div class=\'pr\'/>');
            $('.Menu-Branch .pr').length > 1 ? $('.Menu-Branch').owlCarousel({
                dots: !0,
                nav: !0,
                loop: !0,
                items: 1,
                margin: 0,
                stagePadding: 0,
                smartSpeed: 450
            }).css('display', 'block')  : $('.Menu-Branch').css('display', 'block')
        }
        $('.Cms-Banner').length > 0 && $('.Cms-Banner').each(function (e, o) {
            $(this).find(' > ul > li').length > 1 && $(this).find(' > ul').owlCarousel({
                dots: !0,
                nav: !1,
                autoplay: !0,
                autoplayTimeout: 5000,
                autoplayHoverPause: !0,
                loop: !0,
                items: 1,
                margin: 0,
                stagePadding: 0,
                smartSpeed: 450
            })
        }),
        $('#Home-Banner-Bottom').length > 0 && ($('#Home-Banner-Bottom').each(function (e, o) {
            $(this).find(' > ul > li').length > 1 && $(this).find(' > ul').owlCarousel({
                dots: !0,
                nav: !1,
                autoplay: !0,
                autoplayTimeout: 5000,
                autoplayHoverPause: !0,
                loop: !0,
                items: 1,
                margin: 0,
                stagePadding: 0,
                smartSpeed: 450
            })
        }), $('#Home-Banner-Bottom .Home-Banner-Bottom').css('display', 'block'))
    },
    Process_Paging: function () {
        if ($('.Paging').length > 0) {
            if (result = '', link = window.location.href, pages = parseInt($('.Paging').attr('pages')), count = parseInt($('.Paging').attr('count')), index = parseInt($('.Paging').attr('index')), html = !1, strFind = '', '' == location.hash ? strFind = '-pi=' : strFind = '&pi=', link.indexOf('.html') > - 1 && link.indexOf('.html') + 5 == link.length && (html = !0, link = link.replace('.html', '')), 1 == index && - 1 == link.indexOf(strFind + '1') && (link = link + strFind + '1'), pages > 1) {
                index > 1 && (result = result + '<span><a style=\'border:1px solid #ccc\' href=\'' + link.replace(strFind + index, strFind + '1') + '\'>Đầu</a></span>', result = result + '<span><a style=\'border:1px solid #ccc\' href=\'' + link.replace(strFind + index, strFind + (parseInt(index) - 1)) + '\'>«</a></span>');
                for (var e = index - 3; e <= index + 3; e++) e >= 1 && e <= pages && (e == index ? result = result + '<span><a style=\'border:1px solid #F2B979;color:Red\'>' + e + '</a></span>' : result = result + '<span><a style=\'border:1px solid #ccc\' href=\'' + link.replace(strFind + index, strFind + e) + '\'>' + e + '</a></span>');
                index < pages && (result = result + '<span><a style=\'border:1px solid #ccc\' href=\'' + link.replace(strFind + index, strFind + (parseInt(index) + 1)) + '\'>»</a></span>', result = result + '<span><a style=\'border:1px solid #ccc\' href=\'' + link.replace(strFind + index, strFind + pages) + '\'>Cuối</a></span>'),
                $('.Paging').html('<span style=\'border:1px solid #ccc;padding:3px 5px;margin:2px\'>Trang ' + index + ' của ' + pages + '</span>' + result)
            }
            - 1 == window.location.href.indexOf('/ps/') && - 1 == window.location.href.indexOf('/ns/') && $('.Paging a[href*=\'-pi=\']').each(function (e, o) {
                '' == location.hash && ($(this).attr('href').indexOf('-pi=1') == $(this).attr('href').length - 5 && $(this).attr('href', $(this).attr('href').replace('-pi=1', '')), 1 == html && $(this).attr('href', $(this).attr('href') + '.html'))
            })
        }
    },
    Process_Search: function () {
        $('#Search-Keyword-Product').keypress(function (e) {
            '13' == e.keyCode && (keyword = Other.DecodeUnicodeToAscii(jQuery.trim($(this).val())), window.location = 'http://' + window.location.hostname + '/ps/kw=' + keyword + '/pb=0/pg=0/ft=0-pi=1')
        }),
        $('#Search-Button-Product').click(function (e) {
            return keyword = Other.DecodeUnicodeToAscii(jQuery.trim($('#Search-Keyword-Product').val())),
            window.location = 'http://' + window.location.hostname + '/ps/kw=' + keyword + '/pb=0/pg=0/ft=0-pi=1',
            !1
        }),
        $('#Search-Keyword-News').keypress(function (e) {
            '13' == e.keyCode && (keyword = Other.DecodeUnicodeToAscii(jQuery.trim($(this).val())), window.location = 'http://' + window.location.hostname + '/ns/kw=' + keyword + '/pb=0/pg=0/ft=0-pi=1')
        });
        var e = null;
        $('#Search-Keyword-Product, #sidr-id-Search-Keyword-Product').keyup(function (o) {
            null != e && clearTimeout(e),
            e = setTimeout(function () {
                e = null,
                value = $.trim(Other.DecodeUnicodeToAscii($('#Search-Keyword-Product, #sidr-id-Search-Keyword-Product').val())),
                '' != value ? Ajax.SqlDirectFuntion('[dbo].[CMS_Product_SearchAjax] (\'' + value + '\')', function (e) {
                    $('.autocomplete-suggestions').css('display', 'block').find('> div.row').empty().prepend(e),
                    $('.autocomplete-suggestions .close').css('display', 'block')
                })  : $('.autocomplete-suggestions >div.row').empty().parent().css('display', 'none')
            }, 500)
        }),
        $('.autocomplete-suggestions .CloseSearchAjax').click(function () {
            $('#Search-Keyword-Product, #sidr-id-Search-Keyword-Product').empty(),
            $('.autocomplete-suggestions >div.row').empty().parent().css('display', 'none')
        })
    },
    Process_Cookie: function () {
        try {
            $('#Header-Order').click(function () {
                $.cookie('OrderCount') > 0 ? Order.Show()  : alert('Giỏ hàng của bạn đang trống, bạn vui lòng đặt hàng sản phẩm')
            }),
            null != $.cookie('OrderCount') && '' != $.cookie('OrderCount') ? $('#Header-Order').text('(' + $.cookie('OrderCount') + ')')  : ($('#Header-Order').text(0), $.jStorage.deleteKey('Order'), $.jStorage.deleteKey('OrderView'), $.cookie('OrderCount', '0'), $.cookie('OrderTotal', '0')),
            userReference = Other.GetHashVariable('ref'),
            '' != userReference && $.cookie('UserReference', userReference, {
                path: '/'
            })
        } catch (e) {
            alert('Lỗi xảy ra 1: ' + e)
        }
    }
};
var Script = new Script_Class;
