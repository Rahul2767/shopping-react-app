import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { darkMode } from "../../features/FilterSort/FilterSortSlice";
import {
  filterByCategory,
  sortByAvailability,
  sortByDiscount,
  sortByPrice,
  sortByRating,
} from "../../features/FilterSort/FilterSortSlice";

function FilterBar() {
  const dispatch = useDispatch();

  function Price() {
    dispatch(sortByPrice());
  }
  function Discount() {
    dispatch(sortByDiscount());
  }
  function Availability() {
    dispatch(sortByAvailability());
  }
  function Rating() {
    dispatch(sortByRating());
  }
  function Category(type) {
    dispatch(filterByCategory(type));
  }

  function enableDarkMode() {
    dispatch(darkMode(true));
  }

  return (
    <Row className="mx-0 border-bottom d-flex justify-content-between">
      <Col className="d-flex align-items-center">
        <Form>
          <Form.Toggle
            onChange={enableDarkMode}
            id="custom-switch"
            label="Dark Mode"
            checked={darkMode}
          />
        </Form>
      </Col>
      <Col className="d-flex align-items-center justify-content-end">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="bg-dark p-1 border-0">
            Sortby
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={Price} href="#/action-1">
              Price
            </Dropdown.Item>
            <Dropdown.Item onClick={Discount} href="#/action-2">
              Discount
            </Dropdown.Item>
            <Dropdown.Item onClick={Availability} href="#/action-3">
              Availability
            </Dropdown.Item>
            <Dropdown.Item onClick={Rating} href="#/action-3">
              Rating
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="ps-4">
          <Dropdown.Toggle id="dropdown-basic" className="bg-dark p-1 border-0">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                Category("smartphones");
              }}
              href="#/action-2"
            >
              smartphones
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                Category("fragrances");
              }}
              href="#/action-2"
            >
              fragrances
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                Category("skincare");
              }}
              href="#/action-2"
            >
              skincare
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                Category("groceries");
              }}
              href="#/action-2"
            >
              groceries
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                Category("home-decoration");
              }}
              href="#/action-2"
            >
              home decoration
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                Category("laptops");
              }}
              href="#/action-2"
            >
              laptops
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                Category("all");
              }}
              href="#/action-2"
            >
              All
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default FilterBar;
