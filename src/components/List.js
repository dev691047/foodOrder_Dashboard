import ListItems from "./ListItems";

const List = (prop) => {
  function handleClick(key) {
    console.log(key);
    prop.handleDelete(key);
  }
  return (
    <div>
      {prop.data.map((v) => (
        <ListItems
          id={v.id}
          table={v.table}
          price={v.price}
          dish={v.dish}
          handleClick={handleClick}
        />
      ))}
      {console.log(prop)}
    </div>
  );
};

export default List;
