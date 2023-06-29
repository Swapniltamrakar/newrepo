import React,{Component} from "react";
import { useState,useEffect } from "react";
import {Link,useNavigate} from "react-router-dom"
import "../component/EmpList.css"

import EmployeeService from "../service/EmployeeService";

var EmpList=()=>{
// to navigate to page
var nav = useNavigate();

//setting variables using useState
var [emplList,setEmpList] = useState([]);

//equivalent to init method
useEffect(()=>{
    EmployeeService.getEmployee().then((res)=>{setEmpList(res.data)}).catch((err)=>{console.log(err)})
},[])

var navigate=()=>{
    nav("/add");
}

var deleteEmp=(deptNo)=>{
    EmployeeService.deleteEmployee(deptNo).then().catch((err)=>{console.log(err)});
}

return(

<div>
    <table id="tab1" rules="cols">
        <tbody>
            {/* for each loop to get data */}
            {
            emplList.map((data,index)=><tr key={index}>
                <td>{data.ename}</td><td>{data.deptNo}</td><td>{data.sal}</td><td>
                    <Link to={`/update/${data.deptNo}`} state={{data:data}}>
                    <button type="button">UPDATE</button>
                    </Link>
                    </td>
                    <td><button type="button" onClick={deleteEmp(data.deptNo)}>delete</button></td>

            </tr>)
            }
        </tbody>
    </table>
    
    <button type="button" onClick={navigate}>ADD EMPLOYEE</button>
    
</div>

)


}
export default EmpList;