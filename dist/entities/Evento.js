"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
const typeorm_1 = require("typeorm");
const OrganizacaoGestao_1 = require("./OrganizacaoGestao");
const Estrategia_1 = require("./Estrategia");
const Localizacao_1 = require("./Localizacao");
let Evento = class Evento {
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getLocalizacao() {
        return this.localizacao;
    }
    setLocalizacao(localizacao) {
        this.localizacao = localizacao;
    }
    getDescricao() {
        return this.descricao;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    getOrganizacaoGestao() {
        return this.organizacaoGestao;
    }
    setOrganizacaoGestao(organizacaoGestao) {
        this.organizacaoGestao = organizacaoGestao;
    }
    getEstrategias() {
        return this.estrategias;
    }
    setEstrategias(estrategias) {
        this.estrategias = estrategias;
    }
};
exports.Evento = Evento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Evento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evento.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Evento.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Evento.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Localizacao_1.Localizacao, localizacao => localizacao.evento),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Localizacao_1.Localizacao)
], Evento.prototype, "localizacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrganizacaoGestao_1.OrganizacaoGestao, organizacaoGestao => organizacaoGestao.eventos),
    __metadata("design:type", OrganizacaoGestao_1.OrganizacaoGestao)
], Evento.prototype, "organizacaoGestao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Estrategia_1.Estrategia, estrategia => estrategia.evento),
    __metadata("design:type", Array)
], Evento.prototype, "estrategias", void 0);
exports.Evento = Evento = __decorate([
    (0, typeorm_1.Entity)()
], Evento);
