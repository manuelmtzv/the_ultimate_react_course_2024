import logo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}
