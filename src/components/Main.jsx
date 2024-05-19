export default function Main(props)
{
    const{data}=props;
    
            return(
                <div className="imgContainer">
                    <img src={data.hdurl} alt={data.title || 'picture image'} className="bigImage"/>
                </div>
              ) 
        
        // else
        // {
        //     return(
        //         <div className="imgContainer">
        //              <iframe width="100%" height="100%" src={data.url}   allowFullScreen></iframe>   
        //         </div>
        //       ) 
        // }
    
}