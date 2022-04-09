import { assertEquals } from "std/testing/asserts.ts";
import { add } from "./utils.ts";

Deno.test("add() sample test", () => {
  assertEquals(add(1, 2), 3);
});
