/* eslint-disable prettier/prettier */

// DTO Files: A data transfer object (DTO) is an object that carries data between processes. You can use this technique to facilitate communication between two systems (like an API and your server) without potentially exposing sensitive information.

import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateTreeDTO {
    _id?: number;

    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    isEndangered?: boolean;
}