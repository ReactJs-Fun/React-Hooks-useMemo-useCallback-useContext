import './App.css';
import Parent from './useCallback/Parent';
import Component from './useContext/Component';
import ExpensiveCalculation from './useMemo/ExpensiveCalculation';

function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      {/* <ExpensiveCalculation /> */}
      <Component />
    </div>
  );
}

export default App;


// Hence the parent will render on useEffect dependency  its not effect or render child component
// if we will give same dependecy to usefect in parent n chld then both page will render
// if we make changes in child n that r in dependecny for parent then parent render

// overall page will render upon dependecy only its not affect other page till same dependecy value