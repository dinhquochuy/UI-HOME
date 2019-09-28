List_Class = function() { };
////////////////////////////////////
List_Class.prototype = {

    // Return District By Province
    ListDistrictByProvince: function (listProvince, listDistrict, valueDistrict) {
        switch (listProvince.val()) {
            case "HCM":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                    <option value='Quận 1'>Quận 1</option>\
                    <option value='Quận 2'>Quận 2</option>\
                    <option value='Quận 3'>Quận 3</option>\
                    <option value='Quận 4'>Quận 4</option>\
                    <option value='Quận 5'>Quận 5</option>\
                    <option value='Quận 6'>Quận 6</option>\
                    <option value='Quận 7'>Quận 7</option>\
                    <option value='Quận 8'>Quận 8</option>\
                    <option value='Quận 9'>Quận 9</option>\
                    <option value='Quận 10'>Quận 10</option>\
                    <option value='Quận 11'>Quận 11</option>\
                    <option value='Quận 12'>Quận 12</option>\
                    <option value='Quận Phú Nhuận'>Quận Phú Nhuận</option>\
                    <option value='Quận Bình Thạnh'>Quận Bình Thạnh</option>\
                    <option value='Quận Tân Bình'>Quận Tân Bình</option>\
                    <option value='Quận Tân Phú'>Quận Tân Phú</option>\
                    <option value='Quận Gò Vấp'>Quận Gò Vấp</option>\
                    <option value='Quận Thủ Đức'>Quận Thủ Đức</option>\
                    <option value='Quận Bình Tân'>Quận Bình Tân</option>\
                    <option value='Huyện Bình Chánh'>Huyện Bình Chánh</option>\
                    <option value='Huyện Củ Chi'>Huyện Củ Chi</option>\
                    <option value='Huyện Nhà Bè'>Huyện Nhà Bè</option>\
                    <option value='Huyện Cần Giờ'>Huyện Cần Giờ</option>\
                    <option value='Huyện Hóc Môn'>Huyện Hóc Môn</option>");
                break;
            case "Hà Nội":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                    <option value='Quận Ba Đình'>Quận Ba Đình</option>\
		            <option value='Quận Hoàn Kiếm '>Quận Hoàn Kiếm</option>\
                    <option value='Quận Hai Bà Trưng'>Quận Hai Bà Trưng</option>\
		            <option value='Quận Đống Đa'>Quận Đống Đa</option>\
		            <option value='Quận Tây Hồ'>Quận Tây Hồ</option>\
		            <option value='Quận Cầu Giấy'>Quận Cầu Giấy</option>\
		            <option value='Quận Thanh Xuân'>Quận Thanh Xuân</option>\
		            <option value='Quận Hoàng Mai'>Quận Hoàng Mai</option>\
		            <option value='Quận Long Biên'>Quận Long Biên</option>\
		            <option value='Huyện Từ Liêm'>Huyện Từ Liêm</option>\
		            <option value='Huyện Thanh Trì'>Huyện Thanh Trì</option>\
		            <option value='Huyện Gia Lâm'>Huyện Gia Lâm</option>\
		            <option value='Huyện Đông Anh'>Huyện Đông Anh</option>\
		            <option value='Huyện Sóc Sơn'>Huyện Sóc Sơn</option>\
		            <option value='Quận Hà Đông'>Quận Hà Đông</option>\
		            <option value='Thị xã Sơn Tây'>Thị xã Sơn Tây</option>\
		            <option value='Huyện Ba Vì'>Huyện Ba Vì</option>\
		            <option value='Huyện Phúc Thọ'>Huyện Phúc Thọ</option>\
		            <option value='Huyện Thạch Thất'>Huyện Thạch Thất</option>\
		            <option value='Huyện Quốc Oai'>Huyện Quốc Oai</option>\
		            <option value='Huyện Chương Mỹ'>Huyện Chương Mỹ</option>\
		            <option value='Huyện Đan Phượng'>Huyện Đan Phượng</option>\
		            <option value='Huyện Hoài Đức'>Huyện Hoài Đức</option>\
		            <option value='Huyện Thanh Oai'>Huyện Thanh Oai</option>\
		            <option value='Huyện Mỹ Đức'>Huyện Mỹ Đức</option>\
		            <option value='Huyện Ứng Hoà'>Huyện Ứng Hoà</option>\
		            <option value='Huyện Thường Tín'>Huyện Thường Tín</option>\
		            <option value='Huyện Phú Xuyên'>Huyện Phú Xuyên</option>\
		            <option value='Huyện Mê Linh'>Huyện Mê Linh</option>");
                break;
            case "Hải Phòng":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
		        <option value='Quận Hồng Bàng'>Quận Hồng Bàng</option>\
		        <option value='Quận Lê Chân'>Quận Lê Chân</option>\
		        <option value='Quận Ngô Quyền'>Quận Ngô Quyền</option>\
		        <option value='Quận Kiến An'>Quận Kiến An</option>\
		        <option value='Quận Hải An'>Quận Hải An</option>\
		        <option value='Thị xã Đồ Sơn'>Thị xã Đồ Sơn</option>\
		        <option value='Huyện An Lão'>Huyện An Lão</option>\
		        <option value='Huyện Kiến Thuỵ'>Huyện Kiến Thuỵ</option>\
		        <option value='Huyện Thủy Nguyên'>Huyện Thủy Nguyên</option>\
		        <option value='Huyện An Dương'>Huyện An Dương</option>\
		        <option value='Huyện Tiên Lãng'>Huyện Tiên Lãng</option>\
		        <option value='Huyện Vĩnh Bảo'>Huyện Vĩnh Bảo</option>\
		        <option value='Huyện Cát Hải'>Huyện Cát Hải</option>\
		        <option value='Huyện Bạch Long Vĩ'>Huyện Bạch Long Vĩ</option>\
		        <option value='Quận Dương Kinh'>Quận Dương Kinh</option>");
                break;
            case "Đà Nẵng":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Quận Hải Châu'>Quận Hải Châu</option>\
                <option value='Quận Thanh Khê'>Quận Thanh Khê</option>\
                <option value='Quận Sơn Trà'>Quận Sơn Trà</option>\
                <option value='Quận Ngũ Hành Sơn'>Quận Ngũ Hành Sơn</option>\
                <option value='Quận Liên Chiểu'>Quận Liên Chiểu</option>\
                <option value='Huyện Hoà Vang'>Huyện Hoà Vang</option>\
                <option value='Quận Cẩm Lệ'>Quận Cẩm Lệ</option>");
                break;
            case "Hà Giang":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Hà Giang'>Thị xã Hà Giang</option>\
                <option value='Huyện Đồng Văn'>Huyện Đồng Văn</option>\
                <option value='Huyện Mèo Vạc'>Huyện Mèo Vạc</option>\
                <option value='Huyện Yên Minh'>Huyện Yên Minh</option>\
                <option value='Huyện Quản Bạ'>Huyện Quản Bạ</option>\
                <option value='Huyện Vị Xuyên'>Huyện Vị Xuyên</option>\
                <option value='Huyện Bắc Mê'>Huyện Bắc Mê</option>\
                <option value='Huyện Hoàng Su Phì'>Huyện Hoàng Su Phì</option>\
                <option value='Huyện Xín Mần'>Huyện Xín Mần</option>\
                <option value='Huyện Bắc Quang'>Huyện Bắc Quang</option>\
                <option value='Huyện Quang Bình'>Huyện Quang Bình</option>");
                break;
            case "Cao Bằng":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Cao Bằng'>Thị xã Cao Bằng</option>\
                <option value='Huyện Bảo Lạc'>Huyện Bảo Lạc</option>\
                <option value='Huyện Thông Nông'>Huyện Thông Nông</option>\
                <option value='Huyện Hà Quảng'>Huyện Hà Quảng</option>\
                <option value='Huyện Trà Lĩnh'>Huyện Trà Lĩnh</option>\
                <option value='Huyện Trùng Khánh'>Huyện Trùng Khánh</option>\
                <option value='Huyện Nguyên Bình'>Huyện Nguyên Bình</option>\
                <option value='Huyện Hoà An'>Huyện Hoà An</option>\
                <option value='Huyện Quảng Uyên'>Huyện Quảng Uyên</option>\
                <option value='Huyện Thạch An'>Huyện Thạch An</option>\
                <option value='Huyện Hạ Lang'>Huyện Hạ Lang</option>\
                <option value='Huyện Bảo Lâm'>Huyện Bảo Lâm</option>\
                <option value='Huyện Phục Hoà'>Huyện Phục Hoà</option>");
                break;
            case "Lai Châu":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Lai Châu'>Thị xã Lai Châu</option>\
                <option value='Huyện Tam Đường'>Huyện Tam Đường</option>\
                <option value='Huyện Phong Thổ'>Huyện Phong Thổ</option>\
                <option value='Huyện Sìn Hồ'>Huyện Sìn Hồ</option>\
                <option value='Huyện Mường Tè'>Huyện Mường Tè</option>\
                <option value='Huyện Than Uyên'>Huyện Than Uyên</option>\
                <option value='Huyện Tân Uyên'>Huyện Tân Uyên</option>");
                break;
            case "Lào Cai":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Lào Cai'>Thành phố Lào Cai</option>\
                <option value='Huyện Xi Ma Cai'>Huyện Xi Ma Cai</option>\
                <option value='Huyện Bát Xát'>Huyện Bát Xát</option>\
                <option value='Huyện Bảo Thắng'>Huyện Bảo Thắng</option>\
                <option value='Huyện Sa Pa'>Huyện Sa Pa</option>\
                <option value='Huyện Văn Bàn'>Huyện Văn Bàn</option>\
                <option value='Huyện Bảo Yên'>Huyện Bảo Yên</option>\
                <option value='Huyện Bắc Hà'>Huyện Bắc Hà</option>\
                <option value='Huyện Mường Khương'>Huyện Mường Khương</option>");
                break;
            case "Tuyên Quang":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Tuyên Quang'>Thị xã Tuyên Quang</option>\
                <option value='Huyện Na Hang'>Huyện Na Hang</option>\
                <option value='Huyện Chiêm Hoá'>Huyện Chiêm Hoá</option>\
                <option value='Huyện Hàm Yên'>Huyện Hàm Yên</option>\
                <option value='Huyện Yên Sơn'>Huyện Yên Sơn</option>\
                <option value='Huyện Sơn Dương'>Huyện Sơn Dương</option>");
                break;
            case "Tuyên Quang":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Lạng Sơn'>Thành phố Lạng Sơn</option>\
                <option value='Huyện Tràng Định'>Huyện Tràng Định</option>\
                <option value='Huyện Bình Gia'>Huyện Bình Gia</option>\
                <option value='Huyện Văn Lãng'>Huyện Văn Lãng</option>\
                <option value='Huyện Bắc Sơn'>Huyện Bắc Sơn</option>\
                <option value='Huyện Văn Quan'>Huyện Văn Quan</option>\
                <option value='Huyện Cao Lộc'>Huyện Cao Lộc</option>\
                <option value='Huyện Lộc Bình'>Huyện Lộc Bình</option>\
                <option value='Huyện Chi Lăng'>Huyện Chi Lăng</option>\
                <option value='Huyện Đình Lập'>Huyện Đình Lập</option>\
                <option value='Huyện Hữu Lũng'>Huyện Hữu Lũng</option>");
                break;
            case "Lạng Sơn":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Lạng Sơn'>Thành phố Lạng Sơn</option>\
                <option value='Huyện Tràng Định'>Huyện Tràng Định</option>\
                <option value='Huyện Bình Gia'>Huyện Bình Gia</option>\
                <option value='Huyện Văn Lãng'>Huyện Văn Lãng</option>\
                <option value='Huyện Bắc Sơn'>Huyện Bắc Sơn</option>\
                <option value='Huyện Văn Quan'>Huyện Văn Quan</option>\
                <option value='Huyện Cao Lộc'>Huyện Cao Lộc</option>\
                <option value='Huyện Lộc Bình'>Huyện Lộc Bình</option>\
                <option value='Huyện Chi Lăng'>Huyện Chi Lăng</option>\
                <option value='Huyện Đình Lập'>Huyện Đình Lập</option>\
                <option value='Huyện Hữu Lũng'>Huyện Hữu Lũng</option>");
                break;
            case "Bắc Kạn":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Bắc Kạn'>Thị xã Bắc Kạn</option>\
                <option value='Huyện Chợ Đồn'>Huyện Chợ Đồn</option>\
                <option value='Huyện Bạch Thông'>Huyện Bạch Thông</option>\
                <option value='Huyện Na Rì'>Huyện Na Rì</option>\
                <option value='Huyện Ngân Sơn'\>Huyện Ngân Sơn</option>\
                <option value='Huyện Ba Bể'>Huyện Ba Bể</option>\
                <option value='Huyện Chợ Mới'>Huyện Chợ Mới</option>\
                <option value='Huyện Pắc Nặm'>Huyện Pắc Nặm</option>");
                break;
            case "Thái Nguyên":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='TP.Thái Nguyên'>TP.Thái Nguyên</option>\
                <option value='Thị xã Sông Công'>Thị xã Sông Công</option>\
                <option value='Huyện Định Hoá'>Huyện Định Hoá</option>\
                <option value='Huyện Phú Lương'>Huyện Phú Lương</option>\
                <option value='Huyện Võ Nhai'>Huyện Võ Nhai</option>\
                <option value='Huyện Đại Từ'>Huyện Đại Từ</option>\
                <option value='Huyện Đồng Hỷ'>Huyện Đồng Hỷ</option>\
                <option value='Huyện Phú Bình'>Huyện Phú Bình</option>\
                <option value='Huyện Phổ Yên'>Huyện Phổ Yên</option>");
                break;
            case "Yên Bái":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Yên Bái'>Thành phố Yên Bái</option>\
                <option value='Thị xã Nghĩa Lộ'>Thị xã Nghĩa Lộ</option>\
                <option value='Huyện Văn Yên'>Huyện Văn Yên</option>\
                <option value='Huyện Yên Bình'>Huyện Yên Bình</option>\
                <option value='Huyện Mù Cang Chải'>Huyện Mù Cang Chải</option>\
                <option value='Huyện Văn Chấn'>Huyện Văn Chấn</option>\
                <option value='Huyện Trấn Yên'>Huyện Trấn Yên</option>\
                <option value='Huyện Trạm Tấu'>Huyện Trạm Tấu</option>\
                <option value='Huyện Lục Yên'>Huyện Lục Yên</option>");
                break;
            case "Sơn La":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Sơn La'>Thị xã Sơn La</option>\
                <option value='Huyện Quỳnh Nhai'>Huyện Quỳnh Nhai</option>\
                <option value='Huyện Mường La'>Huyện Mường La</option>\
                <option value='Huyện Thuận Châu'>Huyện Thuận Châu</option>\
                <option value='Huyện Bắc Yên'>Huyện Bắc Yên</option>\
                <option value='Huyện Phù Yên'>Huyện Phù Yên</option>\
                <option value='Huyện Mai Sơn'>Huyện Mai Sơn</option>\
                <option value='Huyện Yên Châu'>Huyện Yên Châu</option>\
                <option value='Huyện Sông Mã'>Huyện Sông Mã</option>\
                <option value='Huyện Mộc Châu'>Huyện Mộc Châu</option>\
                <option value='Huyện Sốp Cộp'>Huyện Sốp Cộp</option>");
                break;
            case "Phú Thọ":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='TP. Việt Trì'>TP. Việt Trì</option>\
                <option value='Thị xã Phú Thọ'>Thị xã Phú Thọ</option>\
                <option value='Huyện Đoan Hùng'>Huyện Đoan Hùng</option>\
                <option value='Huyện Thanh Ba'>Huyện Thanh Ba</option>\
                <option value='Huyện Hạ Hoà'>Huyện Hạ Hoà</option>\
                <option value='Huyện Cẩm Khê'>Huyện Cẩm Khê</option>\
                <option value='Huyện Yên Lập'>Huyện Yên Lập</option>\
                <option value='Huyện Thanh Sơn'>Huyện Thanh Sơn</option>\
                <option value='Huyện Phù Ninh'>Huyện Phù Ninh</option>\
                <option value='Huyện Lâm Thao'>Huyện Lâm Thao</option>\
                <option value='Huyện Tam Nông'>Huyện Tam Nông</option>\
                <option value='Huyện Thanh Thủy'>Huyện Thanh Thủy</option>\
                <option value='Huyện Tân Sơn'>Huyện Tân Sơn</option>");
                break;
            case "Vĩnh Phúc":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Vĩnh Yên'>Thành phố Vĩnh Yên</option>\
                <option value='Huyện Tam Dương'>Huyện Tam Dương</option>\
                <option value='Huyện Lập Thạch'>Huyện Lập Thạch</option>\
                <option value='Huyện Vĩnh Tường'>Huyện Vĩnh Tường</option>\
                <option value='Huyện Yên Lạc'>Huyện Yên Lạc</option>\
                <option value='Huyện Bình Xuyên'>Huyện Bình Xuyên</option>\
                <option value='Huyện Sông Lô'>Huyện Sông Lô</option>\
                <option value='Thị xã Phúc Yên'>Thị xã Phúc Yên</option>\
                <option value='Huyện Tam Đảo'>Huyện Tam Đảo</option>");
                break;
            case "Quảng Ninh":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='TP. Hạ Long'>TP. Hạ Long</option>\
                <option value='Thị xã Cẩm Phả'>Thị xã Cẩm Phả</option>\
                <option value='Thị xã Uông Bí'>Thị xã Uông Bí</option>\
                <option value='Thị xã Móng Cái'>Thị xã Móng Cái</option>\
                <option value='Huyện Bình Liêu'>Huyện Bình Liêu</option>\
                <option value='Huyện Đầm Hà'>Huyện Đầm Hà</option>\
                <option value='Huyện Hải Hà'>Huyện Hải Hà</option>\
                <option value='Huyện Tiên Yên'>Huyện Tiên Yên</option>\
                <option value='Huyện Ba Chẽ'>Huyện Ba Chẽ</option>\
                <option value='Huyện Đông Triều'>Huyện Đông Triều</option>\
                <option value='Huyện Yên Hưng'>Huyện Yên Hưng</option>\
                <option value='Huyện Hoành Bồ'>Huyện Hoành Bồ</option>\
                <option value='Huyện Vân Đồn'>Huyện Vân Đồn</option>\
                <option value='Huyện Cô Tô'>Huyện Cô Tô</option>");
                break;
            case "Bắc Giang":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Bắc Giang'>Thành phố Bắc Giang</option>\
                <option value='Huyện Yên Thế'>Huyện Yên Thế</option>\
                <option value='Huyện Lục Ngạn'>Huyện Lục Ngạn</option>\
                <option value='Huyện Sơn Động'>Huyện Sơn Động</option>\
                <option value='Huyện Lục Nam'>Huyện Lục Nam</option>\
                <option value='Huyện Tân Yên'>Huyện Tân Yên</option>\
                <option value='Huyện Hiệp Hoà'>Huyện Hiệp Hoà</option>\
                <option value='Huyện Lạng Giang'>Huyện Lạng Giang</option>\
                <option value='Huyện Việt Yên'>Huyện Việt Yên</option>\
                <option value='Huyện Yên Dũng'>Huyện Yên Dũng</option>");
                break;
            case "Đắk Lắk":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='TP. Buôn Ma Thuột'>TP. Buôn Ma Thuột</option>\
                <option value='Huyện Ea H Leo'>Huyện Ea H Leo</option>\
                <option value='Huyện Krông Buk'>Huyện Krông Buk</option>\
                <option value='Huyện Krông Năng'>Huyện Krông Năng</option>\
                <option value='Huyện Ea Súp'>Huyện Ea Súp</option>\
                <option value='Huyện Cư M gar'>Huyện Cư M gar</option>\
                <option value='Huyện Krông Pắc'>Huyện Krông Pắc</option>\
                <option value='Huyện Ea Kar'>Huyện Ea Kar</option>\
                <option value='Huyện MĐrăk'>Huyện MĐrăk</option>\
                <option value='Huyện Krông Ana'>Huyện Krông Ana</option>\
                <option value='Huyện Krông Bông'>Huyện Krông Bông</option>\
                <option value='Huyện Buôn Đôn'>Huyện Buôn Đôn</option>\
                <option value='Huyện Cư Kuin'>Huyện Cư Kuin</option>\
                <option value='Thị xã Buôn Hồ'>Thị xã Buôn Hồ</option>");
                break;
            case "Khánh Hòa":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Nha Trang'>Thành phố Nha Trang</option>\
                <option value='Huyện Vạn Ninh'>Huyện Vạn Ninh</option>\
                <option value='Huyện Ninh Hoà'>Huyện Ninh Hoà</option>\
                <option value='Huyện Diên Khánh'>Huyện Diên Khánh</option>\
                <option value='Huyện Khánh Vĩnh'>Huyện Khánh Vĩnh</option>\
                <option value='Thị xã Cam Ranh'>Thị xã Cam Ranh</option>\
                <option value='Huyện Khánh Sơn'>Huyện Khánh Sơn</option>\
                <option value='Huyện Trường Sa'>Huyện Trường Sa</option>\
                <option value='Huyện Cam Lâm'>Huyện Cam Lâm</option>");
                break;
            case "Lâm Đồng":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Đà Lạt'>Thành phố Đà Lạt</option>\
                <option value='Thị xã. Bảo Lộc'>Thị xã. Bảo Lộc</option>\
                <option value='Huyện Đức Trọng'>Huyện Đức Trọng</option>\
                <option value='Huyện Di Linh'>Huyện Di Linh</option>\
                <option value='Huyện Đơn Dương'>Huyện Đơn Dương</option>\
                <option value='Huyện Lạc Dương'>Huyện Lạc Dương</option>\
                <option value='Huyện Đạ Huoai'>Huyện Đạ Huoai</option>\
                <option value='Huyện Đạ Tẻh'>Huyện Đạ Tẻh</option>\
                <option value='Huyện Cát Tiên'>Huyện Cát Tiên</option>\
                <option value='Huyện Lâm Hà'>Huyện Lâm Hà</option>\
                <option value='Huyện Bảo Lâm'>Huyện Bảo Lâm</option>\
                <option value='Huyện Đam Rông'>Huyện Đam Rông</option>");
                break;
            case "Bình Phước":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Đồng Xoài'>Thị xã Đồng Xoài</option>\
                <option value='Huyện Đồng Phú'>Huyện Đồng Phú</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Bình Long'>Huyện Bình Long</option>\
                <option value='Huyện Lộc Ninh'>Huyện Lộc Ninh</option>\
                <option value='Huyện Bù Đốp'>Huyện Bù Đốp</option>\
                <option value='Huyện Phước Long'>Huyện Phước Long</option>\
                <option value='Huyện Bù Đăng'>Huyện Bù Đăng</option>");
                break;
            case "Bình Dương":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Thủ Dầu Một'>Thị xã Thủ Dầu Một</option>\
                <option value='Huyện Bến Cát'>Huyện Bến Cát</option>\
                <option value='Huyện Tân Uyên'>Huyện Tân Uyên</option>\
                <option value='Huyện Thuận An'>Huyện Thuận An</option>\
                <option value='Huyện Dĩ An'>Huyện Dĩ An</option>\
                <option value='Huyện Phú Giáo'>Huyện Phú Giáo</option>\
                <option value='Huyện Dầu Tiếng'>Huyện Dầu Tiếng</option>");
                break;

            case "Ninh Thuận":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Phan Rang-Tháp Chàm'>Thị xã Phan Rang-Tháp Chàm</option>\
                <option value='Huyện Ninh Sơn'>Huyện Ninh Sơn</option>\
                <option value='Huyện Ninh Hải'>Huyện Ninh Hải</option>\
                <option value='Huyện Ninh Phước'>Huyện Ninh Phước</option>\
                <option value='Huyện Bác Ái'>Huyện Bác Ái</option>\
                <option value='Huyện Thuận Bắc'>Huyện Thuận Bắc</option>");
                break;
            case "Tây Ninh":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Tây Ninh'>Thị xã Tây Ninh</option>\
                <option value='Huyện Tân Biên'>Huyện Tân Biên</option>\
                <option value='Huyện Tân Châu'>Huyện Tân Châu</option>\
                <option value='Huyện Dương Minh Châu'>Huyện Dương Minh Châu</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Hoà Thành'>Huyện Hoà Thành</option>\
                <option value='Huyện Bến Cầu'>Huyện Bến Cầu</option>\
                <option value='Huyện Gò Dầu'>Huyện Gò Dầu</option>\
                <option value='Huyện Trảng Bàng'>Huyện Trảng Bàng</option>");
                break;
            case "Bình Thuận":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Phan Thiết'>Thành phố Phan Thiết</option>\
                <option value='Huyện Tuy Phong'>Huyện Tuy Phong</option>\
                <option value='Huyện Bắc Bình'>Huyện Bắc Bình</option>\
                <option value='Huyện Hàm Thuận Bắc'>Huyện Hàm Thuận Bắc</option>\
                <option value='Huyện Hàm Thuận Nam'>Huyện Hàm Thuận Nam</option>\
                <option value='Huyện Hàm Tân'>Huyện Hàm Tân</option>\
                <option value='Huyện Đức Linh'>Huyện Đức Linh</option>\
                <option value='Huyện Tánh Linh'>Huyện Tánh Linh</option>\
                <option value='Huyện đảo Phú Quý'>Huyện đảo Phú Quý</option>\
                <option value='Thị xã LaGi'>Thị xã LaGi</option>");
                break;
            case "Đồng Nai":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Biên Hoà'>Thành phố Biên Hoà</option>\
                <option value='Huyện Vĩnh Cửu'>Huyện Vĩnh Cửu</option>\
                <option value='Huyện Tân Phú'>Huyện Tân Phú</option>\
                <option value='Huyện Định Quán'>Huyện Định Quán</option>\
                <option value='Huyện Thống Nhất'>Huyện Thống Nhất</option>\
                <option value='Thị xã Long Khánh'>Thị xã Long Khánh</option>\
                <option value='Huyện Long Thành'>Huyện Long Thành</option>\
                <option value='Huyện Xuân Lộc'>Huyện Xuân Lộc</option>\
                 <option value='Huyện Nhơn Trạch'>Huyện Nhơn Trạch</option>\
                <option value='Huyện Trảng Bom'>Huyện Trảng Bom</option>\
                <option value='Huyện Cẩm Mỹ'>Huyện Cẩm Mỹ</option>");
                break;
            case "Long An":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Tân An'>Thị xã Tân An</option>\
                <option value='Huyện Vĩnh Hưng'>Huyện Vĩnh Hưng</option>\
                <option value='Huyện Mộc Hoá'>Huyện Mộc Hoá</option>\
                <option value='Huyện Tân Thạnh'>Huyện Tân Thạnh</option>\
                <option value='Huyện Thạnh Hoá'>Huyện Thạnh Hoá</option>\
                <option value='Huyện Đức Huệ'>Huyện Đức Huệ</option>\
                <option value='Huyện Đức Hoà'>Huyện Đức Hoà</option>\
                <option value='Huyện Bến Lức'>Huyện Bến Lức</option>\
                <option value='Huyện Thủ Thừa'>Huyện Thủ Thừa</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Tân Trụ'>Huyện Tân Trụ</option>\
                <option value='Huyện Cần Đước'>Huyện Cần Đước</option>\
                <option value='Huyện Cần Giuộc'>Huyện Cần Giuộc</option>\
                <option value='Huyện Tân Hưng'>Huyện Tân Hưng</option>");
                break;
            case "Đồng Tháp":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Cao Lãnh'>Thị xã Cao Lãnh</option>\
                <option value='Thị xã Sa Đéc'>Thị xã Sa Đéc</option>\
                <option value='Huyện Tân Hồng'>Huyện Tân Hồng</option>\
                <option value='Huyện Hồng Ngự'>Huyện Hồng Ngự</option>\
                <option value='Huyện Tam Nông'>Huyện Tam Nông</option>\
                <option value='Huyện Thanh Bình'>Huyện Thanh Bình</option>\
                <option value='Huyện Cao Lãnh'>Huyện Cao Lãnh</option>\
                <option value='Huyện Lấp Vò'>Huyện Lấp Vò</option>\
                <option value='Huyện Tháp Mười'>Huyện Tháp Mười</option>\
                <option value='Huyện Lai Vung'>Huyện Lai Vung</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Thị xã Hồng Ngự'>Thị xã Hồng Ngự</option>");
                break;
            case "An Giang":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Long Xuyên'>Thành phố Long Xuyên</option>\
                <option value='Thị xã Châu Đốc'>Thị xã Châu Đốc</option>\
                <option value='Huyện An Phú'>Huyện An Phú</option>\
                <option value='Huyện Tân Châu'>Huyện Tân Châu</option>\
                <option value='Huyện Phú Tân'>Huyện Phú Tân</option>\
                <option value='Huyện Tịnh Biên'>Huyện Tịnh Biên</option>\
                <option value='Huyện Tri Tôn'>Huyện Tri Tôn</option>\
                <option value='Huyện Châu Phú'>Huyện Châu Phú</option>\
                <option value='Huyện Chợ Mới'>Huyện Chợ Mới</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Thoại Sơn'>Huyện Thoại Sơn</option>");
                break;
            case "Vũng Tàu":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Vũng Tàu'>Thành phố Vũng Tàu</option>\
                <option value='Thị xã Bà Rịa'>Thị xã Bà Rịa</option>\
                <option value='Huyện Xuyên Mộc'>Huyện Xuyên Mộc</option>\
                <option value='Huyện Long Điền'>Huyện Long Điền</option>\
                <option value='Huyện Côn Đảo'>Huyện Côn Đảo</option>\
                <option value='Huyện Tân Thành'>Huyện Tân Thành</option>\
                <option value='Huyện Châu Đức'>Huyện Châu Đức</option>\
                <option value='Huyện Đất Đỏ'>Huyện Đất Đỏ</option>");
                break;

            case "Tiền Giang":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Mỹ Tho'>Thành phố Mỹ Tho</option>\
                <option value='Thị xã Gò Công'>Thị xã Gò Công</option>\
                <option value='Huyện Cái Bè'>Huyện Cái Bè</option>\
                <option value='Huyện Cai Lậy'>Huyện Cai Lậy</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Chợ Gạo'>Huyện Chợ Gạo</option>\
                <option value='Huyện Gò Công Tây'>Huyện Gò Công Tây</option>\
                <option value='Huyện Gò Công Đông'>Huyện Gò Công Đông</option>\
                <option value='Huyện Tân Phước'>Huyện Tân Phước</option>\
                <option value='Huyện Tân Phú Đông'>Huyện Tân Phú Đông</option>");
                break;
            case "Kiên Giang":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Rạch Giá'>Thành phố Rạch Giá</option>\
                <option value='Thị xã Hà Tiên'>Thị xã Hà Tiên</option>\
                <option value='Huyện Kiên Lương'>Huyện Kiên Lương</option>\
                <option value='Huyện Hòn Đất'>Huyện Hòn Đất</option>\
                <option value='Huyện Tân Hiệp'>Huyện Tân Hiệp</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Giồng Riềng'>Huyện Giồng Riềng</option>\
                <option value='Huyện Gò Quao'>Huyện Gò Quao</option>\
                <option value='Huyện An Biên'>Huyện An Biên</option>\
                <option value='Huyện An Minh'>Huyện An Minh</option>\
                <option value='Huyện Vĩnh Thuận'>Huyện Vĩnh Thuận</option>\
                <option value='Huyện Phú Quốc'>Huyện Phú Quốc</option>\
                <option value='Huyện Kiên Hải'>Huyện Kiên Hải</option>\
                <option value='Huyện U Minh Thượng'>Huyện U Minh Thượng</option>\
                <option value='Huyện Giang Thành'>Huyện Giang Thành</option>");
                break;
            case "Cần Thơ":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Quận Ninh Kiều'>Quận Ninh Kiều</option>\
                <option value='Quận Bình Thuỷ'>Quận Bình Thuỷ</option>\
                <option value='Quận Cái Răng'>Quận Cái Răng</option>\
                <option value='Quận Ô Môn'>Quận Ô Môn</option>\
                <option value='Huyện Phong Điền'>Huyện Phong Điền</option>\
                <option value='Huyện Cờ Đỏ'>Huyện Cờ Đỏ</option>\
                <option value='Huyện Vĩnh Thạnh'>Huyện Vĩnh Thạnh</option>\
                <option value='Huỵện Thốt Nốt'>Huỵện Thốt Nốt</option>");
                break;
            case "Bến Tre":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Bến Tre'>Thị xã Bến Tre</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Chợ Lách'>Huyện Chợ Lách</option>\
                <option value='Huyện Mỏ Cày Bắc'>Huyện Mỏ Cày Bắc</option>\
                <option value='Huyện Giồng Trôm'>Huyện Giồng Trôm</option>\
                <option value='Huyện Bình Đại'>Huyện Bình Đại</option>\
                <option value='Huyện Ba Tri'>Huyện Ba Tri</option>\
                <option value='Huyện Thạnh Phú'>Huyện Thạnh Phú</option>\
                <option value='Huyện Mỏ Cày Nam'>Huyện Mỏ Cày Nam</option>");
                break;
            case "Vĩnh Long":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Vĩnh Long'>Thành phố Vĩnh Long</option>\
                <option value='Huyện Long Hồ'>Huyện Long Hồ</option>\
                <option value='Huyện Mang Thít'>Huyện Mang Thít</option>\
                <option value='Huyện Bình Minh'>Huyện Bình Minh</option>\
                <option value='Huyện Tam Bình'>Huyện Tam Bình</option>\
                <option value='Huyện Trà Ôn'>Huyện Trà Ôn</option>\
                <option value='Huyện Vũng Liêm'>Huyện Vũng Liêm</option>\
                <option value='Huyện Bình Tân'>Huyện Bình Tân</option>");
                break;
            case "Trà Vinh":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Trà Vinh'>Thị xã Trà Vinh</option>\
                <option value='Huyện Càng Long'>Huyện Càng Long</option>\
                <option value='Huyện Cầu Kè'>Huyện Cầu Kè</option>\
                <option value='Huyện Tiểu Cần'>Huyện Tiểu Cần</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Trà Cú'>Huyện Trà Cú</option>\
                <option value='Huyện Cầu Ngang'>Huyện Cầu Ngang</option>\
                <option value='Huyện Duyên Hải'>Huyện Duyên Hải</option>");
                break;
            case "Sóc Trăng":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Sóc Trăng'>Thị xã Sóc Trăng</option>\
                <option value='Huyện Kế Sách'>Huyện Kế Sách</option>\
                <option value='Huyện Mỹ Tú'>Huyện Mỹ Tú</option>\
                <option value='Huyện Mỹ Xuyên'>Huyện Mỹ Xuyên</option>\
                <option value='Huyện Thạnh Trị'>Huyện Thạnh Trị</option>\
                <option value='Huyện Long Phú'>Huyện Long Phú</option>\
                <option value='Huyện Vĩnh Châu'>Huyện Vĩnh Châu</option>\
                <option value='Huyện Cù Lao Dung'>Huyện Cù Lao Dung</option>\
                <option value='Huyện Ngã Năm'>Huyện Ngã Năm</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>");
                break;
            case "Bạc Liêu":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Bạc Liêu'>Thị xã Bạc Liêu</option>\
                <option value='Huyện Vĩnh Lợi'>Huyện Vĩnh Lợi</option>\
                <option value='Huyện Hồng Dân'>Huyện Hồng Dân</option>\
                <option value='Huyện Giá Rai'>Huyện Giá Rai</option>\
                <option value='Huyện Phước Long'>Huyện Phước Long</option>\
                <option value='Huyện Đông Hải'>Huyện Đông Hải</option>\
                <option value='Huyện Hoà Bình'>Huyện Hoà Bình</option>");
                break;
            case "Cà Mau":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Cà Mau'>Thành phố Cà Mau</option>\
                <option value='Huyện Thới Bình'>Huyện Thới Bình</option>\
                <option value='Huyện U Minh'>Huyện U Minh</option>\
                <option value='Huyện Trần Văn Thời'>Huyện Trần Văn Thời</option>\
                <option value='Huyện Cái Nước'>Huyện Cái Nước</option>\
                <option value='Huyện Đầm Dơi'>Huyện Đầm Dơi</option>\
                <option value='Huyện Ngọc Hiển'>Huyện Ngọc Hiển</option>\
                <option value='Huyện Năm Căn'>Huyện Năm Căn</option>\
                <option value='Huyện Phú Tân'>Huyện Phú Tân</option>");
                break;
            case "Điện Biên":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='TP. Điện Biên Phủ'>TP. Điện Biên Phủ</option>\
                <option value='Thị xã Mường Lay'>Thị xã Mường Lay</option>\
                <option value='Huyện Điện Biên'>Huyện Điện Biên</option>\
                <option value='Huyện Tuần Giáo'>Huyện Tuần Giáo</option>\
                <option value='Huyện Mường Chà'>Huyện Mường Chà</option>\
                <option value='Huyện Tủa Chùa'>Huyện Tủa Chùa</option>\
                <option value='Huyện Điện Biên Đông'>Huyện Điện Biên Đông</option>\
                <option value='Huyện Mường Nhé'>Huyện Mường Nhé</option>\
                <option value='Huyện Mường Ảng'>Huyện Mường Ảng</option>");
                break;
            case "Đắk Nông":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Gia Nghĩa'>Thị xã Gia Nghĩa</option>\
                <option value='Huyện Đăk R Lấp'>Huyện Đăk R Lấp</option>\
                <option value='Huyện Đăk Mil'>Huyện Đăk Mil</option>\
                <option value='Huyện Cư Jút'>Huyện Cư Jút</option>\
                <option value='Huyện Đăk Song'>Huyện Đăk Song</option>\
                <option value='Huyện Krông Nô'>Huyện Krông Nô</option>\
                <option value='Huyện Đăk Glong'>Huyện Đăk Glong</option>\
                <option value='Huyện Tuy Đức'>Huyện Tuy Đức</option>");
                break;
            case "Hậu Giang":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Vị Thanh'>Thị xã Vị Thanh</option>\
                <option value='Huyện Vị Thuỷ'>Huyện Vị Thuỷ</option>\
                <option value='Huyện Long Mỹ'>Huyện Long Mỹ</option>\
                <option value='Huyện Phụng Hiệp'>Huyện Phụng Hiệp</option>\
                <option value='Huyện Châu Thành'>Huyện Châu Thành</option>\
                <option value='Huyện Châu Thành A'>Huyện Châu Thành A</option>\
                <option value='Thị xã Ngã Bảy'>Thị xã Ngã Bảy</option>");
                break;
            case "Bắc Ninh":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Bắc Ninh'>Thành phố Bắc Ninh</option>\
                <option value='Huyện Yên Phong'>Huyện Yên Phong</option>\
                <option value='Huyện Quế Võ'>Huyện Quế Võ</option>\
                <option value='Huyện Tiên Du'>Huyện Tiên Du</option>\
                <option value='Huyện Từ  Sơn'>Huyện Từ  Sơn</option>\
                <option value='Huyện Thuận Thành'>Huyện Thuận Thành</option>\
                <option value='Huyện Gia Bình'>Huyện Gia Bình</option>\
                <option value='Huyện Lương Tài'>Huyện Lương Tài</option>");
                break;
            case "Hải Dương":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Hải Dương'>Thành phố Hải Dương</option>\
                <option value='Huyện Chí Linh'>Huyện Chí Linh</option>\
                <option value='Huyện Nam Sách'>Huyện Nam Sách</option>\
                <option value='Huyện Kinh Môn'>Huyện Kinh Môn</option>\
                <option value='Huyện Gia Lộc'>Huyện Gia Lộc</option>\
                <option value='Huyện Tứ Kỳ'>Huyện Tứ Kỳ</option>\
                <option value='Huyện Thanh Miện'>Huyện Thanh Miện</option>\
                <option value='Huyện Ninh Giang'>Huyện Ninh Giang</option>\
                <option value='Huyện Cẩm Giàng'>Huyện Cẩm Giàng</option>\
                <option value='Huyện Thanh Hà'>Huyện Thanh Hà</option>\
                <option value='Huyện Kim Thành'>Huyện Kim Thành</option>\
                <option value='Huyện Bình Giang'>Huyện Bình Giang</option>");
                break;
            case "Hưng Yên":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Hưng Yên'>Thị xã Hưng Yên</option>\
                <option value='Huyện Kim Động'>Huyện Kim Động</option>\
                <option value='Huyện Ân Thi'>Huyện Ân Thi</option>\
                <option value='Huyện Khoái Châu'>Huyện Khoái Châu</option>\
                <option value='Huyện Yên Mỹ'>Huyện Yên Mỹ</option>\
                <option value='Huyện Tiên Lữ'>Huyện Tiên Lữ</option>\
                <option value='Huyện Phù Cừ'>Huyện Phù Cừ</option>\
                <option value='Huyện Mỹ Hào'>Huyện Mỹ Hào</option>\
                <option value='Huyện Văn Lâm'>Huyện Văn Lâm</option>\
                <option value='Huyện Văn Giang'>Huyện Văn Giang</option>");
                break;
            case "Hòa Bình":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Hoà Bình'>Thành phố Hoà Bình</option>\
                <option value='Huyện Đà Bắc'>Huyện Đà Bắc</option>\
                <option value='Huyện Mai Châu'>Huyện Mai Châu</option>\
                <option value='Huyện Tân Lạc'>Huyện Tân Lạc</option>\
                <option value='Huyện Lạc Sơn'>Huyện Lạc Sơn</option>\
                <option value='Huyện Kỳ Sơn'>Huyện Kỳ Sơn</option>\
                <option value='Huyện Lương Sơn'>Huyện Lương Sơn</option>\
                <option value='Huyện Kim Bôi'>Huyện Kim Bôi</option>\
                <option value='Huyện Lạc Thuỷ'>Huyện Lạc Thuỷ</option>\
                <option value='Huyện Yên Thuỷ'>Huyện Yên Thuỷ</option>\
                <option value='Huyện Cao Phong'>Huyện Cao Phong</option>");
                break;
            case "Hà Nam":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Phủ Lý'>Thị xã Phủ Lý</option>\
                <option value='Huyện Duy Tiên'>Huyện Duy Tiên</option>\
                <option value='Huyện Kim Bảng'>Huyện Kim Bảng</option>\
                <option value='Huyện Lý Nhân'>Huyện Lý Nhân</option>\
                <option value='Huỵện Thanh Liêm'>Huỵện Thanh Liêm</option>\
                <option value='Huyện Bình Lục'>Huyện Bình Lục</option>");
                break;
            case "Nam Định":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='TP. Nam Định'>TP. Nam Định</option>\
                <option value='Huyện Mỹ Lộc'>Huyện Mỹ Lộc</option>\
                <option value='Huyện Xuân Trường'>Huyện Xuân Trường</option>\
                <option value='Huyện Giao Thủy'>Huyện Giao Thủy</option>\
                <option value='Huyện Ý Yên'>Huyện Ý Yên</option>\
                <option value='Huyện Vụ Bản'>Huyện Vụ Bản</option>\
                <option value='Huyện Nam Trực'>Huyện Nam Trực</option>\
                <option value='Huyện Trực Ninh'>Huyện Trực Ninh</option>\
                <option value='Huyện Nghĩa Hưng'>Huyện Nghĩa Hưng</option>\
                <option value='Huyện Hải Hậu'>Huyện Hải Hậu</option>");
                break;
            case "Thái Bình":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Thái Bình'>Thành phố Thái Bình</option>\
                <option value='Huyện Quỳnh Phụ'>Huyện Quỳnh Phụ</option>\
                <option value='Huyện Hưng Hà'>Huyện Hưng Hà</option>\
                <option value='Huyện Đông Hưng'>Huyện Đông Hưng</option>\
                <option value='Huyện Vũ Thư'>Huyện Vũ Thư</option>\
                <option value='Huyện Kiến Xương'>Huyện Kiến Xương</option>\
                <option value='Huyện Tiền Hải'>Huyện Tiền Hải</option>\
                <option value='Huyện Thái Thuỵ'>Huyện Thái Thuỵ</option>");
                break;
            case "Ninh Bình":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Ninh Bình'>Thị xã Ninh Bình</option>\
                <option value='Thị xã Tam Điệp'>Thị xã Tam Điệp</option>\
                <option value='Huyện Nho Quan'>Huyện Nho Quan</option>\
                <option value='Huyện Gia Viễn'>Huyện Gia Viễn</option>\
                <option value='Huyện Hoa Lư'>Huyện Hoa Lư</option>\
                <option value='Huyện Yên Mô'>Huyện Yên Mô</option>\
                <option value='Huyện Kim Sơn'>Huyện Kim Sơn</option>\
                <option value='Huyện Yên Khánh'>Huyện Yên Khánh</option>");
                break;
            case "Thanh Hóa":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Thanh Hoá'>Thành phố Thanh Hoá</option>\
                <option value='Thị xã Bỉm Sơn'>Thị xã Bỉm Sơn</option>\
                <option value='Thị xã Sầm Sơn'>Thị xã Sầm Sơn</option>\
                <option value='Huyện Quan Hoá'>Huyện Quan Hoá</option>\
                <option value='Huyện Quan Sơn'>Huyện Quan Sơn</option>\
                <option value='Huyện Mường Lát'>Huyện Mường Lát</option>\
                <option value='Huyện Bá Thước'>Huyện Bá Thước</option>\
                <option value='Huyện Thường Xuân'>Huyện Thường Xuân</option>\
                <option value='Huyện Như Xuân'>Huyện Như Xuân</option>\
                <option value='Huyện Như Thanh'>Huyện Như Thanh</option>\
                <option value='Huyện Lang Chánh'>Huyện Lang Chánh</option>\
                <option value='Huyện Ngọc Lặc'>Huyện Ngọc Lặc</option>\
                <option value='Huyện Thạch Thành'>Huyện Thạch Thành</option>\
                <option value='Huyện Cẩm Thủy'>Huyện Cẩm Thủy</option>\
                <option value='Huyện Thọ Xuân'>Huyện Thọ Xuân</option>\
                <option value='Huyện Vĩnh Lộc'>Huyện Vĩnh Lộc</option>\
                <option value='Huyện Thiệu Hoá'>Huyện Thiệu Hoá</option>\
                <option value='Huyện Triệu Sơn'>Huyện Triệu Sơn</option>\
                <option value='Huyện Nông Cống'>Huyện Nông Cống</option>\
                <option value='Huyện Đông Sơn'>Huyện Đông Sơn</option>\
                <option value='Huyện Hà Trung'>Huyện Hà Trung</option>\
                <option value='Huyện Hoằng Hoá'>Huyện Hoằng Hoá</option>\
                <option value='Huyện Nga Sơn'>Huyện Nga Sơn</option>\
                <option value='Huyện Hậu Lộc'>Huyện Hậu Lộc</option>\
                <option value='Huyện Quảng Xương'>Huyện Quảng Xương</option>\
                <option value='Huyện Tĩnh Gia'>Huyện Tĩnh Gia</option>\
                <option value='Huyện Yên Định'>Huyện Yên Định</option>");
                break;
            case "Nghệ An":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Vinh'>Thành phố Vinh</option>\
                <option value='Thị xã Cửa Lò'>Thị xã Cửa Lò</option>\
                <option value='Huyện Quỳ Châu'>Huyện Quỳ Châu</option>\
                <option value='Huyện Quỳ Hợp'>Huyện Quỳ Hợp</option>\
                <option value='Huyện Nghĩa Đàn'>Huyện Nghĩa Đàn</option>\
                <option value='Huyện Quỳnh Lưu	'>Huyện Quỳnh Lưu</option>\
                <option value='Huyện Kỳ Sơn'>Huyện Kỳ Sơn</option>\
                <option value='Huyện Tương Dương'>Huyện Tương Dương</option>\
                <option value='Huyện Con Cuông'>Huyện Con Cuông</option>\
                <option value='Huyện Tân Kỳ'>Huyện Tân Kỳ</option>\
                <option value='Huyện Yên Thành'>Huyện Yên Thành</option>\
                <option value='Huyện Diễn Châu'>Huyện Diễn Châu</option>\
                <option value='Huyện Anh Sơn'>Huyện Anh Sơn</option>\
                <option value='Huyện Đô Lương'>Huyện Đô Lương</option>\
                <option value='Huyện Thanh Chương'>Huyện Thanh Chương</option>\
                <option value='Huyện Nghi Lộc'>Huyện Nghi Lộc</option>\
                <option value='Huyện Nam Đàn'>Huyện Nam Đàn</option>\
                <option value='Huyện Hưng Nguyên'>Huyện Hưng Nguyên</option>\
                <option value='Huyện Quế Phong'>Huyện Quế Phong</option>");
                break;
            case "Hà Tĩnh":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Hà Tĩnh'>Thị xã Hà Tĩnh</option>\
                <option value='Thị xã Hồng Lĩnh'>Thị xã Hồng Lĩnh</option>\
                <option value='Huyện Hương Sơn'>Huyện Hương Sơn</option>\
                <option value='Huyện Đức Thọ'>Huyện Đức Thọ</option>\
                <option value='Huyện Nghi Xuân'>Huyện Nghi Xuân</option>\
                <option value='Huyện Can Lộc'>Huyện Can Lộc</option>\
                <option value='Huyện Hương Khê'>Huyện Hương Khê</option>\
                <option value='Huyện Thạch Hà'>Huyện Thạch Hà</option>\
                <option value='Huyện Cẩm Xuyên'>Huyện Cẩm Xuyên</option>\
                <option value='Huyện Kỳ Anh'>Huyện Kỳ Anh</option>\
                <option value='Huyện Vũ Quang'>Huyện Vũ Quang</option>\
                <option value='Huyện Lộc Hà'>Huyện Lộc Hà</option>");
                break;
            case "Quảng Bình":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Đồng Hới'>Thành phố Đồng Hới</option>\
                <option value='Huyện Tuyên Hoá'>Huyện Tuyên Hoá</option>\
                <option value='Huyện Minh Hoá'>Huyện Minh Hoá</option>\
                <option value='Huyện Quảng Trạch'>Huyện Quảng Trạch</option>\
                <option value='Huyện Bố Trạch'>Huyện Bố Trạch</option>\
                <option value='Huyện Quảng Ninh'>Huyện Quảng Ninh</option>\
                <option value='Huyện Lệ Thuỷ'>Huyện Lệ Thuỷ</option>");
                break;
            case "Quảng Trị":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Đông Hà'>Thị xã Đông Hà</option>\
                <option value='Thị xã Quảng Trị'>Thị xã Quảng Trị</option>\
                <option value='Huyện Vĩnh Linh'>Huyện Vĩnh Linh</option>\
                <option value='Huyện Gio Linh'>Huyện Gio Linh</option>\
                <option value='Huyện Cam Lộ'>Huyện Cam Lộ</option>\
                <option value='Huyện Triệu Phong'>Huyện Triệu Phong</option>\
                <option value='Huyện Hải Lăng'>Huyện Hải Lăng</option>\
                <option value='Huyện Hướng Hoá'>Huyện Hướng Hoá</option>\
                <option value='Huyện Đăk Rông'>Huyện Đăk Rông</option>\
                <option value='Huyện đảo Cồn cỏ'>Huyện đảo Cồn cỏ</option>");
                break;
            case "Thừa Thiên Huế":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='TP. Huế'>TP. Huế</option>\
                <option value='Huyện Phong Điền'>Huyện Phong Điền</option>\
                <option value='Huyện Quảng Điền'>Huyện Quảng Điền</option>\
                <option value='Huyện Hương Trà'>Huyện Hương Trà</option>\
                <option value='Huyện Phú Vang'>Huyện Phú Vang</option>\
                <option value='Huyện Hương Thuỷ'>Huyện Hương Thuỷ</option>\
                <option value='Huyện Phú Lộc'>Huyện Phú Lộc</option>\
                <option value='Huyện Nam Đông'>Huyện Nam Đông</option>\
                <option value='Huyện A Lưới'>Huyện A Lưới</option>");
                break;
            case "Quảng Nam":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Tam Kỳ'>Thị xã Tam Kỳ</option>\
                <option value='Thị xã Hội An'>Thị xã Hội An</option>\
                <option value='Huyện Duy Xuyên'>Huyện Duy Xuyên</option>\
                <option value='Huyện Điện Bàn'>Huyện Điện Bàn</option>\
                <option value='Huyện Đại Lộc'>Huyện Đại Lộc</option>\
                <option value='Huyện Quế Sơn'>Huyện Quế Sơn</option>\
                <option value='Huyện Hiệp Đức'>Huyện Hiệp Đức</option>\
                <option value='Huyện Thăng Bình'>Huyện Thăng Bình</option>\
                <option value='Huyện Núi Thành'>Huyện Núi Thành</option>\
                <option value='Huyện Tiên Phước'>Huyện Tiên Phước</option>\
                <option value='Huyện Bắc Trà My'>Huyện Bắc Trà My</option>\
                <option value='Huyện Đông Giang'>Huyện Đông Giang</option>\
                <option value='Huyện Nam Giang'>Huyện Nam Giang</option>\
                <option value='Huyện Phước Sơn'>Huyện Phước Sơn</option>\
                <option value='Huyện Nam Trà My'>Huyện Nam Trà My</option>\
                <option value='Huyện Tây Giang'>Huyện Tây Giang</option>\
                <option value='Huyện Phú Ninh'>Huyện Phú Ninh</option>\
                <option value='Huyện Nông Sơn'>Huyện Nông Sơn</option>");
                break;
            case "Quảng Ngãi":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Quảng Ngãi'>Thành phố Quảng Ngãi</option>\
                <option value='Huyện Lý Sơn'>Huyện Lý Sơn</option>\
                <option value='Huyện Bình Sơn'>Huyện Bình Sơn</option>\
                <option value='Huyện Trà Bồng'>Huyện Trà Bồng</option>\
                <option value='Huyện Sơn Tịnh'>Huyện Sơn Tịnh</option>\
                <option value='Huyện Sơn Hà'>Huyện Sơn Hà</option>\
                <option value='Huyện Tư Nghĩa'>Huyện Tư Nghĩa</option>\
                <option value='Huyện Nghĩa Hành'>Huyện Nghĩa Hành</option>\
                <option value='Huyện Minh Long'>Huyện Minh Long</option>\
                <option value='Huyện Mộ Đức'>Huyện Mộ Đức</option>\
                <option value='Huyện Đức Phổ'>Huyện Đức Phổ</option>\
                <option value='Huyện Ba Tơ'>Huyện Ba Tơ</option>\
 	            <option value='Huyện Sơn Tây'>Huyện Sơn Tây</option>\
                <option value='Huyện Tây Trà'>Huyện Tây Trà</option>");
                break;
            case "Kon Tum":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã KonTum'>Thị xã KonTum</option>\
                <option value='Huyện Đăk Glei'>Huyện Đăk Glei</option>\
                <option value='Huyện Ngọc Hồi'>Huyện Ngọc Hồi</option>\
                <option value='Huyện Đăk Tô'>Huyện Đăk Tô</option>\
                <option value='Huyện Sa Thầy'>Huyện Sa Thầy</option>\
                <option value='Huyện Kon Plong'>Huyện Kon Plong</option>\
                <option value='Huyện Đăk Hà'>Huyện Đăk Hà</option>\
                <option value='Huyện Kon Rộy'>Huyện Kon Rộy</option>\
                <option value='Huyện Tu Mơ Rông'>Huyện Tu Mơ Rông</option>");
                break;
            case "Bình Định":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Quy Nhơn'>Thành phố Quy Nhơn</option>\
                <option value='Huyện An Lão'>Huyện An Lão</option>\
                <option value='Huyện Hoài Ân'>Huyện Hoài Ân</option>\
                <option value='Huyện Hoài Nhơn'>Huyện Hoài Nhơn</option>\
                <option value='Huyện Phù Mỹ'>Huyện Phù Mỹ</option>\
                <option value='Huyện Phù Cát'>Huyện Phù Cát</option>\
                <option value='Huyện Vĩnh Thạnh'>Huyện Vĩnh Thạnh</option>\
                <option value='Huyện Tây Sơn'>Huyện Tây Sơn</option>\
                <option value='Huyện Vân Canh'>Huyện Vân Canh</option>\
                <option value='Huyện An Nhơn'>Huyện An Nhơn</option>\
                <option value='Huyện Tuy Phước'>Huyện Tuy Phước</option>");
                break;
            case "Gia Lai":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thành phố Pleiku'>Thành phố Pleiku</option>\
                <option value='Huyện Chư Păh'>Huyện Chư Păh</option>\
                <option value='Huyện Mang Yang'>Huyện Mang Yang</option>\
                <option value='Huyện Kbang'>Huyện Kbang</option>\
                <option value='Thị xã An Khê'>Thị xã An Khê</option>\
                <option value='Huyện Kông Chro'>Huyện Kông Chro</option>\
                <option value='Huyện Đức Cơ'>Huyện Đức Cơ</option>\
                <option value='Huyện Chưprông'>Huyện Chưprông</option>\
                <option value='Huyện Chư Sê'>Huyện Chư Sê</option>\
                <option value='Huyện Ayunpa'>Huyện Ayunpa</option>\
                <option value='Huyện KrôngPa'>Huyện KrôngPa</option>\
                <option value='Huyện Ia Grai'>Huyện Ia Grai</option>\
                <option value='Huyện Đăk Đoa'>Huyện Đăk Đoa</option>\
                <option value='Huyện Ia Pa'>Huyện Ia Pa</option>\
                <option value='Huyện Đăk Pơ'>Huyện Đăk Pơ</option>\
                <option value='Huyện Phú Thiện'>Huyện Phú Thiện</option>\
                <option value='Huyện Chư Pưh'>Huyện Chư Pưh</option>");
                break;
            case "Phú Yên":
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>\
                <option value='Thị xã Tuy Hoà'>Thị xã Tuy Hoà</option>\
                <option value='Huyện Đồng Xuân'>Huyện Đồng Xuân</option>\
                <option value='Huyện Sông Cầu'>Huyện Sông Cầu</option>\
                <option value='Huyện Tuy An'>Huyện Tuy An</option>\
                <option value='Huyện Sơn Hoà'>Huyện Sơn Hoà</option>\
                <option value='Huyện Sông Hinh'>Huyện Sông Hinh</option>\
                <option value='Huyện Đông Hoà'>Huyện Đông Hoà</option>\
                <option value='Huyện Phú Hoà'>Huyện Phú Hoà</option>\
                <option value='Huyện Tây Hoà'>Huyện Tây Hoà</option>");
                break;
            default:
                listDistrict.html("<option value='0'>Tất cả Quận/Huyện</option>");
        }

        if ((valueDistrict != null) && (valueDistrict != "")) listDistrict.val(valueDistrict);
        if (listDistrict.attr("data-live-search") == "true") listDistrict.selectpicker("refresh");        
        
    }

};

var List = new List_Class();