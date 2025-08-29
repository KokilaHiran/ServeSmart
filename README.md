# Express TypeScript API

A robust, scalable API designed to streamline user and customer management for restaurants. This solution accelerates development, simplifies integration with modern restaurant applications, and enables efficient handling of staff and customer data to enhance operational efficiency and customer experience.

## Features
- User and Customer management endpoints
- MongoDB integration via Mongoose
- Environment config with dotenv
- Modular route/controller/service/DAO structure
- Error handling and status codes

## Project Structure
```
app-1/
├── package.json
├── tsconfig.json
├── .env
├── src/
│   ├── app.ts                # Entry point
│   ├── config/               # App configuration
│   ├── common/               # Response handler, constants
│   ├── controller/           # Controllers (business logic)
│   ├── dao/                  # Data access objects
│   ├── interface/            # TypeScript interfaces & enums
│   ├── loader/               # Loaders (e.g., MongoDB)
│   ├── models/               # Mongoose models
│   ├── routes/               # Express routes
│   ├── service/              # Service layer
```

## Setup
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Configure environment:**
   - Copy `.env.example` to `.env` and set your variables (e.g., `DB_URL`, `PORT`)
3. **Run in development:**
   ```sh
   npm run dev
   ```

## API Endpoints
### User
- `POST   /api/user`         - Create a user
- `GET    /api/user`         - Test route (returns a message)
- `GET    /api/user/:email`  - Get user by email

### Customer
- `GET    /api/customer`     - Get customer (sample data)

### Greeting
- `GET    /api/greeting`     - Greeting route (sample)

## Example Request (User Creation)
POST `http://localhost:5000/api/user`
```json
{
  "name": "Pasindu",
  "email": "pasindu@gmail.com",
  "password": "12345",
  "type": "cashier"
}
```

## Scripts
- `npm run dev`   - Start with nodemon + ts-node
- `npm run build` - Compile TypeScript
- `npm start`     - Run compiled JS

## License
ISC
