/* eslint-disable prettier/prettier */
// Specify a few columns and attritbutes

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entity: This decorator is used to mark classes that will be an entity (table or document depend on database type). Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.
@Entity()
export class Tree {

    // Our Entity has 4 columns. First is our PrimaryGeneratedColumn, second, third, and fourth are regular columns. First column takes an id: number, second column takes name: string, third column takes age: number, and fourth column takes isEndangered: boolean or true or false statements.

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column({ default: false })
    isEndangered: boolean;
}



