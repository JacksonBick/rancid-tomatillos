# Rancid Tomatillos 🎥🍅

## Overview
Rancid Tomatillos is a movie rating app built with React that allows users to browse movie posters, view detailed movie information, and upvote or downvote films. All votes persist across page reloads thanks to PATCH requests sent to a live external API. Users can navigate directly to individual movie pages and gracefully handle loading states or incorrect URLs.

This project was built to demonstrate mastery of React fundamentals, component architecture, routing, testing with Cypress, and async API integration.

---

## 🛠 Technologies Used
- React
- React Router
- JavaScript (ES6+)
- HTML/CSS
- Cypress (for E2E testing)
- Vite (for dev server)
- External REST API (Heroku)

---

## 🌟 Features
- View a grid of movie posters on load
- Real-time upvote/downvote functionality
- Dynamic routing to individual movie details pages
- Browser back/forward navigation
- Graceful loading and error states
- Comprehensive Cypress test suite with intercepts and sad path coverage

---

## 💡 Challenges + Wins

### 💥 Challenges:
- Debugging vote persistence through PATCH requests
- Managing state updates and unmounting with React Router
- Keeping Cypress tests consistent through page reloads

### 🏆 Wins:
- Removed unnecessary prop drilling after refactor with Routes
- Implemented semantic error handling and loading UI
- Created DRY, modular code with clean component responsibilities
- Practiced full end-to-end testing with mocked network responses

---

## 🚀 Deployed Site
🔗 [Live App on Render]([https://rancid-tomatillos-kwcj.onrender.com])  

---

## 📸 Screenshots

### 🎬 Main Page
![Screenshot 2025-04-11 at 8 07 29 PM](https://github.com/user-attachments/assets/5e47c6bb-188e-4457-b999-d4e4992a5d69)

### 🧾 Movie Details Page
![Screenshot 2025-04-11 at 8 11 35 PM](https://github.com/user-attachments/assets/013ce342-05f0-4308-ae6c-affe4dd6f589)

### ✍️ Excalidraw Diagram For Component Architecture
![Screenshot 2025-04-11 at 8 06 46 PM](https://github.com/user-attachments/assets/575f8c2f-66f1-44bf-aab0-327a7156f92e)

---

## 👥 Contributors

- **Will Fox**
[GitHub](https://github.com/willfox0409)

- **Jackson Bickler**
[GitHub](https://github.com/JacksonBick)  
  
---

## 📚 To Run Locally
```bash
git clone https://github.com/YourGitHubName/rancid-tomatillos.git
cd rancid-tomatillos
npm install
npm run dev
