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

## 👾 Code Snippets

- **1. VOTING FUNCTIONALITY** 

  We’re proud of how we abstracted our vote logic into a single dynamic helper function, updateVote, which handles both upvotes and downvotes by accepting a direction argument—this avoids repetition, keeps our code DRY, and cleanly separates       functionality from event handlers.

![Screenshot 2025-04-12 at 11 09 36 AM](https://github.com/user-attachments/assets/c6803c38-418c-4ce1-8604-2d524db906af)



- **2. CYPRESS TESTING CHALLENGE**
  
 This test is a great example of how many moving parts an integration test can have. It was challenging to get right because we had to carefully match our assertions to the exact structure of the rendered DOM—including nested elements like       
 <strong> tags that interrupted the text flow—ensure our fixture data aligned with what the component expected, and correctly intercept asynchronous network requests, all while simulating real user interactions.

![Screenshot 2025-04-12 at 12 36 44 PM](https://github.com/user-attachments/assets/ad2fdd9f-8331-426c-99ff-6443e2772f77)



- **3. STATE MANAGEMENT**

  This refactor modularizes our code by allowing the MovieDetails component to manage its own state and handle its own data fetching using useParams, rather than relying on prop drilling from the parent App component. This improves   
  scalability, keeps concerns separated, and takes full advantage of React Router’s dynamic routing.

![Screenshot 2025-04-12 at 12 44 19 PM](https://github.com/user-attachments/assets/5492c600-60d0-4699-ae65-ac174b85c871)


---


## 💡 Challenges + Wins

### 💥 Challenges:
- Debugging vote persistence through PATCH requests
- Managing state updates and unmounting with React Router refactoring
- Keeping Cypress tests consistent through page reloads, fixture data AND the rendered DOM!

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
