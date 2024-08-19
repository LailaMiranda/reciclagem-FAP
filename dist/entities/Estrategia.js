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
exports.Estrategia = void 0;
const typeorm_1 = require("typeorm");
const Evento_1 = require("./Evento");
const TipoEstrategia_1 = require("../enum/TipoEstrategia");
let Estrategia = class Estrategia {
    getIdEstrategia() {
        return this.id_Estrategia;
    }
    setIdEstrategia(id) {
        this.id_Estrategia = id;
    }
    getTipoEstrategia() {
        return this.tipoEstrategia;
    }
    setTipoEstrategia(tipoEstrategia) {
        this.tipoEstrategia = tipoEstrategia;
    }
    getDescricao() {
        return this.descricao;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    getEfetividade() {
        return this.efetividade;
    }
    setEfetividade(efetividade) {
        this.efetividade = efetividade;
    }
    getEventos() {
        return this.eventos;
    }
    setEventos(eventos) {
        this.eventos = eventos;
    }
};
exports.Estrategia = Estrategia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Estrategia.prototype, "id_Estrategia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: TipoEstrategia_1.TipoEstrategia,
    }),
    __metadata("design:type", String)
], Estrategia.prototype, "tipoEstrategia", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Estrategia.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Estrategia.prototype, "efetividade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Evento_1.Evento, evento => evento.estrategia),
    __metadata("design:type", Array)
], Estrategia.prototype, "eventos", void 0);
exports.Estrategia = Estrategia = __decorate([
    (0, typeorm_1.Entity)()
], Estrategia);
