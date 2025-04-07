import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Open Success",
        short_name: "PWA",
        start_url: "/",
        display: "standalone",
        background_color: "#1f78ff",
        theme_color: "#000000",
        icons: [
          {
            src: "/Logo192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Logo512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico,json}"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
            },
          },
        ],
      },
      includeAssets: [
        "sw.js",
        "Logo192x192.png",
        "Logo512x512.png",
        "Home_mobile.png",
        "Home.png",
      ], // Ensure the icons are included
    }),
  ],
});
