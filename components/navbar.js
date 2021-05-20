/** @format */

export default function Navbar() {
  return (
    <div>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h">
                <img src="../static/img/logo/Logo-header.svg" alt="" />
              </a>

              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto ">
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <style jsx>{`
        .header_area .navbar .nav .nav-item .nav-link {
          color: #094989;
          font-weight: 750;
          padding-right: 25px;
          display: inline-block;
          font-size: 14px;
        }
        .header_area .navbar .nav .nav-item:hover .nav-link {
          color: #fdb31c;
        }
      `}</style>
    </div>
  );
}
