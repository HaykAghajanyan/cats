import {actionCreator, createReducer} from "../../helpers";

const SET_CATS = 'CatsView/SET_CATS'
const CLEAR_CATS = 'CatsView/CLEAR_CATS'
const SET_CATEGORY = 'SideBar/SET_CATEGORY'
const SET_ALL_CATEGORIES = 'SideBar/SET_ALL_CATEGORIES'
const CHANGE_LIMIT = 'SideBar/CHANGE_LIMIT'
const SET_PAGE = 'SideBar/SET_PAGE'

export const setCats = actionCreator(SET_CATS)
export const clearCats = actionCreator(CLEAR_CATS)
export const setCategory = actionCreator(SET_CATEGORY)
export const setAllCategories = actionCreator(SET_ALL_CATEGORIES)
export const changeLimit = actionCreator(CHANGE_LIMIT)
export const setPage = actionCreator(SET_PAGE)

const initialState = {
    cats: [],
    currentCategory: null,
    categories: [],
    limit: 10,
    page: 1,
}

const catReducer = createReducer(initialState, (state, {value}) => ({
    [SET_CATS]: () => ({
        ...state,
        cats: [
            ...state.cats,
            ...value
        ]
    }),
    [CLEAR_CATS]: () => ({
        ...state,
        cats: []
    }),
    [SET_CATEGORY]: () => ({
        ...state,
        currentCategory: value
    }),
    [SET_ALL_CATEGORIES]: () => ({
        ...state,
        categories: value
    }),
    [CHANGE_LIMIT]: () => ({
        ...state,
        limit: value
    }),
    [SET_PAGE]: () => ({
        ...state,
        page: value
    }),
}))


export default catReducer