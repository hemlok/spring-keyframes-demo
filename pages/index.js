import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import styled, { hydrate, injectGlobal } from 'react-emotion'
import {
  Layout,
  Divider,
  Text,
  Column,
  styleguide,
} from '../components/styleguide'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    margin: 0;
    background: ${styleguide.colors.background};
    font-family: Helvetica-Neue, Arial, sans-serif;
    font-size: 14px;
  }
  * {
    box-sizing: border-box;
  }

  .parallax-inner {
    will-change: transform;
    position: relative;
    transition: none;
  }
`

const Hero = styled(Column)`
  margin-top: 10vh;
  position: relative;
`

const Title = styled('img')`
  max-width: 85%;
  position: relative;
  z-index: 2;
`

const Href = styled(Text.withComponent('a'))`
  margin-top: ${styleguide.spacing.large};
  border-left: 8px solid ${styleguide.colors.primaryLight};
  padding-left: ${styleguide.spacing.medium};
  padding-bottom: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  animation-fill-mode: reverse;
  &:hover {
    color: ${styleguide.colors.primaryLight};
  }
`

const sized = {
  large: '360px',
  small: '150px',
  medium: '260px',
}

const circleSize = ({ size }) => sized[size]

const Circle = styled('div')`
  border-radius: 100%;
  background-color: ${props =>
    props.primary
      ? styleguide.colors.primary
      : props.light
        ? styleguide.colors.primaryLight
        : styleguide.colors.primaryDark};
  width: ${props => circleSize};
  height: ${props => circleSize};
  z-index: 0;
  position: absolute;
`

const Splash = styled('div')`
  position: relative;
  z-index: 1;
`

export default () => (
  <ThemeProvider theme={styleguide.theme}>
    <Layout>
      <Hero align="start">
        <Splash>
          <Circle
            light
            size="small"
            style={{
              left: '80px',
              top: '40px',
              zIndex: 1,
            }}
          />
          <Circle
            style={{
              left: '-200px',
              top: '-50px',
            }}
            size="large"
          />
          <Circle
            style={{
              left: '-80px',
              top: '100px',
              zIndex: 2,
            }}
            primary
            size="medium"
          />
        </Splash>
        <Title src="/static/spring-keyframes.svg" alt="spring keyframes" />
        <Divider style={{ zIndex: 2 }} />
        <Text>
          Sometimes running spring animations in javascript with libraries like{' '}
          <b>React-Motion</b> on the web cause ‘jank’ when the main thread is
          busy. <b>Spring-Keyframes</b> solves this problem by generating css
          keyframe animations that run natively.
        </Text>
        <Href href="https://github.com/hemlok/spring-keyframes">
          <b>github.com/hemlok/spring-keyframes</b>
        </Href>
      </Hero>
    </Layout>
  </ThemeProvider>
)
