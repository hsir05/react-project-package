const RISK_RESULT = 'RISK_RESULT'

export function getRiskResultData (data) {
  return {
    type: RISK_RESULT,
    payload:data
  }
}

const ACTION_HANDLERS = {
  [RISK_RESULT]: (state, action) => ({ ...state, riskResult:action.payload})
}

const initialState = {
  riskResult: {}
}

export default function riskResultReduce (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
