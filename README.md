# Next.js Authentication App

A modern authentication system built with Next.js 14, featuring a clean and responsive UI with Tailwind CSS.

## Features

- 🔐 User Authentication (Sign In/Sign Up)
- 👤 User Profile Management
- 🎨 Modern UI with Tailwind CSS
- 🔄 Client-side Navigation with Next.js App Router
- 🎭 Smooth Animations with Framer Motion
- 📱 Fully Responsive Design

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** React Icons
- **State Management:** React Context
- **Authentication:** Custom implementation with js-cookie
- **Language:** TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd sign-in-sign-out
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your environment variables:
```env
# Add your environment variables here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context for state management
│   ├── profile/         # Profile page
│   ├── sign-in/         # Sign in page
│   ├── sign-up/         # Sign up page
│   └── page.tsx         # Home page
├── public/             # Static assets
└── middleware.ts      # Authentication middleware
```

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
