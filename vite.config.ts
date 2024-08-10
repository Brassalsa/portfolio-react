import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgrLoader from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrLoader()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
