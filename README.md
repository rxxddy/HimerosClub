# Himeros Club — Premium Membership Platform

Himeros Club is a specialized web application designed for a private membership club. It features a modern, responsive landing page with integrated payment solutions, sophisticated animations, and a secure environment for member access.

## 🚀 Tech Stack

- **Frontend:** React 18 (using Functional Components & Hooks)
- **Routing:** React Router v6
- **Styling:** Styled Components (CSS-in-JS) & Global CSS
- **Animations:** - **GSAP:** For high-performance intersection-based reveal animations.
  - **Framer Motion:** For scroll-linked parallax effects and smooth UI transitions.
- **Payment Integration:** Stripe (Stripe.js & Stripe Checkout)
- **Environment Management:** Dotenv for secure API key handling.

## ✨ Key Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports using a mobile-first approach.
- **Dynamic Countdown:** A real-time countdown timer that automatically targets the upcoming event date.
- **Stripe Checkout Integration:** A streamlined payment flow allowing users to purchase annual passes.
- **Hybrid Animation Engine:** Combines GSAP's precision for entrance animations with Framer Motion's ease of use for parallax text.
- **Glassmorphism UI:** Modern UI elements featuring backdrop filters, smooth shadows, and premium dark-mode aesthetics.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/rxxddy/himerosclub.git](https://github.com/rxxddy/himerosclub.git)

```

2. Install dependencies:
```bash
npm install --legacy-peer-deps

```



### Configuration

Create a `.env` file in the root directory and add your Stripe credentials:

```env
REACT_APP_STRIPE_KEY=your_publishable_key_here
REACT_APP_STRIPE_PRICE_ID=your_price_id_here

```

### Running the Project

```bash
npm start

```

## 📂 Project Structure

* `src/components/`: Core UI components (Checkout, Account, Success, Cancel).
* `src/styles/`: Global styles and shared Styled Components.
* `src/images/`: Optimized static assets and icons.
* `src/App.js`: Main routing logic and global provider setup.

## 🛡️ License

This project is proprietary. All rights reserved.
