import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const {id} = useParams();

  const navigator = useNavigate();
  // assigning the function to a variable


  // # validation
  // let us pass the initial value as an object
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  


  



  function handleFirstName(e){
    // this function handles the event for FirstName change
    // it takes event e as parameter
    setFirstName(e.target.value);
    // we get the value using e.target.value
  }

  // using arrow function here 
  const handleLastName = (e) => {
    setLastName(e.target.value);
  }
  // if arrow functions have a single statement  we can remove the {}
  //const handleLastName = (e) =>  setLastName(e.target.value);

  // we can also pass the arrow function body directly as in the case with email



  //useEffect(()=>{},[id ]),  id is dependecny list

  useEffect(()=>{
  if(id){
    getEmployee(id).then((response)=>{
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setEmail(response.data.email);

    }
    ).catch(error => {console.error(error);
    })
  }},[id]
  )


  function saveOrUpdateEmployee(e){
    // e is the event input
    e.preventDefault(); // to prevent the default actions while submitting the form
     if (validateForm()){

    const employee = {firstName,lastName,email}

    console.log(employee)
    if(id){
      updateEmployee(id,employee).then((response)=>{
      console.log(response.data);
      navigator('/employees');
      }).catch(error=>{
        console.error(error);

      })

    }else{
      createEmployee(employee).then((response) =>{
        console.log(response.data);
        navigator('/employees')
      }).catch(error=>{
        console.error(error);})
    }

    }
  }


  // #validation
  function validateForm()
  {
    let valid= true;
    const errorsCopy ={... errors }
    // using ... spread operator to copy errors object into errorsCopy

    // if firstname is not empty and not null
    if (firstName.trim()){
      errorsCopy.firstName ='';
    } else{
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }
    if (lastName.trim()){
      errorsCopy.lastName ='';
    } else{
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }
    if (email.trim()){
      errorsCopy.email ='';
    } else{
      errorsCopy.email = 'Email is required';
      valid = false;
    }
    setErrors(errorsCopy) // set errors object to errorsCopy

    return valid;
  }




  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update Employee</h2>
    }else{
      return <h2 className='text-center'>Add Employee</h2>
    }
  }






  return (


    <div className='container'>
        <br /> <br />
        {/* we are using br to make spaces at the top of the form */}
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              {/* Bootstrap grid has 12 columns we are using offset md-3 to move the form from 
              and offset-md-3  3 columns from right  */}
              {
                pageTitle() // calling pageTitle function
              }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                          {/* mb - 2 means margin bottom -2  */}
                            <label className='form-label'>First Name:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                //className='form-control'
                                /* we need to display the bootstrap css class based on the condition.
                                */
                                //If there is a validation error, then only we will add a is-invalid bootstrap class.
                                // this a backtick ` not a single quote '
                                className={`form-control ${errors.firstName?'is-invalid': ''}`}
                                onChange={handleFirstName}
                            />
                            { errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div> }
                          </div>
                      
                        <div className='form-group mb-2'>
                          {/* mb - 2 means margin bottom -2  */}
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName?'is-invalid': ''}`}
                                onChange={handleLastName}
                            />
                          { errors.lastName && <div className='invalid-feedback'> { errors.lastName} </div> }

                          </div>
                          <div className='form-group mb-2'>
                          {/* mb - 2 means margin bottom -2  */}
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email?'is-invalid': ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                          { errors.email && <div className='invalid-feedback'> { errors.email} </div> }

                          </div>
                          <button className="btn btn-success" onClick = {saveOrUpdateEmployee}>Submit</button>
                      </form>
                  </div>
              </div>
          </div>
    </div>


        )
}

export default EmployeeComponent