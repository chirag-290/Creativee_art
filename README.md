# CreativeArt - Art Promotion & Web Design Platform

A modern full-stack MERN application for art promotion services and freelance web design showcase.

## 🎨 Features

### Current Features (Frontend)
- **Art Promotion Services** - Showcase engagement group packages
- **4 Pricing Tiers**:
  - One Day Pack ($9) - 1 post, 3 stories, 200+ followers
  - Weekly Pack ($25) - 2 posts, 10 stories, 1000+ followers
  - 15 Days Pack ($49) - 4 posts, 20 stories, 3000+ followers
  - Monthly Pack ($69) - 8 posts, 40 stories, 5000+ followers
- **Portfolio Showcase** - Display demo art websites
- **Contact Form** - Get in touch functionality
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Beautiful gradients and animations

### Backend (MVC Structure - Ready for Future Expansion)
- **RESTful API** with Express.js
- **MongoDB** database integration
- **MVC Architecture** (Models, Views, Controllers)
- **Ready for**:
  - Shopping cart functionality
  - Payment integration (Stripe/PayPal)
  - User authentication
  - Order management

## 🚀 Tech Stack

**Frontend:**
- React 18
- React Router v6
- Vite
- CSS3 (Custom styling)
- Axios for API calls

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication (ready to implement)
- Nodemailer for emails

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install

# Copy .env.example to .env and configure
cp .env.example .env

# Edit .env with your configuration
# - MongoDB URI
# - JWT Secret
# - Email credentials (optional for now)

npm run dev
```

The backend will run on `http://localhost:5000`

## 🗂️ Project Structure

```
Creative_art/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Packages.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── packageController.js
    │   ├── contactController.js
    │   └── portfolioController.js
    ├── models/
    │   ├── Package.js
    │   ├── Contact.js
    │   └── Portfolio.js
    ├── routes/
    │   ├── packageRoutes.js
    │   ├── contactRoutes.js
    │   └── portfolioRoutes.js
    ├── server.js
    └── package.json
```

## 🔌 API Endpoints

### Packages
- `GET /api/packages` - Get all packages
- `GET /api/packages/:id` - Get single package
- `POST /api/packages` - Create package (admin)
- `PUT /api/packages/:id` - Update package (admin)
- `DELETE /api/packages/:id` - Delete package (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PUT /api/contact/:id` - Update contact status (admin)

### Portfolio
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio/:id` - Get single portfolio item
- `POST /api/portfolio` - Create portfolio item (admin)
- `PUT /api/portfolio/:id` - Update portfolio item (admin)
- `DELETE /api/portfolio/:id` - Delete portfolio item (admin)

## 🎯 Upcoming Features

- [ ] Shopping cart functionality
- [ ] Payment integration (Stripe/PayPal)
- [ ] User authentication and authorization
- [ ] Admin dashboard
- [ ] Order management system
- [ ] Email notifications
- [ ] Image upload functionality
- [ ] Blog/News section
- [ ] Analytics dashboard

## 🎨 Design Features

- Modern gradient backgrounds
- Smooth animations
- Hover effects
- Responsive grid layouts
- Mobile-friendly navigation
- Beautiful typography (Playfair Display + Poppins)
- Custom color scheme with CSS variables

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

This is a private project for CreativeArt services. For any questions or suggestions, please contact the team.

## 📄 License

MIT License - see LICENSE file for details

## 👥 Support

For support, email: Forartpromotion@gmail.com

---

**Note:** This is version 1.0 with frontend focus. Backend API is prepared for future cart and payment integration.


