import { useStaticQuery, graphql } from "gatsby"
export const useUsers = () => {
  const { allRestApiUsers } = useStaticQuery(graphql`
    query {
      allRestApiUsers {
        edges {
          node {
            id
            name
            phone
            email
            address {
              city
            }
          }
        }
      }
    }
  `)
  console.log("inner", allRestApiUsers)
  return allRestApiUsers
}
