import React, { useState,useCallback, useEffect } from 'react'
import { InputGroup,Button} from 'react-bootstrap';
import { Wrapper,  Course,HeaderList, _Select} from './RegisterCoursestyles';
import TableKH from './TableKH'
import Header from './Header/header'
import Select from 'react-select';
import Notification from '../Notification/Notification'
import Subject from '../../config/Subject';
import{HookSubjectbyNganh} from '../../Hook/subject'

const RegisterCourse = () =>{
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
      });
    const options=[
        { value: '1', label: 'Tìm kiếm theo ngành', id:'1'},
        { value: '2', label: 'Tìm kiếm theo tên môn',id:'2' },
        { value: '3', label: 'Tìm kiếm theo mã môn',id:'3' }
    ] 
    const [value, setValue] = useState(options[0]);
    //console.log(value)
    const {search,setcheck,setsearch}=HookSubjectbyNganh(value)
    const [searchstate,setsearchstate]=useState()   
  
    const fetchRoadmap = useCallback( async()=>{
        try{  
            // console.log(value)
            // setcheck(false)
            // setsearchstate(null)
            if(value.value=='1'){
                var theresult=[]
                var results= await Subject.getdanhmucnganh()
                results.data.map((result)=>(
                theresult.push({id:result.id_nganh,label:result.name})))
                setsearch(theresult)
                console.log(search)         
                setcheck(true)
            }else{
                if(value.value=='3'){
                    var theresult=[]
                    var results= await Subject.getdanhmucid()
                    results.data.map((result)=>(
                    theresult.push({id:result.id_lop,label:result.id_lop})))
                    setsearch(theresult)
                    console.log(search)         
                    setcheck(true)
                }else{
                    setcheck(true)
                    //setsearch(null)
                }
            }
        }catch(error){
            console.log(error)
        }
       
    },[value])  
    useEffect(()=>{ 
        try{
            console.log(value)
            console.log("123")
            setsearchstate(null)
            fetchRoadmap();
          
        }catch(error){
            console.log(error)
        }
        
    },[value,fetchRoadmap] )    
    
    
    const handleChangeSearch =async (select) => {
        console.log(value)
        if(value.value=='1'){
            var results= await Subject.getsubjectbynganh(select.id)
            setsearchstate(results.data)
            console.log(searchstate)        
        }else{
            if(value.value=='2'){
                setNotify({
                    isOpen: true,
                    message: "Search theo tên",
                    type: "error",
                });
            }
            else{
                var results= await Subject.getsubjectbyid(select.id)
                setsearchstate(results.data)
                console.log(searchstate)     
            }
        }
        
    };

    const [searchkey, setsearchkey]=useState('')    
    const onClick= async ()=>{
        console.log(searchkey)
        const results=await Subject.searchmonhoc(searchkey)
        console.log(results)
        setsearchstate(results.data)
        //setsearchstate(null)
    }
    return(
        <div>
        <Wrapper> 
            <_Select>
                <InputGroup>
                    <Select variant="outline-secondary" key={value.value} defaultValue={value} options={options} onChange={setValue} />
                    {value==null?<Select variant="outline-secondary" options={search} value={search[0]} onChange={handleChangeSearch} />:
                    value.id=='2'?<form style={{width:'50%',float:'left',paddingLeft:'10%'}} >
                    <input type="text" class="form-control" placeholder="Nhập tên môn học"  aria-describedby="basic-addon2" 
                    onChange={(e)=>{setsearchkey(e.target.value)}}  />
                    <Button style={{marginLeft:'110%',marginTop:'-65px',width:'80px'}} styleclass="btn btn-outline-secondary" onClick={onClick} type="button" >Tìm</Button>
                    
                  </form>
                    :<Select variant="outline-secondary" options={search} key={search}  onChange={handleChangeSearch} />}
                    
                    {/* <Select variant="outline-secondary" options={search} key={search} defaultValue={search} onChange={handleChangeSearch} /> */}

                    {/* <Button variant="success" onClick={onClick}>Search</Button> */}
                </InputGroup>
            </_Select>
            <HeaderList><Header /></HeaderList>        
            <Course><TableKH searchstate={searchstate}></TableKH></Course>
            <Notification notify={notify} setNotify={setNotify} />
        </Wrapper>
        </div>
    )
    
}


export default RegisterCourse;