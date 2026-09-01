import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import ContactoPage from "../src/app/contacto/page";

describe("contacto page", () => {
  it("renders a visual contact form", () => {
    const html = renderToStaticMarkup(createElement(ContactoPage));

    expect(html).toMatch(/<form[\s>]/);
    expect(html).toContain("Clínica");
    expect(html).toContain("WhatsApp");
  });
});
