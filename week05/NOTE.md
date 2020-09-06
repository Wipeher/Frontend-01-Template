## 第五周总结 浏览器工作原理 | HTTP协议+语法与词法分析
### 在Web应用中，服务器把网页传给浏览器，实际上就是把网页的HTML代码发送给浏览器，让浏览器显示出来。而浏览器和服务器之间的传输协议是HTTP，所以：HTTP是在网络上传输HTML的协议，用于浏览器和服务器的通信。

- ### HTTP格式
![avatar](https://github.com/wpngpeng/Frontend-01-Template/blob/master/week05/image/22.jpg)

- ### 客户端请求消息
客户端发送一个HTTP请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成，下图给出了请求报文的一般格式。

![avatar](https://github.com/wpngpeng/Frontend-01-Template/blob/master/week05/image/2012072810301161.png)

- ### 服务器响应消息
HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。
![avatar](https://github.com/wpngpeng/Frontend-01-Template/blob/master/week05/image/33.jpg)
![avatar](https://github.com/wpngpeng/Frontend-01-Template/blob/master/week05/image/11.png)

- ### 分析

HTTP/1.1 200 OK


Server: nginx


Date: Tue, 29 Nov 2020 18:08:38 GMT


Content-Type: text/plain


Content-Length: 203



Connection: close


Access-Control-Allow-Origin: *


Access-Control-Allow-Credentials: true


方法：GET还是POST，GET仅请求资源，POST会附带用户数据；


路径：/full/url/path；


域名：由Host头指定：Host: www.baidu.com


HTTP响应分为Header和Body两部分，我们在Network中看到的Header最重要的几行如下：


HTTP/1.1 200 OK


其中，200 是状态码，表示客户端请求成功，OK 是相应的状态描述。


每个Header一行一个，换行符是\r\n。当遇到连续两个\r\n时，Header部分结束，后面的数据全部是body。


Content-Length:表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据。


Content-Type：指示响应的内容，例如：Content-Type: text/html;charset=utf-8表示响应类型是HTML文本，并且编码是UTF-8，Content-Type: image/jpeg表示响应类型是JPEG格式的图片

#### HTTP GET请求的格式:
GET /path HTTP/1.1
#### HTTP POST请求的格式：
POST /path HTTP/1.1
#### HTTP响应的格式：
HTTP/1.1 200 OK

