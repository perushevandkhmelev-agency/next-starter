import styled from 'styled-components'
import Icon from 'components/Icon'
import CinemaList from 'components/CinemaList'

function Main() {
  return (
    <>
      <div>
        Welcome to Next.js! <Heart name="heart" />
      </div>
      <CinemaList />
    </>
  )
}

export default Main

const Heart = styled(Icon)`
  color: red;
`
