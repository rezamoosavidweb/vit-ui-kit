// vite.config.mts
import react from "file:///C:/Users/reza/OneDrive/Desktop/asiastartup/vit-ui-kit/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "node:path";
import { defineConfig } from "file:///C:/Users/reza/OneDrive/Desktop/asiastartup/vit-ui-kit/node_modules/vitest/dist/config.js";
import dts from "file:///C:/Users/reza/OneDrive/Desktop/asiastartup/vit-ui-kit/node_modules/vite-plugin-dts/dist/index.mjs";
import tailwindcss from "file:///C:/Users/reza/OneDrive/Desktop/asiastartup/vit-ui-kit/node_modules/tailwindcss/lib/index.js";

// package.json
var name = "@rezamoosavi/ui-react";
var peerDependencies = {
  react: "^18.2.0",
  "react-dom": "^18.2.0"
};

// vite.config.mts
import { libInjectCss } from "file:///C:/Users/reza/OneDrive/Desktop/asiastartup/vit-ui-kit/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import babel from "file:///C:/Users/reza/OneDrive/Desktop/asiastartup/vit-ui-kit/node_modules/@rollup/plugin-babel/dist/es/index.js";
var __vite_injected_original_dirname = "C:\\Users\\reza\\OneDrive\\Desktop\\asiastartup\\vit-ui-kit";
var app = async () => {
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name;
  return defineConfig({
    plugins: [
      react(),
      libInjectCss(),
      dts({
        insertTypesEntry: true
      })
    ],
    css: {
      postcss: {
        plugins: [tailwindcss]
      }
    },
    build: {
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "src/lib/index.ts"),
        name: formattedName,
        formats: ["es", "umd"],
        fileName: (format) => `${formattedName}.${format}.js`
      },
      rollupOptions: {
        external: ["react/jsx-runtime", "tailwindcss", ...Object.keys(peerDependencies)],
        output: [
          {
            globals: {
              react: "React",
              "react/jsx-runtime": "react/jsx-runtime",
              "react-dom": "ReactDOM",
              tailwindcss: "tailwindcss"
            }
          }
        ],
        //@ts-ignore
        plugins: [babel({ babelHelpers: "bundled" })]
      },
      target: "esnext",
      sourcemap: true
    },
    test: {
      globals: true,
      environment: "jsdom"
    }
  });
};
var vite_config_default = app;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHJlemFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxhc2lhc3RhcnR1cFxcXFx2aXQtdWkta2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyZXphXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcYXNpYXN0YXJ0dXBcXFxcdml0LXVpLWtpdFxcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3JlemEvT25lRHJpdmUvRGVza3RvcC9hc2lhc3RhcnR1cC92aXQtdWkta2l0L3ZpdGUuY29uZmlnLm10c1wiO2ltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnO1xuaW1wb3J0IHsgcGVlckRlcGVuZGVuY2llcyB9IGZyb20gJy4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IFVzZXJDb25maWdFeHBvcnQgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IG5hbWUgfSBmcm9tICcuL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tICd2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzcyc7XG5pbXBvcnQgYmFiZWwgZnJvbSAnQHJvbGx1cC9wbHVnaW4tYmFiZWwnO1xuXG5jb25zdCBhcHAgPSBhc3luYyAoKTogUHJvbWlzZTxVc2VyQ29uZmlnRXhwb3J0PiA9PiB7XG4gIC8qKlxuICAgKiBSZW1vdmVzIGV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSBsYXN0XG4gICAqIEBvY3RvY2F0L2xpYnJhcnktcmVwbyAtPiBsaWJyYXJ5LXJlcG9cbiAgICogdml0ZS1jb21wb25lbnQtbGlicmFyeS10ZW1wbGF0ZSAtPiB2aXRlLWNvbXBvbmVudC1saWJyYXJ5LXRlbXBsYXRlXG4gICAqL1xuICBjb25zdCBmb3JtYXR0ZWROYW1lID0gbmFtZS5tYXRjaCgvW14vXSskLyk/LlswXSA/PyBuYW1lO1xuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICBsaWJJbmplY3RDc3MoKSxcbiAgICAgIGR0cyh7XG4gICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGNzczoge1xuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbGliL2luZGV4LnRzJyksXG4gICAgICAgIG5hbWU6IGZvcm1hdHRlZE5hbWUsXG4gICAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgJHtmb3JtYXR0ZWROYW1lfS4ke2Zvcm1hdH0uanNgLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QvanN4LXJ1bnRpbWUnLCAndGFpbHdpbmRjc3MnLCAuLi5PYmplY3Qua2V5cyhwZWVyRGVwZW5kZW5jaWVzKV0sXG4gICAgICAgIG91dHB1dDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgICAgICAgICdyZWFjdC9qc3gtcnVudGltZSc6ICdyZWFjdC9qc3gtcnVudGltZScsXG4gICAgICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgICAgICAgICB0YWlsd2luZGNzczogJ3RhaWx3aW5kY3NzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgcGx1Z2luczogW2JhYmVsKHsgYmFiZWxIZWxwZXJzOiAnYnVuZGxlZCcgfSldLFxuICAgICAgfSxcbiAgICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgfSxcbiAgICB0ZXN0OiB7XG4gICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgfSxcbiAgfSk7XG59O1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsICJ7XG4gIFwibmFtZVwiOiBcIkByZXphbW9vc2F2aS91aS1yZWFjdFwiLFxuICBcInByaXZhdGVcIjogZmFsc2UsXG4gIFwidmVyc2lvblwiOiBcIjEuNC42XCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vc2NoZWR1bGVvbmNlL29uY2UtdWktcmVhY3RcIlxuICB9LFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3RcIixcbiAgICBcIlJFQURNRS5tZFwiLFxuICAgIFwid29ya3NwYWNlLXByZXNldC50c1wiXG4gIF0sXG4gIFwibWFpblwiOiBcIi4vZGlzdC91aS1yZWFjdC51bWQuanNcIixcbiAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvdWktcmVhY3QuZXMuanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9pbmRleC5kLnRzXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvdWktcmVhY3QuZXMuanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC91aS1yZWFjdC51bWQuanNcIixcbiAgICAgIFwic3R5bGVzXCI6IFwiLi9kaXN0L2luZGV4LmNzc1wiXG4gICAgfSxcbiAgICBcIi4vY3NzXCI6IFwiLi9kaXN0L2luZGV4LmNzc1wiLFxuICAgIFwiLi90aGVtZVwiOiBcIi4vd29ya3NwYWNlLXByZXNldC50c1wiXG4gIH0sXG4gIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIj49MThcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwic3Rvcnlib29rIGRldiAtcCA2MDA2XCIsXG4gICAgXCJidWlsZFwiOiBcInN0b3J5Ym9vayBidWlsZFwiLFxuICAgIFwiYnVpbGQ6bGliXCI6IFwidHNjICYmIHZpdGUgYnVpbGRcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLS1leHQgLmpzLC5qc3gsLnRzLC50c3ggLS1maXhcIixcbiAgICBcInRlc3Q6cHJldHRpZXJcIjogXCJwcmV0dGllciAtLWNoZWNrIC0taWdub3JlLXVua25vd24gXFxcInNyYy8qKi8qLnt0cyx0c3gsanMsbWR4fVxcXCJcIixcbiAgICBcImZpeDpwcmV0dGllclwiOiBcInByZXR0aWVyIC0td3JpdGUgLS1pZ25vcmUtdW5rbm93biBcXFwic3JjLyoqLyoue3RzLHRzeCxqcyxtZHh9XFxcIlwiLFxuICAgIFwidGVzdFwiOiBcInZpdGVzdFwiLFxuICAgIFwidGVzdDpjb3ZcIjogXCJ2aXRlc3QgcnVuIC0tY292ZXJhZ2VcIixcbiAgICBcInByZXBhcmVcIjogXCJodXNreSBpbnN0YWxsXCIsXG4gICAgXCJwcmVwYWNrXCI6IFwianNvbiAtZiBwYWNrYWdlLmpzb24gLUkgLWUgXFxcImRlbGV0ZSB0aGlzLmRldkRlcGVuZGVuY2llczsgZGVsZXRlIHRoaXMuZGVwZW5kZW5jaWVzXFxcIlwiXG4gIH0sXG4gIFwibGludC1zdGFnZWRcIjoge1xuICAgIFwiKi57dHMsdHN4LGpzLGpzeCxqc29uLGNzcyxtZH1cIjogW1xuICAgICAgXCJwcmV0dGllciAtd1wiXG4gICAgXVxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVyxPQUFPLFdBQVc7QUFDblgsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjs7O0FDSHRCLFdBQVE7QUFnRFIsdUJBQW9CO0FBQUEsRUFDbEIsT0FBUztBQUFBLEVBQ1QsYUFBYTtBQUNmOzs7QUQ1Q0YsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBVGxCLElBQU0sbUNBQW1DO0FBV3pDLElBQU0sTUFBTSxZQUF1QztBQU1qRCxRQUFNLGdCQUFnQixLQUFLLE1BQU0sUUFBUSxJQUFJLENBQUMsS0FBSztBQUVuRCxTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixJQUFJO0FBQUEsUUFDRixrQkFBa0I7QUFBQSxNQUNwQixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ1AsU0FBUyxDQUFDLFdBQVc7QUFBQSxNQUN2QjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxRQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLFFBQ2pELE1BQU07QUFBQSxRQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxRQUNyQixVQUFVLENBQUMsV0FBVyxHQUFHLGFBQWEsSUFBSSxNQUFNO0FBQUEsTUFDbEQ7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiLFVBQVUsQ0FBQyxxQkFBcUIsZUFBZSxHQUFHLE9BQU8sS0FBSyxnQkFBZ0IsQ0FBQztBQUFBLFFBQy9FLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRSxTQUFTO0FBQUEsY0FDUCxPQUFPO0FBQUEsY0FDUCxxQkFBcUI7QUFBQSxjQUNyQixhQUFhO0FBQUEsY0FDYixhQUFhO0FBQUEsWUFDZjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUE7QUFBQSxRQUdBLFNBQVMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxVQUFVLENBQUMsQ0FBQztBQUFBLE1BQzlDO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
