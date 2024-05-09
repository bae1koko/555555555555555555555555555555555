function a() {
    return new Promise((res, rej)=>{
      setTimeout(function(){
        console.log('this is a')
        res(11)
      }, 2000)
  
    })
  }
  
  function b() {
    return new Promise((res, rej)=>{
      setTimeout(function(){
        console.log('this is b')
        res(10)
      }, 3000)
    })
  }
  function c(a , b) {
    return new Promise((res, rej)=>{
      setTimeout(function(){
        console.log('this is c')
        res(a + b)
      }, 1000)
    })
  }
  
  async function main() {
    await a()
    await b()
    await c(10, 20)
  }
  
  main()