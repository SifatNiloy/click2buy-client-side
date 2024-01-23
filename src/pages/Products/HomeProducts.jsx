const HomeProducts = ({ product }) => {
  const { name, seller, price, stock, ratings, img, quantity } = product;
  return (
    <div className="card w-72 h-96 glass">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>price : {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-info">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
