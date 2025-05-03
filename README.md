# Bike Servicing MANAGEMENT API

## Overview

The Bike Servicing Management API is a RESTful solution designed to streamline operations related to customers, their bikes, and service tracking. It offers a full set of endpoints to handle CRUD operations for customer profiles, bike details, and service history, while also providing features to monitor pending or overdue services.

## Live API

The API is hosted on Vercel and can be accessed via the following link:

🔗 []()

> **Note**: This is a REST API and can be tested using tools like Postman or integrated with a frontend application.

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Error Handling**: Consistent and structured error responses
- **API Testing**: Postman

## Getting Started

1. **Clone the repository**:

   ```bash

   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL=
   PORT=
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

## Features

### Customer Management

- **Add a Customer**

- **Retrieve All Customers**
- **Retrieve a Customer by ID**
- **Update Customer Details**

- **Delete a Customer**

### Bike Management

- **Add a Bike**

- **Retrieve All Bikes**
- **Retrieve a Bike by ID**

### Service Management

- **Create a Service Record**

- **Retrieve All Service Records**
- **Retrieve a Service Record by ID**

- **Mark a Service as Completed**

- **Retrieve Pending or Overdue Services**
