
const  multer = require("multer");
const path = require('path');
const { ProductsDB, BestSellerItemsDB } = require("../models/models");

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {

        cb(null,file.originalname);
    },
});
const upload = multer({ storage }); 

const uploadImage = (req, res) => {
    upload.single('image')(req, res, (err) => {

        if (err) {
            return res.status(400).json({ message: 'Upload failed', error: err.message });
          }
       
          const { type, price, name, where } = req.body;
          const imagePath = path.join(__dirname, 'uploads', req.file.originalname);

        console.log("Image received");
        console.log("Type:", type);
        console.log("Price:", price);
        console.log("Name:", name);
        console.log("Where:", where)
        console.log("Image path", imagePath); 
          return res.json({ message: 'Upload successful' });
        })
 
  };
      /*
  const insertNewProduct =  async (req,res) => {
    if(insertData.where === "products") {
      
        const Product = await ProductsDB.create({
            name:insertData.name,
            price:Number(insertData.price),
            image:imagePath,
            type:insertData.type,

        });
        console.log("Product generated ID:",Product.id);

 
} else {
    const Bestseller = await BestSellerItemsDB.create({
        name:insertData.name,
        price:Number(insertData.price),
        image:"test",
        type:insertData.type,
    })
    console.log("Product generated ID:",Bestseller.id)
}

  }


   */



module.exports = {
    uploadImage,
}