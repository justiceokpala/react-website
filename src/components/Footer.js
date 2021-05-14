import React from 'react'
import {FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa"

function Footer() {
    <FaFacebook size={30} style={{ color: 'blue' }} />
    return (
        <section className="container mt-4 grey">
        <div className="row mt-4">
        <div className="col-md-4 bluee"><FaFacebook/></div>   
        <div className="col-md-4 bluee"><FaTwitter/></div>
        <div className="col-md-4 green"><FaWhatsapp/></div>
        </div>
        </section>
    )
}

export default Footer
