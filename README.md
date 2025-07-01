
---

## 📚 Library Management System

A RESTful Library Management System built with **Express**, **TypeScript**, and **MongoDB** using **Mongoose**.

---

### 🚀 Features

* 📘 Book Management (CRUD)
* 📖 Borrow Book & Manage Copies
* 🧠 Business Logic Enforcement (e.g., prevent borrowing unavailable books)
* 🔍 Filter, Sort, and Paginate Books
* 🔄 Aggregated Borrow Summary
* 🧩 Mongoose Middleware, Statics & Instance Methods
* ✅ Schema Validation with Error Handling

---

### 🛠 Tech Stack

* **Backend:** Node.js, Express.js, TypeScript
* **Database:** MongoDB Atlas (via Mongoose)
* **Validation:** Mongoose Schema
* **Tools:** Nodemon, ts-node-dev, dotenv

---

### 📂 Folder Structure

```
src/
│
├── app/
│   ├── controllers/         # Route controllers
│   ├── interfaces/          # TypeScript interfaces
│   ├── models/              # Mongoose models
│
├── app.ts                  # Express app setup
└── server.ts               # App entry point
```

---

### 🧰 Setup Instructions

#### 1️⃣ Clone & Install

```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
npm install
```

#### 2️⃣ Create `.env`

```env
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/library
```

#### 3️⃣ Run the Server

```bash
npm run dev     # Development (with nodemon)
npm run build   # Compile TypeScript
npm start       # Run compiled JS
```

---

### 📌 API Endpoints

#### 📘 Books

| Method | Endpoint         | Description                       |
| ------ | ---------------- | --------------------------------- |
| POST   | `/api/books`     | Create a new book                 |
| GET    | `/api/books`     | Get all books (filter/sort/limit) |
| GET    | `/api/books/:id` | Get single book by ID             |
| PUT    | `/api/books/:id` | Update book by ID                 |
| DELETE | `/api/books/:id` | Delete book by ID                 |

> ✅ **Query Support**: `/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`

---

#### 📖 Borrow

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| POST   | `/api/borrow` | Borrow a book               |
| GET    | `/api/borrow` | Borrow summary (aggregated) |

---

### 📄 Sample Book Object

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
```

---

### ⚠️ Error Format

All error responses follow this format:

```json
{
  "success": false,
  "message": "Validation failed",
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number"
      }
    }
  }
}
```

---

### ✨ Advanced Features

* ✅ **Mongoose Middleware**: `pre('save')` to auto-update availability
* 🔁 **Instance Method**: `updateAvailability()` on book
* 📊 **Aggregation**: Borrow summary grouped by book
* 🔐 **Duplicate ISBN Handling**: Responds with custom error message

---

### 📬 Contact

Developed by \[**Arafat Rased**] — Full Stack Developer
📧 Email: [your-email@example.com](mailto:your-email@example.com)
🌐 Portfolio: [https://your-portfolio.com](https://your-portfolio.com)

---

Let me know if you want me to:

* Add **Postman Collection**
* Turn this into a GitHub-friendly version with badges
* Make it deployable to **Render/Vercel/Glitch**

Just say the word!
