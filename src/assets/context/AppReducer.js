 export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                theme: action.payload
            }
    }
};


