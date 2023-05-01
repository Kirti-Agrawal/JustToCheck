import { EmailValidator } from "@angular/forms";

export class User{
    'id' : number;
'name' : string;
'email' : EmailValidator;
'address': {
    'city': string;
    'zipCode': number;
}
'phone' : number;
}