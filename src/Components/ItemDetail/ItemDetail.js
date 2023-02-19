import './detail.css';


const ItemDetail = ({detail}) => {
  return (
    <div className="detail">
        <img alt={detail.name} src={detail.img} width="350px"/>
        <h2>{detail.name}</h2>
        <h3>{detail.description}</h3>
        <h3>Precio: {detail.price}</h3>
    </div>
  );
};

export default ItemDetail