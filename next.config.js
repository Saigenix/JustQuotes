/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  env: {
  apiKey: "AIzaSyBt0uWn3VtM29HygxPW-87CGm8JQcTBc5U",
  authDomain: "justquotes-46e12.firebaseapp.com",
  projectId: "justquotes-46e12",
  storageBucket: "justquotes-46e12.appspot.com",
  messagingSenderId: "791921647280",
  appId: "1:791921647280:web:c2d68b73abffe01c492575",
  measurementId: "G-JD3B7Q9LHX"
  },
}

module.exports = nextConfig
