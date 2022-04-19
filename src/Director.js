import React from 'react'

const Director = ()=>{
    return (
        <div className="Director">
        <br />
        <center><h3>Best Directors of Hollywood</h3></center>
        <br />
        <div className="row">
            <div className="col-sm-4 my-2">
                <img className="img-thumbnail mx-auto d-block"  style={{width:"80%",height:"80%"}}  src="https://c.files.bbci.co.uk/111BB/production/_114057007_nolanreuters.jpg" alt="img"/><center><h5>Christopher Nolan</h5></center> 
            </div>
            <div className="col-sm-4 my-2">
                <img className="img-thumbnail mx-auto d-block"  style={{width:"80%",height:"80%"}}  src="https://thecinemaholic.com/wp-content/uploads/2016/11/Martin-Scorsese-Oscar-3.jpg"  alt="img"/><center><h5>Martin Scorsese</h5></center>
            </div>
            <div className="col-sm-4 my-2">
                <img className="img-thumbnail mx-auto d-block"  style={{width:"80%",height:"80%"}}  src="https://filmdaily.co/wp-content/uploads/2020/11/david-fincher-lede.jpg"  alt="img"/><center><h5>David Fincher</h5></center>
            </div>
        </div>
        <div className="row" >
            <div className="col-sm-4 my-2">
                <img className="img-thumbnail mx-auto d-block"  style={{width:"80%",height:"80%"}}  src="https://torontofilmcritics.com/wp-content/uploads/2017/02/denis.jpg"  alt="img"/><center><h5>Denis Villeneuve</h5></center>
            </div>
            <div className="col-sm-4 my-2">
                <img className="img-thumbnail mx-auto d-block"  style={{width:"80%",height:"80%"}}  src="https://media.vanityfair.com/photos/5ad75632a342ec2552ce86bf/3:2/w_1995,h_1330,c_limit/steven-spielberg.jpg"  alt="img"/><center><h5>Steven Spielberg</h5></center>
            </div>
            <div className="col-sm-4 my-2">
                <img className="img-thumbnail mx-auto d-block"  style={{width:"80%",height:"80%"}}  src="https://deadline.com/wp-content/uploads/2017/07/james_cameron.jpg"  alt="img"/><center><h5>James Cameron</h5></center>
            </div>
        </div>
        </div>
    );
}

export default Director;