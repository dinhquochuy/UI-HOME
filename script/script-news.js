News_Class = function () { };
////////////////////////////////////
News_Class.prototype = {

    //NEWS IN HOME------------------------------------------------------------------
    Process_ByUrl_Home_Block: function () {
      	url = window.location.host;
		if($('.latestNews').length > 0){
			$(".latestNews .CreateDate").each(function (index) {
				createDate = $(this).text().split(".");
				$(this).html(createDate[2] + "/" + createDate[1] + "/" + createDate[0]);
			});
		}
    },


    //PRODUCTGROUP------------------------------------------------------------------
    Process_ByUrl_NewsGroup: function () {
		//Other.Wrapper_Not_Col('.NewsGroupRow  .NewsGroup', 3);
		$('.NewsGroup-Video').each(function(index, element) {
			
			if(index == 0) {
				$(this).parent().prepend('<div class="row NewsGroup-Video-Top"><div class="NewsGroup-Video-ItemsRight col-xs-12 col-sm-5 col-md-5"></div></div>');
				$(this).removeClass('col-sm-4 col-md-3').addClass('col-sm-7 col-md-7 NewsGroup-Video-ItemsLeft').prependTo('.NewsGroup-Video-Top');
			}
			if(index >= 1 && index < 4)
			{	
				$(this).removeClass('col-sm-4 col-md-3').addClass('col-sm-12 col-md-12').appendTo('.NewsGroup-Video-ItemsRight');
				$(this).find('.imageLinkWrapper').addClass('col-sm-4 col-md-4');
				$(this).find('.assetText').addClass('col-sm-8 col-md-8');
			}
		});

		Other.Wrapper_Customer('#NewsGroup > div.NewsGroup-Video','row RowNewsGroupVideo',4);
		Other.Wrapper_Customer('#NewsGroup > div.NewsGroup-Video','row RowNewsGroupVideo',4);
		$('<div class="deliver"></div>').insertAfter('#NewsGroup .RowNewsGroupVideo');
    },

    //PRODUCTGROUP SEARCH------------------------------------------------------------------
    Process_ByUrl_NewsGroupSearch: function () {
    },

    //PRODUCT DETAIL------------------------------------------------------------------
    Process_ByUrl_News: function () {
		$('#Comment').append('<div data-mobile=\'Auto-detected\' class=\'fb-comments\' data-href=\' ' + window.location.href + ' \' data-num-posts=\'5\' data-width=\'100%\'></div>');

		// Tin lien quan
		Other.Wrapper_Not_Col('#NewsRelate  .NewsRelate', 2);
    },
    //PROCESS SEARCH
    News_Search: function () {
    }
};
var News = new News_Class();