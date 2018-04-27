import App, { Container } from 'next/app'
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <TransitionGroup>
          <CSSTransition
            key={this.props.router.route}
            classNames="fade"
            timeout={1000}>
            <Component {...pageProps} />
          </CSSTransition>
        </TransitionGroup>

        <style jsx global>{`
          .fade-enter {
            opacity: 0;
          }
          .fade-enter-active {
            opacity: 1;
            transition: opacity 1.5s;
          }
          .fade-exit-active {
            opacity: 0;
            transition: opacity 1.5s;
          }
        `}</style>
      </Container>
    )
  }
}
