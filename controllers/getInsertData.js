const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const { ProductsDB, BestSellerItemsDB } = require("../models/models");



const s3Client = new S3Client({
  credentials: {
    accessKeyId: "AKIAVDJKHJPMCTIIOLGR",
    secretAccessKey: "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",
  },
  region: 'eu-central-1',
});

const upload = multer({
  storage: multer.memoryStorage(), // Speichert das Bild im Arbeitsspeicher anstatt auf dem Server
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

        const Product = await ProductsDB.create({
            name:name,
            price:Number(price),
            image:imagePath,
            type:type

        });
        console.log("Product generated ID:",Product.id);

 
} else {
    const Bestseller = await BestSellerItemsDB.create({
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