# GadgetHeaven ✨

Your go-to destination for the latest and greatest gadgets!

GadgetHeaven is an e-commerce platform that offers a seamless and stunning shopping experience for gadget enthusiasts. Users can browse products by category, view detailed product descriptions, add items to their cart or wishlist, and manage purchases with ease.

## 🌐 Live Website

[Visit GadgetHeaven Live](https://ph-b10-a8-gadget-heaven.netlify.app/)

## 📄 Project Requirements Document

[View Requirement Document](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

---

## 📖 Project Overview

GadgetHeaven was developed to provide users with an easy-to-navigate, feature-rich platform to explore a variety of gadgets. The design follows a structured layout with a sidebar for categories, a detailed product display, and a dashboard for managing cart and wishlist items. This project focuses on key functionalities like filtering, sorting, and managing data with Context API and LocalStorage.

---

## 📝 Key Concepts Used in the Project

### React Fundamental Concepts

- **Functional Components**: Utilized to create modular, reusable UI components.
- **React Hooks**: `useState`, `useEffect`, `useContext`, `useLocation`, and `useNavigate` for state management, side effects, navigation, and location-based UI changes.
- **React Router**: Used to implement nested routes and create a smooth navigation experience across various pages and views.
- **Context API**: Centralized management of cart and wishlist data to ensure global state consistency.
- **Conditional Rendering**: Displayed different content based on data availability, selected categories, and user actions.

---

## 🛠️ Data Handling and Management

**Context API** and **LocalStorage** are the main data-handling methods in GadgetHeaven:

- **Context API**: Manages global state for the cart and wishlist, enabling easy access to these states across components.
- **LocalStorage**: Provides data persistence for the cart and wishlist so users can retain items even after reloading the page.

---

## ✨ Key Features

1. **Product Filtering by Category**: The sidebar allows users to filter products by categories, showing items in a specific category or all available gadgets.
2. **Cart and Wishlist Management**: Users can add items to their cart or wishlist, with Context API ensuring seamless updates across the app. Toast messages appear for each action.
3. **Detailed Product Pages**: Each product has a dedicated page showing its image, specifications, price, and availability, with buttons to add to the cart or wishlist.
4. **Price Sorting and Total Cost Display**: The dashboard shows the cart’s total cost and allows sorting by price in descending order.
5. **Interactive UI with Modals and Alerts**: For example, a purchase confirmation modal appears after successful checkout, keeping the user experience interactive and engaging.

---

## 📁 Folder Structure

```
project-folder/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/               # Images and other static assets
│   ├── components/           # Reusable components (Card, Navbar, Footer, etc.)
│   ├── contexts/             # Context API files for Cart and Wishlist
│   ├── pages/                # Main pages (Home, Details, Dashboard, etc.)
│   ├── routes/               # Route configuration
│   ├── utils/                # Helper functions for local storage, data management
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── Tailwind.css      # Tailwind configuration and custom styles
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-ranak8811.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```

### Usage

Once started, open your browser and navigate to `http://localhost:5173/` to view the project.

---

## 🔍 Additional Details

### Extra Functionalities

- **404 Page**: A custom 404 page is displayed if the user navigates to a non-existent route.
- **Dynamic Titles**: Page titles change dynamically based on the current view, enhancing SEO and UX.
- **Reload Handling**: The app ensures data consistency and prevents errors on reload by leveraging LocalStorage.

### Challenges Implemented

- **Category-Based Background Changes**: Different background colors appear based on the selected route using `useLocation`.
- **Purchase Confirmation Modal**: A modal appears on successful purchase, resetting the cart without reloading, and redirects to the homepage on modal close.

---

## 🧑‍💻 Contributors

- [MD. ANWAR HOSSAIN](https://github.com/ranak8811) - Development & Design

Feel free to reach out or make pull requests to contribute!

---

Check out the web here (Netlify): https://ph-b10-a8-gadget-heaven.netlify.app/  
Check out the web here (Surge): https://rustic-bee.surge.sh/
