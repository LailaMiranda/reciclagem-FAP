import { Estrategia } from './entities/Estrategia';
import { Evento } from './entities/Evento';
import { OrganizacaoGestao } from './entities/OrganizacaoGestao';
import { AppDataSource } from './config/data-source';
import { Localizacao } from './entities/Localizacao';
import { TipoEstrategia } from './enum/TipoEstrategia';

async function main() {
    await AppDataSource.initialize();

    const localizacao = new Localizacao();
    localizacao.setCep(1223344)
    localizacao.setRua('swdwferbbe')
    localizacao.setCidade('Recife')
    localizacao.setEstado('Pernembuco')

    const organizacaoGestao = new OrganizacaoGestao();
    organizacaoGestao.setNome('Azul')
    organizacaoGestao.setResponsavel('Laila')
    organizacaoGestao.setLocalizacao(localizacao)

    const evento = new Evento();
    evento.setData(new Date());
    evento.setNome('Porco espinho')
    evento.setDescricao('Descricao bla bla')
    evento.setOrganizacaoGestao(organizacaoGestao)
    evento.setLocalizacao(localizacao)
  
    const estrategia = new Estrategia();
    estrategia.setTipoEstrategia(TipoEstrategia.RECICLAGEM);
    estrategia.setDescricao('Estratégia de Reciclagem');
    estrategia.setEfetividade(90);
    estrategia.setEvento(evento);
 
   await AppDataSource.manager.save(localizacao)
   await AppDataSource.manager.save(organizacaoGestao);
   await AppDataSource.manager.save(evento);
   await AppDataSource.manager.save(estrategia);
 
   await AppDataSource.destroy();
 }
 
 main().catch(error => console.log(error));