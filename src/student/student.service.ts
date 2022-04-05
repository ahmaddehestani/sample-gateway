import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatStudentDto } from './dto/creat-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsEntity } from './entities/students.entity';


@Injectable()
export class StudentService {
    private students: StudentsEntity[] =[{
        id:1,
    name:"ahmad",
    family: "dehestani",
    idCart:100000000,
    phoneNumber:9158598300,
    address:"mashhad"
    }]

    findAll(){
        return this.students;
    }

   findOne(id:number){
    const studentIndex=  this.students.findIndex(student=>student.id===id)
         if(studentIndex>=0){
          return this.students.find(student=>student.id===id)
       }
       throw new HttpException("id not found",HttpStatus.NOT_FOUND)
       return 

   }

   create(body:CreatStudentDto){
       const student=this.students.find(student=>student.idCart===body.idCart)
       if(student){
           return "insert someone with this idCart before"
       }
      
       body.id=this.students.length+1
       this.students.push(body)
       return body
   }

   update(id:number, body:UpdateStudentDto){
       const student= this.findOne(id)
       if(student){
           if(body.name){
           student.name=body.name
           }
           if(body.family){
           student.family=body.family
           }
           if(body.phoneNumber){
           student.phoneNumber=body.phoneNumber
           }
           if(body.idCart){
           student.idCart=body.idCart
           }
           if(body.address){
            student.address=body.address
           }
          
           return `student ${student.name}  ${student.family} information update`
       }
       throw new HttpException("id not found",HttpStatus.NOT_FOUND)
       return

   }

   delete(id:number){
     const studentIndex=  this.students.findIndex(student=>student.id===id)
     const deletedStudent=this.students[studentIndex]
     if(studentIndex>=0){
         this.students.splice(studentIndex,1)
         return deletedStudent
     }
      throw new HttpException("id not found",HttpStatus.NOT_FOUND)
      return
   }
}
