# Express Pug with Tailwind CSS

A professional web application using Express.js with Pug templating engine and Tailwind CSS for styling.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:

```powershell
git clone <repository-url>
cd express-pug
```

2. Install dependencies:

```powershell
npm install
```

## Development Workflow

### Building and Running the Application

The application uses TypeScript and Tailwind CSS. Follow these steps to run the application in development mode:

#### 1. Building CSS

To build the CSS files (converts Tailwind directives to actual CSS):

```powershell
npm run build:css
```

This command processes the Tailwind CSS file located at `public/styles/tailwind.css` and outputs the compiled CSS to `public/styles/global.css`.

#### 2. Starting the Development Server

To start the development server with hot-reloading:

```powershell
npm run dev
```

This runs the application using nodemon, which will automatically restart the server whenever you make changes to the files.

### Full Build Process

To build the application for production:

1. Build the CSS:

```powershell
npm run build:css
```

2. Compile TypeScript:

```powershell
npm run build
```

3. Start the production server:

```powershell
npm start
```

## Project Structure

- `index.ts` - Main application entry point
- `views/` - Pug template files
- `public/` - Static files (CSS, JS, images)
  - `styles/tailwind.css` - Source Tailwind CSS file
  - `styles/global.css` - Compiled CSS file

## Tailwind CSS Configuration

The project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

If you need to modify the Tailwind CSS configuration:

1. Edit `tailwind.config.js`
2. Rebuild the CSS:

```powershell
npm run build:css
```

## Adding New Pages

To add a new page:

1. Create a new Pug template in the `views` directory
2. Add a route in `index.ts` to render the new template

Example route:

```typescript
app.get('/new-page', (req, res) => {
  res.render('new-page');
});
```

## Deployment

This project can be deployed to Vercel with minimal configuration. A `vercel.json` file is included in the repository.

To deploy to Vercel:

```powershell
vercel
```

---

## Additional Commands

- `npm run build` - Builds the TypeScript files
- `npm run start` - Starts the production server
- `npm run build:css` - Builds the CSS files
