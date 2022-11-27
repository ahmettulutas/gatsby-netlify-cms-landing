import { Link } from 'gatsby';
import React from 'react';

export const GetAppointment = () => (
  <div className="get-appointment">
    <h3>Sizi Arayalım</h3>
    <p>Psikolog randevunuzu oluşturmak için iletişim bilgilerinizi bırakırsanız sizi arayabiliriz.</p>
    <Link className='navbar-item' to='/getappointment'>RANDEVU TALEBİ OLUŞTURMAK İÇİN TIKLAYINIZ</Link>
  </div>
);
