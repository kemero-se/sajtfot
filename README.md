# @kemero/sajtfot

Den låsta foten på en katalogsajt. Till salu-raden mot kemero.se,
integritetspolicy-länken och signaturen "Hemsida av kemero".

Katalogsajternas footer byggs om i varje designpass, och det är meningen.
Det som inte får byggas om bor här. Formulering, ordning och rytm är låsta i
paketet, precis som märket är låst i `@kemero/credit`.

## Användning

```bash
bun add @kemero/sajtfot@github:kemero-se/sajtfot
```

```tsx
import { Sajtfot } from "@kemero/sajtfot";

<Sajtfot
  forSale={site.demoMode}
  legalName={business.legalName}
  legalSuffix={footer.legalSuffix}
  reserveUrl={site.reserveUrl}
  visa={site.signatur}
/>;
```

Lägg den sist i footerns innehållsbehållare, efter sajtens egna kolumner.
Avståndet ovanför bandet äger footern, resten äger paketet.

## Vad komponenten renderar

I demoläge (`forSale`) en egen rad mellan två hårstreck, ordagrant:

> Den här webbplatsen är till salu på kemero.se. Vi anpassar den till ditt
> företag med din logga, dina texter och dina bilder.

Under den en meta-rad med copyright till vänster och integritetspolicyn
plus signaturen "Hemsida av kemero" till höger, på samma rad. Under 640 px står
signaturen på en egen rad. `forSale` false tar bort till salu-raden.
Årtalet i copyrighten räknas ut vid render.

Signaturen kommer från `@kemero/credit` och går alltid till kemero.se.
Kunden kan välja bort den med `visa={false}`. Då renderas den inte alls och
lämnar ingen tom plats. Läs värdet ur sajtens konfiguration, eller ur
inställningarna i adminpanelen på Astro-sajterna.

## Färg och tema

Ingen CSS att importera och inga variabler att sätta. Text ärver footerns
färg och hårstrecken ritas ur `currentColor`, så bandet följer sajtens palett
i både ljust och mörkt tema. En sajt som vill sätta exakt sin egen linjefärg
kan sätta `--sajtfot-line` på en förälder. Det är den enda escapen.

Bandet ärver också fontstorleken. Sätt den på footerns behållare.

## Props

| Prop | Krävs | Beskrivning |
|---|---|---|
| `forSale` | ja | `site.demoMode`. Visar till salu-raden |
| `reserveUrl` | ja | Sajtens objektblad på kemero.se |
| `visa` | nej | Signaturen "Hemsida av kemero". Standard `true`, `false` tar bort den |
| `legalName` | ja | Fullständigt bolagsnamn, t.ex. "Exempelfirman AB" |
| `legalSuffix` | nej | Mening efter bolagsnamnet, t.ex. "Ledamöter av Sveriges advokatsamfund." |
| `privacyHref` | nej | Standard `/integritetspolicy` |
| `privacyLabel` | nej | Standard `Integritetspolicy` |
| `className` | nej | Endast placering. Använd inte för att tona om bandet |

Integritetspolicy-länken är en vanlig `<a>`, inte en router-länk. Paketet är
router-fritt med flit så det kan konsumeras av både TanStack Start och Astro.

## Utveckla

```bash
bun install
bun run build
bun test
```

`dist/` är committad så att paketet kan konsumeras direkt som git-beroende
utan lifecycle-scripts.

## Licens

Källkoden är synlig men inte licensierad för återanvändning.
Upphovsrätten tillhör kemero.
