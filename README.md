
---

## Library Management System

A RESTful Library Management System built with **Express**, **TypeScript**, and **MongoDB** using **Mongoose**.

---

### Features

* Book Management (CRUD)
* Borrow Book & Manage Copies
* Business Logic Enforcement (e.g., prevent borrowing unavailable books)
* Filter, Sort, and Paginate Books
* Aggregated Borrow Summary
* Mongoose Middleware, Statics & Instance Methods
* Schema Validation with Error Handling

---

###  Tech Stack

* **Backend:** Node.js, Express.js, TypeScript
* **Database:** MongoDB Atlas (via Mongoose)
* **Validation:** Mongoose Schema
* **Tools:** Nodemon, ts-node-dev, dotenv

---
###  Project Setup

**Initating with Express, mongodb, mongoose, typescript**
```
npm i --y
npm i express mongodb mongoose dotenv 
npm i -D typescript
npm i ts-node-dev

```

---

### Folder Structure

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



### API Endpoints

####  Books

| Method | Endpoint         | Description                       |
| ------ | ---------------- | --------------------------------- |
| POST   | `/api/books`     | Create a new book                 |
| GET    | `/api/books`     | Get all books (filter/sort/limit) |
| GET    | `/api/books/:id` | Get single book by ID             |
| PUT    | `/api/books/:id` | Update book by ID                 |
| DELETE | `/api/books/:id` | Delete book by ID                 |

> **Query Support**: `/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`

---

#### Borrow

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| POST   | `/api/borrow` | Borrow a book               |
| GET    | `/api/borrow` | Borrow summary (aggregated) |

---

### Sample Book Object

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

### Advanced Features

*  **Mongoose Middleware**: `pre('save')` to auto-update availability
*  **Instance Method**: `updateAvailability()` on book
*  **Aggregation**: Borrow summary grouped by book
*  **Duplicate ISBN Handling**: Responds with custom error message

---

### 📬 Contact

By **Arafat Rased** — Full Stack Developer


---