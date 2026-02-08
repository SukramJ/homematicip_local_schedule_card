import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import { copyFileSync, mkdirSync, existsSync } from "fs";

const HA_WWW_DIR =
  "../homematicip_local/config/www/community/homematicip_local_schedule_card";

// Plugin to copy file to root after build (for HACS) and to local HA config
function copyToRoot() {
  return {
    name: "copy-to-root",
    writeBundle() {
      const src = "dist/homematicip-local-schedule-card.js";
      copyFileSync(src, "homematicip-local-schedule-card.js");
      console.log("✓ Copied to root for HACS");

      if (!existsSync(HA_WWW_DIR)) {
        mkdirSync(HA_WWW_DIR, { recursive: true });
      }
      copyFileSync(src, `${HA_WWW_DIR}/homematicip-local-schedule-card.js`);
      console.log(`✓ Copied to ${HA_WWW_DIR}`);
    },
  };
}

export default {
  input: "src/homematicip-local-schedule-card.ts",
  output: {
    file: "dist/homematicip-local-schedule-card.js",
    format: "es",
    sourcemap: false,
  },
  treeshake: true,
  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: false,
      inlineSources: false,
    }),
    json(),
    terser({
      compress: {
        drop_console: true,
        passes: 2,
        pure_getters: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    }),
    copyToRoot(),
  ],
  external: [],
};
