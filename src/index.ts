import { Estrategia } from './entities/Estrategia';
import { Evento } from './entities/Evento';
import { OrganizacaoGestao } from './entities/OrganizacaoGestao';
import { AppDataSource } from './config/data-source';
import { Localizacao } from './entities/Localizacao';
import { TipoEstrategia } from './enum/TipoEstrategia';

async function main() {
    await AppDataSource.initialize();

    
    const localizacao1 = new Localizacao();
    localizacao1.setCep(4567000);
    localizacao1.setRua('Av. Paulista');
    localizacao1.setCidade('São Paulo');
    localizacao1.setEstado('SP');

    const localizacao2 = new Localizacao();
    localizacao2.setCep(22290150);
    localizacao2.setRua('Rua da Passagem');
    localizacao2.setCidade('Rio de Janeiro');
    localizacao2.setEstado('RJ');

    const localizacao3 = new Localizacao();
    localizacao3.setCep(30150000);
    localizacao3.setRua('Avenida Afonso Pena');
    localizacao3.setCidade('Belo Horizonte');
    localizacao3.setEstado('MG');

    const localizacao4 = new Localizacao();
    localizacao4.setCep(71020000);
    localizacao4.setRua('Rua das Flores');
    localizacao4.setCidade('Brasília');
    localizacao4.setEstado('DF');

    const localizacao5 = new Localizacao();
    localizacao5.setCep(49000000);
    localizacao5.setRua('Avenida Beira-Mar');
    localizacao5.setCidade('Aracaju');
    localizacao5.setEstado('SE');

   
    const organizacaoGestao1 = new OrganizacaoGestao();
    organizacaoGestao1.setNome('Green Future');
    organizacaoGestao1.setResponsavel('Ana Silva');
    organizacaoGestao1.setLocalizacao(localizacao1);

    const organizacaoGestao2 = new OrganizacaoGestao();
    organizacaoGestao2.setNome('Eco Vida');
    organizacaoGestao2.setResponsavel('Carlos Oliveira');
    organizacaoGestao2.setLocalizacao(localizacao2);

    const organizacaoGestao3 = new OrganizacaoGestao();
    organizacaoGestao3.setNome('Planeta Limpo');
    organizacaoGestao3.setResponsavel('Mariana Costa');
    organizacaoGestao3.setLocalizacao(localizacao3);

    const organizacaoGestao4 = new OrganizacaoGestao();
    organizacaoGestao4.setNome('Verde Esperança');
    organizacaoGestao4.setResponsavel('João Pereira');
    organizacaoGestao4.setLocalizacao(localizacao4);

    const organizacaoGestao5 = new OrganizacaoGestao();
    organizacaoGestao5.setNome('Sustentabilidade Já');
    organizacaoGestao5.setResponsavel('Luana Santos');
    organizacaoGestao5.setLocalizacao(localizacao5);

    const estrategia1 = new Estrategia();
    estrategia1.setTipoEstrategia(TipoEstrategia.RECICLAGEM);
    estrategia1.setDescricao('Reciclagem de plásticos e metais.');
    estrategia1.setEfetividade(90);

    const estrategia2 = new Estrategia();
    estrategia2.setTipoEstrategia(TipoEstrategia.RECICLAGEM);
    estrategia2.setDescricao('Reciclagem de papel e papelão.');
    estrategia2.setEfetividade(85);

    const estrategia3 = new Estrategia();
    estrategia3.setTipoEstrategia(TipoEstrategia.OUTRA);
    estrategia3.setDescricao('Educação ambiental em escolas.');
    estrategia3.setEfetividade(80);

    const estrategia4 = new Estrategia();
    estrategia4.setTipoEstrategia(TipoEstrategia.RECICLAGEM);
    estrategia4.setDescricao('Reciclagem de vidro.');
    estrategia4.setEfetividade(88);

    const estrategia5 = new Estrategia();
    estrategia5.setTipoEstrategia(TipoEstrategia.OUTRA);
    estrategia5.setDescricao('Campanhas de conscientização sobre resíduos.');
    estrategia5.setEfetividade(75);
    
    const evento1 = new Evento();
    evento1.setData(new Date('2024-11-15T09:00:00Z'));
    evento1.setNome('Semana do Meio Ambiente');
    evento1.setDescricao('Atividades educativas e de limpeza para conscientização ambiental.');
    evento1.setOrganizacaoGestao(organizacaoGestao1);
    evento1.setLocalizacao(localizacao1);
    evento1.setEstrategia(estrategia1)
    
    const evento2 = new Evento();
    evento2.setData(new Date('2024-12-10T14:00:00Z'));
    evento2.setNome('Limpeza de Praia');
    evento2.setDescricao('Ação de limpeza e coleta de resíduos na praia.');
    evento2.setOrganizacaoGestao(organizacaoGestao2);
    evento2.setLocalizacao(localizacao2);
    evento2.setEstrategia(estrategia2)

    const evento3 = new Evento();
    evento3.setData(new Date('2024-10-20T08:00:00Z'));
    evento3.setNome('Plantio de Árvores');
    evento3.setDescricao('Plantio de árvores em áreas urbanas para melhorar a qualidade do ar.');
    evento3.setOrganizacaoGestao(organizacaoGestao3);
    evento3.setLocalizacao(localizacao3);
    evento3.setEstrategia(estrategia3)

    const evento4 = new Evento();
    evento4.setData(new Date('2024-11-25T10:00:00Z'));
    evento4.setNome('Feira de Sustentabilidade');
    evento4.setDescricao('Feira para promover produtos e práticas sustentáveis.');
    evento4.setOrganizacaoGestao(organizacaoGestao4);
    evento4.setLocalizacao(localizacao4);
    evento4.setEstrategia(estrategia4)

    const evento5 = new Evento();
    evento5.setData(new Date('2024-12-15T09:00:00Z'));
    evento5.setNome('Mutirão de Limpeza');
    evento5.setDescricao('Mutirão para limpeza de áreas urbanas e praças.');
    evento5.setOrganizacaoGestao(organizacaoGestao5);
    evento5.setLocalizacao(localizacao5);
    evento5.setEstrategia(estrategia5)
    
    await AppDataSource.manager.save(localizacao1);
    await AppDataSource.manager.save(localizacao2);
    await AppDataSource.manager.save(localizacao3);
    await AppDataSource.manager.save(localizacao4);
    await AppDataSource.manager.save(localizacao5);

    await AppDataSource.manager.save(organizacaoGestao1);
    await AppDataSource.manager.save(organizacaoGestao2);
    await AppDataSource.manager.save(organizacaoGestao3);
    await AppDataSource.manager.save(organizacaoGestao4);
    await AppDataSource.manager.save(organizacaoGestao5);

    await AppDataSource.manager.save(estrategia1);
    await AppDataSource.manager.save(estrategia2);
    await AppDataSource.manager.save(estrategia3);
    await AppDataSource.manager.save(estrategia4);
    await AppDataSource.manager.save(estrategia5);

    await AppDataSource.manager.save(evento1);
    await AppDataSource.manager.save(evento2);
    await AppDataSource.manager.save(evento3);
    await AppDataSource.manager.save(evento4);
    await AppDataSource.manager.save(evento5);


    await AppDataSource.destroy();
}

main().catch(error => console.error('Erro ao executar o script:', error));
