import React from "react";
function DataDiri(props) {
  const { datadiri } = props;
  return (
    <div>
      <h2>Data Diri</h2>
      <div>
          <table>
              <tr>
                  <td>Nama</td>
                  <td>NIM</td>
                  <td>Kelompok</td>
                  <td>Shift</td>
              </tr>
              {datadiri.map((datadiri) => (
              <tr>
                  <td>{datadiri.nama}</td>
                  <td>{datadiri.nim}</td>
                  <td>{datadiri.kelompok}</td>
                  <td>{datadiri.shift}</td>
              </tr>
              ))}
          </table>
      </div >
    </div>
  );
}

export default DataDiri;