import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "schema.json",
  output: "src/sdk",
});
