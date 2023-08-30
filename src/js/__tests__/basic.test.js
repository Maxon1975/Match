import MathCharacter from '../basic';
import Magician from '../magician';
import Daemon from '../daemon';

test('name shouldn`t contain less than 2 symbols', () => {
  expect(() => new MathCharacter('F', 'bowman')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('name shouldn`t contain more than 10 symbols', () => {
  expect(() => new MathCharacter('slvnsmskjs;mslemfe', 'bowman')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('invalid type', () => {
  expect(() => new MathCharacter('Лучник', 'bowerman')).toThrow(new Error('Ошибка! Неверный тип персонажа!'));
});

test('default value of .stoned should be false', () => {
  const result = new MathCharacter('Лучник', 'bowman');

  expect(result.stoned).toBeFalsy();
});

test('attack should change depending on .stoned', () => {
  const magician = new Magician('Маг', 'magician');
  const daemon = new Daemon('Демон', 'daemon');
  magician.attack = 50;
  magician.distance = 5;
  magician.stoned = false;
  daemon.attack = 50;
  daemon.distance = 5;
  daemon.stoned = true;
  expect(magician.attack).toEqual(30);
  expect(daemon.attack).toEqual(18);
});
