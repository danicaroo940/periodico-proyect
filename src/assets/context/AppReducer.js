const menu = (state, action) => {
    switch (action.type) {
        case 'CLICK_HOME':
            return {
                menu: action.payload
            }
        case 'CLICK_LIST':
            return {
                    menu: action.payload
                }
        case 'CLICK_ADD':
            return {
                    menu: action.payload
                }
    };

}
export default menu;