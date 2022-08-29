const navbarWidth = 240;
const headerHeight = 85;

const middleOfScreenStyles = {
    flexGrow: 1,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
};

const mainViewStyles = {
    flexGrow: 1,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: `100vh - ${headerHeight}px`
};

const inputStyles = {
    mb: '1%'
};

export {navbarWidth, headerHeight, middleOfScreenStyles, mainViewStyles, inputStyles};