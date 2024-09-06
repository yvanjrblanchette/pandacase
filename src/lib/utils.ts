import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = 'PandaCase - Coques de téléphone personnalisées de haute qualité',
  description = 'Créez des coques de téléphone personnalisées de haute qualité en quelques secondes.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@yvanblanchette',
    },
    icons,
    metadataBase: new URL("https://pandacase.vercel.app/")
  }
}
