<h1 align="center">File Upload Form</h1>
<p align="center">
  <strong>A web application for uploading files with accompanying form data</strong>
</p>

---

## Description

The File Upload Form is a web application that provides a user-friendly interface for uploading files along with accompanying form data. The uploaded files are stored in an AWS S3 bucket, while the form data is processed and logged to the console.

This project serves as a demonstration of handling file uploads and integrating with AWS S3 using Node.js and Express.js. It showcases the following features:

- HTML form with fields for Name, Age, Email, and Photo upload.
- CSS styling to enhance the visual appeal of the form.
- JavaScript code to handle form submission and file upload using the Fetch API.
- Integration with the AWS SDK for JavaScript to interact with AWS S3.
- Multer middleware for handling file uploads in Node.js.
- Logging of form data and file details to the console.

The application follows a simple workflow: the user fills out the form fields, selects a file for upload, and clicks the Submit button. The form data, along with the selected file, is sent to the server using a POST request. The server uploads the file to the configured AWS S3 bucket, while the form data is logged to the console.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

---

## Getting Started

To get started with the File Upload Form application, follow these steps:

1. Clone this repository to your local machine or download the source code.
2. Install Node.js and npm (Node Package Manager) if they are not already installed on your machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the project dependencies.
5. Update the AWS credentials in the `app.js` file with your own AWS access key and secret access key.
6. Start the server by running `npm start`.
7. Access the application in your web browser by visiting `http://localhost:3000`.

---

## Usage

1. Fill out the form fields, providing a Name, Age, Email, and selecting a Photo file.
2. Click the **Submit** button to initiate the file upload process.
3. The file will be uploaded to the configured AWS S3 bucket.
4. The form data, including the uploaded file details, will be logged to the console.
5. A success message will be displayed on the page, indicating a successful upload.

Note that this application is intended as a sample project and does not cover advanced error handling, database storage, or user authentication. It can be further customized and expanded upon to suit your specific needs.

---

## Contributing

Contributions are welcome! If you have any improvements or new features to add, please open an issue or submit a pull request.

---

## Acknowledgments

This project was created to demonstrate the basics of file uploading and integrating with AWS S3 using Node.js and Express.js. It incorporates technologies commonly used in web development and can serve as a starting point for similar projects.

---

<p align="center">
  Made with ❤️ by Arshia Mubias Shaik
</p>
