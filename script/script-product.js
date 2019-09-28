Product_Class = function () {
};
////////////////////////////////////
Product_Class.prototype = {
    //PRODUCT PROCESS BY URL HOME BLOCK   
    Process_ByUrl_Home_Block: function () {
	    
	    /*---------FixProduct---------*/
		if($('.banner-img').length > 0) {
			$('.banner-img').each(function(index, element) {
				if($(this).find(' > .FixProduct').length > 1) {
					$(this).owlCarousel({dots:false,nav:true,autoplay:false,autoplayTimeout:5000,autoplayHoverPause:true,loop: true,items:1,margin:0,stagePadding:0,smartSpeed:450});
				}
			});
		}
		// Ajax Menu By ProductGroupId
		$('.category-featured').each(function(i, element) {
		  Ajax.SqlDirectFuntion('[dbo].[CMS_MenuByProductGroup] (\'' + $(this).find('.sub-category-list').attr('data-id') + '\',1)', function (data) {
		  	$(element).find('.sub-category-list').prepend(data);
		  });
		});
		// set height menu	
		if ($(window).width() >= 992) $('.sub-category-wapper .sub-category-list').css('min-height',$('.category-featured .col-right-tab').height() + 1);
		$(window).resize(function() {
			if ($(window).width() >= 992) 
				$('.sub-category-wapper .sub-category-list').css('min-height',$('.category-featured .col-right-tab').height() + 1);
		});
		//
        // GẮN TRẠNG THÁI CHO SẢN PHẨM
        Product.Process_Product_Status('.Home-Product figure img', '');
    },
    
    //PRODUCT PROCESS BY FEATURE LAYOUT   
	 Process_FeatureLayout_Product: function () {
		var seen = {};
			
			$('#MenuFeatureArea .FeatureList > li ').each(function() {
				var txt = $(this).find('a').attr('cat');
				//console.log(txt);
			  	if (!seen[txt])
			  	{
				 	seen[txt] = $(this).find('a').attr('cat');
					if(seen[txt] != '')
				  		$('<div class="AsideTitle" name="'+seen[txt]+'"> <i class="fa fa-cogs"></i> '+ seen[txt]+' </div><ul class="list-unstyled aside-list-news Menu-Left"></ul></li>').insertBefore($(this).parent().parent()).wrapAll('<div class="list-group box-border">');
			  		}
			  		else{
				  		//$('<div class="AsideTitle"> <i class="fa fa-cogs"></i> Tính năng </div><ul class="list-unstyled aside-list-news Menu-Left"></ul></li>').insertBefore($(this).parent().parent()).wrapAll('<div class="list-group box-border">');

			  		}
			});
			
			$('#MenuFeatureArea .FeatureList > li ').each(function() {
			   	name = $(this).find('a').attr('cat');
				if(name != '')
			  		$(this).appendTo($(this).parent().parent().parent().find(".AsideTitle[name = '"+name+"']").parent().find('>ul'));
			  	else {
				  	$('#MenuFeatureArea').removeClass('hidden').addClass('box-border').css('margin-bottom','20px').find('>ul').addClass('Menu-Left');
			  	}
			});				
    },
    
    //PRODUCTGROUP------------------------------------------------------------------
   Process_ByUrl_ProductGroup: function () {
        var productBranchId = '';
        var productGroupId = '';
        if ($('#ProductBranchValue').length > 0) productBranchId = $('#ProductBranchValue').attr('ProductBranchId');
        if ($('#ProductGroupValue').length > 0) productGroupId = $('#ProductGroupValue').attr('ProductGroupId');
        // Menu By ProductGroup
        if(productGroupId != '' )
        {
	        Ajax.SqlDirectFuntion('[dbo].[CMS_MenuByProductGroup] (\'' + productGroupId + '\',4)', function (data) {
		        $('#Menu-ProductGroup').wrap('<div class="box-border">');
	            $('<div class="AsideTitle"><i class="fa fa-bars"></i> '+  $('#ProductGroupValue').attr('productgroupname') +'</div>').insertBefore('#Menu-ProductGroup');
	            $('#Menu-ProductGroup').prepend(data);
	            $('<div class="clearfix"></div><br/>').insertAfter($('#Menu-ProductGroup').parent());
	            // Active
	            $('#Menu-ProductGroup li a[title = \'' + $('.Breadcrumbs span.br-branch-group a').text() + '\']').parent().addClass('active');
	        });
        }
        
        // Menu Feature
        if(productGroupId != ''  && productBranchId != '')
         {
	         Ajax.SqlDirectFuntion('[dbo].[CMS_MenuFeatureByProductBranchAndProductGroup] (\'' + productBranchId + '\', \'' + productGroupId + '\',1)', function (data) {
		         $('#MenuFeatureArea > .FeatureList.FeatureList1').prepend(data);
				Product.Process_FeatureLayout_Product();
				
		        // Active  
	            $('.Menu-Left li a[title = \'' + $('#ProductGroup .ProductGroupName').text() + '\']').parent().addClass('active');
	        });
         }
        
        // Menu ProductGroup By ProductGroupFather 
        if ($('#Menu-ByProductGroup nav ul').html() == '') $('#Menu-ByProductGroup').remove();
        
        // active Menu Feature li active
        var Breadcrumbs = $('.Breadcrumbs li:last-child a').text();
        $('#ProductFilter input[class = \'' + Breadcrumbs + '\']').attr('checked', 'checked');
        var Breadcrumbs = $('.Breadcrumbs li:last-child a').attr('href');
        $('.FeatureList a[href = \'' + Breadcrumbs + '\']').addClass('active');
        
        //Ajax Load_List Process
        if (window.location.href.indexOf('/ps/') == - 1)
        {
            Ajax.Load_List();
            //Ajax Hash Process			
            $(window).hashchange(function () {
                if ((location.hash != '') && ($.cookie('Hash') != location.hash)) Ajax.Process_Hash();
                 else $(window).hashchange();
            });
        } 
        else
        {
            //$('.Breadcrumbs ul').append("<li class='list-unstyled pull-left'>Tìm kiếm: " + decodeURIComponent(Other.GetUrlVariable("kw")) + "</li>");
            //$("#title-productgroup").append("<span>Tìm thấy: "+$(".Paging").attr('count') +" sản phẩm </span>" );
        }
        // End Feature List 

        Product.Process_Status_Event();
    },
    
    //PRODUCT DETAIL------------------------------------------------------------------
    Process_ByUrl_Product: function () {
        url = window.location.host;
        productBranchId = $('#ProductBranchValue').attr('ProductBranchId');
        productGroupId = $('#ProductGroupValue').attr('ProductGroupId');
        // ----------Zoom image Product
        $('#Product #Gallery a').hover(function (index) {
            $(this).parent().find('a').removeClass('active');
            $(this).addClass('active');
            $('#Product-Picture img').attr('src', $(this).find('img').attr('src').replace('_thumbs/Picture', 'Picture'));
            $('.zoomWindowContainer .zoomWindow').css('background-image', 'url(\'' + $(this).find('img').attr('src').replace('_thumbs/Picture', 'Picture') + '\')');
        });
        // If userAgent desktop
        if (Script.Process_isMobileDevice() === false) $('#Product-Picture  img:last').elevateZoom({
            gallery: 'Gallery',
            galleryActiveClass: 'active',
            responsive: true,
            borderSize: 1,
            containLensZoom: true
        });
        // End Zoom image Product
        //render OtherProduct
        Other.Wrapper_Not_Col('.centerContentProduct > .NewsRelate', 4);
        // Sidebar Product
        Other.Wrapper_Not_Col('.sidebar-other-product .NewsRelate', 2);
        //Order Prepare
        Order.Prepare();
        // Chon so luong 
        Modernizr.load([{
            load: [
                '/Script/utility/spinner/spinner.js'
            ],
            complete: function () {
                $('.quantity-add').spinner({
                    value: 1,
                    min: 1,
                    max: 30
                });
            }
        }
        ]);
        //In báo giá
        $('#PrintOne').append('<a class=\'btn btn-lg\' href=\'javascipt:void(0);\' onclick=\'Order.PrintOne("","");return false;\'><i class=\'fa fa-print\'></i> In báo giá</a>');
        
        $("#Comment").append("<div data-mobile='Auto-detected' class='fb-comments' data-href=' "+ window.location.href +" ' data-num-posts='5' data-width='100%'></div>");
        //Add Chat Link
       // Other.ChatLink('#Product-Support a[href*=\'ymsgr\']', 'yahoo', 'Xin hỏi về sản phẩm: ');
        Other.ChatLink('.Support-Right-Aside a[href*=\'ymsgr\']', 'yahoo', 'Xin hỏi về sản phẩm: ');
        
        //Process Tab
        Product.Process_Tab();
        // Process_Status_Event
        Product.Process_Status_Event();
        // Menu By ProductGroup
        Ajax.SqlDirectFuntion('[dbo].[CMS_MenuByProductGroup] (\'' + productGroupId + '\',4)', function (data) {
	        $('#Menu-ProductGroup').wrap('<div class="box-border">');
            $('<div class="AsideTitle"><i class="fa fa-bars"></i> '+  $('#ProductGroupValue').attr('productgroupname') +'</div>').insertBefore('#Menu-ProductGroup');
            $('#Menu-ProductGroup').prepend(data);
            $('<div class="clearfix"></div><br/>').insertAfter($('#Menu-ProductGroup').parent());
            // Active
            $('#Menu-ProductGroup li a[title = \'' + $('.Breadcrumbs span:nth-child(4) a').text() + '\']').parent().addClass('active');
        });
        // Menu By Product Feature
        if(productGroupId != ''  && productBranchId != '')
         {
	         Ajax.SqlDirectFuntion('[dbo].[CMS_MenuFeatureByProductBranchAndProductGroup] (\'' + productBranchId + '\', \'' + productGroupId + '\',1)', function (data) {
		         $('#MenuFeatureArea > .FeatureList.FeatureList1').prepend(data);
				Product.Process_FeatureLayout_Product();
				
		        // Active  
	            $('.Menu-Left li a[title = \'' + $('#ProductGroup .ProductGroupName').text() + '\']').parent().addClass('active');
	        });
         }
         
        /*Ajax.SqlDirectFuntion('[dbo].[CMS_MenuFeatureByProductBranchAndProductGroup] (\'' + productBranchId + '\', \'' + productGroupId + '\',1)', function (data) {
	       	$('#Menu-ProductFeature').wrap('<div class="box-border">');
	        $('<div class="AsideTitle"><i class="fa fa-cogs"></i> Tính năng</div>').insertBefore('#Menu-ProductFeature');
            $('#Menu-ProductFeature').prepend(data);
            $('<div class="clearfix"></div><br/>').insertAfter($('#Menu-ProductFeature').parent());
            // Active  
            $('#Menu-ProductFeature a[title = \'' + $('#ProductFeatureIds li:first-child').text() + '\']').parent().addClass('active');
        });*/
        //Add Status Image
        Product.Process_Product_Status('#Product-Picture img', '');
    },
       
     //PROCESS EVENT
    Process_Status_Event: function () {
        //Add Status Image
        Product.Process_Product_Status('#ProductGroup figure img, .ProductRelate figure img', '');
        Product.Process_Url();
        //Product.Process_Product_Compare();
    },
    //PROCESS COMPARE
    Process_Product_Compare: function () {
        // Lay so luong tieu de can so sanh
        var numeTitle = $('.FormByProductGroup li').length;
        $('.FormByProductGroup li:last-child').remove();
        //alert(numeTitle);
        $('.FormByProductGroup li').each(function (index, element) {
        });
    },
    //PROCESS PRODUCT STATUS
    Process_Product_Status: function (select, style) { // style : hinh nho, hinh lon
        $(select).each(function (index) {
            if ($(this).attr('status') == 'Còn hàng')
            $(this).parent().parent().prepend('<span class="flag-status flag-status-stock ' + style + '">Còn hàng</span>');
            if ($(this).attr('status') == 'Đặt hàng')
            $(this).parent().parent().prepend('<span class="flag-status flag-status-order ' + style + '">Đặt hàng</span>');
            if ($(this).attr('status') == 'Hàng mới')
            $(this).parent().parent().prepend('<span class="flag-status flag-status-new ' + style + '">Hàng mới</span>');
            if ($(this).attr('status') == 'Bán chạy')
            $(this).parent().parent().prepend('<span class="flag-status flag-status-hot ' + style + '">Bán chạy</span>');
            if ($(this).attr('status') == 'Hết hàng')
            $(this).parent().parent().prepend('<span class="flag-status flag-status-close ' + style + '">Hết hàng</span>');
            if ($(this).attr('status') == 'Hàng cũ')
            $(this).parent().parent().prepend('<span class="flag-status flag-status-old ' + style + '">Hàng cũ</span>');
            if ($(this).attr('status') == 'Ngừng sản xuất')
            $(this).parent().parent().prepend('<span class="flag-status flag-status-off ' + style + '">Ngừng sản xuất</span>');
            if ($(this).attr('status') == 'Sắp bán')
            $(this).parent().parent().prepend('<span class="flag-status flag-status-new ' + style + '">Mới</span>');
            /*if ($(this).attr("status") == "Ngừng sản xuất")
				$(this).parent().parent().prepend("<img src='./Image/off-big-red.png' style='left: 15%;position: absolute;top: -5px;width: 150px;z-index: 9;'/>");*/
        });
    },
    //PROCESS TAB
    Process_Tab: function () {
        if ($('.Product').length > 0) {
            //Add Tab Menu
            //url = window.location.pathname;
            $('.nav a').click(function (e) {
                e.preventDefault()
                $(this).tab('show')
            })
            //$('.nav a[href="#Context1"]').tab('show'); // Select tab by name
        }
    },
    //PROCESS FEATURE
    Process_Feature: function () {
        if ($('#ProductGroupValue').attr('Feature') != '') {
            //Create Feature Table
            features = $('#ProductGroupValue').attr('Feature').split('\n');
            featureTable = '<div id=\'ProductFilter\' class=\'row\'><div id=\'ProductCount\' class=\'col-xs-12 col-sm-3 col-md-3 col-lg-3\'></div><div class=\'col-xs-12 col-sm-9 col-md-9 col-lg-9\'><div class=\'row\'>';
            for (i = 0; i < features.length; i++) {
                if ((i != 0) && (i % 3 == 0))
                featureTable = featureTable + '</div><div class=\'row\'><div class=\'col-xs-12 col-sm-4 col-md-4 col-lg-4\'>' + '<input type=\'checkbox\' class=\'' + features[i] + '\'/> ' + features[i] + '</div>';
                 else
                featureTable = featureTable + '<div class=\'col-xs-12 col-sm-4 col-md-4 col-lg-4\'>' + '<input type=\'checkbox\' class=\'' + features[i] + '\'/> ' + features[i] + '</div>';
            }
            featureTable = featureTable + '</div></div>';
            //Render Feature Table
            $('#ProductGroup').prepend(featureTable);
            $('#ProductCount').html('<h1>' + $('.Paging').attr('count') + '</h1><h4>Sản phẩm</h4>');
        }
    },
    //PROCESS AJAX
    ListByProductGroupIdAndProductBranchId: function (element, productGroupId, productBranchId) {
        classPath = 'Main.BL.ProductBL';
        methodName = 'ProductListByProductGroupIdAndProductBranchId';
        $.ajax({
            url: 'Handler.ashx',
            dataType: 'json',
            data: 'ClassPath=' + classPath + '&MethodName=' + methodName + '&ProductGroupId=' + productGroupId + '&ProductBranchId=' + productBranchId,
            type: 'POST',
            timeout: 90000,
            success: function (result) {
                if (result.Success == 'True') {
                    element.html(result.Data);
                    try {
                        if (productGroupId != '') element.val(productGroupId);
                    } 
                    catch (ex) {
                        if (productGroupId != '') setTimeout('$(\'' + element.attr('id') + '\').val(\'' + productGroupId + '\')', 1);
                    }
                }
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
            }
        });
    },
    ReadTemplate: function (element, productId) {
        classPath = 'Main.BL.ProductBL';
        methodName = 'ProductSelect';
        filterValue = '&ProductId=' + productId;
        $.ajax({
            url: 'Handler.ashx',
            dataType: 'json',
            data: 'ClassPath=' + classPath + '&MethodName=' + methodName + filterValue,
            type: 'POST',
            timeout: 90000,
            success: function (result) {
                if (result.Success == 'True') {
                    element.html(result.Objects[0].Context3);
                }
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
            }
        });
    },
    Process_Url: function () {
        var loc = window.location;
        //alert(currentURL);
        var Breadcrumbs = $('.Breadcrumbs li:nth-child(3) a').attr('href');
        //khi click vao menu-top >li>a
        var Breadcrumbs2 = $('.Breadcrumbs li:nth-child(2) a').attr('href');
        /*active sidebar*/
        //$("#Menu-Left li a[href = '"+Breadcrumbs+"']").addClass('active').attr('style','color:#333; background:#eee').parent().addClass('li-active');
        /*active topmenu*/
        $('#Menu-Top > li >ul >li> a[href = \'' + Breadcrumbs + '\']').parent().parent().parent().find('>a').addClass('active');
        $('#Menu-Top > li > a[href = \'' + Breadcrumbs2 + '\']').addClass('active');
        if (loc) {
            $('#Menu-Top > li:first-child > a[href = \'' + loc + '\']').addClass('active').attr('style', 'padding:7px 11px !important');
        }
    }
};
var Product = new Product_Class();
