

interview(function(res){
  if(res){
    return console.log('cry')
  }
  console.log('smile');
})




function interview(callback){
  setTimeout(()=>{
    if(Math.random() < 0.2){
      callback(null,'success');
    }else{
      callback(new Error('fail'))
    }
    
  },500)
}