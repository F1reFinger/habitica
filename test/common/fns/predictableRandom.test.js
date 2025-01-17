import predictableRandom from '../../../website/common/script/fns/predictableRandom';
import {
  generateUser,
} from '../../helpers/common.helper';

describe('shared.fns.predictableRandom', () => {
  let user;

  beforeEach(() => {
    user = generateUser();
  });

  it('returns a number', () => {
    expect(predictableRandom(user)).to.be.a('number');
  });

  it('returns the same value when user.stats is the same and no seed is passed', () => {
    user.stats.hp = 43;
    user.stats.gp = 34;

    const val1 = predictableRandom(user);
    const val2 = predictableRandom(user);

    expect(val2).to.equal(val1);
  });

  it('returns a different value when user.stats is not the same and no seed is passed', () => {
    user.stats.hp = 43;
    user.stats.gp = 34;
    const val1 = predictableRandom(user);

    user.stats.gp = 35;
    const val2 = predictableRandom(user);

    expect(val2).to.not.equal(val1);
  });

  it('returns the same value when the same seed is passed', () => {
    const val1 = predictableRandom(user, 4452673762);
    const val2 = predictableRandom(user, 4452673762);

    expect(val2).to.equal(val1);
  });

  it('returns a different value when a different seed is passed', () => {
    const val1 = predictableRandom(user, 4452673761);
    const val2 = predictableRandom(user, 4452673762);

    expect(val2).to.not.equal(val1);
  });

  it('return different value when same double is passed', () => {
    const val1 = predictableRandom(user, 3.14159265359);
    const val2 = predictableRandom(user, 3.14159265359);

    expect(val2).to.equal(val1);
  });

  it('return different value when a diferent double is passed', () => {
    const val1 = predictableRandom(user, 3.14159265389);
    const val2 = predictableRandom(user, 3.14159265359);

    expect(val2).to.not.equal(val1);
  });

  it('return NaN value when a String is passed', () => {
    const val1 = predictableRandom(user, 'Teste');

    expect(val1).to.be.NaN;
  });

  it('return NaN value when an empty string is passed', () => {
    const val1 = predictableRandom(user, ' ');

    expect(val1).to.be.greaterThan(0);
  });
});
