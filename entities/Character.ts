import { Resource } from "./Resource";
import { Column, Entity, OneToOne, JoinColumn } from "typeorm";
import { Planet } from "./Planet";

@Entity()
export class Character extends Resource {

    @Column()
    heigth: number;

    @Column()
    mass: number;

    @Column()
    hairColor: string;

    @Column()
    skinColor: string;

    @Column()
    eyeColor: string;

    @Column()
    gender: string;

    @OneToOne(() => Planet)
    @JoinColumn()
    homePlanet: Planet;

    @Column()
    birthYear: Date;
}