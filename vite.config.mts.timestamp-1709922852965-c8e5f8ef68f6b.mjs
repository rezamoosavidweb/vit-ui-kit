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
        output: {
          globals: {
            react: "React",
            "react/jsx-runtime": "react/jsx-runtime",
            "react-dom": "ReactDOM",
            tailwindcss: "tailwindcss"
          }
        },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHJlemFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxhc2lhc3RhcnR1cFxcXFx2aXQtdWkta2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyZXphXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcYXNpYXN0YXJ0dXBcXFxcdml0LXVpLWtpdFxcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3JlemEvT25lRHJpdmUvRGVza3RvcC9hc2lhc3RhcnR1cC92aXQtdWkta2l0L3ZpdGUuY29uZmlnLm10c1wiO2ltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnO1xuaW1wb3J0IHsgcGVlckRlcGVuZGVuY2llcyB9IGZyb20gJy4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IFVzZXJDb25maWdFeHBvcnQgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IG5hbWUgfSBmcm9tICcuL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tICd2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzcyc7XG5pbXBvcnQgYmFiZWwgZnJvbSAnQHJvbGx1cC9wbHVnaW4tYmFiZWwnO1xuXG5jb25zdCBhcHAgPSBhc3luYyAoKTogUHJvbWlzZTxVc2VyQ29uZmlnRXhwb3J0PiA9PiB7XG4gIC8qKlxuICAgKiBSZW1vdmVzIGV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSBsYXN0XG4gICAqIEBvY3RvY2F0L2xpYnJhcnktcmVwbyAtPiBsaWJyYXJ5LXJlcG9cbiAgICogdml0ZS1jb21wb25lbnQtbGlicmFyeS10ZW1wbGF0ZSAtPiB2aXRlLWNvbXBvbmVudC1saWJyYXJ5LXRlbXBsYXRlXG4gICAqL1xuICBjb25zdCBmb3JtYXR0ZWROYW1lID0gbmFtZS5tYXRjaCgvW14vXSskLyk/LlswXSA/PyBuYW1lO1xuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICBsaWJJbmplY3RDc3MoKSxcbiAgICAgIGR0cyh7XG4gICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGNzczoge1xuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbGliL2luZGV4LnRzJyksXG4gICAgICAgIG5hbWU6IGZvcm1hdHRlZE5hbWUsXG4gICAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgJHtmb3JtYXR0ZWROYW1lfS4ke2Zvcm1hdH0uanNgLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QvanN4LXJ1bnRpbWUnLCAndGFpbHdpbmRjc3MnLCAuLi5PYmplY3Qua2V5cyhwZWVyRGVwZW5kZW5jaWVzKV0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgJ3JlYWN0L2pzeC1ydW50aW1lJzogJ3JlYWN0L2pzeC1ydW50aW1lJyxcbiAgICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgICAgICAgdGFpbHdpbmRjc3M6ICd0YWlsd2luZGNzcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHBsdWdpbnM6IFtiYWJlbCh7IGJhYmVsSGVscGVyczogJ2J1bmRsZWQnIH0pXSxcbiAgICAgIH0sXG4gICAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgIH0sXG4gICAgdGVzdDoge1xuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIH0sXG4gIH0pO1xufTtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAcmV6YW1vb3NhdmkvdWktcmVhY3RcIixcbiAgXCJwcml2YXRlXCI6IGZhbHNlLFxuICBcInZlcnNpb25cIjogXCIxLjQuM1wiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NjaGVkdWxlb25jZS9vbmNlLXVpLXJlYWN0XCJcbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0XCIsXG4gICAgXCJSRUFETUUubWRcIlxuICBdLFxuICBcIm1haW5cIjogXCIuL2Rpc3QvdWktcmVhY3QudW1kLmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L3VpLXJlYWN0LmVzLmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3VpLXJlYWN0LmVzLmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvdWktcmVhY3QudW1kLmpzXCIsXG4gICAgICBcInN0eWxlc1wiOiBcIi4vZGlzdC9pbmRleC5jc3NcIlxuICAgIH0sXG4gICAgXCIuL2Nzc1wiOiBcIi4vZGlzdC9pbmRleC5jc3NcIlxuICB9LFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PTE4XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInN0b3J5Ym9vayBkZXYgLXAgNjAwNlwiLFxuICAgIFwiYnVpbGRcIjogXCJzdG9yeWJvb2sgYnVpbGRcIixcbiAgICBcImJ1aWxkOmxpYlwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC0tZXh0IC5qcywuanN4LC50cywudHN4IC0tZml4XCIsXG4gICAgXCJ0ZXN0OnByZXR0aWVyXCI6IFwicHJldHRpZXIgLS1jaGVjayAtLWlnbm9yZS11bmtub3duIFxcXCJzcmMvKiovKi57dHMsdHN4LGpzLG1keH1cXFwiXCIsXG4gICAgXCJmaXg6cHJldHRpZXJcIjogXCJwcmV0dGllciAtLXdyaXRlIC0taWdub3JlLXVua25vd24gXFxcInNyYy8qKi8qLnt0cyx0c3gsanMsbWR4fVxcXCJcIixcbiAgICBcInRlc3RcIjogXCJ2aXRlc3RcIixcbiAgICBcInRlc3Q6Y292XCI6IFwidml0ZXN0IHJ1biAtLWNvdmVyYWdlXCIsXG4gICAgXCJwcmVwYXJlXCI6IFwiaHVza3kgaW5zdGFsbFwiLFxuICAgIFwicHJlcGFja1wiOiBcImpzb24gLWYgcGFja2FnZS5qc29uIC1JIC1lIFxcXCJkZWxldGUgdGhpcy5kZXZEZXBlbmRlbmNpZXM7IGRlbGV0ZSB0aGlzLmRlcGVuZGVuY2llc1xcXCJcIlxuICB9LFxuICBcImxpbnQtc3RhZ2VkXCI6IHtcbiAgICBcIioue3RzLHRzeCxqcyxqc3gsanNvbixjc3MsbWR9XCI6IFtcbiAgICAgIFwicHJldHRpZXIgLXdcIlxuICAgIF1cbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVcsT0FBTyxXQUFXO0FBQ25YLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7OztBQ0h0QixXQUFRO0FBOENSLHVCQUFvQjtBQUFBLEVBQ2xCLE9BQVM7QUFBQSxFQUNULGFBQWE7QUFDZjs7O0FEMUNGLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQVRsQixJQUFNLG1DQUFtQztBQVd6QyxJQUFNLE1BQU0sWUFBdUM7QUFNakQsUUFBTSxnQkFBZ0IsS0FBSyxNQUFNLFFBQVEsSUFBSSxDQUFDLEtBQUs7QUFFbkQsU0FBTyxhQUFhO0FBQUEsSUFDbEIsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsSUFBSTtBQUFBLFFBQ0Ysa0JBQWtCO0FBQUEsTUFDcEIsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLFNBQVMsQ0FBQyxXQUFXO0FBQUEsTUFDdkI7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsUUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxRQUNqRCxNQUFNO0FBQUEsUUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsUUFDckIsVUFBVSxDQUFDLFdBQVcsR0FBRyxhQUFhLElBQUksTUFBTTtBQUFBLE1BQ2xEO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYixVQUFVLENBQUMscUJBQXFCLGVBQWUsR0FBRyxPQUFPLEtBQUssZ0JBQWdCLENBQUM7QUFBQSxRQUMvRSxRQUFRO0FBQUEsVUFDTixTQUFTO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxxQkFBcUI7QUFBQSxZQUNyQixhQUFhO0FBQUEsWUFDYixhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0Y7QUFBQTtBQUFBLFFBRUEsU0FBUyxDQUFDLE1BQU0sRUFBRSxjQUFjLFVBQVUsQ0FBQyxDQUFDO0FBQUEsTUFDOUM7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
