import "./App.css";
import Form from "./components/form";
import { useState, useEffect } from "react";
import List from "./components/List";

const obj = [];
function App() {
  const [data, setdata] = useState(obj);

  const formDataHandler = (values) => {
    setdata([...data, values]);
  };

  useEffect(() => {
    console.log(data);
    const myJSON = JSON.stringify(data);
    localStorage.setItem("datas", myJSON);
  }, [data]);

  const handleDelete = (key) => {
    const newData = data.filter((v, i) => v.id !== key);
    setdata(newData);
  };

  return (
    <>
      <Form formData={formDataHandler} />
      <>
        <List data={data} handleDelete={handleDelete} />
        {/* {console.log(data)} */}
      </>
    </>
  );
}

export default App;
