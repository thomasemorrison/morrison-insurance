import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const homePagePath = fileURLToPath(new URL("../client/src/pages/Home.tsx", import.meta.url));
const homePageSource = readFileSync(homePagePath, "utf8");

describe("homepage Best of the Best recognition", () => {
  it("uses the approved 2026 Light and Champion award asset", () => {
    expect(homePageSource).toContain(
      "/manus-storage/light-champion-best-of-best-2026-transparent_30437b4b.png"
    );
    expect(homePageSource).toContain(
      "The Light and Champion 2026 Shelby County Readers Choice Best of the Best First Place award"
    );
  });

  it("keeps the recognition community-first while naming both verified honors", () => {
    expect(homePageSource).toContain("Thank you, Shelby County.");
    expect(homePageSource).toContain("Morrison Insurance Best Insurance Agency");
    expect(homePageSource).toContain("Monica Watson Best Insurance Agent");
    expect(homePageSource).toContain("celebrate all the local winners");
  });
});
