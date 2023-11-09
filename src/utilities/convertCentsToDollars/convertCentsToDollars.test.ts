import { convertCentsToDollars } from "./convertCentsToDollars";

describe("convertCentsToDollars", () => {
  it("converts currency from cents to dollar amounts", () => {
    const mockData = 15000;

    expect(convertCentsToDollars(mockData)).toBe(150);
  });
});
