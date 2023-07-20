import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/PackingList";

export default function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  console.log(initialItems);

  return (
    <div className="app">
      <Header />

      <Form />

      <PackingList initialItems={initialItems} />

      <Footer />
    </div>
  );
}
