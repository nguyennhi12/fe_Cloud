import React, { useState,useCallback, useEffect } from 'react'
import { InputGroup,Button} from 'react-bootstrap';
import { Wrapper,  Course,HeaderList, _Select} from './PrintRegistertyles';
import TableKH from './TableKH'
import Header from './Header/header'
import Select from 'react-select';
import Notification from '../Notification/Notification'
import Subject from '../../config/Subject';
import{Hookgetdanhsachdangkymon} from '../../Hook/subject'

const PrintRegister = () =>{
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
      });
    const {danhsach,setcheckdanhsach}=Hookgetdanhsachdangkymon()
    return(
        <div>
        <Wrapper> 
            <HeaderList><Header /></HeaderList>        
            <Course>
            <h1 style={{alignContent:'center',marginLeft: '35%'}}>Danh Sách Các Học Phần Đã Đăng Kí</h1>
            <TableKH searchstate={danhsach}></TableKH></Course>
            <Notification notify={notify} setNotify={setNotify} />
        </Wrapper>
        </div>
    )
    
}


export default PrintRegister;