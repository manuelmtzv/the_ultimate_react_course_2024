import { useState, ChangeEvent, useEffect } from 'react'
import CurrencySelect from './components/CurrencySelect'
import { useDebounce } from '@uidotdev/usehooks'

import { CurrencyTypes } from './enums/currencyTypes'

function App() {
  const [amount, setAmount] = useState<string>('1')
  const debouncedAmount = useDebounce(amount, 400)
  const [fromCurrency, setFromCurrency] = useState<CurrencyTypes>(
    CurrencyTypes.USD
  )
  const [toCurrency, setToCurrency] = useState<CurrencyTypes>(CurrencyTypes.CAD)
  const [result, setResult] = useState<number>(0)

  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function handleSetAmount(event: ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value)
  }

  function handleSetCurrency(
    event: ChangeEvent<HTMLSelectElement>,
    setCurrency: (currency: CurrencyTypes) => void
  ) {
    setCurrency(event.target.value as CurrencyTypes)
  }

  useEffect(() => {
    async function getConversionRate(numberAmount: number) {
      try {
        setError('')
        setIsLoading(true)
        const res = await fetch(
          `https:/api.frankfurter.app/latest?amount=${numberAmount}&from=${fromCurrency}&to=${toCurrency}`
        )

        const data = await res.json()
        if (!res.ok) throw Error(data.message)

        setResult(data.rates[toCurrency])
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (
      !isNaN(parseFloat(debouncedAmount)) &&
      debouncedAmount.match(/^\d{1,}(\.\d{0,4})?$/)
    ) {
      if (fromCurrency == toCurrency) {
        setResult(Number(debouncedAmount))
        return
      }

      getConversionRate(parseFloat(debouncedAmount))
    }
  }, [debouncedAmount, fromCurrency, toCurrency])

  return (
    <div>
      <input type='text' value={amount} onChange={handleSetAmount} />

      {/* From */}
      <CurrencySelect
        onChange={(event) => handleSetCurrency(event, setFromCurrency)}
        value={fromCurrency}
      />

      {/* To */}
      <CurrencySelect
        onChange={(event) => handleSetCurrency(event, setToCurrency)}
        value={toCurrency}
      />

      <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && !error && (
          <p>
            Result: {result} {toCurrency}
          </p>
        )}
        {!isLoading && error && <p>Error: {error}</p>}
      </div>
    </div>
  )
}

export default App
