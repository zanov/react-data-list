# React Data List Application

A single-page application (SPA) built with React and Redux for listing and viewing transaction data. The app fetches data from a JSON file via an Express.js server and provides filtering and sorting capabilities.

## Features

- **Data Listing**: Displays transaction data in a sortable table.
- **Filtering**: Advanced filtering by date range and multiple criteria (status, merchant_name, etc.).
- **Details View**: Detailed view for each transaction.
- **Sorting**: Sortable columns include status, created_at, merchant_name, type, error_class, card_holder, card_number, and amount.
- **Formatting**: Proper formatting for dates (YY-MM-DD HH:MM), transaction types, error classes, and amounts.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zanov/react-data-list.git
   cd react-data-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the application (this will run both the React app and the Express server concurrently):

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` (or the port specified in the webpack config).

The Express server will run on port 3001, serving the API endpoints.

## API Endpoints

- `GET /api/get-data`: Retrieves all transaction data.
- `GET /api/data-items/:id`: Retrieves a specific transaction by ID.

## Running Tests

Execute the test suite:

```bash
npm test
```

## Project Structure

- `src/`: React application source code
  - `components/`: Reusable UI components
  - `pages/`: Page components
  - `redux/`: Redux store, actions, and reducers
  - `utils/`: Utility functions and constants
  - `interfaces/`: TypeScript interfaces
  - `tests/`: Unit tests
- `server/`: Express.js server
  - `data.json`: Transaction data
  - `dataController.js`: Data access logic
  - `express.js`: Server setup
- `public/`: Static assets
- `webpack.config.js`: Webpack configuration

## Technologies Used

- **Frontend**: React, Redux, TypeScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Build Tool**: Webpack
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint, Prettier

## Data SDK

The application uses a DataController class (acting as an SDK) to manage data access. This class provides methods to retrieve all data and individual items, ensuring controlled access to the data source.

## Filtering and Sorting

- **Date Range Filtering**: Filter transactions by creation date range.
- **Column Filtering**: Filter by various columns with match types (equal, starts with, ends with, contains).
- **Sorting**: Click on sortable column headers to sort data.

## Development

- Use `npm run start-react` to run only the React development server.
- Use `npm run start-express` to run only the Express server.
- Linting and formatting are handled by ESLint and Prettier.
