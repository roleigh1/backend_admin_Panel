const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const { ProductsDB, BestSellerItemsDB , sequelize} = require("../models/models");


const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: 'eu-central-1',
});

const upload = multer({
  storage: multer.memoryStorage(), 
});

const uploadImage = (req, res) => {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Upload failed', error: err.message });
    }

    const { type, price, name, where } = req.body;

    try {
      const params = {
        Bucket: 'myfirstbucked1',
        Key: `${Date.now()}-${req.file.originalname}`,
        Body: req.file.buffer,  
        ACL: 'public-read',
      };

      const command = new PutObjectCommand(params);

      await s3Client.send(command);

      console.log("Image received and uploaded to AWS S3");
      console.log("Type:", type);
      console.log("Price:", price);
      console.log("Name:", name);
      console.log("Where:", where);
      console.log("Image URL:", `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`);


      await insertNewProduct(where, name, type, price, `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`);

      return res.json({ message: 'Upload successful', imageUrl: `https://${params.Bucket}.s3.amazonaws.com/${params.Key}` });
    } catch (error) {
      console.error('Error uploading to AWS S3:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
};

  const insertNewProduct =  async (where, name, type, price, imagePath) => {
    if(where === "products") {
      console.log("yuhu")
      const ProductId = await ProductsDB.findOne({
        attributes: [
          [sequelize.fn('max', sequelize.col('id')), 'lastId']
        ],
      });
      let lastId = ProductId.get('lastId');
      console.log(lastId); 
        const Product = await ProductsDB.create({
            id: lastId+1, 
            name:name,
            price:Number(price),
            image:imagePath,
            type:type

        });
        console.log("Product generated ID:",Product.id);

 
} else {
  const lastBestSellerID = await BestSellerItemsDB.findOne({
    attributes: [
      [sequelize.fn('max', sequelize.col('id')), 'lastId']
    ],
  });
  let lastBestseller = lastBestSellerID.get('lastId'); 
    const Bestseller = await BestSellerItemsDB.create({
        id: lastBestseller+1,
        name:name,
        price:Number(price),
        image:imagePath,
        type:type,
    })
    console.log("Product generated ID:",Bestseller.id)
    
}

  }


   



module.exports = {
    uploadImage,
}