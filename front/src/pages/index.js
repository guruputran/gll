//https://docs.getform.io/guides/gatsby/  (post exmaple)
import React from "react"
import { useUsers } from "../hooks/use-users"
export default function IndexPage() {
  const allRestApiUsers = useUsers()
  console.log("datas", allRestApiUsers)
  return (
    <header>
      {allRestApiUsers.edges.map((el, index) => {
        return <h2 key={index}>{el.node.name}</h2>
      })}
    </header>
  )
}
