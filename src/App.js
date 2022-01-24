import './App.css';
import { cardData } from './cardData';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Pricecard } from './Pricecard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Price Card</h1>
      </header>
      <div class="price-block">
        {cardData.map(({ category, amount, active, dactive }) => (
          <Pricecard category={category} amount={amount} active={active} dactive={dactive} />
        ))}
      </div>
    </div>
  );
}

export default App;

export function ActiveConditions({ actCondition }) {
  return (
    <p> <FaCheck /> {actCondition}</p>
  );
}

export function DactiveConditions({ dactCondition }) {
  return (
    <p> <ImCross /> {dactCondition}</p>
  );
}
