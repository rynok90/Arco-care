import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import TourPage from "../src/app/tour/page";

const TOUR_STEP_TITLES = [
  "Entrar a tu clínica",
  "El dashboard del día",
  "Ficha de Coco, el loro",
  "Crear la cita",
  "Receta PDF con tu logo",
  "Stock que avisa",
  "Publicar una promo",
  "Lo que ve el tutor",
];

describe("tour page", () => {
  it("renders the eight kit mock steps", () => {
    const html = renderToStaticMarkup(createElement(TourPage));

    for (const title of TOUR_STEP_TITLES) {
      expect(html).toContain(title);
    }
  });
});
