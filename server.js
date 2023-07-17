const express = require('express');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');

const app = express();
const port = 3000;

// Set up AWS SDK
const s3Client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: '',
    secretAccessKey: '',
  },
});

// Configure multer middleware for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // Max file size: 5MB
  },
});

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Catch-all route to serve the index.html file for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle POST request to upload file
app.post('/upload', upload.single('photo'), async (req, res) => {
  const file = req.file;
  const { name, age, email } = req.body;

  // Upload file to S3 bucket
  const params = {
    Bucket: '',
    Key: file.originalname,
    Body: file.buffer,
    ACL: 'public-read', // Set the appropriate ACL for your use case
  };

  try {
    await s3Client.send(new PutObjectCommand(params));
    // Save other form data and the S3 object URL in your database
    // Here, we're just logging the details for simplicity
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Email:', email);
    console.log('File URL:', `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`);
    return res.status(200).json({ message: 'File uploaded successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to upload file' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
