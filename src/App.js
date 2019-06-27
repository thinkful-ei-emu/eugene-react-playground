import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter';


const firstTooltip = (
  <Tooltip message = 'tooltip message' color = '#126BCC'>
    ipsum
  </Tooltip>
)

const secondTooltip = (
  <Tooltip message = 'another tooltip message' color = 'hotpink'>
    officiis
  </Tooltip>
)


function App() {
  return (
    <main className='App'>
      <Counter count = {123} step = {3}/>
      <TheDate />
      <Split className='left' flexBasis={2}>
        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
        {secondTooltip}
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
        {firstTooltip}
      </Split>
    </main>
  )
}
export default App;