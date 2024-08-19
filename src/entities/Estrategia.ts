import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evento } from './Evento'
import { TipoEstrategia } from '../enum/TipoEstrategia';


@Entity()
export class Estrategia {
  @PrimaryGeneratedColumn()
  private id_Estrategia!: number;


  @Column({
    type: 'enum',
    enum: TipoEstrategia,
    })
  private tipoEstrategia!: TipoEstrategia


  @Column('text')
  private descricao!: string;


  @Column()
  private efetividade!: number;


  @OneToMany(() => Evento, evento => evento.estrategia)
  eventos!: Evento[];


  public getIdEstrategia(): number {
    return this.id_Estrategia;
  }
  public setIdEstrategia(id: number): void {
    this.id_Estrategia = id;
  }
  public getTipoEstrategia(): TipoEstrategia {
    return this.tipoEstrategia;
  }
  public setTipoEstrategia(tipoEstrategia: TipoEstrategia): void {
    this.tipoEstrategia = tipoEstrategia;
  }
  public getDescricao(): string {
    return this.descricao;
  }
  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }
  public getEfetividade(): number {
    return this.efetividade;
  }
  public setEfetividade(efetividade: number): void {
    this.efetividade = efetividade;
  }
  public getEventos(): Evento[] {
    return this.eventos;
  }
  public setEventos(eventos: Evento[]): void {
    this.eventos = eventos;
  }
}
