import { colors } from '@utils/styles'

const GlobalStyles = () => {
  return (
    <style global jsx>
      {`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        html {
          width: 100%;
          height: 100%;
        }

        body {
          height: 100%;
          -webkit-font-smoothing: antialiased;
        }

        #__next {
          height: 100%;
        }

        a,
        a:visited {
          color: inherit;
          text-decoration: none;
          transition: color 0.25s;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        b,
        strong {
          font-weight: bold;
        }

        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: ${colors.nprogress};
        }
      `}
    </style>
  )
}

export default GlobalStyles
