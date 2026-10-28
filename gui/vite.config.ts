@@
 export default defineConfig({
+  base: "/Agent/",
   plugins: [
     react(),
     tailwindcss(),
     sentryVitePlugin({
       org: "continue-xd",
       project: "continue",
     }),
   ],
