import passport from "passport";
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
require("dotenv").config();
// models
import { ImageModel } from "../../database/Allmodels";


const Router = express.Router();

// config multer
const storage = multer.memoryStorage();
const upload = multer({ storage });


//  AWS S3 bucket config 
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECREAT_KEY,
    region: "ap-south-1",
})
/* 
 route   /
 desc    uploads given images to S3 bucket and save the image links to Mongodb
 params  NONE
 method  POST
 Access  public
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        // aws s3 bucket options
        const bucketOptions = {
            Bucket: "mybucket8742",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read", // Access control list
        };

        const s3Upload = (options) => {
            return new Promise((resolve, reject) =>
                s3Bucket.upload(options, (error, data) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(data);
                })
            )
        }

        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage })

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;