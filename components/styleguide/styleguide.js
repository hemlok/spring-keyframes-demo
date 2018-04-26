import { css } from 'react-emotion'

export const colors = {
  text: '#404040',
  background: '#FFF3F3',
  forground: '#ffffff',
}

export const text = {
  paragraph: '1.4rem',
  subtext: '1rem',
  subtitle: '2rem',
  title: '3rem',
  hero: '144px',
}

export const font = {
  serif: 'nimbus-roman, Georgia, serif',
  sansSerif: 'Futura Pt, Futura, sans-serif',
}

export const contentMaxWidth = 1000
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
  large: '28px',
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
  layouts,
  timingFuncs,
  mobile,
  desktop,
}
