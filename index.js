import validator from 'validator'
import { v4 as uuidv4 } from 'uuid';

const generateUID = (fname, lname) => {
    var generated = uuidv4().slice(0,8); 
    var fname = fname.toLowerCase(); 
    var lname = lname.toLowerCase(); 
    var uid = fname.concat(lname); 
    var uid = uid.concat(generated); 

    return uid; 
}

const addAccount = (Array) => {


}

export default {generateUID, addAccount}