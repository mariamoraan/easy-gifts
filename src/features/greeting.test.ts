import { greeting } from "./greeting";

describe("Greeting", () => {
  test("Should return Hello", () => {
    const res = greeting();
    expect(res).toBe("Hello");
  });
});
