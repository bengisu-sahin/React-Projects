import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { createContext, useEffect, useReducer, useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip, Table } from 'react-bootstrap';
import logo from '../logo/esogu_logo.png'

const HeaderPart = () => {
    return (
        <>
        <div className='container'>
        <div className='row header-item'>
                <div className='col-12'> <h5>Merhaba, John Doe</h5></div>
                <div className='col-12'> <Button variant='secondary' >Çıkış Yap</Button></div>
            </div>
            <div className='row header-item'>
                <div className='logo-container col-6'>
                    <div className='row'>
                        <div className='col-3'>
                        <img src={logo} alt="Logo" className='esogu-logo ' />
                        </div>
                        <div className='col-3'>
                        <span className='logo-txt'>Eskişehir Osmangazi Üniversitesi</span>
                        <br></br> 
                        <span className='logo-txt-2'>Öğrenci Yönetim Sistemi</span>
                        </div>
                    </div>       
                </div>
            </div>
        </div> 
        <br></br> 
        </>
    );
};

export default HeaderPart;