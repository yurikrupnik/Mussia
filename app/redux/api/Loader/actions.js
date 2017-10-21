export const LOADING = 'LOADING';

const createLoading = name => ({
    toggle: () => ({type: `${LOADING}_${name}`})
});

export default createLoading;