export const selectCurrentUser = (state) => {
    return state.user.currentUser;
}

export const selectSections = (state) => {
    return state.user.sections;    
}