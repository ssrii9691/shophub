import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [dataInfo, setDataInfo] = useState([]);
  const [filter, setFilter] = useState(dataInfo);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    let response = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setDataInfo(res.data);
        setFilter(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = dataInfo.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const Loading = () => {
    return <>Loading.....</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex px-5 justify-content-start mt-3">
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              setFilter(dataInfo);
            }}
          >
            NewStock
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            
            Men's
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's
          </div>
          <div
            className="btn btn-outline-primary  me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery
          </div>
          <div
            className="btn btn-outline-primary me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronics
          </div>
        </div>

        {filter.map((product) => {
          return (
            
            <div className="col-md-3" key={product.id} id="product-content">
              <div className="cards h-100  p-4 text-center shadow shadow-1 border border-2 rounded-5">
                <img
                  className="card-img-top border-2"
                  src={product.image}
                  alt={product.title}
                  height={200} 
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text fw-bold">${product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-warning"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="contaoner">
        <div className="row">
          <div className="col-12">
            <h3 className="text-starting text-primary px-4 mt-5 " >New Stock HurryUp...</h3>
            <hr />
          </div>
        </div>
        <div className="row justify-content center pt-4 mt-1">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
