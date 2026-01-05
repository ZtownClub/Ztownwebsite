# zTown - Hyperlocal Fashion Delivery Platform

> India's first hyperlocal fashion delivery platform bringing your favorite brands to your doorstep in minutes.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   cd backend && npm install
   ```

2. **Setup MongoDB**
   - **Quick**: Use MongoDB Atlas (free) - See [MONGODB_SETUP.md](MONGODB_SETUP.md)
   - **Local**: Install MongoDB Community Edition

3. **Configure backend**
   ```bash
   cd backend
   # Update .env with your MongoDB connection string
   ```

4. **Start servers**
   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend
   cd backend
   npm run dev
   ```

5. **Open browser**
   - Frontend: http://localhost:8080
   - Backend: http://localhost:5000

📖 **Detailed guide**: [QUICK_START.md](QUICK_START.md)

---

## 📁 Project Structure

```
zTown-Website/
├── src/                    # Frontend (React + TypeScript + Vite)
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components (Home, About, Contact, Partner)
│   ├── services/          # API service layer
│   └── ...
├── backend/               # Backend (Node.js + Express + MongoDB)
│   ├── config/           # Database configuration
│   ├── controllers/      # Request handlers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   └── server.js         # Main server
└── Documentation files
```

---

## ✨ Features

### Frontend
- 🎨 Modern UI with Tailwind CSS & shadcn/ui
- 🌓 Dark/Light theme support
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety

### Backend
- 🔌 RESTful API with Express
- 🗄️ MongoDB database integration
- ✅ Form validation
- 🛡️ Error handling
- 🔄 CORS enabled

### Pages
- 🏠 **Home** - Hero section, features, how it works
- 📍 **Launch Zones** - Interactive map of service areas
- 🤝 **Partner With Us** - Partner application form
- ℹ️ **About Us** - Company story and values
- 📧 **Contact Us** - Contact form

---

## 🔌 API Endpoints

### Contact Form
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all contacts

### Partner Applications
- `POST /api/partners` - Submit partner application
- `GET /api/partners` - Get all partners
- `GET /api/partners?status=pending` - Filter by status

📖 **Full API docs**: [backend/README.md](backend/README.md)

---

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide Icons

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

---

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 5 minutes
- **[INSTALLATION.md](INSTALLATION.md)** - Complete installation guide
- **[MONGODB_SETUP.md](MONGODB_SETUP.md)** - MongoDB setup (detailed)
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - What was built
- **[backend/README.md](backend/README.md)** - API documentation
- **[backend/SETUP.md](backend/SETUP.md)** - Backend setup details

---

## 🧪 Testing

### Test Backend
```bash
curl http://localhost:5000
```

### Test Contact Form
```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Testing"}'
```

### Test Partner Form
```bash
curl -X POST http://localhost:5000/api/partners \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"partner@test.com","brandName":"Brand","contactNumber":"9876543210","storeAddress":"Address"}'
```

---

## 🗄️ Database Schema

### Contact
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  status: 'new' | 'read' | 'replied',
  createdAt: Date
}
```

### Partner
```javascript
{
  name: String,
  email: String (unique),
  brandName: String,
  contactNumber: String,
  website: String,
  storeAddress: String,
  status: 'pending' | 'approved' | 'rejected',
  createdAt: Date
}
```

---

## 🌍 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ztown
NODE_ENV=development
```

---

## 🚀 Deployment

### Frontend
- Vercel (recommended)
- Netlify
- GitHub Pages

### Backend
- Heroku
- Railway
- Render
- AWS/GCP/Azure

### Database
- MongoDB Atlas (recommended for production)

---

## 🤝 Contributing

This is a private project for zTown. For internal contributions:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit pull request

---

## 📝 License

ISC

---

## 📧 Contact

- Email: connectztown@gmail.com
- Phone: 96930 63807, 9929894791, 97580 76000
- Location: Gurugram, Haryana, India

---

## 🎯 Current Status

✅ Frontend fully functional
✅ Backend API implemented
✅ MongoDB integration complete
✅ Contact form working
✅ Partner application working
✅ All pages responsive
✅ Dark/Light theme
✅ Documentation complete

---

## 🔜 Future Enhancements

- [ ] Admin dashboard
- [ ] Email notifications
- [ ] User authentication
- [ ] Product catalog
- [ ] Order management
- [ ] Payment integration
- [ ] Real-time tracking

---

**Built with ❤️ for zTown - Redefining Local Fashion Commerce**
# Ztownwebsite
# Ztownwebsite
