import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: [
         { find: "@", replacement: "/src/*" },
         { find: "@pages", replacement: "/src/pages" },
         { find: "@components", replacement: "/src/components" },
         { find: "@service", replacement: "/src/service" },
         { find: "@utils", replacement: "/src/utils" },
         { find: "@types", replacement: "/src/types" },
         { find: "@modals", replacement: "/src/components/modals" },
      ],
   },
});
