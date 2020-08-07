import { SET_FILTER } from '../actionTypes';
import { filters } from '../../constants';

const initialState = filters.all;

const visbilityFilter = (state = initialState, action) => {
    switch(action.type){
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visbilityFilter;