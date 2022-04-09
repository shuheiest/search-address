import { readLines } from "https://deno.land/std@0.134.0/io/mod.ts";
import { sleep } from "https://deno.land/x/sleep@v1.2.1/mod.ts";

console.log("Welcome to Deno!");

for await (const _ of readLines(Deno.stdin)) {
  console.log(_);
  await sleep(3);
  break;
}
