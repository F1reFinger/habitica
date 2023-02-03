import backpackCount, { Contador, CountGear, Somador } from '../../../website/common/script/fns/backpackCount'
import {
  generateUser,
} from '../../helpers/common.helper';

describe('shared.fns.backpackCount', () => {
  let user;

  beforeEach(() => {
    user = generateUser();
  });

  it('Dummy test', () => {
    const result = CountGear(user, 0);
    console.log('Result:',result)
    expect(result).to.equal(0);
  });

  it('Count gears', () => {
    const gear = {
      weapon_warrior_0: false,
      weapon_warrior_1: false,
      weapon_armor_0: true,
      weapon_armor_1: true,
    };
    const result = Contador(gear, 'warrior');
    const teste = parseInt(result);
    console.log('Result of counting gears:',teste)
    expect(result.toString).to.not.eql(0);
  });

  it('fail Count gears', () => {
    const gear = {
      weapon_wizard_0: true,
      weapon_wizard_1: true,
      weapon_warrior_0: true,
      weapon_warrior_1: true,
      weapon_armor_0: true,
      weapon_armor_1: true,
    };
    const result = Somador(gear, 'wizard');
    console.log('Result of Failing Counts:',result)
    let teste = result.parseInt;
    expect(teste).to.be.undefined;
  });

})