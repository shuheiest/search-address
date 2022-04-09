import { readLines } from "std/io/mod.ts";
import { sleep } from "sleep";

console.log("Welcome to Deno!");

for await (const _ of readLines(Deno.stdin)) {
  console.log(_);
  await sleep(3);
  break;
}
