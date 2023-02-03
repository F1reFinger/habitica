import filter from 'lodash/filter';
import size from 'lodash/size';
import content from '../content/index';

export function CountGear (userGear = {}, set) {
    const gear = filter(content.gear.flat, item => {
        //Achata os itens em uma lista para facilitar a contagem
      });
      const Length = gear.length;
      return Length;
  }

  export function Contador (userGear = {}, set) {
    let Length = 0;
    const gear = filter(content.gear.flat, item => {
        //Achata os itens em uma lista para facilitar a contagem
      });
    Length += gear.length;
    return Length;
  }

  export function Somador (userGear , set) {
    const gear = filter(content.gear.flat, item => {});
    let Length = gear.length;
    return Length;
  }