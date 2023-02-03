import backpackCount, { CountGear } from '../../../website/common/script/fns/backpackCount'
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

})