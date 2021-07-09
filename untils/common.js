const fn= {
  sayHello:function(name){
    console.log(`hello ${name}`)
  },
  sayGoodbye:function(name) {
    console.log(`Goodbye ${hello}`)
  }
}
function alertName(name){
  console.log(name+' 你好！')
}


module.exports.fn = fn 
exports.alertNameFn = alertName