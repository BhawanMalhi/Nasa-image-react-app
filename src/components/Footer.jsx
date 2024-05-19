export default function Footer(props) {
  const {showModal,handleDisplay,data}=props;
  return (
    <footer>
        <div className="gradi"></div>
      <div>
      <h1>Astronomy Image</h1>
        <h2>{data?.title}</h2>
        
      </div>
      <button onClick={handleDisplay}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
