//用户名匹配
export function nameRule(rule, value, callback) {
  //  4-10位昵称
  let reg = /(^[a-zA-Z0-9]{4,10}$)/;
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入4-10用户名"));
  } else {
    callback();
  }
}

//密码匹配
export function passRule(rule, value, callback) {
  //  6-12位昵称
  // let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
  let pass = /(^[a-zA-Z0-9]{6,12}$)/;
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (!pass.test(value)) {
    callback(new Error("请输入6-12用密码"));
  } else {
    callback();
  }
}
