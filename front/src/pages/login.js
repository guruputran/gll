import React from "react"
import { useState, useEffect } from "react"
const { post } = require("superagent")
export default function LoginPage() {
  const [thetoken, setthetoken] = useState({})
  const [myuser, setmyuser] = useState(
    JSON.parse(localStorage.getItem("myuser"))
  )

  useEffect(() => {
    console.log("the user is:", myuser)
    localStorage.setItem("myuser", JSON.stringify(myuser))
  }, [thetoken, myuser])

  const query = `mutation{
    login(email:"rajppd@yahoo.com", password:"password", device:"web")
  }`

  const queryout = {
    query: `mutation{
      logout{
        name
      }
    }`,
    variables: {},
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const headers = {
    "Content-Type": "application/json",
  }

  async function mymain() {
    const { body } = await post("http://localhost:8000/graphql")
      .set(headers)
      .send({ query })
    console.log("body", body.data)
    if (body.data.login) {
      localStorage.setItem("token", JSON.stringify(body.data.login))
      setthetoken(body.data.login)
      myman()
    }
    //Axios works also!!
    // const { data } = await axios.post(
    //   "http://localhost:8000/graphql",
    //   { query },
    //   config
    // )
    // console.log("UL act", data)
  }
  const tokens = JSON.parse(localStorage.getItem("token"))
  const endpoint = "http://localhost:8000/graphql"
  const headers2 = {
    "content-type": "application/json",
    Authorization: "Bearer " + tokens,
  }
  const graphqlQuery = {
    operationName: "fetchUser",
    query: `query fetchUser {
      me {
        name
        email
        id
      }
    }`,
    variables: {},
  }
  async function myman() {
    const options = {
      method: "POST",
      headers: headers2,
      body: JSON.stringify(graphqlQuery),
    }

    const response = await fetch(endpoint, options)
    const data = await response.json()

    console.log("Me data IS:", data.data?.me) // data
    setmyuser(data.data?.me)
    console.log("Errors", data.errors) //
  }
  async function log__out() {
    const options = {
      method: "POST",
      headers: headers2,
      body: JSON.stringify(queryout),
    }

    const response = await fetch(endpoint, options)
    const data = await response.json()
    localStorage.removeItem("token")
    localStorage.removeItem("myuser")
    console.log("Logout data is:", data?.data.logout.name) // data
    console.log("Errors", data.errors) //
  }

  return (
    <>
      <button onClick={() => mymain()}>LOGIN</button>
      <button onClick={() => log__out()}>LOGOUT</button>
    </>
  )
}
