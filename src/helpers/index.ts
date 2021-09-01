import { IGeneric } from "../models/IGeneric";
import { capitalize } from "./capsInitial";

const showLabel = (key?: string, item?: IGeneric) => {
  if (key === 'people') {
    return {
      labelOne: 'Gender',
      valueOne: item?.gender,
      labelTwo: 'Eye Color',
      valueTwo: capitalize(item?.eye_color)
    };
  }else if(key === 'planets'){
    return {
      labelOne: 'Diameter',
      valueOne: item?.diameter,
      labelTwo: 'Population',
      valueTwo: item?.population
    };
  }else if (key === 'films') {
    return {
      labelOne: 'Director',
      valueOne: capitalize(item?.director),
      labelTwo: 'Episode ID',
      valueTwo: item?.episode_id
    };
  }else if(key === 'species'){
    return {
      labelOne: 'Classification',
      valueOne: capitalize(item?.classification),
      labelTwo: 'Average Height',
      valueTwo: item?.average_height
    };
  }else if(key === 'vehicles' || key === 'starships'){
    return {
      labelOne: 'Cargo Capacity',
      valueOne: item?.cargo_capacity,
      labelTwo: 'Model',
      valueTwo: capitalize(item?.model)
    };
  }
}

export {showLabel}