import { ThemeProvider } from '../src/theme/ThemeProvider'

export const decorators = [
  Story => <ThemeProvider><Story /></ThemeProvider>
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}