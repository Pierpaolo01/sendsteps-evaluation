import './App.css';

import FormComponent from "./components/formComponent/FormComponent";
import {useState} from "react";
import ResultComponent from "./components/resultComponent/ResultComponent";

function App() {
    const [wordOverlapResult, setWordOverlapResult] = useState([]);

    return (
    <div className="App">
      <header className="App-section">
          <div className={wordOverlapResult.length ? 'loading-animation' : ''}>
              {
                  !wordOverlapResult.length ?
                      <FormComponent
                          onSuccessResponse={ (responseData) => {setWordOverlapResult(responseData)}}
                      />
                      :
                      <ResultComponent overlappingLetters={wordOverlapResult} emitReturn={() => setWordOverlapResult([])} />
              }
          </div>

      </header>
    </div>
  );
}

export default App;
