import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    dev: {
      cmd: "deno run src/index.ts",
      desc: "run my app.ts file",
      importMap: "./import_map.json",
    },
  },
};

export default config;
