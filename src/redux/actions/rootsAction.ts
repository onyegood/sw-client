import { FETCH_ROOTS, FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS, FETCH_ROOT_FAILURE, FETCH_ROOT_REQUEST, FETCH_ROOT_SUCCESS } from "../types"

/**
 * @FETCH_ROOTS 
 * Initiate a get request and set loader to true
 */
export const fetchRootsRequest = () => {
  return {
    type: FETCH_ROOTS
  }
}

/**
 * @FETCH_ROOTS_SUCCESS 
 * Request is success with payload of expected data
 * Set loader to false
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
 * Set loader to false
 */
export const fetchRootsFailure = (payload: any) => {
  return {
    type: FETCH_ROOTS_FAILURE,
    payload
  }
}

/**
 * @FETCH_ROOT_REQUEST 
 * Initiate ap get request with any of the params
 * @person
 * @planets
 * @films
 * @species
 * @vehicles
 * @starships
 * set loader to true
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
 * Set loader to false
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
 * Set loader to false
 */
export const fetchRootFailure = (payload: any) => {
  return {
    type: FETCH_ROOT_FAILURE,
    payload
  }
}