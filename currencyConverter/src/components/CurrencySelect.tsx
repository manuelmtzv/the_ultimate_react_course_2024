import { CurrencyTypes } from '../enums/currencyTypes'

interface Props {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  value: CurrencyTypes
}

export default function CurrencySelect({ onChange, value }: Props) {
  return (
    <select onChange={onChange} value={value}>
      {Object.keys(CurrencyTypes).map((key) => {
        return (
          <option key={key} value={key}>
            {key}
          </option>
        )
      })}
    </select>
  )
}
