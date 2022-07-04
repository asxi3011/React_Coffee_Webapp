import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ background: "linear-gradient(to right, #2c2c2c, #4e4438)" }}
      >
        {/* Section: Social media */}
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="py-3">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  Dau
                </h6>
                <p>Trang web được tạo ra cho môn đồ án tot nghiep</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Danh mục</h6>
                <p>
                  <Link to="/product" className="text-reset">
                    Sản phẩm
                  </Link>
                </p>
                <p>
                  <Link to="/news" className="text-reset">
                    Tin tức
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Khuyến Mãi
                  </Link>
                </p>
                <p>
                  <Link to="/tracuudonhang" className="text-reset">
                    Tra cứu đơn hàng
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/ca-phe" className="text-reset">
                    Cà phê
                  </Link>
                </p>
                <p>
                  <Link to="/tra" className="text-reset">
                    Trà
                  </Link>
                </p>
                <p>
                  <Link to="/da-xay" className="text-reset">
                    Đá xay
                  </Link>
                </p>
                <p>
                  <Link to="/banh-ngot" className="text-reset">
                    Bánh ngọt
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> Trường đại học công nghệ
                  sài gòn
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  asxi3011@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
export default Footer;
