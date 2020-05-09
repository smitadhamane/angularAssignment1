import { Role } from './role.model';

export class CustomerList {
    firstname : string ;
    lastname : string;
    Address : string;
    order_total : number;
    mobile: number;
    email: string;
}
export class EmployeeList {
    firstname : string ;
    lastname : string;
    birthdate : string;
    gender : string;
    bloodGrp: number;
   
}
export class LoginDetails {
    username : string;
    password : string;
    role : Role;

}

