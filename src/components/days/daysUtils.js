


export const dayInitialLetter = (val) => {
    switch (val) {
        case 0:
            return "S";
        case 1:
            return "M";
        case 2:
            return "T";
        case 3:
            return "W";
        case 4:
            return "T";
        case 5:
            return "F";
        case 6:
            return "S";
        default:
            return "S";
    }
}


export const daysInitial = [
    {id: 0, active: true},
    {id: 1, active: true},
    {id: 2, active: true},
    {id: 3, active: true},
    {id: 4, active: true},
    {id: 5, active: true},
    {id: 6, active: true},
];


export const daysReducer = (state, action) => {
    switch (action.type) {
        case 'ACTIVATE':
            return state.map(tmp => {
                if (tmp.id === action.id) {
                    return {...tmp, active: true};
                } else {
                    return tmp;
                }
            });

        case 'DEACTIVATE':
            return state.map(tmp => {
                if (tmp.id === action.id) {
                    return {...tmp, active: false};
                } else {
                    return tmp;
                }
            })

        case 'CLEAR':
            return daysInitial;

        default:
            return state;
    }
};








