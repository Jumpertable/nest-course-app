import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Shout out to Yume Nikki! We love girlrotting!';
  }
  getGoodbye(): string{
    return 'The road will end and you will look out to the sea again';
  }
  getName(): string{
    return 'Charlotte Hand.';
  }
  getJim(): string{
    const x: number = 6;
    const y: number = 76;
    const z: number = x * y;
    return `${z}`;
  }
  getInfo(): string{
    return 'I am very sleepy but I know that I will not sleep when I get home :p.';
  }
  showInfo(): string{
    let x: number = 22;
    return `I am Charlotte Hand, ${x} years old`;  
  }
  getJSON(){
    return{
      name: 'Robin',
      lastname: 'Donkeyskin',
      age: 22,
      hobby: 'watching movies',
      occupation: 'student',
      address: 'Phuket',
      favouriteplace: 'bed',
      favouritefood: 'lasagne',
    };
  }
  showJSON2(){
    return{
      name: 'Aloisia',
      lastname: 'Sunsial',
      age: 22,
    };
  }
  usePostman() {
    return 'We use Postman.';
  }
  getJson2() {
    return {
      name: 'Charlotte',
      lastname: 'Hand',
      age: 22,
      version: process.env.API_VERSION,
    };
  }
}
