import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  scroll-behavior: smooth;
  box-sizing: border-box;
}
html { 
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
  text-rendering: optimizeLegibility; 
  height: 100%;
  margin: 0;
  font-family: Poppins;
  font-optical-sizing: auto;
  font-style: normal;
  
  background-color:rgb(251, 253, 255);
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
p,
span {
  margin: 0px;
}

ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
}

input{
  outline: none;
}

.form-error {
  color: red;
  font-size: 12px;
  padding-left: 4px;
  display: none;
  }

  .form-control {
  border: 1px solid red;
  }

  .form-control ~ span {
  display: unset;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
