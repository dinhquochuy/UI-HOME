Other_Class = function () { };
////////////////////////////////////
Other_Class.prototype = {

	 ////////////////////////////////////////////////////////
    //              Check userAgent MobileDevice              //
    ////////////////////////////////////////////////////////
	 Process_isMobileDevice :function() {
        return  ((
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) ? true : false);
    },
    ////////////////////////////////////////////////////////
    //              Process Hash Variable                 //
    ////////////////////////////////////////////////////////
    GetHashVariable: function (variable) {
        hash = window.location.hash;
        result = "";
        if (hash != "") {
            vars = hash.split("&");
            for (i = 0; i < vars.length; i++) {
                pair = vars[i].split("=");
                if (pair[0] == variable) {
                    result = pair[1];
                    return result;
                }
            }
        }
        return result;
    },
	GetHashVariable_2: function (variable) {
        hash = window.location.hash;
        result = "";
        if (hash != "") {
            vars = hash.split("$");
            for (i = 0; i < vars.length; i++) {
                pair = vars[i].split("=");
                if (pair[0] == variable) {
                    result = pair[1];
                    return result;
                }
            }
        }
        return result;
    },
    SetHashVariable: function (variable, value) {
        hash = window.location.hash;
        if ((variable == "tab") && (hash == "")) {
            hash = "#&tab=0";
        }
        old = "";
        vars = hash.split("&");
        for (i = 0; i < vars.length; i++) {
            pair = vars[i].split("=");
            if (pair[0] == variable) {
                old = pair[1];
            }
        }

        hash = hash.replace(variable + "=" + old, variable + "=" + value);
        window.location.hash = hash;
    },

    ////////////////////////////////////////////////////////
    //              Process Url Variable                  //
    ////////////////////////////////////////////////////////
    GetUrlVariable: function (variable) {
        url = window.location.href;
        result = "";
        vars = url.split("/");

        for (i = 0; i < vars.length; i++) {
            pair = vars[i].split("=");
            if (pair[0] == variable) {
                result = pair[1];
                return result;
            }
        }

        return result;
    },

    ////////////////////////////////////////////////////////
    //              Format Product Feature                //
    ////////////////////////////////////////////////////////
    ProductFeatureByClass: function (className) {
        $("." + className).each(function () {
            result = "";
            array = $(this).text().split(";");
            for (i = 0; i < array.length; i++) {
                subarray = array[i].split(":");
                result = result + "<div><b>" + subarray[0] + "</b>";
                if (subarray.length == 2)
                    result = result + "<b>:</b>" + subarray[1];
                result = result + "</div>";
            }
            $(this).html(result);
        });
    },

    ////////////////////////////////////////////////////////
    //     Process ProductGroup ProductBranch relation    //
    ////////////////////////////////////////////////////////
    LoadProductGroupByProductBranch: function (productBranchId) {
        productgroupids = $("#ProductBranchList option[value='" + productBranchId + "']").attr("ProductGroupIds");

        $("#ProductGroupList option").each(function () {
            array = productgroupids.split("|");
            flag = false;
            for (i = 0; i < array.length; i++) {
                if ((array[i] == $(this).val()) || $(this).val() == "0") { flag = true; break; }
            }
            if (flag == false) $(this).css("display", "none"); else $(this).css("display", "");
        });
    },

    LoadProductBranchByProductGroup: function (productGroupId) {
        $("#ProductBranchList option").each(function () {
            if (productGroupId != "0") {
                if ($(this).attr("ProductGroupIds") != null) {
                    array = $(this).attr("ProductGroupIds").split("|");
                    flag = false;
                    for (i = 0; i < array.length; i++) {
                        if (array[i] == productGroupId) { flag = true; break; }
                    }
                    if (flag == false) $(this).css("display", "none"); else $(this).css("display", "");
                }
            }
        });
    },

    LoadFeature: function (productGroupId, productBranchId) {
        if ((productGroupId != "0") && (productBranchId != "0") && (productBranchId != null)) {
            $("#FeatureList").html("<option value='0'>Tính năng</option>");

            array = $("#ProductBranchList option[value='" + productBranchId + "']").attr("feature").split("|");
            tmp = "";
            for (i = 0; i < array.length; i++) {
                if (array[i].indexOf(productGroupId + ":") == 0) {
                    tmp = array[i].replace(productGroupId + ":", "");
                    $("#FeatureList").append("<option value='" + tmp + "'>" + tmp + "</option>");
                }
            }
        }
        else {
            if (productGroupId != "0") {
                $("#FeatureList").html("<option value='0'>Tính năng</option>");
                array = $("#ProductGroupList option[value='" + productGroupId + "']").attr("feature").split(";");
                for (i = 0; i < array.length; i++) {
                    $("#FeatureList").append("<option value='" + array[i] + "'>" + array[i] + "</option>");
                }
            }
        }
    },

    ////////////////////////////////////////////////////////
    //              Add Link to Yahoo, Skype              //
    ////////////////////////////////////////////////////////
    ChatLink: function (selector, type, text) {
        url = encodeURIComponent($(location).attr("href"));
        $(selector).each(function () {
            if (type == "yahoo")
                $(this).attr("href", $(this).attr("href") + "&m=" + encodeURIComponent(text) + url);
            if (type == "skype")
                $(this).attr("href", $(this).attr("href") + "?chat&topic=" + encodeURIComponent(text) + url);
        });
    },

    ////////////////////////////////////////////////////////
    //              Wrapper Item Boostrap                 //
    ////////////////////////////////////////////////////////
    Wrapper: function (selector, classadd, number) {
        for (var i = 0; i < $(selector).length; i += number) {
            $(selector).slice(i, i + number).addClass(classadd);
            $(selector).slice(i, i + number).wrapAll("<div class='row'/>");
        }
    },
	
	//
	Wrapper_Not_Col: function (selector, number) {
        for (var i = 0; i < $(selector).length; i += number) {
            $(selector).slice(i, i + number).wrapAll("<div class='row'/>");
        }
    },
	Wrapper_Customer: function (selector, classadd, row, number) {
        for (var i = 0; i < $(selector).length; i += number) {
			$(selector).slice(i, i + number).addClass(classadd);
            $(selector).slice(i, i + number).wrapAll("<div class='"+row+"'/>");
        }
    },
	Wrapper_Image_Slide:function(selector){
		$(selector+' li').each(function(index, element) {
			if($(this).attr('data-link') != '')
				$(this).find('img').wrap("<a href='" + $(this).attr("data-link") + "'>");
		});	
	},
	
	// get youtube thumbnail jquery	
	youtubeThumbnailImage : function (url, size) {
			if(url === null){ return ""; }
			size = (size === null) ? "big" : size;
			var vid;
			var results;
			results = url.match("[\\?&]v=([^&#]*)");
			vid = ( results === null ) ? url : results[1];
			if(size == "small"){
			  return "http://img.youtube.com/vi/"+vid+"/1.jpg";
			}
			else{
			  return "http://img.youtube.com/vi/"+vid+"/0.jpg";
			}
	},
	
	GetProductIdInUrl:function(url){
		id = url.split('-') // Split the string into an array with / as separator
		id = id[id.length-1].replace('.html','');  // Get the last part of the array (-1)
		return id;
	},
    /////////////////////////////////////////////////////////////
    //              COOKIE                                     //
    /////////////////////////////////////////////////////////////
    LoadCookie: function (element, cookieName) {
        try {
            cookieContent = $.cookie(cookieName);

            if ((cookieContent != null) && (cookieContent != "")) {
                element.css("display", "");
                array = cookieContent.split("|");
                //element.html(array.join("") + "<a style='margin-top:30px' href='javascipt:void(0);' onclick='Other.DeleteCookie($(\"#ProductHistory\"),\"" + Global.WebName + "\");$(\"html, body\").animate({ scrollTop: 0 }, 0);return false;'>Xóa Ghi Nhớ</a>");
                element.html("<div><span>Sản phẩm đã xem</span></div><ul>" + array.join("") + "</ul>");
            }
            else {
                element.css("display", "none");
            }
        }
        catch (err) {
        }
    },
    SetCookie: function (element, cookieName, value) {
        try {
            array = [];
            cookieContent = $.cookie(cookieName);

            if ((cookieContent != null) && (cookieContent != "")) {
                if (cookieContent.indexOf(value) == -1) { array = cookieContent.split("|"); }
                if (array.length > 9) array.pop(); //Remove Last Item
            }

            array.unshift(value); //Add Item to First

            if (array.length > 0) $.cookie(cookieName, array.join("|"), { expires: 15, path: "/" });

            Other.LoadCookie(element, cookieName);

        }
        catch (err) {
        }
    },
    DeleteCookie: function (element, cookieName) {
        $.cookie(cookieName, null, { path: "/" });
    },

	/////////////////////////////////////////////////////////////
    //              PRODUCT HISTORY                 //
    /////////////////////////////////////////////////////////////
 	ProductHistory: function (element, cookieName, value) {
        //Get OrderView from jStorage
        historyView = $.jStorage.get(cookieName);
		if ((historyView != null) || (historyView != "undefined") || (historyView != ""  )){
			$(element).html("<div class='AsideTitle AsideTitleOther'>Sản phẩm đã xem</div><div class='row row-product-info'>"+historyView + "</div>");
		}
        else
			$(element).html(historyView);
		 	if ($(element + " .Home-Product > a[href='" + window.location.pathname + "']").length > 0) {
			$(element).html("<div class='AsideTitle AsideTitleOther'>Sản phẩm đã xem</div><div class='row row-product-info'>"+historyView + "</div>");
        }
        else {
				value2 = value + $.jStorage.get(cookieName,value) ;
			 	historyView = $.jStorage.set(cookieName, value2); 
			//}
		}		
		$("#Product-History .Home-Product").each(function(index, element) {
			if(index >10) {$(this).remove();}
		});
		$(element).css('display','block');
    },
	
	 /////////////////////////////////////////////////////////////
    //              LoadCookie                  //
    /////////////////////////////////////////////////////////////
	RenderProductHistoryContext: function (element, cookieName) {
			$(element).html($.jStorage.get(cookieName));		
    },
	
    /////////////////////////////////////////////////////////////
    //              CHECK INPUT VALID                          //
    /////////////////////////////////////////////////////////////
    InputValidator: function (element) {
        result = true;

        element.find(".form-control[validator]").each(function () {
            error = true;
            message = "";
            value = $(this).val().trim();

            if ((value == "") || (value == null)) {
                error = false; message = "Bạn phải nhập vào dữ liệu";
            }
            else {
                array = $(this).attr("validator").split("-");
                switch (array[0]) {
                    case "id": if (value == "0") { error = false; message = "Phải chọn 1 giá trị"; } break;
                    case "text": if (array[1] != null) { if (value.length > parseInt(array[1])) { error = false; message = ("Số ký tự: " + array[1]); } } break;
                    case "number": if (isNaN(value.replace(/,/g, ""))) { error = false; message = "Phải là số"; } break;
                    case "email": var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,4})+)$/i); if (!emailRegex.test(value)) { error = false; message = "Định dạng email"; } break;
                }
            }
            if (error == false) {
                result = false;
                $(this).css("border", "1px solid red");
            }
            else {
                $(this).css("border", "1px solid #ccc");
            }
        });

        return result;
    },


    /////////////////////////////////////////////////////////////
    //              NUMBER FUNCTION                            //
    /////////////////////////////////////////////////////////////
    NumberAddCommas: function (nStr) {
        nStr = nStr.replace(/,/g, '');
        nStr += '';

        nStr = "" + (parseFloat(nStr) - 0);
        if (nStr == 'NaN') return "";

        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    },

    // Only allow input number with . (dot) ==> Float
    IsNumberKeyDot: function (evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode != 46) {
            if ((charCode > 31) && (charCode < 48 || charCode > 57))
                return false;
        }
        return true;
    },

    // Only allow input number and no . (dot) ==> Integer
    IsNumberKey: function (evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if ((charCode > 31) && (charCode < 48 || charCode > 57))
            return false;
        return true;
    },

    /////////////////////////////////////////////////////////////
    //              DECODE UNICODE                             //
    /////////////////////////////////////////////////////////////
    DecodeUnicode: function (str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
        /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
        str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
        str = str.replace(/^\-+|\-+$/g, "");
        //cắt bỏ ký tự - ở đầu và cuối chuỗi
        return str;
    },

    DecodeUnicodeToAscii: function (str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
    },


    /////////////////////////////////////////////////////////////
    //              SHOW LOADING ALARM NOTIFICATION                  //
    /////////////////////////////////////////////////////////////
    getScrollTop: function () {
        if (document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        return document.body.scrollTop;
    },

    scrollHandler: function () {
        $("#Alarm-Zone").css("top", Other.getScrollTop());
    },

    ShowNotify: function (str) {
        if (($("#Alarm-Zone").attr("run") != "n") && ($(window).width() > 768)) {
            $("#Alarm-Zone").css({ "display": "block", "visibility": "visible" });
            $("#Alarm-Zone").html("<div class='alert alert-info' style='display: inline;padding:7px;margin-bottom:0px'>" + str + "</div>");
        }
    },

    HideNotify: function () {
        if ($("#Alarm-Zone").attr("run") != "n") {
            $("#Alarm-Zone").css({ "display": "none", "visibility": "hidden" });
        }
    },	

};

var Other = new Other_Class();