

const ItemDetail = ({detail}) => {
  return (
    <div>
        <img alt={detail.image}/>
        <h2>{detail.name}</h2>
        <h3>{detail.price}</h3>
    </div>
  );
};

export default ItemDetail