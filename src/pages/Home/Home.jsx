import React from "react";
import { useContext } from "react";
import { deletePost, useFetch } from "../../auth/functions";
import { UserContext } from "../../context/UserContextProvider";

const Home = () => {
  const {currentUser} = useContext(UserContext)
  const articles = useFetch();
  const handleDelete = (id,email)=>{
    if(currentUser.email == email){
      if(window.confirm("The article will be deleted")){
        deletePost(id)
      }
    }else if(currentUser.email != email){
      alert("You don't have permission")
    }
  }
  return (
    <div className="container mt-5">
      <div className="row gap-3">
        {articles.map((article) => {
          const {id,email,content,title,keywords,imgUrl} = article
          return (
            <div className="col  ">
              <div className="card" style={{ width: "18rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    {content.length > 150 && content.slice(0,150)+"..."}
                  </p>
                  <p className="card-text">
                    {keywords}
                  </p>
                  <p className="card-text">
                   author: {email}
                  </p>
                  <div className="d-flex justify-content-between">
                  <a href="#" className="btn btn-primary">
                    Read More...
                  </a>
                  <a href="#" onClick={()=>handleDelete(id,email)} className="btn btn-danger">
                    Delete
                  </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
