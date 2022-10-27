import { colors } from 'utils/styles'

const GlobalStyles = () => {
  return (
    <style global jsx>
      {`
        html {
          width: 100%;
          height: 100%;
        }

        body {
          height: 100%;
        }

        #__next {
          height: 100%;
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
