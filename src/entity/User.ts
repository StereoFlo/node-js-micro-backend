import {Entity, PrimaryGeneratedColumn, Column, Index, getRepository} from "typeorm";


@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Index({unique: true})
    @Column('varchar', {length: 500, nullable: true})
    email: string | null = null;

    @Column('varchar', {length: 1000, nullable: true})
    password: string = "";

    @Column('varchar', {length: 50})
    firstName: string = "";

    @Column('varchar', {length: 50})
    lastName: string = "";

    @Column('varchar', {length: 15000, nullable: true})
    photo: string = "";

    @Column('varchar', {length: 100, nullable: true})
    phone: string = "";

    @Column('text', {nullable: true})
    about: string = "";

    @Column({type: "datetime", nullable: true})
    createdAt: Date = new Date();

    @Column({type: "datetime", nullable: true})
    updatedAt: Date = new Date();
}
