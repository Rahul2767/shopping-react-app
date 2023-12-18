import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-white text-center border">
            <div className="container p-4">
                <section className="mb-4">
                    <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" role="button"
                    ><i className="bi bi-facebook text-white"></i></a>

                    <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" role="button"
                    ><i className="bi bi-twitter text-white"></i
                    ></a>

                    <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" role="button"
                    ><i className="bi bi-google text-white"></i
                    ></a>

                    <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" role="button"
                    ><i className="bi bi-instagram text-white"></i
                    ></a>
                </section>

                <section className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">About</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    Contact us
                                </li>
                                <li>
                                    About us
                                </li>
                                <li>
                                    Careers
                                </li>
                                <li>
                                    Support
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Help</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    Payments
                                </li>
                                <li>
                                    Shipping
                                </li>
                                <li>
                                    Cancellation & Returns
                                </li>
                                <li>
                                    FAQ
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Consumer Policy</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    Cancellation & Returns
                                </li>
                                <li>
                                    Terms of use
                                </li>
                                <li>
                                    Security
                                </li>
                                <li>
                                    Privacy
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Social</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    Facebook
                                </li>
                                <li>
                                    Twitter
                                </li>
                                <li>
                                    Instagram
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div >

            <div className="text-center p-3" >
                © 2024 Copyright:
                <a className="text-reset fw-bold">Flipkart.com</a>
            </div>
        </footer >
    )
}

export default Footer
