# Birthday Playtopia - MongoDB Contact Form Setup

## Prerequisites
- Docker running with MongoDB
- MongoDB Compass installed
- Node.js installed

## Setup Instructions

### Step 1: Start MongoDB with Docker

If you don't have MongoDB running yet, start it with:

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

To check if MongoDB is running:
```bash
docker ps
```

### Step 2: Install Backend Dependencies

Navigate to your project directory and install the required packages:

```bash
cd /home/ayande/Documents/Birthday-playtopia
npm install
```

### Step 3: Start the Backend Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

You should see:
```
✅ Connected to MongoDB successfully!
🚀 Server is running on http://localhost:3000
📊 MongoDB URI: mongodb://localhost:27017/birthday-playtopia
💾 Database: birthday-playtopia
📁 Collection: contacts
```

### Step 4: Open Your Website

Open `index.html` in your browser or use a local server like Live Server extension in VS Code.

### Step 5: Test the Contact Form

1. Fill out the contact form on your website
2. Click "Send Message"
3. You should see a success message

### Step 6: View Data in MongoDB Compass

1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Navigate to database: `birthday-playtopia`
4. Click on collection: `contacts`
5. You'll see all submitted contact form entries

## API Endpoints

### Submit Contact Form
- **URL**: `POST http://localhost:3000/api/contact`
- **Body**: 
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "subject": "Inquiry",
  "message": "Hello, I have a question..."
}
```

### Get All Contacts (Admin)
- **URL**: `GET http://localhost:3000/api/contacts`
- **Response**: Returns all contact form submissions

## Troubleshooting

### MongoDB Connection Error
- Make sure Docker is running: `docker ps`
- Restart MongoDB container: `docker restart mongodb`

### Port Already in Use
If port 3000 is busy, edit `server.js` and change:
```javascript
const PORT = 3000; // Change to another port like 3001
```

### CORS Errors
The server is configured with CORS enabled. If you still face issues, make sure you're accessing the HTML file properly.

## Database Schema

Each contact entry contains:
- `name` (String, required)
- `email` (String, required)
- `phone` (String, required)
- `subject` (String, required)
- `message` (String, required)
- `createdAt` (Date, auto-generated)

## Files Created/Modified

1. **server.js** - Backend server with Express and MongoDB
2. **package.json** - Node.js dependencies
3. **assets/js/script.js** - Updated with form submission logic
4. **index.html** - Updated contact form with IDs

## Next Steps

- Add email notifications when form is submitted
- Create an admin panel to view/manage contacts
- Add form validation on the backend
- Implement rate limiting to prevent spam
