import {
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
  FETCH_ROOT_FAILURE,
  FETCH_ROOT_REQUEST,
  FETCH_ROOT_SUCCESS,
  FETCH_SINGLE_ITEM_FAILURE,
  FETCH_SINGLE_ITEM_REQUEST,
  FETCH_SINGLE_ITEM_SUCCESS
} from "../types"

/**
 * @FETCH_ROOTS 
 * Initiate a get request and set isLoading to true
 */
export const fetchRootsRequest = () => {
  return {
    type: FETCH_ROOTS
  }
}

/**
 * @FETCH_ROOTS_SUCCESS 
 * Request is success with payload of expected data
 * Set isLoading to false
 */
export const fetchRootsSuccess = (payload: any) => {
  return {
    type: FETCH_ROOTS_SUCCESS,
    payload
  }
}

/**
 * @FETCH_ROOTS_FAILURE 
 * Request is failed with payload of expected error message
 * Set isLoading to false
 */
export const fetchRootsFailure = (payload: any) => {
  return {
    type: FETCH_ROOTS_FAILURE,
    payload
  }
}

/**
 * @FETCH_ROOT_REQUEST 
 * Initiate get request with any of the params
 * @person
 * @planets
 * @films
 * @species
 * @vehicles
 * @starships
 * set isLoading to true
 */
 export const fetchRootRequest = (payload: string) => {
  return {
    type: FETCH_ROOT_REQUEST,
    payload
  }
}

/**
 * @FETCH_ROOT_SUCCESS 
 * Request is success with payload of expected data
 * Set isLoading to false
 */
export const fetchRootSuccess = (payload: any) => {
  return {
    type: FETCH_ROOT_SUCCESS,
    payload
  }
}

/**
 * @FETCH_ROOT_FAILURE 
 * Request is failed with payload of expected error message
 * Set isLoading to false
 */
export const fetchRootFailure = (payload: any) => {
  return {
    type: FETCH_ROOT_FAILURE,
    payload
  }
}

/**
 * @FETCH_SINGLE_ITEM_REQUEST 
 * Initiate a get request with the id of the item
 * @ID
 * set isLoading to true
 */
 export const fetchSingleItemRequest = (payload: string) => {
  return {
    type: FETCH_SINGLE_ITEM_REQUEST,
    payload
  }
}

/**
 * @FETCH_SINGLE_ITEM_SUCCESS 
 * Request is success with payload of expected data
 * Set isLoading to false
 */
export const fetchSingleItemSuccess = (payload: any) => {
  return {
    type: FETCH_SINGLE_ITEM_SUCCESS,
    payload
  }
}

/**
 * @FETCH_SINGLE_ITEM_FAILURE 
 * Request is failed with payload of expected error message
 * Set isLoading to false
 */
export const fetchSingleItemFailure = (payload: any) => {
  return {
    type: FETCH_SINGLE_ITEM_FAILURE,
    payload
  }
}