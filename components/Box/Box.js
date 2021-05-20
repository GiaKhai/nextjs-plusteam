/** @format */

export default function Box(props) {
  return (
    <div>
      <section className="section area-padding-top" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">{props.title}</h1>
              <div className="section-title-border margin-t-20" />
              <p className="text-sumary">{props.des}</p>
            </div>
          </div>
          {props.children}
        </div>
      </section>
      <style jsx>{``}</style>
    </div>
  );
}
