// 获取DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// 用户名输入框错误提示
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// 用户名输入框成功提示
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// 邮箱正则验证
function checkEmail(input) {
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (reg.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input,"邮箱格式错误");
    }
}

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
//提取关键字函数
function getKeyWords(input){
    return input.placeholder.slice(3);
}

// 输入框长度验证
function checkLength(input,min,max){
    if (input.value.length < min) {
        showError(input,`${getKeyWords(input)}至少${min}个字符`);
    } else if(input.value.length > max){
        showError(input,`${getKeyWords(input)}少于${max}个字符`);
    }else {
        showSuccess(input);
    }
}

// 验证两次密码是否一致
function checkPasswordMatch(input1,input2){
    if (input1.value !== input2.value) {
        showError(input2,"两次输入密码不一致");
    }
}

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