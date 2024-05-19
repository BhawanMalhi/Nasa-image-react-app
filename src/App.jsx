import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  
  const [showModal, setShowModel] = useState(false);
  const [fetchedData,setFetchedData]=useState(null);
  const [loading,setLoading]=useState(false);
  function handleDisplay() {
    setShowModel(!showModal);
  }

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
        const today = (new Date()).toDateString();
        const localKey = `NASA-${today}`;
        if(localStorage.getItem(localKey))
          {
            const apiData = JSON.parse(localStorage.getItem(localKey));
            setFetchedData(apiData);
            console.log(apiData);
            console.log("fetched from cached");
            return;
          }
          localStorage.clear();
        try{
          const res = await fetch(url);
          const data = await res.json();
          localStorage.setItem(localKey,JSON.stringify(data));
          console.log("fetched from API");
          console.log(data);
          setFetchedData(data);
         
        }
        catch(e)
        {
          console.log(e.message);
        }
    }
    fetchApiData();
  }, []);

  return (
    <>
      {fetchedData?(<Main data={fetchedData}/>):(
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data={fetchedData} handleDisplay={handleDisplay} />}
      {fetchedData && (<Footer data={fetchedData} handleDisplay={handleDisplay} />)}

      
    </>
  );
}

export default App;
