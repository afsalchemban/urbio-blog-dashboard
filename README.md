# Blog Dashboard with Next.js + RTK Query

A simple blog dashboard built with Next.js, TypeScript, Material UI, and Redux Toolkit (RTK Query). It supports server-side rendering, dynamic routing, creating new posts, and mock API integration.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16+ recommended)
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blog-dashboard.git
cd blog-dashboard
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or with yarn:

```bash
yarn
```

### 3. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 🛠 Tech Stack

- **Next.js** – Framework for SSR and routing
- **TypeScript** – Static type checking
- **Material UI (MUI)** – Component library for styling
- **Redux Toolkit + RTK Query** – API state management
- **MockAPI** – Mock backend for development/testing

---

## 💡 Design Decisions & Challenges

### Pagination & Total Count

- **Challenge:** `mockapi.io` supports pagination but doesn’t always include the `X-Total-Count` header needed for showing total pages.
- **Decision:** We used `transformResponse` in RTK Query to extract this header when available, and fallback to `.length` when it's not.

### Consistent Card Height

- **Challenge:** When displaying post cards in a grid, differing content lengths caused inconsistent card heights.
- **Solution:** Used Flexbox and limited the post body to two lines using `lineClamp`, ensuring visual consistency.

### Form Reusability

- **Challenge:** Managing forms for both create and edit functionality.
- **Decision:** Built a reusable `PostForm` component integrated with `react-hook-form` for cleaner state handling and validation.

---

## 📂 Project Structure

```bash
├── components/
│   └── post/            # PostCard and reusable form
├── features/
│   └── posts/           # List, Detail, and CRUD logic
├── pages/
│   └── posts/[id].tsx   # Dynamic route for single post
│   └── index.tsx        # Home page with SSR
├── store/               # Redux + RTK Query config
├── types/               # TypeScript interfaces
```

---

## 📦 Mock API

We're using [MockAPI.io](https://mockapi.io) to simulate backend data. You can find the project’s API endpoint here:

```
https://67fa1570094de2fe6ea31be2.mockapi.io/posts
```


