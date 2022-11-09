import './App.css';

import CardComponent from "./components/cardComponent/CardComponent";
import FormComponent from "./components/formComponent/FormComponent";

function App() {
  return (
    <div className="App">
      <header className="App-section">
        <CardComponent title="Word patterns" description="Detect overlapping words within words">
            <FormComponent />
        </CardComponent>
      </header>
    </div>
  );
}

export default App;
