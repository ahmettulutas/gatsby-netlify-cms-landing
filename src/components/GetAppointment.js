import { Link } from 'gatsby';
import React from 'react';

export const GetAppointment = () => (
  <div className="get-appointment">
    <h3 className='has-text-centered'>Psikolog randevunuzu oluşturmak için iletişim bilgilerinizi bırakırsanız sizi arayabiliriz.</h3>
    <Link className='navbar-item has-text-centered' to='/getappointment'>RANDEVU TALEBİ OLUŞTURMAK İÇİN TIKLAYINIZ</Link>
  </div>
);
