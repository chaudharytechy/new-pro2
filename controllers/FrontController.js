class FrontController{


static home=(req,res)=>{
   // console.log('hello')
   res.render('home')
}

static about=(req,res)=>{
   // console.log('hello')
   res.render('about')
}
static blog=(req,res)=>{
   // console.log('hello')
   res.render('blog')
}
static contact=(req,res)=>{
   // console.log('hello')
   res.render('contact')
}
static agent=(req,res)=>{
   // console.log('hello')
   res.render('agent')
}


}
module.exports=FrontController