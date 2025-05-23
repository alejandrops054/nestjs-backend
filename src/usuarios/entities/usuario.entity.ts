import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nombre_completo' })
  nombreCompleto!: string;

  @Column({ unique: true })
  correo!: string;

  @Column()
  password!: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion!: Date;
}