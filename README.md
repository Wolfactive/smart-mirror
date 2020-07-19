# Wordpress-gulp-webpack-theme<br/>
## Giới thiệu <br/>
Base theme này sử dụng gulp và webpack. Các tính năng tích hợp: <br/>
<ul>
  <li>Complie scss và nén css</li>
  <li>Complie js, convert từ es6 sang es5 và nén js</li>
  <li> Nén hình ảnh</li>
  <li> Save file bất kỳ tự động reload browser và chạy lệnh terminal</li>
  <li> Hỗ trợ nén file</li></ul>
  
## Điều cần làm đầu tiên là chạy terminal lệnh sau</br>
Nếu trong máy đã có rồi thì có thể bỏ qua</br>

<pre><code>npm install --global gulp-cli</code></pre>
## Cấu hình browser-sync</br>
Bật file <strong>gulpfile.babel.js</strong> sau đó tìm
<pre><code>  server.init({
    proxy: "http://localhost/wordpress-test" // put your local website link here
  });</code></pre> 
Chỉnh thuộc tính proxy thành đường dẫn web tại local
## Các cậu lệnh termnial</br>

1. Trong môi trường develop</br>
<pre><code>npm run start</code></pre>
2. Build ra thành quả</br>
<pre><code>npm run build</code></pre>

## Hướng dẫn sử dụng<br/>
Mọi file scss, js,images để code và chỉnh sửa nằm trong thư mục <strong> src</strong>, fonts sẽ nằm trong thư mục <strong>dist</strong><br/>
Theme đã xóa bỏ hoàn toàn jquery ở frontend. Và tích hợp các thư viện sau:<br/>

### Slider: Sử dụng thư viện splidejs <br/>

Đã import sẵn vào js chỉ cần sử dụng thôi tham khảo link trang web <br/>
<a href="https://splidejs.com/getting-started/" target="_blank">https://splidejs.com/getting-started/</a><br/>
Trong css đã có sẳn 3 theme của slider thích theme nào thì import theme đó vào và nhớ xóa theme mặc định trong base theme<br/>
### Cookie: Sử dụng thư viện js cookie <br/>
Đã import sẵn vào js chỉ cần sử dụng thôi tham khảo link trang web <br/>
<a href="https://github.com/js-cookie/js-cookie#es-module" target="_blank">https://github.com/js-cookie/js-cookie#es-module</a><br/>
### Tích hợp sẳn Lazy load  <br/>
Đã import và setup sẵn rồi không cần cấu hình thêm.<br/>
### Cài thêm plugin <br/>
Muốn cài thêm thư viện thì cài thông qua npm install và import vào file root.js. Sau đó sử dụng.<br/>
### Cấu trúc file js và scss <br/>
Mỗi trang nên tạo một file bọc ở ngoài là điều kiện thực thi js sau đó import file vào root.js
Các component như sidebar, Menu nên tạo một file js riêng trong thư mục Component sau khi viết sau export ra module rồi import vào root.js sau đó gọi ra. Css cũng vậy tạo thư mục page chứ các scss cho các loại trang, scss cho các component chung nằm ở ngoai cùng folder với main.scss, tạo file nào import file đó vào main.scss<br/>
### Các hàm cắt ảnh cắt ảnh  <br/>
Cắt ảnh của thumbnail bài viết:
<pre><code> echo hk_get_thumb(get_the_id(),$width,$height)</code></pre>
Cắt ảnh bất kỳ miễn có url:
<pre><code>echo hk_get_image($url,$width,$height) </code></pre>
### Thêm </br>
Ngoài ra còn một số hàm khác trong function.php</br>
### Các hàm có sẵn trong JS</br>
<pre><code>LayLocalStorage(nameArray,Array)</code></pre>
<pre><code>LuuVaoLocalStorage(Array,nameArray)</code></pre>
