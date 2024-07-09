import { ChipDirective, ChipListComponent, ChipsDirective } from '@syncfusion/ej2-react-buttons';
import './App.css';
import { useState } from 'react';

function App() {
  const [chipText, setChipText] = useState("");
  function chipClick(){
    setChipText("Sent a text");
  }
  return (
    <div className="App">
      <ChipListComponent selection='Multiple' onClick={chipClick}
      enableDelete={true}>
        <ChipsDirective>
          <ChipDirective text='Anne'
          leadingIconUrl='https://ej2.syncfusion.com/react/demos/src/chips/images/anne.png'>
          </ChipDirective>
          <ChipDirective text='Janet'
          leadingIconUrl='https://ej2.syncfusion.com/react/demos/src/chips/images/janet.png'>
          </ChipDirective>
          <ChipDirective text='Laura' cssClass='e-outline'>
          </ChipDirective>
          <ChipDirective text='Margaret' avatarText='M'>
          </ChipDirective>
        </ChipsDirective>
      </ChipListComponent>
      <div className='text'>{chipText}</div>
    </div>
  );
}

export default App;
