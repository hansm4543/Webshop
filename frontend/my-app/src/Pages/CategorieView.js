
import GetAll from '../Components/GetAll';
import GetTech from '../Components/GetTech';
import GetClothes from '../Components/GetClothes';

function CategorieView(){
    const PostID = window.location.href.split("/")[3];
    console.log(PostID);
    if(PostID == "all"){
        return(
        
            <div >
                <h1 >All</h1>
                <GetAll all={true}/>
            </div>
    
        )
    }else if(PostID == "tech"){
        return(
        
            <div >
                <h1 >Tech</h1>
                <GetTech tech={true}/>
            </div>
    
        )
    }else if(PostID == "clothes"){
        return(
        
            <div >
                <h1 >Clothes</h1>
                <GetClothes clothes={true}/>
            </div>
    
        )
    }else{
        return(
        
            <div >
                <h1 >Something went wrong</h1>
            </div>
    
        )
    }
    
}

export default CategorieView;