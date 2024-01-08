import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import FilterBar from "./FilterBar";
import Product from "./Product";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/FilterSort/FilterSortSlice";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import TrendingItems from "./TrendingItems";
import Banner from "./Banner";

function Products() {
  const product = useSelector((state) => state.FilterSort);
  const darkMode = useSelector((state) => state.FilterSort.darkMode);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:8000/products").then((response) => {
      response.json().then((result) => {
        dispatch(fetchProducts(result));
      });
    });
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const [images, setImages] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    product.products.forEach((productItem) => {
      if (productItem.id === id) {
        setImages(productItem.images);
      }
    });
    setShow(true);
  };

  const [showMore, setShowMore] = useState(8);

  const darkClasses = darkMode ? "p-0 bg-light main-screen" : "p-0 bg-light";

  return (
    <>
      <Container fluid className={darkClasses}>
        <Banner />
        <FilterBar />
        <p className="display-6 border-bottom text-center">Products</p>

        <Container fluid className="products p-2">
          {(product.filter ? product.filteredProducts : product.products)
            .slice(0, showMore)
            ?.map((productItem) => {
              return (
                <Product
                  id={productItem.id}
                  key={productItem.id}
                  title={productItem.title}
                  thumbnail={productItem.thumbnail}
                  description={productItem.description}
                  price={productItem.price}
                  stock={productItem.stock}
                  rating={productItem.rating}
                  discount={productItem.discountPercentage}
                  showImages={handleShow}
                />
              );
            })}
        </Container>
        {product.filter && product.filteredProducts.length === 0 ? (
          <p>No products found for your search</p>
        ) : showMore <= product.products.length ? (
          <Container className="d-flex justify-content-center my-2">
            <Button
              onClick={() => {
                setShowMore(showMore + 8);
              }}
            >
              Show More
            </Button>
          </Container>
        ) : (
          ""
        )}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Carousel>
              {images?.map((image) => {
                return (
                  <Carousel.Item>
                    <img src={image} alt="pic"></img>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Modal.Body>
        </Modal>
      </Container>
      <TrendingItems />
    </>
  );
}

export default Products;
