import styled from 'styled-components';

export const Content = styled.div`
overflowY: scroll;
height: 100vh;
overflow-x: hidden;
`;

export const Button = styled.div`
position: fixed;
max-width: 50px;
width: 100%;
bottom: 40px;
height: 20px;
right: 2%;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: rgba(215, 223, 190, 0.8);

@media screen and (max-width: 450px) {
  right: 10%;
}
`
