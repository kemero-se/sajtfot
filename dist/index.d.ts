import * as react from 'react';

type SajtfotProps = {
    /** Kundens case på kemero.se. Krediten pekar hit när sajten är såld. */
    caseUrl: string;
    /** Endast för placering i footern. Använd inte för att tona om bandet. */
    className?: string;
    /** true i demoläge (site.demoMode). Visar till salu-raden och pekar krediten på reservationssidan. */
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
};
declare function Sajtfot({ caseUrl, className, forSale, legalName, legalSuffix, privacyHref, privacyLabel, reserveUrl, }: SajtfotProps): react.JSX.Element;

export { Sajtfot, type SajtfotProps };
