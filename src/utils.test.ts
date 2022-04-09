import { assertEquals } from "https://deno.land/std@0.134.0/testing/asserts.ts";
import { add } from "./utils.ts";

Deno.test("add() sample test", () => {
  assertEquals(add(1, 2), 3);
});
