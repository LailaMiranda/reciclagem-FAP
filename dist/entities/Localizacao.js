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
exports.Localizacao = void 0;
const typeorm_1 = require("typeorm");
const Evento_1 = require("./Evento");
const OrganizacaoGestao_1 = require("./OrganizacaoGestao");
let Localizacao = class Localizacao {
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getRua() {
        return this.rua;
    }
    setRua(rua) {
        this.rua = rua;
    }
    getCidade() {
        return this.cidade;
    }
    setCidade(cidade) {
        this.cidade = cidade;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
};
exports.Localizacao = Localizacao;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Localizacao.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Localizacao.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Localizacao.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Localizacao.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Evento_1.Evento, evento => evento.localizacao),
    __metadata("design:type", Evento_1.Evento)
], Localizacao.prototype, "evento", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => OrganizacaoGestao_1.OrganizacaoGestao, organizacaoGestao => organizacaoGestao.localizacao),
    __metadata("design:type", OrganizacaoGestao_1.OrganizacaoGestao)
], Localizacao.prototype, "organizacaoGestao", void 0);
exports.Localizacao = Localizacao = __decorate([
    (0, typeorm_1.Entity)()
], Localizacao);
