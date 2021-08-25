

export const hoursLegend = (val) => {
    switch (val) {
        case 0:
            return "0:00";
        case 5:
            return "6:00";
        case 11:
            return "12:00";
        case 17:
            return "18:00";
        case 23:
            return "23:00";
        default:
            return "";
    }
}


export const hoursInitial = [
    {id: 0, active: true},
    {id: 1, active: true},
    {id: 2, active: true},
    {id: 3, active: true},
    {id: 4, active: true},
    {id: 5, active: true},
    {id: 6, active: true},
    {id: 7, active: true},
    {id: 8, active: true},
    {id: 9, active: true},
    {id: 10, active: true},
    {id: 11, active: true},
    {id: 12, active: true},
    {id: 13, active: true},
    {id: 14, active: true},
    {id: 15, active: true},
    {id: 16, active: true},
    {id: 17, active: true},
    {id: 18, active: true},
    {id: 19, active: true},
    {id: 20, active: true},
    {id: 21, active: true},
    {id: 22, active: true},
    {id: 23, active: true},
];


export const hoursReducer = (state, action) => {
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
            return hoursInitial;

        default:
            return state;
    }
};




