import './App.css';

import FormComponent from "./components/formComponent/FormComponent";
import {useState} from "react";

function App() {
    const [loading, setLoading] = useState(false);
    const [wordOverlapResult, setWordOverlapResult] = useState('');

    return (
    <div className="App">
      <header className="App-section">
          <div className={loading ? "loading-animation" : ""}>
              {
                  !wordOverlapResult ?
                      <FormComponent
                          onFormSubmit={(isLoading) =>  {setLoading(isLoading)} }
                          onSuccessResponse={ (responseData) => {setWordOverlapResult(responseData)}}
                      />
                      :
                      <h1>SHESHH</h1>
              }
          </div>

      </header>
    </div>
  );
}

export default App;
