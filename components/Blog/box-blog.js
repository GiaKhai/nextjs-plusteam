/** @format */

export default function BoxBlog({ blog }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="single-service">
        <div className="service-icon">
          <img src={blog.image} alt="" />
        </div>
        <div className="service-content">
          <h5>{blog.title}</h5>
          <p>{blog.content}</p>
          <a href="blog-detail.html">Read More &gt;</a>
        </div>
      </div>
      <style jsx>{`
        .single-service {
          box-shadow: 0px 5px 40px rgb(30 73 132 / 10%);
          border: 1px solid #edf1f6;
          background: #fff;
          text-align: left;
          border: rgb(199, 198, 198) 2 solid;
          border-radius: 25px;
          background-position: right top;
          background-repeat: no-repeat;
          transition: all 300ms linear 0s;
        }
        .service-icon img {
          max-width: 100%;
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
        }
        .service-content {
          margin: 15px 20px;
        }
        .service-content h5 {
          font-size: 18px;
          font-weight: 600;
          color: #1d1d1d;
          margin-bottom: 18px;
        }
      `}</style>
    </div>
  );
}
