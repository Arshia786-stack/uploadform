File Upload Form
The File Upload Form is a web application that provides a user-friendly interface for uploading files along with accompanying form data. The uploaded files are stored in an AWS S3 bucket, while the form data is processed and logged to the console.

Description
This project serves as a demonstration of handling file uploads and integrating with AWS S3 using Node.js and Express.js. It showcases the following features:

HTML form with fields for Name, Age, Email, and Photo upload.
CSS styling to enhance the visual appeal of the form.
JavaScript code to handle form submission and file upload using the Fetch API.
Integration with the AWS SDK for JavaScript to interact with AWS S3.
Multer middleware for handling file uploads in Node.js.
Logging of form data and file details to the console.
The application follows a simple workflow: the user fills out the form fields, selects a file for upload, and clicks the Submit button. The form data, along with the selected file, is sent to the server using a POST request. The server uploads the file to the configured AWS S3 bucket, while the form data is logged to the console.

Getting Started
To get started with the File Upload Form application, follow these steps:

Clone this repository to your local machine or download the source code.
Install Node.js and npm (Node Package Manager) if they are not already installed on your machine.
Navigate to the project directory in your terminal.
Run npm install to install the project dependencies.
Update the AWS credentials in the app.js file with your own AWS access key and secret access key.
Start the server by running npm start.
Access the application in your web browser by visiting http://localhost:3000.
Usage
Fill out the form fields, providing a Name, Age, Email, and selecting a Photo file.
Click the Submit button to initiate the file upload process.
The file will be uploaded to the configured AWS S3 bucket.
The form data, including the uploaded file details, will be logged to the console.
A success message will be displayed on the page, indicating a successful upload.
Note that this application is intended as a sample project and does not cover advanced error handling, database storage, or user authentication. It can be further customized and expanded upon to suit your specific needs.

License
This project is licensed under the MIT License.

Feel free to use, modify, and distribute the code as per the terms of the license.

Acknowledgments
This project was created to demonstrate the basics of file uploading and integrating with AWS S3 using Node.js and Express.js. It incorporates technologies commonly used in web development and can serve as a starting point for similar projects.
