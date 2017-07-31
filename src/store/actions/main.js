// Constants
const NAMESPACE = 'BASE'
const getConst = (name) => `${NAMESPACE}__${name}`

export const EXAMPLE = getConst('EXAMPLE')


// Actions
export const example = (data) => ({
  type: EXAMPLE,
  data
});
