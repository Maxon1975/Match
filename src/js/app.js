import MathCharacter from './basic';
import Magician from './magician';
import Daemon from './daemon';

console.log('app worked');

const magician = new Magician('Маг', 'magician');
const daemon = new Daemon('Демон', 'daemon');

magician.distance = 5;
magician.stoned = false;
console.log(magician.attack);

daemon.distance = 5;
daemon.stoned = true;
console.log(daemon.attack);
