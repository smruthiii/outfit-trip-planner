# 👙 Outfit Trip Planner

Plan your travel outfits, events, and packing lists — all in one place.

Built with **Next.js (React, App Router)**, **TailwindCSS + shadcn/ui**, **React Query**, **FastAPI**, and **SQLite**.

![MIT License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-App_Router-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-success)

---

## ✨ Features

👉 Features currently implemented:

- [x] Create a new Trip (title + description)
- [x] View list of created Trips

---

## 📃 Features in Progress

🔜 Features coming soon:

- [ ] View Trip Details (per Trip ID)
- [ ] Add Events (outfit plans) to Trips
- [ ] Generate a packing list based on outfit entries
- [ ] Improve mobile responsiveness and UI polish
- [ ] Add event editing and deleting
- [ ] Add authentication (optional bonus)

---

## 💪 Tech Stack

| Frontend | Backend |
|:---|:---|
| Next.js (App Router) | FastAPI |
| React Query | SQLite (local dev) |
| TailwindCSS + shadcn/ui | SQLAlchemy |
| React Hook Form | Pydantic |

---

## 🚀 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/outfit-trip-planner.git
cd outfit-trip-planner
```

### 2. Set up the Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```
Runs the frontend at [http://localhost:3000](http://localhost:3000).

---

### 3. Set up the Backend (FastAPI)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
./venv/bin/uvicorn app.main:app --reload --port 8000
```
Runs the backend at [http://localhost:8000](http://localhost:8000).

**Note**: Make sure to activate the virtual environment (`source venv/bin/activate`) before running any Python commands in the backend directory. To deactivate the virtual environment when you're done, simply type `deactivate`.

---

## 📦 Folder Structure

```
outfit-trip-planner/
├── frontend/      # Next.js (App Router) frontend
│   └── src/
│       ├── app/   # Pages and layouts
│       ├── components/ # Reusable components
│       └── lib/   # API helpers
├── backend/       # FastAPI backend
│   └── app/
│       ├── models.py
│       ├── schemas.py
│       ├── crud.py
│       └── main.py
└── README.md
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

Built with ❤️ by [Smruthi Srikumar](https://github.com/smruthiii/).

---