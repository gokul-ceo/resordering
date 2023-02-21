import React from "react";
import next from './nexticon.png'
import previous from './previousicon.png'
import idly from './idly.png'
import poori from './poori.png'
import vadai from './vadai.png'
function Recommendeddiv(props){
    return <>
      <div className="container">
    <h3>Recommended for you</h3>
    <div style={{'overflow':'auto'}} className="container p-2  ">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
      
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <div style={{'border':'1px solid grey','width':'350px'}} className="my-1 mx-auto shadow shadow-sm p-2 d-flex">
        <div style={{'width':'170px'}} className="mt-4 d-flex">
        <img style={{'width':'70px','height':'70px','padding':'5px','borderRadius':'50%','boxShadow':'2px 2px 20px grey'}} src={idly} alt='recommends fro you'/>
        <img style={{'width':'70px','height':'70px','padding':'5px','position':'relative','right':"1.2rem",'borderRadius':'50%','boxShadow':'2px 2px 20px grey','backgroundColor':'white'}} src={poori} alt='recommends fro you'/>
        <img style={{'width':'70px','height':'70px','padding':'5px','position':'relative','right':"3rem",'borderRadius':'50%','boxShadow':'2px 2px 20px grey','backgroundColor':'white'}} src={vadai} alt='recommends fro you'/>
        </div>
      
          <div className="mx-1 text-center">
          <h6>Morning Starter combo </h6>
          <span style={{'display':'block'}}>2 idly,1 poori & vadai</span>
          <button style={{'border':'none','backgroundColor':'green','color':"white",'fontWeight':'bold','margin':'10px','borderRadius':'7px','width':'100px'}}>Order now</button>
          </div>
        
      </div>
    </div>
    <div className="carousel-item">
         <div style={{'border':'1px solid grey','width':'350px'}} className="my-1 mx-auto shadow shadow-sm p-2 d-flex">
        <div style={{'width':'170px'}} className="mt-4 d-flex">
        <img style={{'width':'70px','height':'70px','padding':'5px','borderRadius':'50%','boxShadow':'2px 2px 20px grey'}} src={idly} alt='recommends fro you'/>
        <img style={{'width':'70px','height':'70px','padding':'5px','position':'relative','right':"1.2rem",'borderRadius':'50%','boxShadow':'2px 2px 20px grey','backgroundColor':'white'}} src={poori} alt='recommends fro you'/>
        <img style={{'width':'70px','height':'70px','padding':'5px','position':'relative','right':"3rem",'borderRadius':'50%','boxShadow':'2px 2px 20px grey','backgroundColor':'white'}} src={vadai} alt='recommends fro you'/>
        </div>
      
          <div className="mx-1 text-center">
          <h6>Morning Starter combo </h6>
          <span style={{'display':'block'}}>2 idly,1 poori & vadai</span>
          <button style={{'border':'none','backgroundColor':'green','color':"white",'fontWeight':'bold','margin':'10px','borderRadius':'7px','width':'100px'}}>Order now</button>
          </div>
        
      </div>  
    </div>
    <div className="carousel-item">
        <div style={{'border':'1px solid grey','width':'350px'}} className="my-1 mx-auto shadow shadow-sm p-2 d-flex">
        <div style={{'width':'170px'}} className="mt-4 d-flex">
        <img style={{'width':'70px','height':'70px','padding':'5px','borderRadius':'50%','boxShadow':'2px 2px 20px grey'}} src={idly} alt='recommends fro you'/>
        <img style={{'width':'70px','height':'70px','padding':'5px','position':'relative','right':"1.2rem",'borderRadius':'50%','boxShadow':'2px 2px 20px grey','backgroundColor':'white'}} src={poori} alt='recommends fro you'/>
        <img style={{'width':'70px','height':'70px','padding':'5px','position':'relative','right':"3rem",'borderRadius':'50%','boxShadow':'2px 2px 20px grey','backgroundColor':'white'}} src={vadai} alt='recommends fro you'/>
        </div>
      
          <div className="mx-1 text-center">
          <h6>Morning Starter combo </h6>
          <span style={{'display':'block'}}>1 masala dosa & tea</span>
          <button style={{'border':'none','backgroundColor':'green','color':"white",'fontWeight':'bold','margin':'10px','borderRadius':'7px','width':'100px'}}>Order now</button>
          </div>
        
      </div>

    </div>
  </div>

  


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  </button>
</div>
    </div>
    
    </div>
    </>

}
export default Recommendeddiv;