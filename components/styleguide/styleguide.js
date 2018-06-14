import { css } from 'react-emotion'

export const colors = {
  text: '#ffffff',
  background: '#1C1C1C',
  forground: '#FFFFFF',
  primaryDark: '#00079A',
  primary: '#3232CC',
  primaryLight: '#725eff',
}

export const theme = {
  ...colors,
  lightText: colors.text,
}

export const text = {
  paragraph: '1.6rem',
  subtext: '1rem',
  subtitle: '2rem',
  title: '4rem',
  hero: '144px',
}

export const font = {
  serif: 'nimbus-roman, Georgia, serif',
  sansSerif: 'Helvetica Neue, sans-serif',
}

export const contentMaxWidth = 740
export const layouts = {
  content: css`
    margin: 0 auto;
    max-width: ${contentMaxWidth}px;
    padding: 40px;
  `,
}

export const spacing = {
  small: '12px',
  medium: '20px',
  large: '40px',
}

export const timingFuncs = {
  ease: 'cubic-bezier(.53,.14,.27,.99)',
}

export const mobile = styles => css`
  @media only screen and (max-width: 800px) {
    ${styles};
  }
`
export const desktop = styles => css`
  @media only screen and (min-width: 800px) {
    ${styles};
  }
`

export default {
  spacing,
  text,
  colors,
  theme,
  layouts,
  timingFuncs,
  mobile,
  desktop,
}
