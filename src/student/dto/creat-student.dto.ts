import { IsNumber, IsString } from "class-validator";

export class CreatStudentDto {

   @IsNumber()
    id:number;
    @IsString()
    name:string;
    @IsString()
    family: string;
    @IsNumber()
    idCart:number;
    @IsNumber()
    phoneNumber:number;
    @IsString()
    address:string;

    
}
