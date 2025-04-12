# Rancid Tomatillos 🎥🍅

## Overview
Rancid Tomatillos is a movie rating app built with React that allows users to browse movie posters, view detailed movie information, and upvote or downvote films. All votes persist across page reloads thanks to PATCH requests sent to a live external API. Users can navigate directly to individual movie pages thanks to the Router component, and the app can handle loading states or incorrect URLs via client-side errors.

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
- Render (for deployment)

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
- Managing state updates and unmounting with React Router refactoring
- Keeping Cypress tests consistent through page reloads!

### 🏆 Wins:
- Removed unnecessary prop drilling after refactor with Routes
- Implemented semantic error handling and loading UI
- Created DRY, modular code with clean component responsibilities
- Practiced full end-to-end testing with mocked network responses and consistent fixture data

### 🤔 Reflections: 
- We're curious to keep exploring the advantages and disadvantages between a 'SPA' and a true 'multi-page App'. At what point does the complexity or scale of an app constitute true multi-page functionality versus simulating with a Router component?
- Learning Cypress had some growing pains, but the browser interface is so comprehensive, and in general, framing tests around a 'user-story' makes so much sense in the context of integration tests. This is definitely one of the benefits of frontend development, framing the flow of the code around the user experience.  
-If we were to scale this app up, we could add a an encrypted login page, profile building, search function, favoriting, and smart suggestions based on movies you have liked, or up-voted. It would be a great exercise to build on our Component Architecture Diagram, to see how it would change as we scaled this application up. Perhaps as it grows we could implement React's Context feature to share data globally across components, to help us avoid prop drilling.  

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
