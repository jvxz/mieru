import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const sans = localFont({
  src: [{
    path: './Nacelle-Regular.otf',
    weight: '400',
    style: 'normal',
  }, {
    path: './Nacelle-SemiBold.otf',
    weight: '600',
    style: 'medium',
  }, {
    path: './Nacelle-Bold.otf',
    weight: '700',
    style: 'bold',
  }],
  variable: '--font-nacelle',
})

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500'],
})
