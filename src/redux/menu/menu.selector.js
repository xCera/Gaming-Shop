import {createSelector} from 'reselect'

const selectMenu = state => state.menu;

export const selectMenuSecitons = createSelector(
    [selectMenu],
    menu => menu.sections
)