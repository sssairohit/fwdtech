## Server

### Overview
The backend of FwdTech, built with Node.js and Express, serves the API endpoints for managing blog posts, user interactions, and other backend logic. It connects to MongoDB Atlas for data persistence and ensures smooth integration with the React frontend.

### Features
- RESTful API with Express.js
- MongoDB Atlas for data storage
- Authentication and authorization (future feature)
- CRUD operations for posts and users
- Rate limiting and security enhancements

### Project Structure
```plaintext
server/
├── controllers/    # Handles request logic
├── models/        # Mongoose schemas
├── routes/        # Express routes
├── middleware/    # Authentication, validation
├── config/        # Database and environment config
├── .env           # Environment variables
├── server.js      # Main entry point
```

### Installation
```bash
cd server
npm install
```

### Environment Variables
Create a `.env` file in the `server/` directory with the following:
```plaintext
PORT=5001
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
```

### Running the Server
```bash
npm start
```

For development with hot-reloading:
```bash
npm run dev
```

### API Endpoints
- `GET /api/posts` - Fetch all blog posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Fetch a single post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Deployment
1. Set up environment variables on the hosting provider.
2. Build and deploy using a cloud platform like Render, Vercel (for frontend), or AWS.
3. Use a process manager like PM2 for production.

### Future Enhancements
- WebSocket integration for real-time updates
- User authentication with JWT or OAuth
- Admin panel for content moderation