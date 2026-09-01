import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import HomePage from "../src/app/page";

describe("home page", () => {
  it("renders Arco Care — G00 and a link to /standby.html", () => {
    const html = renderToStaticMarkup(createElement(HomePage));

    expect(html).toContain("Arco Care — G00");
    expect(html).toMatch(/<a[^>]*href="\/standby\.html"[^>]*>/);
  });
});
