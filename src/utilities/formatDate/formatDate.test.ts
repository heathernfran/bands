import { formatDate } from "./formatDate";

describe("formatDate()", () => {
  it("returns a formatted date", () => {
    const mockDate = 1683644012000;

    expect(formatDate(mockDate)).toBe("Tue May 09 2023");
  });
});
