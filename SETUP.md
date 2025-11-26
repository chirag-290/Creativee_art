# CreativeArt - Setup Guide

Quick setup guide to get your CreativeArt website up and running.

## Prerequisites

Make sure you have these installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** (optional)

## Step-by-Step Setup

### 1. Install MongoDB (if not already installed)

**Option A: Local MongoDB**
- Download and install MongoDB Community Edition
- Start MongoDB service: `mongod`

**Option B: MongoDB Atlas (Cloud)**
- Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Replace the MONGODB_URI in backend/.env

### 2. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# The .env file should already exist with default values
# Edit backend/.env if needed (especially MONGODB_URI)

# Start the backend server
npm run dev
```

You should see:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

### 3. Frontend Setup

Open a **new terminal window**:

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```

You should see:
```
VITE ready in XXX ms
➜  Local:   http://localhost:3000/
```

### 4. Open Your Browser

Visit: **http://localhost:3000**

You should see the CreativeArt homepage! 🎉

## Troubleshooting

### MongoDB Connection Error

**Problem:** Cannot connect to MongoDB

**Solution:**
1. Make sure MongoDB is running: `mongod`
2. Check your MONGODB_URI in `backend/.env`
3. For Atlas, make sure to whitelist your IP address

### Port Already in Use

**Problem:** Port 3000 or 5000 is already in use

**Solution:**
1. Kill the process using the port:
   - Mac/Linux: `lsof -ti:3000 | xargs kill` or `lsof -ti:5000 | xargs kill`
   - Windows: `netstat -ano | findstr :3000` then `taskkill /PID [PID] /F`
2. Or change the port in the configuration files

### Dependencies Installation Error

**Problem:** npm install fails

**Solution:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm cache clean --force`
3. Run `npm install` again

## Testing the Setup

### Test Backend API

Open browser or use curl:
```bash
# Health check
curl http://localhost:5000/api/health

# Get packages (will be empty initially)
curl http://localhost:5000/api/packages
```

### Test Frontend

1. Navigate through all pages:
   - Home
   - Packages
   - Portfolio
   - About
   - Contact

2. Try the contact form

3. Check mobile responsiveness (resize browser or use dev tools)

## Next Steps

### Add Sample Data (Optional)

You can add sample packages via API:

```bash
curl -X POST http://localhost:5000/api/packages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "One Day Pack",
    "price": 9,
    "duration": "One Day",
    "posts": 1,
    "stories": 3,
    "followers": "200+",
    "features": ["1 Permanent Post", "3 Instagram Stories"],
    "description": "Perfect for testing our service",
    "featured": false
  }'
```

### Configure Email (Optional for now)

To enable contact form email notifications:

1. Edit `backend/.env`
2. Add your SMTP credentials:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

For Gmail, you need to create an "App Password":
- Go to Google Account Settings
- Security → 2-Step Verification
- App passwords → Generate

### Deploy to Production

When ready to deploy:

**Frontend:**
- Vercel, Netlify, or any static hosting
- Run `npm run build` to create production build

**Backend:**
- Heroku, Railway, Render, or DigitalOcean
- Set environment variables
- Change NODE_ENV to "production"

**Database:**
- Use MongoDB Atlas for production

## Development Tips

### Hot Reload
- Frontend: Saves automatically reload
- Backend: Using nodemon, saves automatically restart server

### Code Structure
- **Frontend components** in `frontend/src/components`
- **Frontend pages** in `frontend/src/pages`
- **Backend routes** in `backend/routes`
- **Backend controllers** in `backend/controllers`
- **Database models** in `backend/models`

### Adding New Features

**Frontend:**
1. Create component in `src/components` or page in `src/pages`
2. Add route in `App.jsx` if needed
3. Style in corresponding `.css` file

**Backend:**
1. Create model in `models/`
2. Create controller in `controllers/`
3. Create routes in `routes/`
4. Import routes in `server.js`

## Need Help?

Check the main README.md or contact support at Forartpromotion@gmail.com

Happy coding! 🚀


