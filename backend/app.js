const express =  require('express') ;


const {Product} = require('./data.js')

const app =  express()
app.use(express.static('./imagesApi'))
app.use(express.json())

app.get("/api/data/product"  , (req , res ) => {
    res.header('Access-Control-Allow-Origin' , '*') 
    res.header('crossorigin' , 'true')
    res.status(200).json(Product)
})

app.get('/search' , (req , res) => {
    res.header('Access-Control-Allow-Origin' , "*")

    const {search } = req.query 
    const test = Product.filter((data) =>  data.name.startsWith(search))
  
    
    // Product.find((data) => search === data.name)
    res.status(200).json(test)
})

app.get('/contact' , (req , res ) => {
    res.header({'Access-Control-Allow-Origin' : '*' , 'Content-Type': 'application/json'}) 
    console.log(req.query)
    res.json({satatus : 'seccess'})
})

app.listen(8080 , () => {
    console.log('Server is Runing in Prot 8080 ...');
})