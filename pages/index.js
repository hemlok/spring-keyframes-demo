import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import styled, { hydrate, injectGlobal, keyframes } from 'react-emotion'
import spring from 'spring-keyframes'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

import {
  Layout,
  Divider,
  Text,
  Column,
  Row,
  Space,
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
    overflow-x: hidden;
    @media only screen and (max-width: 800px) {
      font-size: 10px;
    }
  }
  * {
    box-sizing: border-box;
  }
  .token.keyword, .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol {
    color: ${styleguide.colors.primaryLight} !important;
  }
  .token.attr-name {
    color: #C5C8C6 !important;
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
  large: '25.5rem',
  small: '10rem',
  medium: '18.5rem',
}

const circleSize = ({ size }) => sized[size]

const springIn = spring(
  {
    from: {
      scale: 0.8,
      x: -100,
    },
    to: {
      scale: 1,
      x: 0,
    },
  },
  {
    stiffness: 0.8,
    damping: 0.5,
    precision: 4,
  }
)

const fadeIn = keyframes`
  from {
    opacity: 0.01
  }
  to {
    opacity: 0.99
  }
`

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
  animation: ${props => (props.animation ? props.animation : springIn)}
      ${props => (props.duration ? props.duration : '3000ms')},
    ${fadeIn} 500ms;
  animation-delay: ${props => (props.delay ? props.delay : '0ms')};
  animation-fill-mode: both;
  animation-iteration-count: 1;
`

const Splash = styled('div')`
  position: relative;
  z-index: 1;
`

const Group = ({ animation, duration }) => (
  <div>
    <Circle
      light
      animation={animation}
      duration={duration}
      size="small"
      delay={'400ms'}
      style={{
        right: '5.5rem',
        top: '4rem',
        zIndex: 3,
      }}
    />
    <Circle
      primary
      animation={animation}
      duration={duration}
      size="large"
      style={{
        right: '-14rem',
        top: '-4rem',
      }}
    />
    <Circle
      size="medium"
      delay="200ms"
      animation={animation}
      duration={duration}
      style={{
        right: '-5.7rem',
        top: '9rem',
        zIndex: 2,
      }}
    />
  </div>
)

const scope = { styled, springKeyframes: spring, Animation: Group }
const code = `const options = {
  stiffness: 0.9,
  damping: 0.2,
  precision: 4,
}

const animation = springKeyframes({
  from: { scale: 0.8, x: 100, },
  to: { scale: 1, x: 0 }
}, options)

render(
  <Animation animation={animation} duration="5000ms"/>
)
`

const Preview = styled(LivePreview)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Live = styled(LiveProvider)`
  width: 100%;
  position: relative;
`

const Editor = styled(LiveEditor)`
  padding: 0 !important;
  background-color: transparent !important;
  color: ${styleguide.colors.text};
  font-size: 1.4rem;
  position: relative;
  z-index: 4;
`

export default () => (
  <ThemeProvider theme={styleguide.theme}>
    <Layout>
      <Hero align="start">
        <Splash>
          <Circle
            light
            size="small"
            delay="400ms"
            style={{
              left: '5.5rem',
              top: '2.8rem',
              zIndex: 1,
            }}
          />
          <Circle
            style={{
              left: '-14rem',
              top: '-3.5rem',
            }}
            size="large"
          />
          <Circle
            style={{
              left: '-5.7rem',
              top: '7.14rem',
              zIndex: 2,
            }}
            delay="200ms"
            primary
            size="medium"
          />
        </Splash>
        <Title src="/static/spring-keyframes.svg" alt="spring keyframes" />
        <Divider style={{ zIndex: 2 }} />
        <Text style={{ zIndex: 2, position: 'relative' }}>
          Sometimes running spring animations in javascript with libraries like{' '}
          <b>React-Motion</b> on the web cause ‘jank’ when the main thread is
          busy. <b>Spring-Keyframes</b> solves this problem by generating css
          animations that run natively. No <b>RAF loop</b> required.
        </Text>
        <Href href="https://github.com/hemlok/spring-keyframes">
          <b>github.com/hemlok/spring-keyframes</b>
        </Href>
        <Space size="large" />
        <Text style={{ zIndex: 2, position: 'relative' }}>
          <b> Spring-Keyframes</b> uses <b> Emotion.sh </b> to generate css
          keyframes. This doesn't mean you have to use <b>React</b> or{' '}
          <b>css-in-js</b> though. <b>Spring-Keyframes</b> generates a css
          animation and returns the animation name, so you can inject that into
          your app with any tool you see fit.
        </Text>
        <Divider style={{ zIndex: 2 }} />
        <Text>
          <b>Try it for yourself!</b>
        </Text>
        <Space size="large" />
        <Live scope={scope} code={code} noInline={true}>
          <Row align="center" justify="space-between">
            <Editor style={{ zIndex: 3 }} />
            <Preview />
          </Row>
        </Live>
        <Space size="large" />
        <Divider style={{ zIndex: 2 }} />
        <Text>
          <b>Why choose Spring-Keyframes?</b>
        </Text>
        <Space size="large" />
        <Text>
          You don't want to use React. <b>Spring-Keyframes</b> is totally
          framework agnostic. You don't need to use css-in-js. <b>Scoops</b>{' '}
          uses it with <b>Preact</b> to generate all the motion for the{' '}
          <b>Scoops</b> widget.
        </Text>
        <Href href="https://scoops.netlify.com">
          <b>scoops.io</b>
        </Href>
        <Space size="large" />
        <Text>
          You want guaranteed 60fps even with a busy main thread. Javascript
          only initiates the animation process by creating the animation and
          applying it to your DOM. This means it will run at 60fps on startup,
          or when other complex processes are running.
        </Text>
        <Space size="large" />
        <Divider style={{ zIndex: 2 }} />
        <Text>
          <b>There are some limitations...</b>
        </Text>
        <Space size="large" />
        <Text>
          First, <b>Spring-Keyframes</b> is not good at animating to one state,
          and then animating back to the original state. You can do it, but due
          to the nature of css animations, it's not as easy as it could be.
          <br />
          <br />
          Second, unlike a true spring animation, whose length is dictate by
          physics, you must set the length of your spring animation. The length
          of the css animation is a key value to play with when creating your
          animation.
          <br />
          <br />
          Finally, <b>Spring-Keyframes</b> is limited by the options you can
          apply to a css animation. <b>animation-fill-mode</b> generally needs
          to be set to <b>both</b>, and you should avoid setting an easing
          funciton!
        </Text>
        <Space size="large" />
        <Divider style={{ zIndex: 2 }} />
        <Text>
          If you have any questions feel free to reach out to me on{' '}
          <b>Twitter</b> or in issues on <b>Github</b>!
        </Text>
        <Href href="https://twitter.com/hemlok_">
          <b>twitter.com/hemlok_</b>
        </Href>
        <Space size="large" />
      </Hero>
    </Layout>
  </ThemeProvider>
)
