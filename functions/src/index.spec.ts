import { helloWorldMiddleware } from "./index";

test("should call response.send", () => {
  const send = jest.fn();
  helloWorldMiddleware(
    {},
    {
      send
    }
  );
  expect(send).toHaveBeenCalledWith("Hello from Firebase!");
});
