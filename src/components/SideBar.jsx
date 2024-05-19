export default function SideBar(props) {
  const {handleDisplay,data}=props;
  return (
    <div className="sideBar">
      <div onClick={handleDisplay} className="bgOverLay"></div>
      <div className="sideBarContent">
        <h2>{data?.title}</h2>
        <div className="discContainer">
          <p className="discTitle">{data?.date}</p>
          <p className="discInfo">{data?.explanation}</p>
        </div>
        <button onClick={handleDisplay}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
