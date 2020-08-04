import { useQuery } from '@apollo/react-hooks'
import { QUERY_ALL_CINEMA_DETAILS } from 'schemas/cinema'

const queryVars = {
  last: 10,
  first: 10
}

function CinemaList() {
  const { loading, error, data } = useQuery(QUERY_ALL_CINEMA_DETAILS, {
    variables: queryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true
  })

  if (error) return <div>Error loading posts.</div>
  if (loading) return <div>Loading</div>

  const {
    allCinemaDetails: { edges }
  } = data

  return (
    <section>
      <ul>
        {edges.map(({ node: { hallName } }, index) => (
          <li key={index}>
            {index + 1}. {hallName}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CinemaList
