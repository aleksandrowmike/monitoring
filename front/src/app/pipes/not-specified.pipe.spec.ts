import { NotSpecifiedPipe } from "./not-specified.pipe";

describe("NotSpecifiedPipe", () => {
  it("create an instance", () => {
    const pipe = new NotSpecifiedPipe();
    expect(pipe).toBeTruthy();
  });
});
