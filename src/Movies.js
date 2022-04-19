import React from 'react';

const Movies = ({obj,updateLike,url})=>{
    obj.sort((movie1,movie2)=>{
        return(movie2.mrating-movie1.mrating);
    });
    let MovieList = obj.map((movie)=>{
        return (
            <div className="col-sm-4 d-flex justify-content-center" id={movie.id} key={movie.id}>
                    <center style={{cursor: "pointer"}}>
                        <div className="text-light" data-toggle="modal" data-target={"#m"+movie.id}>
                            <img className="img-thumbnail" src={url.concat(movie.poster_path)} alt="img" />
                            <div>Name: {movie.title}</div>
                            <div>Release-date: {movie.release_date}</div>
                            <div>Likes: {movie.mrating}</div>
                        </div>
                        <button className="btn btn-warning my-1 like" onClick={()=>{updateLike(movie.id);}}> <b>Like</b> </button>
                    </center>
                <div className="modal" id={"m"+movie.id}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    <center>
                                        {movie.title}
                                    </center>
                                </h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img className="img-thumbnail" src={"https://image.tmdb.org/t/p/w154"+movie.poster_path} alt="img" />
                                    </div>
                                    <div className="col-sm">
                                        <div>
                                            <h6>Name: {movie.title}</h6>
                                        </div>
                                        <div>
                                            <h6>Release-date: {movie.release_date}</h6>
                                        </div>
                                        <div>
                                            <h6>Synopsis: {movie.overview}</h6>
                                        </div>
                                        <div>
                                            <h6>Likes: {movie.mrating}</h6>
                                        </div>
                                        <button className="btn btn-warning my-1 like" onClick={()=>{updateLike(movie.id)}}> <b>Like</b> </button>
                                        <button className="btn btn-success my-1" style={{float: "right"}} onClick={()=>{window.open(`http://google.com/search?q=${movie.title}+movie`, "_blank")}}> <b>Watch Online</b> </button>
                                        </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    })
    let chunk =3,i,j;
    let divideArray=[];
    for (i=0,j=MovieList.length; i<j; i+=chunk) {
        divideArray.push(MovieList.slice(i,i+chunk));
    }
    let MovieListBootstrap = divideArray.map((movie)=>{
        return (
            <div className="row" key={movie.title+"c"}>
                {[...movie]}
            </div>
        )
    })
    return(
        <div className="movie-list">
            {MovieListBootstrap}
        </div>
    )
}
export default Movies;