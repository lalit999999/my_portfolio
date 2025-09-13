# My Fusion App

## Overview

My Fusion App is a production-ready full-stack React application template that integrates an Express server. It features a modern tech stack including TypeScript, Vite, and TailwindCSS, making it suitable for rapid development and deployment.

## Tech Stack

- **Frontend**: React 18, React Router 6, TypeScript, Vite, TailwindCSS 3
- **Backend**: Express server
- **Testing**: Vitest
- **UI**: Radix UI, TailwindCSS 3, Lucide React icons

## Project Structure

```
my-fusion-app
├── client
│   ├── pages
│   │   └── Index.tsx
│   ├── components
│   │   └── ui
│   │       └── Button.tsx
│   ├── App.tsx
│   └── global.css
├── server
│   ├── index.ts
│   └── routes
│       └── demo.ts
├── shared
│   └── api.ts
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PNPM (recommended package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-fusion-app
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

### Development

To start the development server (both client and server):
```
pnpm dev
```

### Building for Production

To create a production build:
```
pnpm build
```

### Deployment

This application is configured for deployment on Netlify. Ensure you have a `netlify.toml` file in the root directory with the necessary configurations.

## Features

- **SPA Routing**: Utilizes React Router 6 for seamless navigation.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Express API**: Integrated backend for handling requests.
- **Type Safety**: Shared TypeScript interfaces for consistent data handling.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.