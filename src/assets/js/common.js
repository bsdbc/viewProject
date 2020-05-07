export function jumpTo(path){
  this.$router.push({
    path:'/'+path,
    query:{
      t:new Date().getTime()
    }
  })
}
