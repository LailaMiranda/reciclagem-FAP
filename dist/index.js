"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estrategia_1 = require("./entities/Estrategia");
const Evento_1 = require("./entities/Evento");
const OrganizacaoGestao_1 = require("./entities/OrganizacaoGestao");
const data_source_1 = require("./config/data-source");
const Localizacao_1 = require("./entities/Localizacao");
const TipoEstrategia_1 = require("./enum/TipoEstrategia");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize();
        const localizacao = new Localizacao_1.Localizacao();
        localizacao.setCep(1223344);
        localizacao.setRua('swdwferbbe');
        localizacao.setCidade('Recife');
        localizacao.setEstado('Pernembuco');
        const organizacaoGestao = new OrganizacaoGestao_1.OrganizacaoGestao();
        organizacaoGestao.setNome('Azul');
        organizacaoGestao.setResponsavel('Laila');
        organizacaoGestao.setLocalizacao(localizacao);
        const evento = new Evento_1.Evento();
        evento.setData(new Date());
        evento.setNome('Porco espinho');
        evento.setDescricao('Descricao bla bla');
        evento.setOrganizacaoGestao(organizacaoGestao);
        evento.setLocalizacao(localizacao);
        const estrategia = new Estrategia_1.Estrategia();
        estrategia.setTipoEstrategia(TipoEstrategia_1.TipoEstrategia.RECICLAGEM);
        estrategia.setDescricao('Estratégia de Reciclagem');
        estrategia.setEfetividade(90);
        estrategia.setEvento(evento);
        yield data_source_1.AppDataSource.manager.save(localizacao);
        yield data_source_1.AppDataSource.manager.save(organizacaoGestao);
        yield data_source_1.AppDataSource.manager.save(evento);
        yield data_source_1.AppDataSource.manager.save(estrategia);
        yield data_source_1.AppDataSource.destroy();
    });
}
main().catch(error => console.log(error));
