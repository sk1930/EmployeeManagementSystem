/*
Type rfce to get the below code
We prefer using arrow javascript function over plain javascript function

so type rafce
import React from 'react'

function ListEmployeeComponent() {
  return (
    <div>ListEmployeeComponent</div>
  )
}

export default ListEmployeeComponent
*/

// type rafce to get
import React,{useState,useEffect} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

/* this is all for dummyData
const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id":1,
            "firstName": "Sai",
            "lastName":"krishna",
            "email": "sai@gmail.com"
        },
        {
            "id":2,
            "firstName": "sdfdg",
            "lastName":"gh",
            "email": "saifgfd@gmail.com"
        }
    ]


    return (
        <div className='container'> 
            <h2 className='text-center'>List of Employees</h2>
            
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                        style={{marginLeft: '10px'}}
                                    >Delete</button>
                                </td>
                            </tr>)
                        
                            
                        
                       
                    }
                </tbody>
            </table>
        </div>
      )
}
*/



const ListEmployeeComponent = () => {

    const [employees,setEmployees] = useState([])

    const navigator = useNavigate();


    /*useEffect(()=>{
        listEmployees().then(response => {
            setEmployees(response.data);
        }).catch(error => { 
            console.error(error);
        })
    },[])*/
    useEffect(()=>{getAllEmployees()},[]);

    function getAllEmployees(){
        listEmployees().then(response => {
            setEmployees(response.data);
        }).catch(error => { 
            console.error(error);
        })
    
}
    // useEffect is used to make rest api call using axios in listEmployees Function in services/EmployeeService
    //  setEmployees(response.data); sets the response data into employees, setEmployees is a useStateHook

    /* above can also be called as 

    Here getAllEmployees is a callback function.

        useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    */




    function addNewEmployee(){
        navigator('/add-employee')

    }
    function updateEmployee(id){
        // this is ` backtick  not ' single quote
        navigator(`/edit-employee/${id}`)


    }
    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response)=>{
            getAllEmployees();

        }).catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className='container'> 
            <h2 className='text-center'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                        style={{marginLeft: '10px'}}
                                    >Delete</button>
                                </td>
                            </tr>)
                        
                            
                        
                       
                    }
                </tbody>
            </table>
        </div>
      )
}
export default ListEmployeeComponent




