import "./form.css";
import { useState } from "react";

const Form = (props) => {
  const [id, setEntered_id] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const idChangeHandler = (e) => {
    setEntered_id(e.target.value);
  };

  const tableChangeHandler = (e) => {
    setTable(e.target.value);
  };
  const dishChangeHandler = (e) => {
    setDish(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const Data = {
      id: id,
      price: price,
      dish: dish,
      table: table,
    };
    props.formData(Data);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="new-data__controls">
        <div className="new-data__control">
          <label>Unique order id</label>
          <input type="number" value={id} onChange={idChangeHandler} />
        </div>
        <div className="new-data__control">
          <label>enter price</label>
          <input type="number" value={price} onChange={priceChangeHandler} />
        </div>
        <div className="new-data__control">
          <label>enter dish</label>
          <input type="text" value={dish} onChange={dishChangeHandler} />
        </div>
        <div className="new-data__control">
          <label>choose table</label>
          <input type="number" value={table} onChange={tableChangeHandler} />
        </div>
      </div>
      <div className="new-data__actions">
        <button type="submit">Add data</button>
      </div>
    </form>
  );
};
export default Form;
