
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Generate a unique build ID that changes with every build
const BUILD_ID = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable caching for faster updates
    rollupOptions: {
      output: {
        // Use unique timestamp-based hashing to prevent caching
        entryFileNames: `assets/[name]-${BUILD_ID}-[hash].js`,
        chunkFileNames: `assets/[name]-${BUILD_ID}-[hash].js`,
        assetFileNames: `assets/[name]-${BUILD_ID}-[hash].[ext]`
      }
    },
    // Improve chunk size optimization
    chunkSizeWarningLimit: 1000,
    // Enable source maps for easier debugging
    sourcemap: true
  },
  // Add custom headers to prevent caching
  preview: {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store',
    }
  }
}));
