import styled from 'styled-components'
import Icon from 'components/Icon'
import { media } from 'utils/styles'

function HomePage() {
  return (
    <Container>
      <Main>
        <Title>
          Welcome to <a href="https://github.com/perushevandkhmelev-agency/next-starter">next-starter!</a>
        </Title>
        <Description>
          Get started by editing <Code>pages/index.js</Code>
        </Description>
        <Grid>
          <Card href="https://github.com/perushevandkhmelev-agency/next-starter/wiki">
            <CardTitle>Wiki &rarr;</CardTitle>
            <CardText>Connection of additional functions implemented within the agency.</CardText>
          </Card>
          <Card href="https://nextjs.org/docs">
            <CardTitle>Documentation &rarr;</CardTitle>
            <CardText>Find in-depth information about Next.js features and API.</CardText>
          </Card>
        </Grid>
      </Main>
      <Footer>
        <HeartIcon name="heart" />
      </Footer>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 4rem;
  line-height: 1.15;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
`

const Code = styled.code`
  padding: 0.75rem;
  border-radius: 5px;
  background-color: #fafafa;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
    monospace;
  font-size: 1.1rem;
`

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  ${media.mobile`
    width: 100%;
    flex-direction: column;
  `};
`

const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  text-align: left;
  text-decoration: none;
  color: inherit;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #0070f3;
    color: #0070f3;
  }
`

const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

const CardText = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`

const HeartIcon = styled(Icon)`
  color: red;
  font-size: 18px;
`
