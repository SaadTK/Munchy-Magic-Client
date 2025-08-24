# Munchy Magic — Recipe Book App <img src="https://munchy-magic.netlify.app/assets/logo-BNkAZC03.png" alt="logo" width="40"/>


*A modern, full-stack Recipe Book app with user authentication, recipe management, and a sleek UI.*

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [Deployment](#deployment)  
- [Folder Structure](#folder-structure)  
- [Screenshots](#screenshots)  
- [Contributing](#contributing)  
- [License](#license)  

---

## About

Munchy Magic is a recipe sharing platform where users can browse, add, edit, and manage recipes. Featuring Firebase Authentication, MongoDB database, responsive design, and intuitive UI, it provides a complete cooking companion.

---

## Features

### General / Layout
- Responsive navbar with dynamic links based on authentication status  
- User avatar with dropdown for profile and logout  
- Footer with contact info & social media links  
- Custom 404 page with fun food theme  

### Home Page
- Hero banner/slider  
- Top 6 recipes sorted by likes  
- Recipe cards with image, title, cuisine, like count, and details button  
- Static sections like About Us, Chef’s Tips  

### Authentication (Firebase)
- Email/password login and registration  
- Google OAuth integration  
- Password validation & error handling with toast notifications  
- Persistent login and protected private routes  
- Forgot password link (optional)  

### Recipe Management
- Add, update, delete recipes (private routes)  
- Recipe form with image, title, ingredients, instructions, cuisine, prep time, categories, and like count  
- All Recipes page with filtering by cuisine  
- Recipe details page with like functionality (no self-likes allowed)  
- My Recipes page showing user’s recipes with edit and delete options  

### Extra Features
- Dark/Light mode toggle  
- Animations with libraries like `lottie-react`, `react-awesome-reveal`  
- Tooltips for enhanced UX  
- Responsive design across devices  

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Firebase Authentication  
- **Backend:** Node.js, Express.js, MongoDB  
- **Deployment:** Netlify (client), Vercel (server)  
- **Other:** Toast notifications, React Router, Axios  

---

## Getting Started

### Prerequisites
- Node.js  
- MongoDB   
- Firebase
