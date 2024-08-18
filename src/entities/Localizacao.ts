import { Entity, Column, OneToOne, PrimaryColumn } from 'typeorm';
import { Evento } from './Evento';
import { OrganizacaoGestao } from './OrganizacaoGestao';


@Entity()
export class Localizacao {


  @PrimaryColumn()
  private cep!: number;


  @Column()
  private rua!: string;


  @Column()
  private cidade!: string;


  @Column()
  private estado!: string;


  @OneToOne(() => Evento, evento => evento.localizacao)
  evento!: Evento


  @OneToOne(() => OrganizacaoGestao, organizacaoGestao => organizacaoGestao.localizacao)
  organizacaoGestao!: OrganizacaoGestao;


  public getCep(): number {
    return this.cep;
  }
  public setCep(cep: number): void {
    this.cep = cep;
  }
  public getRua(): string {
    return this.rua;
  }
  public setRua(rua: string): void {
    this.rua = rua;
  }
  public getCidade(): string {
    return this.cidade;
  }
  public setCidade(cidade: string): void {
    this.cidade = cidade;
  }
  public getEstado(): string {
    return this.estado;
  }
  public setEstado(estado: string): void {
    this.estado = estado;
  }
}
