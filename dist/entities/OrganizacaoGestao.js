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
exports.OrganizacaoGestao = void 0;
const typeorm_1 = require("typeorm");
const Evento_1 = require("./Evento");
const Localizacao_1 = require("./Localizacao");
let OrganizacaoGestao = class OrganizacaoGestao {
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
    getLocalizacao() {
        return this.localizacao;
    }
    setLocalizacao(localizacao) {
        this.localizacao = localizacao;
    }
    getResponsavel() {
        return this.responsavel;
    }
    setResponsavel(responsavel) {
        this.responsavel = responsavel;
    }
};
exports.OrganizacaoGestao = OrganizacaoGestao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrganizacaoGestao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrganizacaoGestao.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrganizacaoGestao.prototype, "responsavel", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Localizacao_1.Localizacao, localizacao => localizacao.organizacaoGestao),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Localizacao_1.Localizacao)
], OrganizacaoGestao.prototype, "localizacao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Evento_1.Evento, evento => evento.organizacaoGestao),
    __metadata("design:type", Array)
], OrganizacaoGestao.prototype, "eventos", void 0);
exports.OrganizacaoGestao = OrganizacaoGestao = __decorate([
    (0, typeorm_1.Entity)()
], OrganizacaoGestao);
