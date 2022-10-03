import { avatar, amazonLogo, ebayLogo, randomLogo } from 'assets/images';
import { UserRoles } from 'types/userRoles';

export const COUNTRIES_SELECT_MOCK = [
  { option: 'US', value: 'US' },
  { option: 'BLR', value: 'BLR' },
];

export const USER = {
  role: UserRoles.ADMIN,
  name: 'Bobby',
  avatar: avatar,
  isAuthorized: true,
};

//TODO: delete after dealers implementation
const a = new Array(16).fill({
  name: 'Amazon',
  logo: amazonLogo,
});

const b = new Array(16).fill({
  name: 'Ebay',
  logo: ebayLogo,
});

const c = new Array(16).fill({
  name: 'AnswermomenRegu latorbiz xcv xv',
});

const d = new Array(16).fill({
  name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, dignissimos.',
});

const e = new Array(16).fill({
  name: 'Loreipsum dolorsit amet',
  logo: randomLogo,
});

export const DEALERS = [...a, ...b, ...c, ...d, ...e];
