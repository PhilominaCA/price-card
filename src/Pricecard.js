import { ActiveConditions, DactiveConditions } from './App';

export function Pricecard({ category, amount, active, dactive }) {
  return (
    <div className="price-card">
      <span className="category">{category}</span>
      <p><span className="amount">${amount}</span>/month</p>
      <hr />
      <div className="condition">
        {active.map((element) => (<ActiveConditions actCondition={element} />))}
        <span className="deactive">{dactive.map((elem) => (<DactiveConditions dactCondition={elem} />))}</span>
      </div>
      <button> SUBSCRIBE </button>
        </div>
  );
}
