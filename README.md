# 💱 Currency Converter (Dockerized)

A lightweight Currency Converter web application built with **HTML**, **CSS**, and **JavaScript**, then containerized using **Docker** and served with **Nginx**.

This project is part of my DevOps learning journey, demonstrating how to package and deploy a static web application in a Docker container for consistent and portable execution.

---

## 📖 Overview

The application converts **US Dollars (USD)** to **British Pounds (GBP)** using a fixed exchange rate.

Although simple, the project focuses on applying containerization best practices and serves as a solid foundation for future cloud-native deployments.

---

## ✨ Features

- Convert USD to GBP
- Simple and responsive user interface
- Input validation
- Lightweight and fast
- Dockerized using Nginx
- Easy to deploy anywhere Docker is available

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Docker
- Nginx

---

## 📂 Project Structure

```text
currency-converter/
├── Dockerfile
├── docker-compose.yml
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/currency-converter.git
cd currency-converter
```

---

## 🐳 Run with Docker

### Build the Docker image

```bash
docker build -t currency-converter .
```

### Run the container

```bash
docker run -d -p 8080:80 --name currency-app currency-converter
```

Open your browser and visit:

```
http://localhost:8080
```

---

## Using Docker Compose

Start the application:

```bash
docker compose up -d
```

Stop the application:

```bash
docker compose down
```

---

## 📸 Application Preview

```
+--------------------------------+
|      Currency Converter        |
|                                |
| Convert USD to GBP             |
|                                |
| [ 100 ]                        |
|                                |
| [ Convert ]                    |
|                                |
| $100.00 = £74.00               |
+--------------------------------+
```

---

## 🎯 Learning Outcomes

This project helped me gain practical experience with:

- Building a simple web application
- Writing JavaScript functions
- Creating Docker images
- Running applications inside containers
- Serving static websites using Nginx
- Managing Docker containers
- Understanding containerized deployments

---

## 🔮 Future Improvements

- Live exchange rates using a public API
- Multiple currency support
- Currency selector dropdowns
- Swap currencies feature
- Better UI/UX
- Dark mode
- Unit testing
- GitHub Actions CI/CD pipeline
- Deployment to Azure Container Apps
- Kubernetes deployment

---

## 🏆 Project Achievement

This project represents another milestone in my journey toward becoming a **Cloud & DevOps Engineer**.

Through this project, I demonstrated the ability to:

- Develop a functional web application
- Containerize applications with Docker
- Serve applications using Nginx
- Build portable and reproducible environments
- Apply DevOps fundamentals through hands-on practice

Every completed project strengthens my understanding of cloud-native technologies, automation, and modern deployment workflows.

---

## 👨‍💻 Author

**Ayo Oke**

Aspiring Cloud & DevOps Engineer

GitHub: https://github.com/SethGiddy

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful or interesting, consider giving it a star!