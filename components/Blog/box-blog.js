/** @format */
import Link from "next/link";
export default function BoxBlog({ blog }) {
  return (
    <div className="col-md-6 col-lg-4 mt-25">
      <div className="single-service">
        <div className="service-icon">
          <img src={blog.thumnail} alt="" />
        </div>
        <div className="service-content">
          <h5>{blog.title}</h5>
          <p>{blog.summary}</p>
          <Link href={"/blog/" + blog.id} key={blog.id}>
            Read more &gt;
          </Link>
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
        .single-service p {
          font-family: Avenir;
          font-style: normal;
          font-weight: 500;
          font-size: 17px;
          line-height: 23px;
          color: black;
        }
        .single-service:hover {
          background: rgba(9, 73, 137, 1);
        }
        .single-service:hover h5 {
          color: #fdb31c;
        }
        .single-service:hover p {
          color: #fff;
        }
        .single-service:hover .read {
          color: #fdb31c;
        }
        a:hover {
          color: #fdb31c !important;
        }
        .service-icon img {
          max-width: 100%;
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
        }
        .service-content {
          padding: 15px 20px;
          color: #292b33 !important;
        }
        .service-content:hover {
          color: #fdb31c !important;
        }
        .service-content h5 {
          font-family: Avenir;
          font-style: normal;
          font-weight: 900;
          font-size: 19px;
          line-height: 29px;
          color: #292b33;
        }
      `}</style>
    </div>
  );
}
