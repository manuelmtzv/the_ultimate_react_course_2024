import { useReducer, ChangeEvent } from 'react'

interface State {
  count: number
  step: number
}

function reducer(state: State, action: { type: string; payload?: number }) {
  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - state.step }
    case 'inc':
      return { ...state, count: state.count + state.step }
    case 'setCount':
      return { ...state, count: action.payload || 0 }
    case 'setStep':
      return { ...state, step: action.payload || 0 }
    case 'reset':
      return { count: 0, step: 1 }
    default:
      throw new Error('Unexpected action')
  }
}

export default function DateCounter() {
  const initialState = { count: 0, step: 1 } as State
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  const date = new Date('2023-01-01')
  date.setDate(date.getDate() + count * step)

  const dec = function () {
    dispatch({ type: 'dec' })
  }

  const inc = function () {
    dispatch({ type: 'inc' })
  }

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    if (e) {
      dispatch({ type: 'setCount', payload: Number(e.target?.value) })
    }
  }

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    if (e) {
      dispatch({ type: 'setStep', payload: Number(e.target?.value) })
    }
  }

  const reset = function () {
    dispatch({ type: 'reset' })
  }

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
