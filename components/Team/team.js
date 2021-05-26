/** @format */

import Member from "./member";

export default function Team() {
  const member = [
    {
      id: "1",
      name: "Dat Vo",
      position: "FOUNDED & CEO",
      image: "/static/img/team/DatVo.jpg",
      describe:
        "Dat Vo has more than 10 years in outsourcing business and building offshore team for over 20 clients in Southeast Asia. With his experiences and his dynamic, he knows exactly what we need to do to make our business succesful.",
    },
    {
      id: "2",
      name: "Toan Duong",
      position: "Strategic Advisor",
      image: "/static/img/team/ToanDuong.jpg",
      describe:
        "Toan Duong has more than 18 years of experience in the banking industry, including corporate and commercial banking, venture capital and private equity investment at Vietnam bank and regional banks.",
    },
    {
      id: "3",
      name: "Co Dang Minh",
      position: "Financial Advisor",
      image: "/static/img/team/dangcominh.png",
      describe:
        "Dang Co-Minh is ex-CEO La Banque Postale Structured Asset Management, Member of Committee of Fintech Asset Management in France. He can bring us his knowledge about financial and risk management to help PlusTeam for planning and also help our customer in financial aspect.",
    },
  ];
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="row text-center">
          {member.map((member) => {
            return <Member key={member.id} member={member} />;
          })}
        </div>
      </div>
    </section>
  );
}
