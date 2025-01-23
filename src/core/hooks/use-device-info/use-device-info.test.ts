import { renderHook } from "@testing-library/react";
import { useDeviceInfo } from "./use-device-info.hook";
import { act } from "react";

describe("useDeviceInfo", () => {
  let originalInnerWidth: number;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    window.innerWidth = originalInnerWidth;
  });

  it("should return BIG when window.innerWidth is greater than 768", () => {
    window.innerWidth = 1201;
    const { result } = renderHook(() => useDeviceInfo());
    expect(result.current.deviceSize).toBe("BIG");
  });

  it("should return SMALL when window.innerWidth is less than or equal to 768", () => {
    window.innerWidth = 1200;
    const { result } = renderHook(() => useDeviceInfo());
    expect(result.current.deviceSize).toBe("SMALL");
  });

  it("should update deviceSize on window resize", () => {
    const { result } = renderHook(() => useDeviceInfo());

    act(() => {
      window.innerWidth = 1200;
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current.deviceSize).toBe("SMALL");

    act(() => {
      window.innerWidth = 1210;
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current.deviceSize).toBe("BIG");
  });
});
