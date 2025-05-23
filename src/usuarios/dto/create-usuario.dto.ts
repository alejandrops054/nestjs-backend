import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CreateUsuarioDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}