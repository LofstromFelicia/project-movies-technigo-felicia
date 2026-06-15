# 🍿 Lilla Biografen - Premium Cinema System

Welcome to **Lilla Biografen**, a cinema management and movie exploration application built with React, Vite, and The Movie Database (TMDB) API. 

This project was developed as part of a web development curriculum to demonstrate proficiency in React basics, asynchronous data fetching, dynamic routing, and responsive UI design.

👉 **[LIVE DEMO LINK HERE - Replace this text with your Cloudflare link]**

---

## 🎭 Project Vision & Concept

The core goal of this project was to break away from the standard, sterile "movie streaming list" design and instead invoke a **genuine, nostalgic, and premium cinema atmosphere (äkta biografkänsla)**. 

### Design Philosophy:
* **The VIP Saloon Aesthetic:** Built around a dark, moody color palette using deep charcoal blacks (`#111111`) paired with a luxurious vibrant satin red (`#b3001e`) to mimic heavy velvet curtains and classic theater lighting.
* **Vintage Typography:** Styled with *Bebas Neue* via Google Fonts to achieve that bold, classic Hollywood marquee look for headers and navigation.
* **Atmospheric Details:** Features custom CSS neon glows, rich margins, and an elegant layout that allows the movie posters to "breathe", creating an upscale digital lobby experience.

### ⏱️ Time Constraints & Future Scope
Given the limited timeline of this project sprint, the focus was strictly on creating a polished frontend user experience and mastering React state flow. 

**Note on Scope:** *Had there been more time allocated, this would have been expanded into a fully fledged, comprehensive commercial website with a real database architecture, user authentication, and physical seat selection.* Instead, a highly creative frontend simulation was engineered to showcase advanced React capabilities within the deadline.

---

## 🎟️ Key Features & Interactive Simulation

Beyond the baseline requirements, this application features an advanced interactive ticket kiosk simulation:

* **Dynamic Movie Exploration:** Fetches live, real-time movie data, ratings, and backdrops directly from the TMDB API.
* **Robust Client-Side Routing:** Implements `react-router-dom` for seamless transitions between the main movie lobby and individual detailed view pages.
* **Custom Interactive Ticket Kiosk:** Clicking "Köp Biljetter" launches an interactive modal backdrop filter where users can dynamically toggle ticket amounts. The system automatically calculates pricing in real-time.
* **Digital Ticket Generation:** Upon confirming a purchase, the system dynamically generates a customized vintage cinema ticket complete with unique booking codes, row/seat logistics, and a CSS-rendered barcode structure.
* **Resilience & UX States:** Full integration of default loading states ("Laddar...") and error boundaries (try/catch logic) to handle invalid movie IDs or slow network requests gracefully.
* **Fully Responsive Craftsmanship:** Tailored UI grid layouts using advanced CSS flexbox/grid that adapt beautifully from small mobile screens (320px) up to ultra-wide desktop monitors (1600px).

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework:** React 18 (Functional Components, Hooks)
* **Build Tool:** Vite
* **Routing:** React Router v6
* **Styling:** Vanilla CSS3 (Custom Variables, Keyframes, Media Queries)
* **Data Source:** TMDB API (The Movie Database)
* **Deployment:** Cloudflare Pages

---