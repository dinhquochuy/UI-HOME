Ajax_Class = function () { };
////////////////////////////////////
Ajax_Class.prototype = {

    //PROCESS LOAD LIST /////////////////////////////
    Load_List: function (element) {
        //Create Feature Table     
       var features = new Array();
       // if (($("#ProductGroupValue").length > 0) && ($("#ProductBranchValue").length > 0)) {
		//if (($("#ProductGroupValue").length > 0)) {
			
            productGroupId = $("#ProductGroupValue").attr("ProductGroupId");
			productBranchId = $('#ProductBranchValue').attr('ProductBranchId');
			//if ($("#ProductFeatureValue").length>0) {
			//	features = $("#ProductFeatureValue").attr("ProductFeatureIds").split("|"); 
			//	console.log(features);
			//}
       // }
       // else {            
            //if ($("#ProductGroupValue").length > 0) {
                //features = $("#ProductGroupValue").attr("ProductFeatureIds").split("|");
            //}
       // }
		featureTable = "<div id='ProductFilter'><div class='col-xs-12'><div class='row'>";
		for (i = 0; i < features.length; i++) {
				if ((i != 0) && (i % 3 == 0))
						featureTable = featureTable + "</div><div class='row'><div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>" + "<input id='radio"+i+"' name='FeatureList' type='radio' class='" + features[i].substring(0,features[i].lastIndexOf("(")-1) + "'/> <label for='radio"+i+"'>" + features[i] + "</label></div>";
				else
						featureTable = featureTable + "<div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>" + "<input id='radio"+i+"' name='FeatureList' type='radio' class='" + features[i].substring(0,features[i].lastIndexOf("(")-1) + "'/> <label for='radio"+i+"'>" + features[i] + "</label></div>";
		}		
		featureTable = featureTable + "</div>";
		
		featureTable = featureTable + "<div id='ProductFilter2' class='row text-center'>";
			//featureTable = featureTable + "<div class='col-xs-12 col-sm-11 col-sm-offset-1'><div class='row'>";
				featureTable = featureTable + "<div class='col-xs-12 col-sm-12 col-md-2 col-lg-1 col-lg-offset-1 text-left'><span class='name-info text-nowrap'>Tìm theo </span></div>";
				featureTable = featureTable + "<div class='col-xs-12 col-sm-10 col-md-8 '><div class='row'>";
					featureTable = featureTable + "<div class='col-xs-12 col-sm-4'><select id='PriceList' class='form-control input-sm' style='margin-left:10px'><option value='0' selected='selected'>Mức giá</option><option value='duoi1trieu'>Dưới 1 triệu</option><option value='duoi2trieu'>Dưới 2 triệu</option><option value='duoi3trieu'>Dưới 3 triệu</option><option value='duoi4trieu'>Dưới 4 triệu</option><option value='duoi5trieu'>Dưới 5 triệu</option><option value='duoi8trieu'>Dưới 8 triệu</option><option value='duoi10trieu'>Dưới 10 triệu</option><option value='duoi12trieu'>Dưới 12 triệu</option><option value='duoi15trieu'>Dưới 15 triệu</option><option value='tren15trieu'>Trên 15 triệu</option></select></div>";
			
					featureTable = featureTable + "<div class='col-xs-12 col-sm-4'><select id='SortList' class='form-control input-sm' style='margin-left:10px'><option value='hot-nhat' selected='selected'>Hot nhất</option><option value='gia-cao-thap'>Giá từ cao đến thấp</option><option value='gia-thap-cao'>Giá từ thấp đến cao</option></select></div>";
			
					featureTable = featureTable + "<div class='col-xs-12 col-sm-4'><select id='StatusList' class='form-control input-sm' style='margin-left:10px; margin-right:10px'><option value='0' selected='selected'>Trạng thái</option><option value='binh-thuong'>Bình thường</option><option value='con-hang'>Còn hàng</option><option value='hang-moi'>Hàng mới</option><option value='ban-chay'>Bán chạy</option><option value='het-hang'>Hết hàng</option><option value='ngung-san-xuat'>Ngừng sản xuất</option><option value='dat-hang'>Đặt hàng</option><option value='hang-cu'>Hàng cũ</option></select></div>" ;
				featureTable = featureTable + "</div></div>";
		//featureTable = featureTable + "<select id='ViewList' style='margin-left:10px'><option value='0' selected='selected'>Xem theo dạng</option><option value='list'>Xem chi tiết</option><option value='grid'>Xem rút gọn</option></select>  "+ "</div>";
				featureTable = featureTable + '<div class="col-xs-12 col-sm-2 col-md-2 text-left" ><span style="margin-left:10px;"><input checked="checked" class="grid" type="radio" name="FeatureView" class="List" id="radio100"> <label for="radio100" class="ListView"></label></span>';
				featureTable = featureTable + '<span><input class="list" type="radio" name="FeatureView" class="List" id="radio200"> <label for="radio200" class="GridView"></label></span></div>';
			//featureTable = featureTable + "</div></div>";
		featureTable = featureTable + "</div>";
        //Render Feature Table
       // element.prepend(featureTable);
		$('#ProductFilterArea').prepend(featureTable);
        //Bind Event For Search
        $("input:radio[name='FeatureList'], input:radio[name='FeatureView']").on("change", function () {
            Ajax.Product_Search(1);
        });
        $("#PriceList, #SortList, #StatusList, #ViewList").change(function () {
            Ajax.Product_Search(1);
        });

        //PROCESS BY HASH
        if (location.hash != "") Ajax.Process_Hash();
    },

    //PROCESS SEARCH PRODUCT
    Product_Search: function (pageIndex) {
        classPath = "Main.BL.ProductBL";
        methodName = "ProductSearchByAjax";

       //Set Hash Link
		url = window.location.href;
    var template = $("meta[name=Template]").attr("content");
        
		switch (template) {
			case "ProductGroup":
					if ($("input:radio[name='FeatureList']:checked").length>0)
	        		window.location.hash = "#!&ft=" + Other.DecodeUnicodeToAscii($("input:radio[name='FeatureList']:checked").attr("class")).replace(/ /g, "-") + "&pr=" + $("#PriceList").val() + "&so=" + $("#SortList").val() + "&status=" + $("#StatusList").val()  + "&view=" + $("input:radio[name='FeatureView']:checked").attr("class") + "&pi=" + pageIndex;
					else
							window.location.hash = "#!&ft=0" + "&pr=" + $("#PriceList").val() + "&so=" + $("#SortList").val() + "&status=" + $("#StatusList").val()  + "&view=" +  $("input:radio[name='FeatureView']:checked").attr("class") + "&pi=" + pageIndex;
				break;
				
			case "Product": 
					if ($("input:radio[name='FeatureList']:checked").length>0)
	        		window.location.href = "http://" + window.location.host +"/"+$('.Breadcrumbs ul li:nth-child(3) a').attr('href')+"/" + Other.DecodeUnicodeToAscii($("input:radio[name='FeatureList']:checked").attr("class")).replace(/ /g, "-");
				else
							window.location.href = "http://" + window.location.host +"/"+$('.Breadcrumbs ul li:nth-child(3) a').attr('href')+"#!&ft=0" + "&pr=" + $("#PriceList").val() + "&so=" + $("#SortList").val() + "&pi=" + pageIndex;
				break;
		}

        //Set Hash Cookie
        $.cookie("Hash", window.location.hash, { expires: 15, path: "/" });

        //Set Parameter /////////////////////////////
		selectClause = '';
		pageSize = 24;
		
        //Set SortClause
        sortClause = $("#SortList").val();
        switch (sortClause) {
            case "hot-nhat": sortClause = "TopLevel Desc"; break;
            case "gia-cao-thap": sortClause = "ProductPriceNew Desc,TopLevel Desc"; break;
            case "gia-thap-cao": sortClause = "ProductPriceNew Asc,TopLevel Desc"; break;
        }

        //Set WhereClause
        whereClause = "";
        productBranchId = 0;
        productGroupId = 0;
        productFeature = 0;
		View = 'grid';
		
        if ($("#ProductBranchValue").length > 0) productBranchId = $("#ProductBranchValue").attr("ProductBranchId");
        if ($("#ProductGroupValue").length > 0) productGroupId = $("#ProductGroupValue").attr("ProductGroupId");
        if ($("#ProductFeatureValue").length > 0) productFeature = $("#ProductFeatureValue").text();
       // if ($("input:radio[name='FeatureList']:checked").length > 0) productFeature = $("input:radio[name='FeatureList']:checked").attr("class");
		if ($("input:radio[name='FeatureView']:checked").length > 0) View = $("input:radio[name='FeatureView']:checked").attr("class");
        price = $("#PriceList").val();
		
		//Set ProductStatus
        productStatus =  $("#StatusList").val();
        switch (productStatus) {
            case "binh-thuong": productStatus = "Bình thường"; break;
            case "con-hang": productStatus = "Còn hàng"; break;
            case "hang-moi": productStatus = "Hàng mới"; break;
			case "ban-chay": productStatus = " Bán chạy"; break;
			case "het-hang": productStatus = "Hết hàng"; break;
			case "ngung-san-xuat": productStatus = "Ngừng sản xuất"; break;
			case "dat-hang": productStatus = "Đặt hàng"; break;
			case "hang-cu": productStatus = "Hàng cũ"; break;
			case "hang-moi": productStatus = "Hàng mới"; break;
        }
		
		
        if (productGroupId != 0) {
            whereClause = " ( ProductGroupId=" + productGroupId + " OR ProductGroupId IN (SELECT ProductGroupId FROM ProductGroup WHERE ProductGroupIdFather=" + productGroupId + "))";
        }
        else {
            if ($("#ProductGroupValue").length > 0)
                 whereClause = "ProductGroupId IN (SELECT ProductGroupId FROM ProductGroup WHERE ProductGroupIdFather=" + $("#ProductGroupValue").attr("ProductGroupId") + ")";
        }
        if (productBranchId != 0) {
            if (whereClause != "")
                whereClause = whereClause + " AND ProductBranchId=" + productBranchId;
            else
                whereClause = "ProductBranchId=" + productBranchId;
        }
        if (productFeature != 0) {
            if (whereClause != "")
                whereClause = whereClause + " AND (SELECT [ProductFeatureId] FROM [dbo].[ProductFeature] WHERE [ProductFeatureId]=N'" + productFeature + "') IN (SELECT [number] FROM [dbo].StringToIntArray([ProductFeatureIds]))";
            else
                whereClause = "(SELECT [ProductFeatureId] FROM [dbo].[ProductFeature] WHERE [ProductFeatureId]=N'" + productFeature + "') IN (SELECT [number] FROM [dbo].StringToIntArray([ProductFeatureIds]))";
        }
        if (price != 0) {
            price = price.replace("duoi", "<").replace("tren", ">");
            price = price.replace("trieu", "000000");
            if (whereClause != "")
                whereClause = whereClause + " AND ProductPriceNew" + price;
            else
                whereClause = +"Price" + price;
        }
		if (productStatus != 0) {
            whereClause = whereClause + " AND Status=N'" + productStatus + "'";
        }
		//console.log(whereClause);
		//console.log(sortClause);
		//console.log("ClassPath=" + classPath + "&MethodName=" + methodName + "&SelectClause=" + encodeURIComponent(selectClause) + "&WhereClause=" + encodeURIComponent(whereClause) + "&SortClause=" + encodeURIComponent(sortClause) + "&PageSize=" + pageSize + "&PageIndex=" + pageIndex + "&Parameter=" +View);
        //Call Ajax /////////////////////////////
        $.ajax({
            url: "Handler.ashx",
            dataType: "json",
            data: "ClassPath=" + classPath + "&MethodName=" + methodName + "&SelectClause=" + encodeURIComponent(selectClause) + "&WhereClause=" + encodeURIComponent(whereClause) + "&SortClause=" + encodeURIComponent(sortClause) + "&PageSize=" + pageSize + "&PageIndex=" + pageIndex + "&Parameter=" +View,
            type: "POST",
            timeout: 90000,
            beforeSend: function () {
                //$("html, body").animate({ scrollTop: 0 }, "slow");
                $("#ProductGroup-Ajax").fadeOut(500);
            },
            success: function (result) {
                if (result.Success == "True") {
					// 
					var position = $('.Breadcrumbs').offset();         
					$('body,html').animate({scrollTop: position.top - 30}, 1000);
					$('.Paging.PagingReview').remove();
					
                    $("#ProductGroup-Ajax").html(result.Data);
					$("img[data-original]").lazyload({effect : "fadeIn"});  
					//console.log(result.Data);
                    Product.Process_Status_Event();
                    Script.Process_Paging();
					$('.Paging').css('margin-top','30px');
					Order.PrepareGroup();
                }
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
                $("#ProductGroup-Ajax").fadeIn(300);
            }
        });
    },

	//PROCESS LOADMORE PRODUCT
    Product_More: function () {
		classPath = "Main.BL.ProductBL";
        methodName = "ProductSearchByAjax";

		if (parseInt($(".Paging").attr("index"))==1){
			pages = parseInt($(".Paging").attr("pages"));
			count = parseInt($(".Paging").attr("count"));  
			window.pageIndex = 1;
			window.pages = pages;
			window.count = count;
			window.pageSize = parseInt($(".Paging").attr("pagesize")); 
		}
		
		pageIndex = window.pageIndex;
		pageSize = window.pageSize;
		pageIndex = pageIndex + 1;
		window.pageIndex = pageIndex;
		$("#ItemCount").text(", còn " + (window.count - (pageIndex * window.pageSize))  + " sản phẩm");		
		if (pageIndex == pages || (window.count - (pageIndex * window.pageSize)) < 0) $("#LoadMore").remove();		

		//Set Parameter /////////////////////////////
		selectClause = "";        

        //Set SortClause
        sortClause = ' [TopLevel] DESC '
       

        //Set WhereClause
        whereClause = "1= 1 ";
        productBranchId = 0;
        productGroupId = 0;
        productFeature = 0;
		View = 'grid';
		
        if ($("#ProductBranchValue").length > 0) productBranchId = $("#ProductBranchValue").attr("ProductBranchId");
        if ($("#ProductGroupValue").length > 0) productGroupId = $("#ProductGroupValue").attr("ProductGroupId");
		if ($("#ProductFeatureValue").length > 0) productFeature = $("#ProductFeatureValue").text();
        //if ($("input:radio[name='FeatureList']:checked").length > 0) productFeature = $("input:radio[name='FeatureList']:checked").attr("class");
		if ($("input:radio[name='FeatureView']:checked").length > 0) View = $("input:radio[name='FeatureView']:checked").attr("class");
        price = 0;
		
		//Set ProductStatus
        productStatus =  '';
       
		
        if (productGroupId != 0) {
            whereClause = "( ProductGroupId=" + productGroupId + " or ProductGroupId IN (SELECT ProductGroupId FROM ProductGroup WHERE ProductGroupIdFather=" + $("#ProductGroupValue").attr("ProductGroupId") + "))";
        }
        else {
            if ($("#ProductGroupValue").length > 0)
                whereClause = "ProductGroupId IN (SELECT ProductGroupId FROM ProductGroup WHERE ProductGroupIdFather=" + $("#ProductGroupValue").attr("ProductGroupId") + ")";
        }
        if (productBranchId != 0) {
            if (whereClause != "")
                whereClause = whereClause + " AND ProductBranchId=" + productBranchId;
            else
                whereClause = "ProductBranchId=" + productBranchId;
        }
        if (productFeature != 0) {
            if (whereClause != "")
                whereClause = whereClause + " AND (SELECT [ProductFeatureId] FROM [dbo].[ProductFeature] WHERE [ProductFeatureId]=N'" + productFeature + "') IN (SELECT [number] FROM [dbo].StringToIntArray([ProductFeatureIds]))";
            else
                whereClause = "(SELECT [ProductFeatureId] FROM [dbo].[ProductFeature] WHERE [ProductFeatureId]=N'" + productFeature + "') IN (SELECT [number] FROM [dbo].StringToIntArray([ProductFeatureIds]))";
        }
       if (decodeURIComponent(Other.GetUrlVariable("kw"))) 
	   {
		   var productKeyword = decodeURIComponent(Other.GetUrlVariable("kw"));
		   whereClause = whereClause + " AND   (([ProductNameNoMark] LIKE '''%' + [dbo].[RemoveMark]('"+productKeyword+"') + '%''') OR ([ProductSerial] LIKE '''%' + [dbo].[RemoveMark]('"+productKeyword+"') + '%''') )  ";
	   }
		
        $.ajax({
            url: "Handler.ashx",
            dataType: "json",
            data: "ClassPath=" + classPath + "&MethodName=" + methodName + "&SelectClause=" + encodeURIComponent(selectClause) + "&WhereClause=" + encodeURIComponent(whereClause) + "&SortClause=" + encodeURIComponent(sortClause) + "&PageSize=" + pageSize + "&PageIndex=" + pageIndex + "&Parameter=" +View,
            type: "POST",
            timeout: 90000,
            beforeSend: function () {
                //$("html, body").animate({ scrollTop: 0 }, "slow");
                //$("#ProductGroup-Ajax").fadeOut(1000);
            },
            success: function (result) {
                if (result.Success == "True") {
					// 
					//var position = $('#ProductGroup-Ajax').offset();         
					//$('body,html').animate({scrollTop: position.top - 30}, 1500);
					//
                    $("#ProductGroup-Ajax").append(result.Data);
					//$("img[data-original]").lazyload({effect : "fadeIn"});  
					//Product.Process_Product_Status("#ProductGroup figure img, .Home-Product figure img, .ProductRelate  figure img", '') ; 
                    Product.Process_Status_Event();
                    Order.PrepareGroup();
                    //Script.Process_Paging();
                }
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
                //$("#ProductGroup-Ajax").fadeIn(1000);
            }
        });

	},
	
    //REUSED ADMIN FUNCTION
    ListByProductGroupIdAndProductBranchId: function (element, productGroupId, productBranchId) {
        classPath = "Main.BL.ProductBL";
        methodName = "ProductListByProductGroupIdAndProductBranchId";

        $.ajax({
            url: "Handler.ashx",
            dataType: "json",
            data: "ClassPath=" + classPath + "&MethodName=" + methodName + "&ProductGroupId=" + productGroupId + "&ProductBranchId=" + productBranchId,
            type: "POST",
            timeout: 90000,
            success: function (result) {
                if (result.Success == "True") {
                    element.html(result.Data);
                    try {
                        if (productGroupId != "") element.val(productGroupId);
                    }
                    catch (ex) {
                        if (productGroupId != "") setTimeout("$('" + element.attr("id") + "').val('" + productGroupId + "')", 1);
                    }
                }
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
            }
        });
    },


    Product_Read: function (element, productId) {
        classPath = "Main.BL.ProductBL";
        methodName = "ProductSelect";

        filterValue = "&ProductId=" + productId;

        $.ajax({
            url: "Handler.ashx",
            dataType: "json",
            data: "ClassPath=" + classPath + "&MethodName=" + methodName + filterValue,
            type: "POST",
            timeout: 90000,
            success: function (result) {
                if (result.Success == "True") {
                    element.html(result.Objects[0].Context3);
                }
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
            }
        });
    },

    SelectByFormName: function (formName, callback) {
        classPath = "Main.BL.FormBL";
        methodName = "FormSelectByFormName";

        filterValue = "&FormName=" + formName;

        $.ajax({
            url: "Handler.ashx",
            dataType: "json",
            data: "ClassPath=" + classPath + "&MethodName=" + methodName + filterValue,
            type: "POST",
            timeout: 90000,            
            success: function (result) {
                if (result.Success == "True") {
                    callback(result.Objects[0].FormTemplate);
                }                
            },
            error: function (xhr, message, ex) {                
            },
            complete: function () {                
            }
        });
    },

    //SQL DIRECT FUNCTION (CMS)
    SqlDirectFuntion: function (sqlFunction, callback) {
        classPath = "Main.BL.SqlBL";
        methodName = "SqlDirectFunction";

        filterValue = "&Function=" + sqlFunction;

        $.ajax({
            url: "Handler.ashx",
            dataType: "json",
			cache:true,
            data: "ClassPath=" + classPath + "&MethodName=" + methodName + filterValue,
            type: "POST",
            timeout: 90000,
            success: function (result) {
                if (result.Success == "True") {
                    callback(result.Data);
                }
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
            }
        });
    },

	SqlDirectProcedureByCaptcha: function (sqlProcedure, captcha, callback) {
        classPath = "Main.BL.SqlBL";
        methodName = "SqlDirectProcedureByCaptcha";

        filterValue = "&Procedure=" + sqlProcedure + "&Captcha=" + captcha;

        $.ajax({
            url: "Handler.ashx",
            dataType: "json",
            data: "ClassPath=" + classPath + "&MethodName=" + methodName + filterValue,
            type: "POST",
            timeout: 90000,
            success: function (result) {
				callback(result);
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
            }
        });
    },

	//BL DIRECT
    BLDirect: function (classPath, methodName, filterValue, callback) {
        $.ajax({
            url: "Handler.ashx",
            dataType: "json",
			cache:true,
            data: "ClassPath=" + classPath + "&MethodName=" + methodName + filterValue,
            type: "POST",
            timeout: 90000,
            success: function (result) {
                callback(result);
            },
            error: function (xhr, message, ex) {
            },
            complete: function () {
            }
        });
    },

    //PROCESS HASH AJAX
    Process_Hash: function () {

        feature = Other.GetHashVariable("ft");
        price = Other.GetHashVariable("pr");
        sort = Other.GetHashVariable("so");
        pageIndex = Other.GetHashVariable("pi");
		status = Other.GetHashVariable("status");
		view = Other.GetHashVariable("view");

		if (pageIndex!="") {
			//Render Filter & Sort toolbar
			$("input:radio[name='FeatureList']").each(function () {
				//console.log($(this).attr("class") );
				if (Other.DecodeUnicodeToAscii($(this).attr("class")).replace(/ /g, "-") == feature) {
					$(this).prop("checked", true);
				}
			});
			
			$("input:radio[name='FeatureView']").each(function () {
				$(this).removeAttr("checked");
				if (Other.DecodeUnicodeToAscii($(this).attr("class")).replace(/ /g, "-") == view) {
					$(this).prop("checked", true);
				}
			});

			$("#PriceList").val(price);
			$("#SortList").val(sort);
			$("#StatusList").val(status);
			$("#ViewList").val(view);
			//Search Ajax
			Ajax.Product_Search(pageIndex);
		}
    }
};

var Ajax = new Ajax_Class();