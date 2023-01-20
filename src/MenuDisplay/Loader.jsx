import loading from './loading.jfif'
function Loader(){
    return <>
      <div  className="container-sm mb-4 border   my-2 col">
  <div className="row">
    <div className="container-sm my-2 col">
    <img style={{'width':'80px','height':'80px'}} src={loading} className="card-img-top"  alt="..."/>
    <h6 className="w-50 placeholder-glow my-2"><span className="placeholder col-7"></span></h6>
    <div style={{width:'70px','position':'relative','bottom':'7.5rem','left':'6rem','borderRadius':'2px'}} className="container ms-1 d-flex">
      <h6 className="placeholder-glow" style={{'width':'70px','height':'12px','margin':"3px 0 0 -8px"}} ><span className="placeholder col-8"></span></h6>
    </div>
    </div>
    <div className="container-sm col text-end">
    <span className="w-50 placeholder-glow my-2"><span className="placeholder col-7"></span></span>
    <span  className="w-25 placeholder-glow my-3"><span style={{'height':'20px','borderRadius':'15px'}} className="placeholder my-2  col-6"></span></span>
    <span className="w-50 placeholder-glow my-2"><span style={{'height':'30px','borderRadius':'8px'}} className="placeholder my-3 bg-success col-7"></span></span>


    </div>
   </div>
  </div>
    </>
}
export default Loader;