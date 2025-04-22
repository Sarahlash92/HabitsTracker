# HabitTracker

<img width="1496" alt="image" src="https://github.com/user-attachments/assets/24ed0dde-2f93-42bc-9d05-1ca8fe5379eb" />

Coding partners test job
- this is my approach to building a habit tracking app, bittersweet journey I have to say, so far I was able to comply to what is required and here is my take on the task;
  
## 🛠 Tech Stack

### ✨ Frontend
-  **Vite**
- **Tailwind CSS** for styling
- **React Three Fiber** + **Drei** for 3D visuals (a minor feature just to keep things fun)
- **React Icons**
- **Date-fns** for date utilities

### 🔧 Backend
- **Node.js** + **Express**
- **TypeScript**
- **Inversify** for dependency injection
- **UUID** for unique habit IDs
- **File-based JSON storage** (for demo simplicity)
- **CORS + Dotenv**

## 🌍 API Endpoints (Backend)

All responses are JSON. Base URL: `http://localhost:8080`

| Method | Endpoint                 | Description                           |
|--------|--------------------------|---------------------------------------|
| GET    | `/habits`                | Get all habits                        |
| POST   | `/habits`                | Create a new habit                    |
| PATCH  | `/habits/:id/toggle`     | Toggle habit completion for today     |
| DELETE | `/habits/:id`            | Delete a habit by ID                  |

---

### Getting Started

to run the project on local; 

1. Clone the repo
2. Start the Backend
cd backend
npm install
npm run start:dev

--- this took a while but there is an error happening on npm run start (it took me a long time figuring out unfourtently I gave up :( )

4. Start the Frontend
cd ../frontend
npm install
npm run dev

###Deployment Notes
full-stack deployment, consider using Render (for backend) and Vercel or Netlify (for frontend), or go all in with Railway or Heroku.

### Skipped segments 
-- the main thing I skipped was Authentication (Mock), I think I put more time on frontend than I should have, leaving me not so much time diving into authentication 
-- using useCallback on react, so far I did not have the need to use it, I hope that would be ok.

### env varialbes
on the frondend create .env file add : 
VITE_API_BASE_URL = http://localhost:8080

on the backend also create .env and add : 
STORAGE=file
PORT=8080
CORS_ORIGIN=http://localhost:5173