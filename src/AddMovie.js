import React,{Component} from 'react';

class AddMovie extends Component{
    state={
        obj:null,
        name:null
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let name=this.state.name;
        let url = `https://api.themoviedb.org/3/search/movie?api_key=9e8256022f506201fab82f246c320669&query=${name}&include_adult=false`;
        fetch(url).then((response)=>{
            if(response.status>=200 && response.status<400){
                return response.json();
            }
            else{
                console.log("Error while retreiving json !!!");
            }
        }).then((data)=>{
            this.setState({
                obj:data,
                name: ''
            });
            this.props.addMovie(this.state.obj.results[0],'https://image.tmdb.org/t/p/w200');
        }).catch((err)=>{
            console.log("an error has occured",err);
        });

    }
    handleChange =(e)=>{
        this.setState({
            name:e.target.value
        });
    }
    render(){
        return(
            <center>
                <br />
                <form className="form-inline mx-auto d-block" onSubmit={this.handleSubmit}>
                    <div className="form-group mx-auto d-block mb-3">
                        <label htmlFor="name" className="text-light"><b>Search: </b></label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Any Movie Name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
                <br />
            </center>
        )
    }
}
export default AddMovie;