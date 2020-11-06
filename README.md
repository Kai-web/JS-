## #项目结构：

- │index.html -- html结构
  │script.js -- js文件
  │style.css -- css样式
  │image -- 背景图片

## #JavaScript addEventListener()事件监听方法

- 这个方法设定一个事件监听器，当某一事件发生通过设定的参数执行操作。除了可以设置元素触发顺序外，还能多次绑定事件。

- addEventListener(event, function, useCapture)

  参数 event 是必须的，表示监听的事件，例如 click, touchstart 等，就是之前不加前缀 on 的事件。
  参数 function 也是必须的，表示事件触发后调用的函数，可以是外部定义函数，也可以是匿名函数。
  参数 useCapture 是选填的，填true或者false，用于描述事件是冒泡还是**捕获，true表示捕获，默认的false表示冒泡。

```javascript
// 绑定事件 事件监听
// submit提交
form.addEventListener('submit', function (e) {
    // 阻止提交表单
    e.preventDefault()
    // 数组形式传参，减少代码量
    checkRequired([username,email,password,password2]);
    // 用户名，密码长度验证
    checkLength(username, 3, 15);
    checkLength(password, 6, 12);
    // 邮箱验证回调
    checkEmail(email);
    // 验证两次密码是否一致
    checkPasswordMatch(password,password2);
});
```

## #event.preventDefault()方法

- preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。

```javascript
form.addEventListener('submit', function (e) {
    // 阻止提交表单
    e.preventDefault()
});
```



## #JavaScript Element parentElement 属性

- parentElement属性返回指定元素的父元素。parentElement和parentNode之间的区别在于，如果父节点不是元素节点，则parentElement返回null。parentNode使用较多。此属性是只读的。

```javascript
// 用户名输入框成功提示
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
```

## #JavaScript DOM querySelector() 方法

- querySelector() 方法返回文档中匹配指定的标签，class类名，id名。

  注意： querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
  

```javascript
// 用户名输入框错误提示
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}
```

## #JavaScript trim() 方法

- 去除字符串的首尾两端多余的空格

```javascript
// 邮箱正则验证
function checkEmail(input) {
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (reg.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input,"邮箱格式错误");
    }
}
```

## #JavaScript forEach（）遍历数组

- forEach是ES5新增的方法，有三个返回值：第一个返回值是当前项  correntvalue，第二个返回值是当前项的索引 index，第三个返回值是调用forEach的数组 array

```javascript
// 检验input必填项,通过遍历判断每一项的值
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim()==="") {
            showError(input,`${getKeyWords(input)}为必填项`);
        } else {
            showSuccess(input);
        }
    })
}
```

## #JavaScript slice（）方法提取关键字

- slice() 方法可从已有的数组中返回选定的元素。

  slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

  注意： slice() 方法不会改变原始数组。

```html
<input type="text" id="username" placeholder="请输入用户名" />
```

```javascript
//提取关键字函数，下标为3开始截取
function getKeyWords(input){
    return input.placeholder.slice(3);
}
```

