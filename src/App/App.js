import style from './App.module.css';
import Board from '../Board/Board';
import styled from 'styled-components';

const AppContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 25px;
`

function App() {
  return (
    <AppContainer>
      <Board />
    </AppContainer>
  );
}

export default App;
