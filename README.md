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
4. Rename .env.placeholder to .env and set the keys, or copy paste this into .env
```bash
VITE_FIREBASE_API_KEY=AIzaSyDUA2axTTTPf6YXEO0rEWBhpNOenGT0chk
VITE_FIREBASE_AUTH_DOMAIN=brilliant-clone-c2aa0.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=brilliant-clone-c2aa0
VITE_FIREBASE_STORAGE_BUCKET=brilliant-clone-c2aa0.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=956969210351
VITE_FIREBASE_APP_ID=1:956969210351:web:bc5d136bc178494c57e61a
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

## Time taken
~8hrs, took some time in UI and animations.
