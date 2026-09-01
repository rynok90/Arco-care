import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("public/standby.html", () => {
  const html = readFileSync(resolve(process.cwd(), "public/standby.html"), "utf8");

  it("is complete mobile-first HTML with Arco Care, MERBAL and Volvemos pronto", () => {
    expect(html).toMatch(/<!DOCTYPE html>/i);
    expect(html).toMatch(/<meta[^>]*name=["']viewport["'][^>]*>/i);
    expect(html).toContain("Volvemos pronto");
    expect(html).toContain("Arco Care");
    expect(html).toContain("MERBAL");
  });
});
