import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center border-top">
      <div className="container p-4">
        <section className="mb-4">
          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            role="button"
          >
            <i className="bi bi-facebook text-white"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            role="button"
          >
            <i className="bi bi-twitter text-white"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            role="button"
          >
            <i className="bi bi-google text-white"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-outline btn-floating m-1"
            role="button"
          >
            <i className="bi bi-instagram text-white"></i>
          </a>
        </section>

        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">About</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link>Contact us</Link>
                </li>
                <li>
                  <Link>About us</Link>
                </li>
                <li>
                  <Link>Careers</Link>
                </li>
                <li>
                  <Link>Support</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Help</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link>Payments</Link>
                </li>
                <li>
                  <Link>Shipping</Link>
                </li>
                <li>
                  <Link>Cancellation & Returns</Link>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Consumer Policy</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link>Cancellation & Returns</Link>
                </li>
                <li>
                  <Link>Terms of use</Link>
                </li>
                <li>
                  <Link>Security</Link>
                </li>
                <li>
                  <Link>Privacy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Social</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link>Facebook</Link>
                </li>
                <li>
                  <Link>Twitter</Link>
                </li>
                <li>
                  <Link>Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3">
        © 2024 Copyright:
        <a className="text-reset fw-bold">Flipkart.com</a>
      </div>
    </footer>
  );
}

export default Footer;
