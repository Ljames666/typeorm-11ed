import { v4 } from 'uuid';
import '../utils/extension-methods';

export class Growdever {
    private _id: string;
    get id(): string {
        return this._id;
    }

    private _name: string;
    get name(): string {
        return this._name;
    }

    private _birth: string;
    get birth(): string {
        return this._birth;
    }

    private _cpf: string;
    get cpf(): string {
        return this._cpf;
    }

    private _status: 'STUDYING' | 'GRADUATED' | 'CANCELED';
    get status(): 'STUDYING' | 'GRADUATED' | 'CANCELED' {
        return this._status;
    }

    private _skills: string[];
    get skills(): string[] {
        return this._skills;
    }

    constructor(name: string, birth: string, cpf: string, skills?: string[]) {
        this._id = v4();
        this._name = name;
        this._birth = birth;
        this._cpf = cpf.clearSpecialCharacteres();
        this._status = 'STUDYING';
        this._skills = skills ?? [];
    }

    static create(
        id: string,
        name: string,
        cpf: string,
        birth: string,
        status: 'STUDYING' | 'GRADUATED' | 'CANCELED',
        skills: string[]
    ): Growdever {
        const growdever = new Growdever(name, birth, cpf, skills);
        growdever._id = id;
        growdever._status = status;
        return growdever;
    }

    updateInformation(name: string, birth: string, status: 'STUDYING' | 'GRADUATED' | 'CANCELED') {
        if (!name) throw new Error('Nome inválido');

        if (!birth) throw new Error('Data de nascimento inválido');

        if (!['STUDYING', 'GRADUATED', 'CANCELED'].some((s) => s === status)) {
            throw new Error('Status inválido. Valores permitidos: STUDYING, GRADUATED ou CANCELED');
        }

        this._name = name;
        this._birth = birth;
        this._status = status;
    }

    updateSkills(newSkills: string[]) {
        if (!newSkills || newSkills.length === 0) {
            throw new Error('Não é possivel adicionar uma lista vazia.');
        }

        this._skills.push(...newSkills);
    }

    toJson() {
        return {
            id: this._id,
            name: this._name,
            birth: this._birth,
            cpf: this._cpf,
            status: this._status,
            skills: this._skills,
        };
    }

    deleteSkill(skill: string) {
        // "" -> false
        // undefined -> false
        // null -> false
        if (!skill) {
            throw new Error('Skill informada está inválida');
        }

        const indexSkill = this._skills.findIndex((s) => s.toLowerCase() === skill.toLowerCase());

        if (indexSkill < 0) {
            throw new Error('Skill não encontrada');
        }

        this._skills.splice(indexSkill, 1);
    }
}
