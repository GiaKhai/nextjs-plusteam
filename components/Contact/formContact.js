export default function FormContact() {
  return (
    <div className="row mt-25">
      <div className="col-lg-8 offset-lg-2">
        <form action="" method="post">
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name*"
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email*"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Tell us your problematic headache..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form-group mt-3 " style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-outline-warning btn-hiring"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        #name {
          background-repeat: no-repeat;
          background-position: 7px center;
          text-indent: 20px;
          background-image: url(/static/img/yellow-people.png);
        }
        #email {
          background-repeat: no-repeat;
          background-position: 6px center;
          text-indent: 20px;
          background-image: url(/static/img/yellow-mail.png);
        }
        #message {
          background-repeat: no-repeat;
          background-position: 8px 8px;
          text-indent: 20px;
          background-image: url(/static/img/yellow-pen.png);
        }
        .form-control {
          display: block;
          width: 100%;
          min-height: 45px;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #094989;
          background-color: #fff;
          background-clip: padding-box;
          border: 2px solid #094989;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
      `}</style>
    </div>
  );
}
