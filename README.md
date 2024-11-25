# Google Translate Clone with React

This project was created to develop a simple clone of Google Translate using React. The application provides a basic interface for language translation and text conversion, and it can be easily run with Docker.

## Project Overview

- **Technologies**: React, Docker
- **Port**: 1905 (running on Docker container)
- **Usage**: Users can input text and translate it into different languages.
- **Goal**: To improve frontend development skills with React and practice web application development.
## Running the Project

### Running with Docker
- **Download Project Files**\
First, clone or download the project repository or files to your local machine.
  ```bash
  git clone https://github.com/yourusername/google-translate-clone.git
  cd google-translate-clone
  ```
- **Build Docker Image**:\
Create the Docker image from the Dockerfile:
  ```bash
  docker build -t google-translate-clone .
  ```
 - **Start Docker Container**:
Run the Docker image:
  ```bash
  docker run -p 1905:80 google-translate-clone
  ```
Access from Browser:
You will be able to access your application at:
  ```bash
  http://localhost:1905
  ```
## Running in Development Environment
- **Install Dependencies:**\
Before starting the project, install necessary dependencies:
  ```bash
  npm install
  ```
- **Start Application:**\
Run the React application in development mode:
  ```bash
  npm start
  ```
This command will start your application on the local server (http://localhost:1905).
## Contributing

To contribute to this project, follow these steps:

### Fork and Clone:
First, fork this repository and clone it to your own account.
  ```bash
  git clone https://github.com/yourusername/google-translate-clone.git
  ```
### Create a New Branch:
Create a new branch for making your changes:
  ```bash
  git checkout -b feature-branch
  ```
### Make Your Changes:
Make your modifications and commit the changes:
  ```bash
  git add .
  git commit -m "Brief description of changes"
  ```
### Create a Pull Request:
Submit a pull request with your changes to the main repository.
## Project Structure

`public/`: Static files and HTML template.\
`src/`: All frontend components and React code for the application.\
`Dockerfile`: Configuration file for running the project inside a Docker container.\