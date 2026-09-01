import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import HomePage from "../src/app/page";

describe("home page", () => {
  it("renders kit copy and no longer shows the G00 placeholder", () => {
    const html = renderToStaticMarkup(createElement(HomePage));

    expect(html).not.toContain("Arco Care — G00");
    expect(html).toContain("Tu clínica, con tu nombre");
  });
});
