import generator from "./index";
import { pipe, forEach } from "ramda";
import testCases from "./test-cases.json";

const toQueryString = pipe(JSON.stringify, encodeURIComponent);

const testQuery = (record) => {
  const { name, shouldBe, filters, config } = record;
  const result = generator(config ?? {}, filters ?? []);
  test(name, () => {
    expect(result).toBe(toQueryString(shouldBe));
  });
};

const runTests = forEach((record) => {
  testQuery(record);
});

runTests(testCases);
