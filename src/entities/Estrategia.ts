import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
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


  @ManyToOne(() => Evento, evento => evento.estrategias)
  evento!: Evento;


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
  public getEvento(): Evento {
    return this.evento;
  }
  public setEvento(evento: Evento): void {
    this.evento = evento;
  }
}
