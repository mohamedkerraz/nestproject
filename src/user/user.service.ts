import { Injectable } from '@nestjs/common';
import { User } from './user.interface'
import * as fs from 'fs';


@Injectable()
export class UserService {


  getlogin(login : string, password : string) {
    const jsonData = fs.readFileSync('src/user/user.json', 'utf8');
    const users = JSON.parse(jsonData);
    const user = users.find((user) => user.login === login && user.password === password);
    if(user != null){
      return "connected"
    }else{
      return "wrong login or password";
    }
    
  }


  getuser(id){
    const jsonData = fs.readFileSync('src/user/user.json', 'utf8');
    const users = JSON.parse(jsonData);
    const user : User = users.find((user) => parseInt(user.id) === parseInt(id) );
    return user;
  }


  getusers(){
    const jsonData = fs.readFileSync('src/user/user.json', 'utf8');
    return jsonData;
  }

  Generate() {
    const jsonData = fs.readFileSync('src/user/user.json', 'utf8');
    const users = JSON.parse(jsonData);
    let i = 1;
    users.forEach((user) => {
      if (i >= user.id) {
        i++;
      }
    });
    return i;
  }

  postlogin(login: string, password: string) {
    
    const jsonData = fs.readFileSync('src/user/user.json', 'utf8');
    const users = JSON.parse(jsonData);

    const newUser: User = {
      id: this.Generate().toString(),
      login,
      password,
    };
    
    users.push(newUser);
  
    const jsonDataInput = JSON.stringify(users);
    fs.writeFileSync('src/user/user.json', jsonDataInput);
  
    return newUser;
  }

  async checkUserExistence(login: string): Promise<boolean> {
    const jsonData = fs.readFileSync('src/user/user.json', 'utf8');
    const users = JSON.parse(jsonData);
    const user = users.find((user) => user.login === login);
  
    return !!user;
  }


}
