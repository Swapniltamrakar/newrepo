import React from "react";
import { useState,useEffect } from "react";
import {useNavigate,useLocation} from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

var EmpAdd=()=>{
    
    var nav = useNavigate();
    var [eName,setEname] = useState();
    var [deptNo,setDeptNo] = useState();
    var [sal,setSal] = useState();

    var addEmployee=()=>{
        var e = {ename:eName,deptNo:deptNo,sal:sal};
        EmployeeService.addEmployee(e).then().catch((error)=>{console.log(error)});
        nav("/");
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
                        <td>DEPTNO</td><td><input type="number" name="dno" onChange={(event)=>{setDeptNo(event.target.value)}} /></td>
                        <td>SALARY</td><td><input type="number" name="sal" onChange={(event)=>{setSal(event.target.value)}} /></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" id="btn" onClick={addEmployee}>ADD EMP</button>
        </div>
    )

}
export default EmpAdd;