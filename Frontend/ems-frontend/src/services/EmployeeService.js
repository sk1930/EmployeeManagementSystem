import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8090/api/employees';

export const listEmployees = () => {return axios.get(REST_API_BASE_URL)};


/*
this arrow function takes a employee object and this employee object holds the employee form data.
Well, in order to send the post http request, we have to use post method.
Next, let us pass the URL that is rest API base URL and second parameter is a employee object
lets call this createEmployee method from saveEmployee function in EmployeeComponent

*/
export const createEmployee = (employee) => {return axios.post(REST_API_BASE_URL,employee)};

export const getEmployee = (employeeId) => {return axios.get(REST_API_BASE_URL + '/'+ employeeId)};

export const updateEmployee = (employeeId,employee) => {return axios.put(REST_API_BASE_URL+'/'+employeeId,employee)};

export const deleteEmployee = (employeeId) => {return axios.delete(REST_API_BASE_URL+'/'+employeeId)};
