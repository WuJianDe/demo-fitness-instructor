interface CallToAction {
  href: string
  label: string
}

interface SiteMeta {
  primaryCta: CallToAction
  secondaryCta: CallToAction
}

export function useSiteMeta(): SiteMeta {
  return {
    primaryCta: {
      href: '#',
      label: 'Plan Homepage',
    },
    secondaryCta: {
      href: '#',
      label: 'Define Programs',
    },
  }
}
