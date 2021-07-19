//import logo from './logo.svg';
import { Component } from 'react';
import React from 'react';
import './App.css';
import './Dashboard/Dashboard.css';
import Signup from './Signup/Signup';
import Signin from './Signup/Signin';
import Navbar from './Navbar/Navbar';
import Input from './Dashboard/Input';
import Post from './Dashboard/Post';




class  App extends Component{
  state = {
    posts:[
      { user:"Fakebook Team" , message:"Thank You for using fakebbok , now You can share your posts here" , like:0 , dislike:0}
    ]
  }
  postAddHandler = () => {
    const postTemp =this.state.posts;
    console.log(postTemp);
    postTemp.splice(0,0,{user:"Anonymous User",message:document.getElementById("inpbox").value,like:1,dislike:1});
    document.getElementById("inpbox").value="";
    this.setState({posts:postTemp})
  }

  render(){
   let allposts=(
      <div>
        {this.state.posts.map(
          (post)=>{
            return <Post
            user ={post.user} >{post.message}</Post>
          }
        )}
      </div>
    );
    return (
      <div className="App">
        <Navbar/>
        <Signup/>
        <Signin/>
        <br/><br/><br/><br/>
        <h1>FAKEBOOK</h1>
        <div className="Dashboard">
            <Input funct={this.postAddHandler }/>
            {allposts}
        </div>
      
     </div>
  );
  }
}

export default App;

