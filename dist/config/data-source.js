"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Estrategia_1 = require("../entities/Estrategia");
const Evento_1 = require("../entities/Evento");
const OrganizacaoGestao_1 = require("../entities/OrganizacaoGestao");
const Localizacao_1 = require("../entities/Localizacao");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'reciclagem',
    entities: [Estrategia_1.Estrategia, Evento_1.Evento, OrganizacaoGestao_1.OrganizacaoGestao, Localizacao_1.Localizacao],
    synchronize: true,
    logging: true,
});
