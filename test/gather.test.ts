import { gatherProjectInfo } from "../src/gather"

// Totally a garbage test
test("Project info gathering doesn't throw", async () => {
  expect(await gatherProjectInfo("B:/Development/ttstk/build/test/cases/simple/")).not.toThrow();
});
