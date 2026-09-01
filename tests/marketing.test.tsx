import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import FochiPage from "../src/app/fochi/page";
import PrivacidadPage from "../src/app/privacidad/page";
import ProductoPage from "../src/app/producto/page";

describe("producto, fochi and privacidad pages", () => {
  it("producto includes distinctive kit copy", () => {
    const html = renderToStaticMarkup(createElement(ProductoPage));
    expect(html).toContain("El sistema de tu clínica");
    expect(html).toContain("Agenda");
  });

  it("fochi includes distinctive kit copy", () => {
    const html = renderToStaticMarkup(createElement(FochiPage));
    expect(html).toContain("Fochi");
    expect(html).toContain("App del tutor");
  });

  it("privacidad includes the LFPDPPP notice", () => {
    const html = renderToStaticMarkup(createElement(PrivacidadPage));
    expect(html).toContain("LFPDPPP");
    expect(html).toContain("Aviso de privacidad");
  });
});
