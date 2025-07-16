
# 🚀 DevSecOps Microservice Deployment with GitHub Actions

This guide helps you deploy a secure Node.js application with MongoDB using GitHub Actions, Docker, and security tools.

---

## 📁 Project Structure

```
devsecops_project/
├── app/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── Dockerfile
├── .github/
│   └── workflows/
│       └── devsecops.yml
```

---

## 1. 🖥️ VM Setup (Ubuntu)

Install the following on your Ubuntu VM:

```bash
sudo apt update
sudo apt install -y docker.io docker-compose nodejs npm git
sudo usermod -aG docker $USER
newgrp docker
```

---

## 2. 🧑‍💻 Clone the Repo & Run Locally

```bash
git clone <your-repo-url>
cd devsecops_project/app
cp .env.example .env
npm install
node server.js
```

Or with Docker:

```bash
cd ..
docker build -t devsecops-node-app .
docker run -d -p 3000:3000 --env-file app/.env devsecops-node-app
```

---

## 3. ⚙️ MongoDB Setup (with Docker)

```bash
docker run -d -p 27017:27017 --name devsecops-mongo mongo:6
```

Update `.env`:
```
MONGO_URI=mongodb://localhost:27017/devsecops
```

---

## 4. 🔐 GitHub Secrets Configuration

Go to your GitHub repo → **Settings → Secrets and Variables → Actions**. Add:

| Name               | Value                                |
|--------------------|--------------------------------------|
| MONGO_URI          | mongodb://localhost:27017/devsecops  |
| DOCKER_USERNAME    | your-dockerhub-username              |
| DOCKER_PASSWORD    | your-dockerhub-password              |

---

## 5. 🛠️ GitHub Actions (CI/CD + Security)

Pipeline includes:

- Checkout and install Node.js dependencies
- Semgrep (static code analysis)
- Docker build and Trivy scan
- Push image to DockerHub if scan passes

---

## ✅ Run Locally (Alternative)

```bash
docker-compose up --build
```

Add `docker-compose.yml` if needed.

---

## 📄 Reporting

Include in your `report.pdf`:

- Security issues found (Semgrep, Trivy)
- Fixes applied
- CI/CD config
- Suggestions for production (e.g., Vault, image signing, AWS IAM policies)

