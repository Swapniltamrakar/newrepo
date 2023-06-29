import axios from "axios";
import React,{component} from "react";
class EmployeeService {

getEmployee=()=>{
    return axios.get("http://localhost:3004/employee");
}
addEmployee=(data)=>{
    return axios.post("http://localhost:3004/add",data)
}
updateEmployee=(data)=>{
    return axios.put(`http://localhost:3004/update/${data.deptNo}`,data)
}

deleteEmployee = (deptNo)=>{
    return axios.delete(`http://localhost:3004/delete/${deptNo}`)
}

}
export default new EmployeeService();