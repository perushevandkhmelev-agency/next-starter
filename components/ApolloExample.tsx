import { useQuery } from '@apollo/client'

import { newsItems, newsItemsVariables } from 'schemas/__generated__/newsItems'
import { QUERY_NEWS_ITEMS } from 'schemas/news'

// const queryVars = {
//   last: 10,
//   first: 10
// }

const ApolloPostsExample = () => {
  const { loading, error, data } = useQuery<newsItems, newsItemsVariables>(QUERY_NEWS_ITEMS, {
    // variables: queryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true
  })

  if (error) return <div>Error loading posts.</div>
  if (loading) return <div>Loading</div>

  return (
    <section>
      <ul>
        {data?.newsItems?.map((item, index) => (
          <li key={item?.id}>
            {index + 1}. {item?.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ApolloPostsExample
