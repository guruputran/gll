import React from "react"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
body {
background-color: ${props => (props.theme === "white" ? "white" : "white")};
}
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="white" />
    </React.Fragment>
  )
}
