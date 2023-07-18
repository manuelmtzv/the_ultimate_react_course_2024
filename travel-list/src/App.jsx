import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/PackingList";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Form />

      <PackingList />

      <Footer />
    </div>
  );
}
