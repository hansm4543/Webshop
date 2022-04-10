
import GetAll from '../Components/GetAll';
import GetTech from '../Components/GetTech';
import GetClothes from '../Components/GetClothes';
import NavBar from '../Components/NavBar';
import './CategorieView.css';

function CategorieView(){
    const PostID = window.location.href.split("/")[3];
    console.log(PostID);
    if(PostID == "all"){
        return(
        
            <div >
                <NavBar/>
                <h1 >All products</h1>
                <div>
                    <GetAll all={true}/>
                </div>
            </div>
    
        )
    }else if(PostID == "tech"){
        return(
        
            <div >
                <NavBar/>
                <h1 >Tech products</h1>
                <div >
                    <GetTech tech={true}/>
                </div>
            </div>
    
        )
    }else if(PostID == "clothes"){
        return(
        
            <div >
                <NavBar/>
                <h1 >Clothes</h1>
                <div >
                    <GetClothes clothes={true}/>
                </div>
            </div>
    
        )
    }else{
        return(
            
            <div >
                <NavBar/>
                <h1 >Something went wrong</h1>
            </div>
    
        )
    }
    
}

export default CategorieView;