import React from "react";
function Hobi(props) {
  const { hobi } = props;
  return (
    <div>
      <h2>Hobi</h2>
      <div>
          <table>
              <tr>
                  <td>Nama</td>
                  <td>Anime Faforit</td>
                  <td>Game Favorit</td>
                  <td>Kegiatan Favorit</td>
              </tr>
              {hobi.map((hobi) => (
              <tr>
                  <td>{hobi.nama}</td>
                  <td>{hobi.anime}</td>
                  <td>{hobi.game}</td>
                  <td>{hobi.activity}</td>
              </tr>
              ))}
          </table>
      </div>
    </div>
  );
}

export default Hobi;