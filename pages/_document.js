import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

const bodyStyle = `
body {
  margin: 0;
}
* {box-sizing: border-box;}`

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{`${bodyStyle}`}</style>
          <style> @import url('https://use.typekit.net/jin5auh.css');</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
