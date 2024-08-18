import { DataSource } from 'typeorm';
import { Estrategia } from '../entities/Estrategia';
import { Evento } from '../entities/Evento';
import { OrganizacaoGestao } from '../entities/OrganizacaoGestao';
import { Localizacao } from '../entities/Localizacao';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'reciclagem',
  entities: [Estrategia, Evento, OrganizacaoGestao, Localizacao],
  synchronize: true,
  logging: true,
});
