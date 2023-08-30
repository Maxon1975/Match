export default class MathCharacter {
  static types = ['bowman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'];

  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!');
    } else {
      this.name = name;
    }
    if (!MathCharacter.types.includes(type)) {
      throw new Error('Ошибка! Неверный тип персонажа!');
    } else {
      this.type = type;
    }
    // this._attack можно заменить на this.baseAttack, а this._stoned - на this.baseStoned, или что-нибудь иное (другой префикс), но не нижнее подчёркивание, чтобы линтер не выводил ошибку, либо отключить это правило линтера
    this._attack = 0;
    this.distance = 1;
    this._stoned = false;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let result = this._attack;
    result -= (result * 0.1 * (this.distance - 1));
    if (this._stoned === true) {
      result = Math.round(result - Math.log2(this.distance) * 5);
    }
    return result;
  }
}
