
### 1. 组件化 | One more thing：Vue 风格的 SFC , 完善 loader 部分代码
### 2. 组件化 | 动画,完成 animation，并完善 component

### 1. write a loader

1. webpack配置

   ```
   {
      test: /\.view$/,
      loader: require.resolve("./myloader.js"),
   },
   ```

2. 编写loader逻辑

   ```
   module.exports = function (source, map) {
   // source是编写的源代码字符串，处理成自己需要的结果
   }
   ```

### 2. 动画

1. 定义Animate和Timeline

   ```
   class Timeline {
   	constructor(){}
   	tick(){}
   	pause() {}
   	resume(){}
   	start()
   	add()
   	restart()
   }
   class Anamation() {
   	constructor(){}
   	valueFromProgression(){}
   }
   ```
