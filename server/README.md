## FwdTech Server

This is the backend server for FwdTech, a simple blog site similar to TechCrunch. It handles API requests and serves content for the frontend.

### Features
- RESTful API for managing blog articles and categories.
- MongoDB Atlas as the database.
- Express.js as the backend framework.
- JWT authentication for secure access.
- Cloud storage integration for media files (to be implemented).

### Folder Structure
```
server/
│── controllers/    # Handles request logic
│── models/         # Mongoose schemas
│── routes/         # API route definitions
│── middleware/     # Authentication and other middleware
│── config/         # Configuration files
│── utils/          # Utility functions
│── .env            # Environment variables (not committed)
│── index.js        # Entry point
│── package.json    # Dependencies and scripts
```

### Installation

```sh
git clone https://github.com/sssairohit/fwdtech.git
cd fwdtech/server
npm install
```

### Environment Variables
Create a `.env` file in the root of the `server/` directory and configure the following:

```env
PORT=5001
JWT_SECRET=your_jwt_secret
```

### Running the Server

```sh
npm start
```

### API Endpoints

#### Articles
- `GET /api/articles` - Fetch all articles
- `GET /api/articles/:id` - Fetch a single article
- `POST /api/articles` - Create a new article
- `PUT /api/articles/:id` - Update an article
- `DELETE /api/articles/:id` - Delete an article

#### Users
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get authenticated user details

### CMS Design
The CMS (Content Management System) is structured as follows:

- **Admin Panel**: Admins can create, edit, and delete content.
- **Article Management**: CRUD functionality for blog posts.
- **Media Storage**: Cloud integration for images and videos (planned feature).
- **Dashboard**: Overview of published articles and content performance.

### MongoDB Structure
#### Articles Collection
```json
{
  "_id": ObjectId,
  "title": String,
  "content": String,
  "author": String,
  "createdAt": Date,
  "updatedAt": Date
}
```

### Future Enhancements
- Add support for third-party storage (AWS S3, Cloudinary, etc.).
- Improve article search and filtering.
- Implement comment and like system.

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License
This project is licensed under the MIT License.