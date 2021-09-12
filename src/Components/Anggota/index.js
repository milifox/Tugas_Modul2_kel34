import React from "react";

function Anggota(props) {
    const {nama, gambar} = props;
    return (
        <div>
            <div>
                <h2>{nama}</h2>
                <img src={gambar} alt="Foto Diri" class="gambar"/>
            </div>
            
        </div>
    );
}

export default Anggota;

