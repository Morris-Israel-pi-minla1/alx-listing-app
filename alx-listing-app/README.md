# ALX Listing App

The **ALX Listing App** is an Airbnb-inspired project designed to practice building scalable, component-driven web applications with **Next.js**.  
This milestone sets up the project foundation with TypeScript, ESLint, TailwindCSS, and a well-structured folder layout to ensure maintainability as we add more features (such as listing pages and reusable components).

---

## 🚀 Project Goals
- Build an **Airbnb clone listing page** using Next.js.
- Establish a clean and maintainable **folder structure**.
- Create **reusable components** (e.g., Cards, Buttons).
- Apply **responsive styling** with TailwindCSS.
- Ensure **type safety** with TypeScript.

---
# ALX Listing App

The **ALX Listing App** is an Airbnb-inspired project built with **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**.  
This is the foundation milestone of the project where we scaffold the app, set up the folder structure, and add reusable components.

---

## 📌 Repository
GitHub Repository: [alx-listing-app](https://github.com/<your-username>/alx-listing-app)

---

## ⚙️ How to Run the Application

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/alx-listing-app.git
cd alx-listing-app


## 📂 Project Structure

```bash
alx-listing-app/
│
├── components/          # Reusable UI components
│   └── common/
│       ├── Card.tsx     # Card component for property listings
│       └── Button.tsx   # Reusable button component
│
├── interfaces/          # TypeScript interfaces
│   └── index.ts         # Placeholder interfaces (e.g., CardProps, ButtonProps)
│
├── constants/           # Reusable constants
│   └── index.ts
│
├── public/
│   └── assets/          # Static assets (images, SVGs, icons, etc.)
│
├── pages/               # Next.js pages
│   └── index.tsx        # Home page
│
├── styles/
│   └── globals.css      # TailwindCSS global styles
│
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation



## Conclusion

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
