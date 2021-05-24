import { Resource } from "./Resource";
import { Column, Entity, OneToMany } from "typeorm";
import { Favourite } from "./Favourite";
import { Character } from "./Character";

@Entity()
export class Planet extends Resource {

    @Column()
    diameter: number;

    @Column()
    rotationPeriod: number;

    @Column()
    orbitalPeriod: number;

    @Column()
    gravity: string;

    @Column()
    population: number;

    @Column()
    climate: string;

    @Column()
    terrain: string;

    @Column()
    surfaceWater: number;

    @OneToMany(() => Favourite, favourite => favourite.planet)
    favourites: Favourite[];

    @OneToMany(() => Character, character => character.homePlanet)
    characters: Character[];
}