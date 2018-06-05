const RISK_RESULT = 'RISK_RESULT'

export function getData (data) {
  return {
    type: RISK_RESULT,
    payload:data
  }
}

const ACTION_HANDLERS = {
  [RISK_RESULT]: (state, action) => ({ ...state, content:action.payload})
}

const initialState = {
  content:'其实个节点开始执行。'
}

export default function riskResultReduce (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
