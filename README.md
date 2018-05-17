# vue-simple
script标签不能写半闭合，<script/>这样是错误的，解析不了，必须写成<script></script>这样的。

组件名不要只使用一个单词定义

watch使用:首先watch是个对象，对象中的key对应data中的同名属性，value是一个方法，且参数为data中的属性值

computed使用:在数据未发生变化时，优先读取缓存。computed 计算属性只有在相关的数据发生变化时才会改变要计算的属性，当相关数据没有变化，它会读取缓存。而不必想 motheds方法 和 watch 方法是的每次都去执行函数。

filter使用:filter中没有this，可以从lifecycle中赋值this到一个变量，然后在filter中使用;每一个filter函数的参数是管道符前面的值items，而不是item。
