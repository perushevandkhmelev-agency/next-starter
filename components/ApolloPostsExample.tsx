import { useQuery } from '@apollo/client'

import { QUERY_POSTS } from 'schemas/posts'

interface PostsData {
  posts: {
    data: {
      id: string
      title: string
    }[]
  }
}

// const queryVars = {
//   last: 10,
//   first: 10
// }

const ApolloPostsExample = () => {
  const { loading, error, data } = useQuery<PostsData>(QUERY_POSTS, {
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
        {data?.posts.data.map(({ id, title }, index: number) => (
          <li key={id}>
            {index + 1}. {title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ApolloPostsExample
