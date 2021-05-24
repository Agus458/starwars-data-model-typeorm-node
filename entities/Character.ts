import { Resource } from "./Resource";
import { Column, Entity, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Planet } from "./Planet";
import { Favourite } from "./Favourite";

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

    @ManyToOne(() => Planet, planet => planet.characters)
    homePlanet: Planet;

    @Column()
    birthYear: Date;

    @OneToMany(() => Favourite, favourite => favourite.character)
    favourites: Favourite[];
}