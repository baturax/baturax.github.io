import css from "../css/Otobusler.module.css";
import getOtobus from "../backend/getOtobus.jsx";
import { useState, useEffect } from "react";

function Otobusler() {
  const [durakid, setDurakid] = useState("");
  const [otobusler, setOtobusler] = useState([]);

  useEffect(() => {
    if (durakid.length === 5) {
      getOtobus(durakid).then((data) => {
        if (data) setOtobusler(data);
      });
    } else {
      setOtobusler([]);
    }
  }, [durakid]);

  return (
    <div className={css.container}>
      <h1>Durağa Yaklaşan Otobüsler</h1>
      <p>Durak Numarası:</p>
      <label>
        <input
          className={css.inputbox}
          type="number"
          placeholder="ör: 11222"
          min="10000"
          max="99999"
          value={durakid}
          onChange={(e) => setDurakid(e.target.value)}
        />
      </label>

      <div className={css.results}>
        {otobusler.length === 0 ? (
          <p>Henüz otobüs yok veya durak numarası eksik.</p>
        ) : (
          otobusler.map((otobus) => (
            <div key={otobus.OtobusId} className={css.otobusCard}>
              <p>
                <strong>Hat Adı:</strong> {otobus.HatAdi}
              </p>
              <p>
                <strong>Hat No:</strong> {otobus.HatNumarasi}
              </p>
              <p>
                <strong>Kalan Durak:</strong> {otobus.KalanDurakSayisi}
              </p>
              <p>
                <strong>Engelli Uygun:</strong>{" "}
                {otobus.EngelliMi ? "Evet" : "Hayır"}
              </p>
              <p>
                <strong>Bisiklet Aparatlı:</strong>{" "}
                {otobus.BisikletAparatliMi ? "Evet" : "Hayır"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Otobusler;
