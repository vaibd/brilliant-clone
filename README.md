# Brilliant-clone

## Tech Stack

- React 18+ with TypeScript
- redux-toolkit for state management
- TailwindCSS for styling and animations
- React Router for navigation
- Firebase Authentication(email & google) with persisting states


## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/vaibd/brilliant-clone.git
cd brilliant-clone
```
2. Install dependencies
```bash
npm install
```
3. Run the Development Server
```bash
npm run dev
```
4. Reanme .env.placeholder to .env and set the keys, or copy paste this into .env
```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```
## Features
1. Custom tailwind styles (in tailwind.config.ts)
2. Buttons and cards have animations
3. Responsive for all devices
4. Nav bar becomes fixed on scroll down
5. Using custom hooks to get authState, scroll events
6. Loading is a added to redux so we can show loading spinner from anywhere
7. Reusable components like: Navbar, auth container
8. Firebase auth; email and google OAuth
9. Auth state is persisting, cookies based
10. Loading states when logging, signup; laoding skeleton for courses
11. Protected routes public and private, with firebase auth checks
12. Working filter by tag in features

## Limitation
1. Reducer is returning static data; could have been improved by using extra reducer
2. Featuers filter could be improved by dispatching actions instead of directly manipulating data
