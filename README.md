# Node.js CI/CD Pipeline Using GitHub Actions and Docker

## 📌 Project Overview

This project demonstrates how to automate the testing, building, and publishing of a Node.js web application using GitHub Actions and Docker.

The CI/CD pipeline automatically runs when code is pushed to the `main` branch. It tests the application, builds a Docker image, and pushes the image to Docker Hub.

## 🎯 Objectives

* Automate application testing using GitHub Actions.
* Build a Docker image for a Node.js application.
* Push the Docker image to Docker Hub.
* Use GitHub Actions to automate the CI/CD workflow.
* Run and test the application inside a Docker container.

## 🛠️ Technologies Used

* Node.js
* JavaScript
* Git and GitHub
* GitHub Actions
* Docker
* Docker Hub
* YAML

## ⚙️ CI/CD Workflow

The pipeline follows these steps:

1. **Code Push:** Code is pushed to the GitHub `main` branch.
2. **Checkout:** GitHub Actions checks out the repository.
3. **Setup:** The Node.js environment is configured.
4. **Install Dependencies:** Dependencies are installed using `npm ci`.
5. **Test:** Automated tests run using `npm test`.
6. **Build:** Docker builds an image of the application.
7. **Push:** The Docker image is published to Docker Hub.

The Docker build-and-push job runs after the test job succeeds and on pushes to the `main` branch.

## 📂 Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── app.js
├── app.test.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

## 🚀 Run the Application Locally

### Prerequisites

* Node.js and npm installed.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/saurabh1218/nodejs-demo-app.git
   ```

2. Open the project directory:

   ```bash
   cd nodejs-demo-app
   ```

3. Install dependencies:

   ```bash
   npm ci
   ```

4. Run the tests:

   ```bash
   npm test
   ```

5. Start the application:

   ```bash
   npm start
   ```

6. Open the application in your browser:

   http://localhost:3000

## 🐳 Run Using Docker

Pull the Docker image:

```bash
docker pull saurabh1218/nodejs-demo-app:latest
```

Run the container:

```bash
docker run -d -p 3000:3000 --name nodejs-demo saurabh1218/nodejs-demo-app:latest
```

Open the application:

http://localhost:3000

To check the running container:

```bash
docker ps
```

To stop the container:

```bash
docker stop nodejs-demo
```

## 🔗 Project Links

* **GitHub Repository:** https://github.com/saurabh1218/nodejs-demo-app
* **Docker Hub Image:** https://hub.docker.com/r/saurabh1218/nodejs-demo-app
* **GitHub Actions:** https://github.com/saurabh1218/nodejs-demo-app/actions

## ✅ Project Status

* Node.js application created.
* Automated tests configured.
* GitHub Actions CI/CD workflow configured.
* Docker image built and published to Docker Hub.
* Docker container tested locally.
* Application successfully accessed through a web browser.

## 📚 Learning Outcomes

This project provided practical experience with CI/CD automation, GitHub Actions workflows, automated testing, Docker image creation, Docker Hub publishing, and running containerized applications.

## 👨‍💻 Author

**Saurabh Yadav**

DevOps Internship — Task 1
