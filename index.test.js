import generator from "./index";
import { pipe, __, forEach } from "ramda";
import testCases from "./test-cases.json";

const toQueryString = pipe(JSON.stringify, encodeURIComponent);

const testQuery = (queryDescription, targetOutput, filters, config) => {
  const result = generator(config ?? {}, filters ?? []);
  test(queryDescription, () => {
    expect(result).toBe(toQueryString(targetOutput));
  });
};

const runTests = forEach((x) => {
  const { name, shouldBe, filters, config } = x;
  testQuery(name, shouldBe, filters, config);
});

runTests(testCases);
