# The Wild Oasis — Website

A luxury cabin booking website for **The Wild Oasis**, a fictional hotel nestled in the Italian Dolomites. Guests can browse cabins, check availability, make reservations, and manage their profile — all through a modern, full-stack Next.js application.

Built as part of [Jonas Schmedtmann's Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/) (Section 21).

---

## Features

- **Browse cabins** — View all luxury cabins with images, pricing, and capacity details
- **Filter by capacity** — Narrow results to small (2–3), medium (4–7), or large (8–10) cabins
- **Cabin details & booking** — Interactive date picker with real-time availability, price calculation, and reservation form
- **Google authentication** — Sign in with Google via NextAuth; new guests are automatically registered in the database
- **Guest account area** — Protected routes for managing profile and reservations
- **Profile management** — Update nationality and national ID for a smoother check-in
- **Reservation management** — View, edit, and delete your bookings
- **Responsive UI** — Mobile-friendly navigation with a drawer menu on smaller screens
- **Performance** — Static generation for cabin pages, Suspense boundaries, and ISR on the About page

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| UI | [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Material UI](https://mui.com/) |
| Database | [Supabase](https://supabase.com/) (PostgreSQL) |
| Authentication | [NextAuth.js v5](https://authjs.dev/) (Google OAuth) |
| Date handling | [date-fns](https://date-fns.org/), [react-day-picker](https://react-day-picker.js.org/) |
| Icons | [Heroicons](https://heroicons.com/) |

---

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- A [Supabase](https://supabase.com/) project with the required tables and seed data
- A [Google Cloud](https://console.cloud.google.com/) OAuth 2.0 client (for sign-in)

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase (server-side — use service role key for SUPABASE_KEY)
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_service_role_key

# Or use the public publishable key names instead:
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
# NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

# NextAuth
AUTH_SECRET=your_random_secret_string
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

| Variable | Description |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_KEY` | Supabase **service role** key (recommended for server-side; bypasses RLS since auth is handled by NextAuth, not Supabase Auth) |
| `NEXT_PUBLIC_SUPABASE_URL` | Alternative to `SUPABASE_URL` |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Alternative to `SUPABASE_KEY` (Supabase publishable key) |
| `NEXT_PUBLIC_SUPABASE_KEY` | Legacy anon key name (still supported) |
| `AUTH_SECRET` | Random string used to encrypt session tokens ([generate one](https://generate-secret.vercel.app/32)) |
| `AUTH_GOOGLE_ID` | Google OAuth client ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth client secret |

### Google OAuth setup

1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the Google+ API (or Google Identity services).
3. Create OAuth 2.0 credentials (Web application).
4. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
5. Copy the Client ID and Client Secret into `.env.local`.

### Supabase setup

1. Run the schema in **Supabase → SQL Editor**:

   [`supabase/schema.sql`](supabase/schema.sql)

2. Create two **public** storage buckets in **Dashboard → Storage**:
   - `cabin-images` — cabin photos
   - `avatars` — guest profile photos (optional)

3. Seed cabin data via the course CSV/resources or the Supabase Table Editor.

#### Database tables (camelCase columns)

| Table | Purpose |
|---|---|
| `cabins` | Cabin listings (`name`, `maxCapacity`, `regularPrice`, `discount`, `image`, `description`) |
| `guests` | Guest profiles (`fullName`, `email`, `nationality`, `nationalID`, `countryFlag`) |
| `bookings` | Reservations (`startDate`, `endDate`, `numNights`, `numGuests`, `cabinPrice`, `extrasPrice`, `totalPrice`, `status`, `hasBreakfast`, `isPaid`, `observations`, `cabinId`, `guestId`) |
| `settings` | Hotel rules (`minBookingLength`, `maxBookingLength`, `maxGuestsPerBooking`, `breakFastPrice`) |

New guests are created on first Google sign-in with empty profile fields; nationality and national ID are filled in later on the profile page.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
app/
├── _components/       # Reusable UI components
├── _lib/              # Data layer, auth, and server actions
│   ├── actions.js     # Server Actions (bookings, profile, auth)
│   ├── auth.js        # NextAuth configuration
│   ├── data-service.js# Supabase data fetching
│   └── supabase.js    # Supabase client
├── _styles/           # Global CSS (Tailwind)
├── account/           # Protected guest area
│   ├── profile/       # Update guest profile
│   └── reservations/  # View & manage bookings
├── api/auth/          # NextAuth API route
├── cabins/            # Cabin listing & detail pages
├── about/             # About page
├── login/             # Sign-in page
├── layout.js          # Root layout
└── page.js            # Home page
middleware.js          # Protects /account routes
public/                # Static assets
```

---

## Key Concepts Demonstrated

This project covers several important Next.js and React patterns:

- **App Router** — File-based routing, layouts, loading and error UI
- **Server Components & Server Actions** — Data fetching and mutations on the server
- **Authentication** — NextAuth middleware protecting `/account` routes
- **Static & dynamic rendering** — `generateStaticParams`, ISR, and Suspense
- **Context API** — Shared reservation state (selected dates, guest count)
- **Optimistic UI patterns** — Form submissions with `useFormStatus`

---

## Deployment

The app is ready to deploy on [Vercel](https://vercel.com/) or any platform that supports Next.js.

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add all environment variables from `.env.local`.
4. Update the Google OAuth redirect URI to your production URL:  
   `https://your-domain.com/api/auth/callback/google`
5. Deploy.

---

## License

This project is for educational purposes as part of the Ultimate React Course. Not intended for commercial use.
