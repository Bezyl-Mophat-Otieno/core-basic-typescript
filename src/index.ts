//Basic types 

let id: number = 5;

let firstName: String = 'Mophat';

let isRich:boolean = true;

//ANY TYPE
let admissionNumber : any = 'IN16/00003/20'

let yearsCompleted:number[] = [1,2,3]
let schlYearsCompleted : String[] = ['one','two','three']

//ARRAYS OF TYPE ANY
let mixedArray : any[] =[1,'Hello', true, ['Mophat,5,true']]


//TUPLES
let myCharacter:[String,number,boolean] = ['Mophat',5,true]


//ARRAY OF TUPLES
let student:[String,String,number][] =[
    ['Mophat','IN16/00003/20',5],
    ['Mophat','IN16/00003/20',5],
    ['Mophat','IN16/00003/20',5],
]

//UNIONS WHICH MEANS A VARIABLE CAN BE OF MORE THAN ONE TYPE

let uuid : String | number ;

uuid = 'Hello there '

uuid = 5
//ENUMS 
enum role{
    ADMIN = 'true',
    USER = 'false',
}

// console.log(role.ADMIN)

//ObJECTS

//Type gives you the flexibility of even assigning union types to a property

type Person = {
    name:String,
    age:number|String,
    yos:String,
    isRich:boolean,
    role:role,
    proffesion:String
    
}


const person:Person= {
    name:'Mophat',
    age:'22',
    yos:'Year 3',
    isRich:true,
    role:role.ADMIN,
    proffesion:'student'
}

// console.log(person)


//TYPE ASSERTION -This is a technique of specifying the how a value is to be interpreted despite its initially type when assigned to another variable

let BezylMophat = myCharacter as {}
// console.log(BezylMophat)

let financialStatus = isRich as any

// console.log(financialStatus)

//FUNCTIONS

//with return types and parameters

const myDetails = (person:Person) : any =>{

    return `My name is ${person.name} and I am ${person.age} years old. I am in ${person.yos} and I am a ${person.proffesion}`

}

// console.log(myDetails(person))

// without return types and paramaters 

const myDetails2 = (value:String) : void =>{

    console.log(value)


}

// myDetails2('Mimi naitwa mejja ')

//INTERFACES

interface University {
    name:String
   readonly location:String
    fees?:number|String

}

let kisiiUniversity:University = {
    name:'Kisii University',
    location:'Kisii',
    fees:50000
}
let moiUniversity:University = {
    name:'Moi University',
    location:'Eldoret',
}

// console.log(moiUniversity)

interface Direction{
    left:String|number,
}

// dclaring interfaces for functions 

interface MathAddFunc {
    (x:number,y:number):number
}



const add:MathAddFunc = (x:number,y:number):number=>{
    return x+y
}

// CLASSES

// creating an interface to enforce rules on the class creation .

interface StudentInterface {
    name:String
    age:number
    yos :number
    getStudentDetails():String

}

class Student implements StudentInterface{

    name:String;
    age:number;
    yos:number;

    constructor(name:String,age:number,yos:number){
        this.name = name;
        this.age = age;
        this.yos = yos
    }

    getStudentDetails (){
        return `this is ${this.name} and I am ${this.age} years old and I am in year ${this.yos}`
    }


}

let student1 = new Student ('Bmophat',22,3)

console.log(student1.yos)


// extending the parent class 
//SUBCLASSES
class Employee extends Student {
    company :String;
    possition:String

    constructor (name:String , age:number , yos:number , company:String , possition:String){
        super(name,age,yos)
        this.company = company
        this.possition = possition
    }
// Overriding the getStudentDetails
    getStudentDetails (){
        return  `This is ${this.name} and I am ${this.age} years old and I am in year ${this.yos} and I work at ${this.company} as a ${this.possition}`
    }

}

let newEmployee = new Employee('BMophat',22,3,'The Jitu' , 'QA/QE Engineer')

console.log(newEmployee.getStudentDetails())



// GENEREICS 

// generics helps with code and component reusability

// const getArray = (items : any[]) : any[]=>{
//     return items
// }

// let numArray  = getArray([1,2,3,4,5]) 
// let stringArray = getArray(['Mophat','Bezyl','Otieno'])
// // if we do this bellow nothing happens no warning  but it will be hard to reuse the function
// numArray.push('John')
// stringArray.push(5)


//Lets use generics to solve this problem

function getArray<T>(items : T[]) : T[]{

    return items

}

const numArrays:number[] = getArray([1,2,3,4])
const strArrays:String[] = getArray(['Mophat','Bezyl','Otieno'])
numArrays.push(5)
strArrays.push('Leah')



