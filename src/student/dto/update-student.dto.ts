import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateStudentDto {
    @IsString()
    @IsOptional()
    name?:string;
    @IsString()
    @IsOptional()
    family?: string;
    @IsNumber()
    @IsOptional()
    idCart?:number;
    @IsNumber()
    @IsOptional()
    phoneNumber?:number;
    @IsString()
    @IsOptional()
    address?:string;
}
