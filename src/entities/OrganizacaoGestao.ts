import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Evento } from './Evento'
import { Localizacao } from './Localizacao';


@Entity()
export class OrganizacaoGestao{
  @PrimaryGeneratedColumn()
  private id!: number;


  @Column()
  private nome!: string;


  @Column()
  private responsavel!: string;


  @OneToOne(() => Localizacao, localizacao => localizacao.organizacaoGestao)
  @JoinColumn()
  localizacao!: Localizacao;


  @OneToMany(() => Evento, evento => evento.organizacaoGestao)
  eventos!: Evento[];


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
  public getLocalizacao(): Localizacao {
    return this.localizacao;
  }
  public setLocalizacao(localizacao: Localizacao): void {
    this.localizacao = localizacao;
  }
  public getResponsavel(): string {
    return this.responsavel;
  }
  public setResponsavel(responsavel: string): void {
    this.responsavel = responsavel;
  }
}
