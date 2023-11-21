export default function Loader(props: Props) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>{props.loadingMessage ?? "Loading..."}</p>
    </div>
  );
}

interface Props {
  loadingMessage?: string;
}
