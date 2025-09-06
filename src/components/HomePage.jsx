import css from "../css/HomePage.module.css";

import { GiBusStop } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={css.container}>
      <div className={css.bolumler}>
        <h1 id={css.hosgeldiniz}>Hoş Geldiniz</h1>
      </div>

      <br />

      <div
        className={css.bolumler}
        onClick={() => {
          navigate("/otobusler");
        }}
      >
        <h1>
          Durağa Yaklaşan Otobüsler <GiBusStop />
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
