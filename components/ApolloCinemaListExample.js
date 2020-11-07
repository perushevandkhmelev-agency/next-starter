import { useQuery } from '@apollo/client'
import { QUERY_ALL_CINEMA_DETAILS } from 'schemas/cinema'

const queryVars = {
  last: 10,
  first: 10
}

const handleClick = () => console.log('fire')

function ApolloCinemaListExample() {
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
      <button onClick={handleClick} type="submit">
        fire
      </button>
      <ul>
        {edges.map(({ node: { id, hallName } }, index) => {
          return (
            <li key={id}>
              {index + 1}. {hallName}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ApolloCinemaListExample
