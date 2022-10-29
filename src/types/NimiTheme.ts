export enum NimiThemeType {
  NIMI = 'NIMI',
  DEVCON = 'DEVCON',
  RAAVE = 'RAAVE',
  INFINITE = 'INFINITE',
  DAIVINITY = 'DAIVINITY',
}

// interface NimiThemePage {
//   background: string;
//   backgroundImage?: string;
// }

// interface NimiThemeHeader {
//   backgroundImage: string;
//   logo: string;
// }

// interface NimiThemeLink {
//   background?: string;
//   borderRadius?: string;
//   boxShadow?: string;
// }

// interface NimiThemeWidget {
//   background?: string;
//   borderRadius?: string;
//   boxShadow?: string;
// }

// interface NimiThemeFooter {
//   backgroundImage: string;
// }

// interface NimiProfilePhoto {
//   backgroundImage: string;
// }

export interface NimiTheme {
  type: NimiThemeType;
  // page?: NimiThemePage;
  // header?: NimiThemeHeader;
  // footer?: NimiThemeFooter;
  // profilePhoto?: NimiProfilePhoto;
  // link?: NimiThemeLink;
  // widget?: NimiThemeWidget;
}

// Should we assign default values to avoid conditions?
