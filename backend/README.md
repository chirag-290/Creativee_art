# CreativeArt Backend

Express.js backend API with MongoDB for the CreativeArt platform.

## 🚀 Quick Start

```bash
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

## 📦 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🗄️ Database Models

### Package
- name, price, duration
- posts, stories, followers
- features array
- description, featured, active

### Contact
- name, email, phone
- service, message
- status (new, contacted, in-progress, completed)
- notes

### Portfolio
- title, category, description
- image, tags, url
- featured, active

## 🔌 API Routes

### Public Routes
- GET /api/packages
- GET /api/packages/:id
- POST /api/contact
- GET /api/portfolio
- GET /api/portfolio/:id

### Admin Routes (no auth yet)
- POST /api/packages
- PUT /api/packages/:id
- DELETE /api/packages/:id
- GET /api/contact
- PUT /api/contact/:id
- POST /api/portfolio
- PUT /api/portfolio/:id
- DELETE /api/portfolio/:id

## 🔒 Security (To be implemented)

- JWT authentication
- Rate limiting
- Input validation
- Password hashing

## 📧 Email (To be implemented)

Configure nodemailer in .env for contact form notifications.

## 🚀 Future Features

- Shopping cart
- Payment integration
- Order management
- User authentication
- File uploads
- Email notifications

## 🏗️ Architecture

**MVC Pattern:**
- **Models** - MongoDB schemas with Mongoose
- **Controllers** - Business logic
- **Routes** - API endpoints

## 🌐 Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/creative-art
JWT_SECRET=your_secret_key
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

## 📡 Health Check

GET /api/health - Check if server is running


