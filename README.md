# 🚀 Rohit M Saxena - Personal Website

Welcome to my personal website! 🎉 This is a React-powered portfolio hosted on **GitHub Pages**.

## 🌎 Live Site
[**www.rohitmsaxena.com**](https://www.rohitmsaxena.com)

## 🛠️ Tech Stack
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS & DaisyUI
- **Hosting:** GitHub Pages
- **Domain Provider:** Namecheap

---

## 📌 Features
✔️ **Personal Portfolio** – Showcasing my projects and experience.  
✔️ **Modern UI** – Styled with Tailwind CSS & DaisyUI.  
✔️ **Fast & Optimized** – Uses Vite for lightning-fast performance.  
✔️ **Custom Domain** – Hosted on `www.rohitmsaxena.com` via Namecheap.

---

## 🚀 Local Development
### **1️⃣ Clone the Repo**
```sh
git clone https://github.com/rohitmsaxena/rms-personal-website.git
cd rms-personal-website
```

### **2️⃣ Install Dependencies**
`npm install`

### **3️⃣ Start the Development Server**
`npm run dev`
This runs the site on http://localhost:5173/.

---

## 🏗️ Build & Deploy
### 1️⃣ Install dependencies
`npm install`
### 2️⃣ Build the project for production
`npm run build`
### 3️⃣ Serve the built files locally to test
`npm serve -s dist`
### 4️⃣ Deploy to GitHub Pages
`npm run deploy`

---

## 🌐 Custom Domain Setup (Namecheap + GitHub Pages)

### 1️⃣ Configure GitHub Pages
- Go to your GitHub repository: https://github.com/rohitmsaxena/rms-personal-website
- Navigate to Settings → Pages
- Under "Custom domain", enter: www.rohitmsaxena.com
- Click Save
- After a few minutes, enable "Enforce HTTPS" (if available)

### 2️⃣ Update Namecheap DNS Settings
Log into Namecheap and go to Domain List → Manage for rohitmsaxena.com

Click on "Advanced DNS" and add the following records:

### A Records:

| Host | Value                  | TTL       |
|------|------------------------|-----------|
| @    | 185.199.108.153        | Automatic |
| @    | 185.199.109.153        | Automatic |
| @    | 185.199.110.153        | Automatic |
| @    | 185.199.111.153        | Automatic |


### CNAME Record: 

| Host | Value                   | TTL       |
|------|-------------------------|-----------|
| www  | rohitmsaxena.github.io. | Automatic |


### 3️⃣ Wait for DNS Propagation
 - DNS changes can take up to 24 hours, but usually happen within an hour.
 - Check if the domain is resolving correctly using https://dnschecker.org

### 4️⃣ Test the Website
 Open https://www.rohitmsaxena.com in a browser

## 📜 License
This project is open-source and available under the **MIT License**.

## 📬 Contact
Have feedback or ideas? Connect with me at [rohitmsaxena@gmail.com](mailto:rohitmsaxena@gmail.com)