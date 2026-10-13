import * as react from 'react';

type SajtfotProps = {
    /** Endast för placering i footern. Använd inte för att tona om bandet. */
    className?: string;
    /** true i demoläge (site.demoMode). Visar till salu-raden. */
    forSale: boolean;
    /** Verksamhetens fullständiga bolagsnamn, t.ex. "Exempelfirman AB". */
    legalName: string;
    /** Frivillig mening efter bolagsnamnet, t.ex. "Ledamöter av Sveriges advokatsamfund." */
    legalSuffix?: string;
    /** Sökvägen till integritetspolicyn. Sidan ska finnas från dag ett. */
    privacyHref?: string;
    privacyLabel?: string;
    /** Sajtens objektblad på kemero.se, där förhandsvisningen beställs. */
    reserveUrl: string;
    /** Signaturen "Sajt av kemero". Standard true. false tar bort den helt, utan tom plats. */
    visa?: boolean;
};
declare function Sajtfot({ className, forSale, legalName, legalSuffix, privacyHref, privacyLabel, reserveUrl, visa, }: SajtfotProps): react.JSX.Element;

export { Sajtfot, type SajtfotProps };
