export class UserDeatils {
     name: string;
     email: string;
     password: string;
     dateOfBirth: Date;


    constructor (name: string, email: string, password: string, DOB: Date){
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateOfBirth = DOB;
    }
}