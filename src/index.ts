import { readLines } from "https://deno.land/std@0.134.0/io/mod.ts";

console.log("Welcome to Deno!");

for await (const _ of readLines(Deno.stdin)) {
  console.log(_);
  break;
}
