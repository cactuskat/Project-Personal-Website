// src/config.js
export const RESUME_URL = import.meta.env.VITE_RESUME_URL || "/";
export const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "/";
export const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "/";
export const EMAIL_URL = import.meta.env.VITE_EMAIL_URL 
  ? `mailto:${import.meta.env.VITE_EMAIL_URL}` 
  : "/";