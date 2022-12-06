// export enum NimiThemeType {
//   NIMI = 'NIMI',
//   DEVCON = 'DEVCON',
//   RAAVE = 'RAAVE',
//   INFINITE = 'INFINITE'
// }

// export class NimiThemePage {
//   background: string
//   backgroundImage?: string

//   constructor(background: string, backgroundImage: string) {
//     this.background = background || '#fff'
//     this.backgroundImage =
//       backgroundImage ||
//       'https://bafybeif5c6xz6ryiyrtm4r6amwiftwrw2kf3llipy6dco27hp3ilftthtm.ipfs.dweb.link/nimi-header-background.d73a42cfaca4acf944f4.png'
//   }
// }

// export class NimiThemeHeader {
//   backgroundImage: string
//   logo: string

//   constructor(backgroundImage: string, logo: string) {
//     this.backgroundImage = backgroundImage
//     this.logo = logo
//   }
// }

// export class NimiThemeLink {
//   background?: string
//   borderRadius?: string
//   boxShadow?: string

//   constructor(background: string, borderRadius: string, boxShadow: string) {
//     this.background = background
//     this.borderRadius = borderRadius
//     this.boxShadow = boxShadow
//   }
// }

// export class NimiThemeWidget {
//   background?: string
//   borderRadius?: string
//   boxShadow?: string

//   constructor(background: string, borderRadius: string, boxShadow: string) {
//     this.background = background
//     this.borderRadius = borderRadius
//     this.boxShadow = boxShadow
//   }
// }

// export class NimiThemeFooter {
//   backgroundImage: string

//   constructor(backgroundImage: string) {
//     this.backgroundImage = backgroundImage
//   }
// }

// export class NimiProfilePhoto {
//   backgroundImage: string

//   constructor(backgroundImage: string) {
//     this.backgroundImage = backgroundImage
//   }
// }

// export class NimiTheme {
//   type: NimiThemeType
//   page: NimiThemePage
//   header?: NimiThemeHeader
//   footer?: NimiThemeFooter
//   profilePhoto?: NimiProfilePhoto
//   link?: NimiThemeLink
//   widget?: NimiThemeWidget

//   constructor(
//     type: NimiThemeType,
//     page: NimiThemePage,
//     header: NimiThemeHeader,
//     footer: NimiThemeFooter,
//     link: NimiThemeLink,
//     widget: NimiThemeWidget
//   ) {
//     this.type = type
//     this.page = page
//     this.header = header
//     this.footer = footer
//     this.link = link
//     this.widget = widget
//   }
// }

// // TODO: Handle profile photo styles.
// // Should we assign default values to avoid conditions?
// // Do not delete theme objects.

// export const NimiDefaultTheme = {
//   type: NimiThemeType.NIMI,
//   page: {
//     background: '#fff',
//     backgroundImage:
//       'https://bafybeif5c6xz6ryiyrtm4r6amwiftwrw2kf3llipy6dco27hp3ilftthtm.ipfs.dweb.link/nimi-header-background.d73a42cfaca4acf944f4.png'
//   }
// }

// export const NimiDevconTheme = {
//   type: NimiThemeType.DEVCON,
//   page: {
//     background: 'linear-gradient(180deg, #C5D4EB 6.55%, #F9FCFF 84.14%)',
//     backgroundImage: 'https://ipfs.io/ipfs/QmVa4QEciC16UpTcALJGk1U5Tn3qNZLNt872gZsnXByTVE?filename=rays.svg'
//   },
//   header: {
//     backgroundImage: 'https://ipfs.io/ipfs/QmbFKPQ2DjRv2B3rvV5ZfWtAkbk789AHeda4eC9ofnL5rp?filename=clouds.svg'
//   },
//   footer: {
//     backgroundImage: 'https://ipfs.io/ipfs/QmQhjaifcDCCXgE7VcktQBeW31f4QGdgAsFyKcUxBqXsZR?filename=montanjas.svg'
//   },
//   profilePhoto: {
//     backgroundImage: 'https://ipfs.io/ipfs/QmUuTDp27rgvY7gUkuqcATzeTuZe93V95jJ1oBKQ4QApoi?filename=horses.svg'
//   }
// }
