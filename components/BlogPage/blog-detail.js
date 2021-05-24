/** @format */

export default function BlogDetail() {
  return (
    <div>
      <section className="section pt-5">
        <div className="container">
          <h1 className="title"> &#8249; Blog </h1>
          <div className="row mt-25">
            <div className="col-lg-12">
              <img className="img-title" src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-25">
        <div className="container">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="section-title text-center">Why Vietnam?</h1>
            <div className="section-title-border margin-t-20" />
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-3">
              <p className="mt-4">
                <span className="text-muted d-block mt-2">Author</span>
                <span className="h5">ADMIN</span>
              </p>
              <p className="mt-4">
                <span className="text-muted d-block mt-2">Date</span>
                <span className="h5">1/1/2021</span>
              </p>
              <p className="share mt-10">
                <span className="h5">Share</span>
                <br />
                <img className="mr-2" src="/static/img/facebook.svg" alt="fb" />
                <img className="mr-2" src="/static/img/in.svg" alt="linked" />
                <img src="/static/img/share.svg" alt="share" />
              </p>
            </div>
            <div className="col-lg-9 content">
              <p className="mt-4">
                Foreign investment in Vietnam has grown substantially in recent
                years. This growth began in the 1980s with the Doi Moi reforms
                and picked up again in 2007 with the country’s entry into the
                WTO, which reduced trade barriers to entry for foreign
                investors. Investors have a number of options for entry into the
                Vietnamese market. Vietnam’s Law on Enterprise and Law on
                Investment implemented in 2015, define all market entry options.
                We have outlined the most common forms of market entry for
                foreign investors, touching on the requirements, time frame for
                the establishment and best structure suited for each mode of
                investment. Representative office Representative offices (RO)
                offer a low-cost entry for companies seeking to gain a better
                understanding of the Vietnamese market. As such, this option is
                among the most common for first-time entrants to the Vietnamese
                market and often precedes a larger presence within the country.
                Currently, activities permitted for RO extent to: Conducting
                market research Acting as a liaison office for its parent
                company Promoting the activities of its head office through
                meetings, and other activities, that leads to business at later
                stages. Capital Requirements Vietnam’s Ministry of Planning and
                Investment (MPI) does not currently specify required capital for
                representative offices. While the MPI does not impose specified
                capital requirements, companies will be required to show that
                their capital contributions are sufficient to fund the
                activities of their operations. As a result, potential investors
                should prepare to commit a minimum of US$ 10,000 to fund their
                operations. Timeframe for Establishment Representative offices
                can be set up in between six to eight weeks. Given the absence
                of in-country revenue and associated licensing requirements, the
                setup process for this option does not entail as many
                bureaucratic procedures as others. Benefits Representative
                offices do not face the level of compliance requirements levied
                upon fully established enterprises by the Ministry of Planning
                and Investment. Further, companies are not subject to corporate
                income tax or compliance under a representative office
                structure. Limitations While permitted to engage in specific
                activities, such as market research, representative offices are
                subject to a variety of restrictions that make them less
                effective for companies with plans to establish an operational
                presence in the country. Representative offices are not legally
                independent from their parent company; the parent company is
                liable for all representative office actions in Vietnam. In
                addition, representative offices cannot conduct profit
                generating activities within Vietnam, including, but not limited
                to: Execution of contracts; Receipt of funds; Sale of goods;
                Provision of services.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="service-area area-padding-top" id="blog">
        <div className="container">
          <div className="row">
            {"{"}% for item in all_blog %{"}"}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="service-icon">
                  <img src="{{item.thumbnail.url}}" alt="" />
                </div>
                <div className="service-content">
                  <h5>
                    {"{"}
                    {"{"}item.title{"}"}
                    {"}"}
                  </h5>
                  <p>
                    {"{"}
                    {"{"}item.summary{"}"}
                    {"}"}
                  </p>
                  <a href="{% url 'blog:blog_detail' item.slug %}">
                    Read More &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <style jsx>{``}</style>
    </div>
  );
}
