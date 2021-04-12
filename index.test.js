import generator from "./index";
import { pipe, __, forEach, prop } from "ramda";
import testCases from "./test-cases.json";

const toQueryString = pipe(JSON.stringify, encodeURIComponent);

const testQuery = (queryDescription, targetOutput, filters, config) => {
  const result = generator(config ?? {}, filters ?? []);
  test(queryDescription, () => {
    expect(result).toBe(toQueryString(targetOutput));
  });
};

const runTests = forEach((x) => {
  const propX = prop(__, x);
  const name = propX("name");
  const shouldBe = propX("shouldBe");
  const filters = propX("filters");
  const config = propX("config");
  testQuery(name, shouldBe, filters, config);
});

runTests(testCases);
