// 1.直接打印一段文字
console.log("我是一段JavaScript代码");


console.log("node 环境执行javscript 代码");

// 2.定义一个函数, 调用这个函数
function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(20, 30);
console.log("计算结果:", result);

// 3.执行定时器代码
setTimeout(() => {
  console.log("2s后执行的代码");
}, 2000);
