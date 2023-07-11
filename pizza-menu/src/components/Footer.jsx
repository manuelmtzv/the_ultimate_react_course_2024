import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const { open, close } = {
    open: 12,
    close: 22,
  };

  const isOpen = hour >= open && hour < close;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={close} />
      ) : (
        <p>{`We're closed. We open at ${open}:00.`}</p>
      )}
    </footer>
  );
}
