import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
  --color-header: #1E2044;
  --color-primary: #060937;
  --color-secondary: #0DAB77;
  --color-tertiary: #00B780;
  --color-bg-form: #2da77a;
  --color-black: #000;
  --color-white: #fff;
  --color-bg-banner: #E8F3D8;
  --color-nav-border: f2f2f2;
  --hover-brightness: 1.2;
  --color-alert-error: #f44336;
  --color-alert-success: #4caf50;
  --color-alert-warning: #EC8E0A;
  --color-alert-default: #15553d;
  --color-close-btn: #FF0000;
  
  font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-700);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px var(--light-purple);
  background-color: var(--light-gray)
  }

  ::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: var(--light-gray);
  }

  ::-webkit-scrollbar-thumb {
  background-color: var(--purple);
  border: 1px solid var(--light-purple);
  }
`;
