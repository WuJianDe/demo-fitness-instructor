interface CallToAction {
  href: string;
  label: string;
}

interface SiteMeta {
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
}

export function useSiteMeta(): SiteMeta {
  return {
    primaryCta: {
      href: "#consultation",
      label: "INITIATE PROTOCOL",
    },
    secondaryCta: {
      href: "#programs",
      label: "VIEW ELITE PROGRAMS",
    },
  };
}
