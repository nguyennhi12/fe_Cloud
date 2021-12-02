import {useState, useEffect, useCallback} from 'react';
import  Subject  from '../config/Subject';

export const HookSubjectbyNganh=(value)=>{     
    const[search,setsearch] = useState()
    const[check,setcheck]=useState(false)
    const fetchRoadmap = useCallback( async()=>{
        try{  
            console.log(value)
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
            console.warn(error)
        }       
    },[search])        
    
    useEffect(()=>{ 
        try{
            console.log("0")
            if((check==false)){ 
                fetchRoadmap();
                console.warn(search)
            }        
            else{   
                console.log(search)
               
            }
        }catch(error){
            console.warn(error)
        }        
    },[check,fetchRoadmap,value] )    
    
    return {search,setcheck,check, setsearch};
}

export const Hookgetdanhsachdangkymon=()=>{     
    const[danhsach,setdanhsach] = useState([])
    const[checkdanhsach,setcheckdanhsach]=useState(false)
    const fetchRoadmap = useCallback( async()=>{
        try{  
    
            var results= await Subject.getdanhsachdkmon()            
            setdanhsach(results.data)
            console.log(results)
                 
            setcheckdanhsach(true)
        }catch(error){
            console.warn(error)
        }       
    },[danhsach])        
    
    useEffect(()=>{ 
        try{
            if((checkdanhsach==false)){ 
                fetchRoadmap();
                //console.warn(searchstate)
            }        
            else{   
                console.log(danhsach)
               
                    
                   
               
            }
        }catch(error){
            console.warn(error)
        }        
    },[danhsach,fetchRoadmap,checkdanhsach] )    
    
    return {danhsach,setcheckdanhsach};
}


