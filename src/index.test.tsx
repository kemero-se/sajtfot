import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Sajtfot } from "./index";

const bas = {
  forSale: true,
  legalName: "Exempelfirman AB",
  reserveUrl: "https://kemero.se/hemsidor/alka",
};

/*
  Kunden kan välja bort signaturen. Då ska den vara borta på riktigt, inte
  dold med CSS och inte lämna en tom plats i raden.
*/
describe("Sajtfot", () => {
  test("visar signaturen som standard", () => {
    const html = renderToStaticMarkup(<Sajtfot {...bas} />);
    expect(html).toContain("<span>Hemsida av</span>");
    expect(html).toContain('href="https://kemero.se"');
    expect(html).not.toContain("nofollow");
  });

  test("visa={false} renderar ingen signatur", () => {
    const html = renderToStaticMarkup(<Sajtfot {...bas} visa={false} />);
    expect(html).not.toContain("kemero-credit");
    expect(html).not.toContain("Hemsida av");
  });

  test("till salu-raden står kvar oförändrad med signaturen bortvald", () => {
    const html = renderToStaticMarkup(<Sajtfot {...bas} visa={false} />);
    expect(html).toContain("Den här webbplatsen är till salu på");
    expect(html).toContain('href="https://kemero.se/hemsidor/alka"');
  });
});
