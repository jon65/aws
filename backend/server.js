const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(express.json());
app.use(cors());
const { S3Client, ListBucketsCommand, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const dotenv = require('dotenv');
const multer = require('multer');
const fs = require('fs');
dotenv.config();

const bucketName = process.env.bucket_name;
const bucketRegion = process.env.bucket_region;
const accessKeyId = process.env.access_key_id;
const secretAccessKey = process.env.secret_access_key;

//initialise client
// const s3 = new S3Client({
//     credentials: {
//         accessKeyId: accessKeyId,
//         secretAccessKey: secretAccessKey,
//     },
//     region: bucketRegion
// });

const upload = multer({ dest: 'uploads/' })

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api', (req, res) => { 
  res.send({
    test: 'testing api call'
  });
})

// app.get('/files/:key', upload.single('file'), async (req, res) => {

//   //get file from multer
//   const file = req.file;

//   if (!file) {
//     return res.status(400).send({
//       error: 'No file uploaded'
//     });
//   }

//   const key = req.params.key;
//   const fileStream = fs.createReadStream(file);

//   const param = {
//     Bucket: bucketName,
//     Body: fileStream,
//     Key: file.originalname,
//   }

//   try {
//     const cmd = new GetObjectCommand(param);
//     const data = await s3.send(cmd);

//     //delete temp file on multer
//     fs.unlunkSync(file.path``);
//     res.status(200).send({
//       file: data,
//     });

//   } catch (e) {
//     res.status(500).send({
//       error: 'Internal server error'
//     });
//   }
// });


app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});


