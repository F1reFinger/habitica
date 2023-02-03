import filter from 'lodash/filter';
import size from 'lodash/size';
import content from '../content/index';

export function CountGear (userGear = {}, set) {
    const gear = filter(content.gear.flat, item => {
        //const setMatches = item.klass === set;
        //const hasItem = userGear.lenght;
        //setMatches&&
        
      });
      const Length = gear.length;
      return Length;
    //const count = size(set);
  }