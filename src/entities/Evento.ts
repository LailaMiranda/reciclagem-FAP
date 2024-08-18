import { Entity, PrimaryGeneratedColumn, Column, OneToMany , ManyToOne, OneToOne, JoinColumn} from 'typeorm';
import { OrganizacaoGestao } from './OrganizacaoGestao'
import { Estrategia } from './Estrategia';
import { Localizacao } from './Localizacao';


@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  private id!: number;


  @Column()
  private nome!: string;


  @Column()
  private data!:Date;


  @Column('text')
  private descricao!: string;


  @OneToOne(() => Localizacao, localizacao => localizacao.evento)
  @JoinColumn()
  localizacao!: Localizacao;


  @ManyToOne(() => OrganizacaoGestao, organizacaoGestao => organizacaoGestao.eventos)
  organizacaoGestao!: OrganizacaoGestao;


  @OneToMany(() => Estrategia, estrategia => estrategia.evento)
  estrategias!: Estrategia[];


  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }
  public getNome(): string {
    return this.nome;
  }
  public setNome(nome: string): void {
    this.nome = nome;
  }
  public getData(): Date {
    return this.data;
  }
  public setData(data: Date): void {
    this.data = data;
  }
  public getLocalizacao(): Localizacao {
    return this.localizacao;
  }
  public setLocalizacao(localizacao: Localizacao): void {
    this.localizacao = localizacao;
  }
  public getDescricao(): string {
    return this.descricao;
  }
  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }
  public getOrganizacaoGestao(): OrganizacaoGestao {
    return this.organizacaoGestao;
  }
  public setOrganizacaoGestao(organizacaoGestao: OrganizacaoGestao): void {
    this.organizacaoGestao = organizacaoGestao;
  }
  public getEstrategias(): Estrategia[] {
    return this.estrategias;
  }
  public setEstrategias(estrategias: Estrategia[]): void {
    this.estrategias = estrategias;
  }
}
