import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import {Card} from 'react-bootstrap'
import { Button, Link } from '@material-ui/core';
import {useNavigate } from "react-router-dom";
const HeaderCourse = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    const onClick=()=>{
        console.log("out")
        localStorage.clear()
        navigate('/')
    }
    const onXemDanhSachDK=()=>{
        console.log("xem")
        
        navigate('/print')
        
    }
    return(
    <Card className="bg-dark text-white" style={{ width:'90vmax', height:'13vmax'}}>        
        <Card.ImgOverlay>
            <Card.Title style={{position:'absolute',top:'27%', fontSize:'2vmax', marginLeft:'3%'}}>{user.displayname}-{user.mssv}</Card.Title> 
            <Card.Title style={{position:'absolute',top:'27%', fontSize:'1vmax', marginLeft:'3%', marginTop:'3%'}}>{user.email}</Card.Title> 
            <Button variant='success'  style={{ color:'red', position:'absolute',top:'27%', fontSize:'1vmax', marginLeft:'3%', marginTop:'5%'}} onClick={onXemDanhSachDK}>Xem phiếu đăng ký</Button>   
            <Button variant='success'  style={{ color:'red', position:'absolute',top:'40%', fontSize:'1vmax', marginLeft:'3%', marginTop:'5%'}} onClick={onClick}>Logout</Button>           
        </Card.ImgOverlay>
    </Card>
);}


HeaderCourse.propTypes={
    nameCourse: PropTypes.string,
    
}

export default HeaderCourse;