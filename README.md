# MedAssist - Gastro Care

MedAssist is a modern web application built with Next.js designed for gastrointestinal health assistance. It provides users with symptom checking, medicine information, AI-powered chat support, and secure user authentication.

## Features

- **Symptom Checker** (/symptoms): Input symptoms to get potential diagnoses and recommendations.
- **Medicine Database** (/medicine): Search and view details on gastrointestinal medications.
- **AI Chat** (/chat): Interactive chatbot for health queries and advice.
- **User Dashboard** (/home): Personalized health tracking and history.
- **Authentication** (/auth/login): Secure Supabase-powered login and user management.
- **Responsive Design**: Built with TailwindCSS for mobile and desktop.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TailwindCSS 4
- **Backend/Auth**: Supabase (Database, Authentication)
- **Styling**: TailwindCSS with PostCSS

## Prerequisites

- Node.js 20 or higher
- [Supabase Account](https://supabase.com) - Create a project to get your URL and anon key.

## Quick Start

1. Clone the repo:
   ```bash
   git clone <your-repo>
   cd med-assist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` in root and add your Supabase credentials:
   ```
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. Build for production:
   ```bash
   npm run build
   npm run start
   ```

## Project Structure

```
med-assist/
├── app/
│   ├── component/     # Reusable components (Navbar, LogIn)
│   ├── auth/          # Authentication pages
│   ├── chat/          # Chat interface
│   ├── home/          # User dashboard
│   ├── medicine/      # Medicine lookup
│   ├── symptoms/      # Symptom checker
│   ├── globals.css    # Tailwind styles
│   └── layout.js      # Root layout
├── backend/           # Supabase client
├── public/            # Static assets
├── package.json       # Dependencies
├── next.config.mjs    # Next.js config
├── tailwind.config.js # Tailwind config (if custom)
└── README.md
```

## Scripts

- `npm run dev`: Start dev server
- `npm run build`: Build production
- `npm run start`: Production server
- `npm run lint`: ESLint check

## Deployment

Easiest on [Vercel](https://vercel.com) (creators of Next.js):

1. Push to GitHub.
2. Import to Vercel.
3. Add Supabase env vars in Vercel dashboard.

See [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Pull requests welcome! For major changes, open an issue first.

## License

MIT

