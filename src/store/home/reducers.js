const RISK_RESULT = 'RISK_RESULT'

export function getRiskResultData (data) {
  return {
    type: RISK_RESULT,
    payload:data
  }
}

const ACTION_HANDLERS = {
  [RISK_RESULT]: (state, action) => ({ ...state, home:action.payload})
}

const initialState = {
  content:'其实 React Re，每个节点都可以看作一个这个节点以下部分子树的根节点 所以其实这个对比算法可以从 Virtual DOM 上任何一个节点开始执行。'
}

export default function riskResultReduce (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
