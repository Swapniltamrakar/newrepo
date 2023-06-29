import React from "react";
import { useState } from "react";
import {useLocation,useNavigate}from "react-router-dom"
import EmployeeService from "../service/EmployeeService";
var EmpUpdate = ()=>{

    var location = useLocation();
    var [ename,setEname] = useState();
    var [sal,setSal] = useState();
    var nav = useNavigate()
    var updateEmp=()=>{
        var e = {ename:ename,deptNo:location.state.data.deptNo,sal:sal}
        EmployeeService.updateEmployee(e).then().catch((e)=>{console.log(e)})
        nav("/")
    }


    return(
        <div>
             <table>
                <thead>
                    <th>
                        ENAME
                    </th>
                    <th>
                        DEPTNO
                    </th>
                    <th>
                        SALARY
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>ENAME</td><td><input type="text" name="nm" onChange={(event)=>{setEname(event.target.value)}} /></td>
                        <td>DEPTNO</td><td><input type="number" name="dno" value={location.state.data.deptNo} disabled/></td>
                        <td>SALARY</td><td><input type="number" name="sal" onChange={(event)=>{setSal(event.target.value)}} /></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" id="btn" onClick={updateEmp}>UPDATE EMP</button>
        </div>
    )

}
export default EmpUpdate;