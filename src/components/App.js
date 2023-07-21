import { useEffect, useState } from "react";

function App(){
    const[ image ,setImage] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {setImage(data.message)})
    },[]);
    function renderContent() {
        if (!image) {
            return <p>Loading...</p>;
        }
        return <img src={image} alt="A Random Dog" />;
    }

    return (
        <div>
            {renderContent()}
        </div>
    );
   
}
export default App;