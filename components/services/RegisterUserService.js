import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/add/user"

class RegisterUserService {
    registerUser(employee) {
      return axios.post(EMPLOYEE_API_BASE_URL, employee, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
  
  export default new RegisterUserService();