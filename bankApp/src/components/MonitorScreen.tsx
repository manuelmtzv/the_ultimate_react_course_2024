export default function MonitorScreen({ balance, loan }: Props) {
  return (
    <div>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
    </div>
  );
}

interface Props {
  balance: number;
  loan: number;
}
