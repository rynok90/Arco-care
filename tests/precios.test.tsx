import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import PreciosPage from "../src/app/precios/page";

describe("precios page", () => {
  it("renders Starter, Growth and Pro with MXN monthly prices", () => {
    const html = renderToStaticMarkup(createElement(PreciosPage));

    expect(html).toContain("Starter");
    expect(html).toContain("$1,099");
    expect(html).toContain("Growth");
    expect(html).toContain("$1,899");
    expect(html).toContain("Pro");
    expect(html).toContain("$2,999");
  });
});
