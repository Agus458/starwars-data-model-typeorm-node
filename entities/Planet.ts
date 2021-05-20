import { Resource } from "./Resource";
import { Column, Entity } from "typeorm";

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
}