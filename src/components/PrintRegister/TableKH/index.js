import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button} from 'react-bootstrap';
import {Hookgetdanhsachdangkymon} from '../../../Hook/subject'
import Subject from '../../../config/Subject'
import Notification from '../../Notification/Notification'
const TableKH = ({searchstate})=>{  
  // const {danhsach,setcheckdanhsach}=Hookgetdanhsachdangkymon()  
  // const [notify, setNotify] =useState({
  //   isOpen: false,
  //   message: "",
  //   type: "",
  // });
  // if(searchstate==null){    
  //   return null
  // }
  
  // const DangKy = async(e,search)=>{
  //   console.log(search)
  //   const results= await Subject.dangkymonhoc(search.id_lop)
  //   console.log(results)
  //   if(results.statusCode==200){
  //     setcheckdanhsach(false)
  //     console.log("qwee")
  //     setNotify({
  //       isOpen: true,
  //       message: results.message,
  //       type: "success",
  //     });
  //   }else{
  //     setNotify({
  //       isOpen: true,
  //       message: results.message,
  //       type: "error",
  //     });
  //   }
  // }
 
  // const check_id_in_danhsach=(search)=>{
  //   //console.log()
  //   for(let i=0;i<danhsach.length;i++){
  //     if(danhsach[i].id_lop==search.id_lop)
  //       return true
  //   }
  //   return false
  // }
    return(
      <Table >
        <thead>
          <tr>
            <th>Mã lớp</th>
            <th>Tên lớp</th>
            <th>Khoa</th>
            <th>Ngành</th>
            <th>Giảng viên</th>
            <th>Số tín chỉ</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
           {
             searchstate.map((search)=>(
              <tr>
              <th>{search.id_lop}</th>
              <th>{search.lop_name}</th>
              <th>{search.khoa_name}</th>
              <th>{search.nganh_name}</th>
              <th>{search.name_gv}</th>
              <th>{search.sochi}</th>
              
            </tr>
             ))
            }  
        
        </tbody>
      </Table>
     
    )
}

export default TableKH;