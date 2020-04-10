import styled from 'styled-components'
import Icon from 'components/Icon'
import { withApollo } from 'utils/apollo'
import CinemaList from 'components/CinemaList'

export default withApollo(() => (
  <>
    <div>
      Welcome to Next.js! <Heart name="heart" />
    </div>
    <CinemaList />
  </>
))

const Heart = styled(Icon)`
  color: red;
`
