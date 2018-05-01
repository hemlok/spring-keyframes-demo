import React from 'react'
import Link from 'next/link'
import { ThemeProvider } from 'emotion-theming'
import styled, { hydrate, injectGlobal } from 'react-emotion'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { Layout, Text, Column, styleguide } from '../components/styleguide'
import { ListTitle, Card } from '../components'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    margin: 0;
    background: ${styleguide.colors.background};
    font-family: Futura, Helvetica, Arial, sans-serif;
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
`

const Hemlok = styled('img')`
  margin: 100px 0;
  max-width: 70%;
`
const sized = {
  large: '400px',
  small: '150px',
  medium: '200px',
}

const circleSize = ({ size }) => sized[size]

const Circle = styled('div')`
  border-radius: 100%;
  background-color: ${props =>
    props.white
      ? styleguide.colors.backgroundLight
      : props.light
        ? styleguide.colors.primaryLight
        : styleguide.colors.primaryDark};
  width: ${props => circleSize};
  height: ${props => circleSize};
  z-index: 0;
  position: absolute;
`

const Bg = () => (
  <div style={{ height: '100%' }}>
    <Parallax offsetYMax={'40px'} offsetYMin={'-40px'} tag="div">
      <div>
        <Circle size="large" style={{ left: '-20%', top: '50px' }} />
        <Circle size="small" light style={{ right: '-40px', top: '-40px' }} />
        <Circle size="medium" white style={{ right: '-20px', top: '300px' }} />
        <Circle size="medium" light style={{ right: '90px', top: '600px' }} />
        <Circle size="small" white style={{ left: '90px', top: '900px' }} />
        <Circle size="large" style={{ right: '-10%', top: '850px' }} />
      </div>
    </Parallax>
  </div>
)

export default () => (
  <ThemeProvider theme={styleguide.theme}>
    <ParallaxProvider>
      <Layout>
        <Hero align="start">
          <Text black> UI Engineer, Designer, Maker </Text>
          <Hemlok src="/static/hemlok.svg" alt="hemlok" />
        </Hero>
        <ListTitle
          title="Product"
          style={{ position: 'relative', zIndex: 1 }}
        />
        <div style={{ position: 'relative' }}>
          <Bg />
          <Card title="scoops" link="scoops.io" />
          <Link href="/battlefy" prefetch>
            <Card title="battlefy" link="battlefy.com" />
          </Link>
          <Card title="vault" link="vault.crucible.gg" />
        </div>
        <ListTitle title="UI" />
        <Card title="goodlord" light link="goodlord.co" />
        <Card title="design systems" light link="foo.bar" />

        <ListTitle title="Libraries" />
        <Card
          title="spring-keyframes"
          light
          link="github.com/hemlok/spring-keyframes"
        />
        <Card title="emotion-box" light link="github.com/hemlok/emotion-box" />
      </Layout>
    </ParallaxProvider>
  </ThemeProvider>
)
