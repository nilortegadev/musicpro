import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";


const SingleProduct = ({ history, match }) => {
  const [ qty, setQty ] = useState(1);
  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails;

  useEffect(() =>{
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  const AddToCartHandle = (e) => {
    e.preventDefault()
    history.push(`/cart/${productId}?qty=${qty}`)
  }
  return (
    <>
      <Header />
      <div className="container single-product">
        {
          loading ? (
            <Loading/>
          )
          : error ? (
            <Message variant="alert-danger">{error}</Message>
          )
          :
          (
            <>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-dtl">
                    <div className="product-info">
                      <div className="product-name">{product.name}</div>
                    </div>
                    <p>{product.description}</p>

                    <div className="product-count col-lg-7 ">
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Precio</h6>
                        <span>${product.price}</span>
                      </div>
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Estado</h6>
                        {product.countInStock > 0 ? (
                          <span>In Stock</span>
                        ) : (
                          <span>unavailable</span>
                        )}
                      </div>
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Reseñas</h6>
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                      </div>
                      {product.countInStock > 0 ? (
                        <>
                          <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Cantidad</h6>
                            <select 
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                    </div>
                    <button onClick={ AddToCartHandle } className="round-black-btn">Añadir al carro</button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* RATING */}
        <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3">RESEÑAS</h6>
            <Message variant={"alert-info mt-3"}>No hay reseñas</Message>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Admin</strong>
              <Rating />
              <span>Jun 12 2022</span>
              <div className="alert alert-info mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>ESCRIBE UNA RESEÑA</h6>
            <div className="my-4"></div>

            <form>
              <div className="my-4">
                <strong>Rating</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">Selecciona...</option>
                  <option value="1">1 - Muy malo</option>
                  <option value="2">2 - Malo</option>
                  <option value="3">3 - Bueno</option>
                  <option value="4">4 - Muy bueno</option>
                  <option value="5">5 - Exelente</option>
                </select>
              </div>
              <div className="my-4">
                <strong>Comentarios</strong>
                <textarea
                  row="3"
                  className="col-12 bg-light p-3 mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  ENVIAR
                </button>
              </div>
            </form>
            <div className="my-3">
              <Message variant={"alert-warning"}>
                Por favor{" "}
                <Link to="/login">
                  " <strong>Ingresa</strong> "
                </Link>{" "}
                para escribir una reseña{" "}
              </Message>
            </div>
          </div>
        </div>
            </>
          )
        }

      </div>
    </>
  );
};

export default SingleProduct;
