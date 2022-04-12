## Cách cài đặt :wrench:
 - Tải trực tiếp qua file .zip hoặc git clone về máy
 - Mở Visual Code chạy terminal gõ : **npm install** để cài đặt các package cần thiết
 - Chạy dòng lệnh **npm start** để khởi động sever
 - Truy cập vào đường dẫn local dưới terminal để sử dụng

## Hướng dẫn sử dụng :
Truy cập vào trang web để thao tác trên trang người dùng
>[WEB](https://client-coffeehouse.herokuapp.com)
1. **Các nút chức năng trên header**:
    - Nút đặt hàng : Hiển thị tất cả các sản phẩm hiện có
    - Nút tin tức : Hiển thị tất cả các tin tức hiện có
    - Nút khuyến mãi : Hiển thị các khuyến mãi cho đơn hàng ( -19k hoặc giảm 30% tính từ giá các sản phẩm chưa bao gồm ship)
    - Nút tra cứu đơn hàng : Nhập id đơn hàng mà cửa hàng đã gửi cho bạn ở email dùng nó để tra cứu để biết tình trạng, thông tin đơn hàng
    - Nút giỏ hàng : Hiển thị thông tin các món đã thêm vào giỏ hàng( Khi giỏ hàng không có sản phẩm sẽ kh vào được giỏ hàng và hiện thông báo trả về trang chủ)
 > File trong source code : **Header.js** :card_index_dividers:
2. **Trang chủ** :
    -  Người dùng chọn từng danh mục sẽ hiển thị sản phẩm trong danh mục đó .
    -  Web trả về 12 sản phẩm có trạng thái BestSeller để hiển thị cho người dùng (Chọn xem tất cả để hiển thị hết).
    -  Web trả về 8 tin tức để hiển thị cho người dùng (Chọn xem tất cả để hiển thị hết).
 > File trong source code : **Home.js** :card_index_dividers:
3. **Trang chi tiết sản phẩm** :
    - Người dùng nhấp chọn sản phẩm bất kì. Sẽ hiển thị ra trang chi tiết sản phẩm bao gồm có tên sản phẩm, hình ảnh , size, giá tiền , mô tả
    - Khi nhấp chọn tăng số lượng hoặc đổi size giá sẽ tự cập nhật
    - Khi ấn nút thêm giỏ hàng sẽ lưu giỏ hàng vào LocalStorage và thông báo thêm thành công
 > File trong source code : **Detail_Product.js** :card_index_dividers:
4. ***Trang giỏ hàng*** :
    - Nhập thông tin người dùng phải tuân thủ Email phải đúng định dạng @xxx.com, và các input còn lại thì không được để trống trừ input hướng dẫn giao hàng.
    - Hiển thị tóm tắt tất cả các danh sách sản phẩm trong giỏ hàng và các giá của từng item. 
    - Hiển thị thành tiền của tổng item. Phí vận chuyển sẽ lấy đồng giá 30.000 .
    - Hiển thị tên khuyến mãi đã thêm ( và giá của khuyến mãi );
    - Ở bên trái nút đặt hàng sẽ hiển thị giá sau khi đã trừ khuyến mãi và đã cộng phí ship.
    - Ấn nút đặt hàng hệ thống sẽ gửi thông tin đặt hàng của bạn qua email và xóa hết sp trong giỏ hàng  đồng thời trở về trang trủ.
 > File trong source code : **ShoppingCart.js** :card_index_dividers:
