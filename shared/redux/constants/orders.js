import { keyMirror } from 'utilities/helpers'

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
    UPDATE_ORDERS: undefined,
    SET_VISIBILITY_DETAIL: undefined,
    SET_VISIBILITY_SHOW_ALL: undefined,
    ADD_ORDER: undefined,
    ADD_ORDER_SUCCESS: undefined,
    ADD_ORDER_FAILURE: undefined,
})
