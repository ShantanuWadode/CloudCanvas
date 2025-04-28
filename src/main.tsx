import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ✅ Clerk imports
import { ClerkProvider } from '@clerk/clerk-react';

// ✅ Your Clerk publishable key
const PUBLISHABLE_KEY = "pk_test_c3RpbGwtcmF0dGxlci00NC5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

// ✅ Wrap the app in ClerkProvider
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
);
