### 选择器优先级
- div#a.b .c[id=x] &nbsp;&nbsp;&nbsp;[0,1,3,1]
- \#a:not(#b)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0,2,0,0]
- *.a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0,0,1,0]
- div.a  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0,0,1,1]

优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：


1、如果存在内联样式，那么 A = 1, 否则 A = 0;


2、B 的值等于 ID选择器 出现的次数;


3、C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;


4、D 的值等于 标签选择器 和 伪元素 出现的总次数。

- div#a.b .c[id=x] &nbsp;&nbsp;&nbsp;[0,1,3,1]

套用上面的算法，依次求出 A B C D 的值：

因为没有内联样式 ，所以 A = 0;


ID选择器总共出现了1次， B = 1;


类选择器出现了次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (2 + 1 + 0) = 3；


标签选择器出现了1次， 伪元素出现了0次，所以 D = (1 + 0) = 1;



上面算出的A 、 B、C、D 可以简记作：(0, 1, 3, 1)。


![选择器脑图](https://github.com/Wipeher/Frontend-01-Template/blob/master/week08/%E9%80%89%E6%8B%A9%E5%99%A8%E8%AF%AD%E6%B3%95.png)


![伪类脑图](https://github.com/Wipeher/Frontend-01-Template/blob/master/week08/%E4%BC%AA%E7%B1%BB.png)


![伪元素脑图](https://github.com/Wipeher/Frontend-01-Template/blob/master/week08/%E4%BC%AA%E5%85%83%E7%B4%A0.png)
