import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.text};
    margin-top: 40px;
    margin-left: 25%;
  }

  p {
    margin-top: 24px;
    font-size: 23px;
    line-height: 32px;
  }

  img {
    max-width: 350px;
    max-height: 250px;
  }
`
