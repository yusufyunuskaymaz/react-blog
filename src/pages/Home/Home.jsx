import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { deletePost, useFetch } from "../../auth/functions";
import PostDetail from "../../components/PostDetail/PostDetail";
import { UserContext } from "../../context/UserContextProvider";

const Home = () => {
  const navigate = useNavigate()
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
  const readMore = (article)=>{
    navigate("post-detail", {state:article})
  }
  return (
    <div className="container mt-5">
      <h1 className="display-3 text-danger text-center mb-4">Articles</h1>
      <div className="row gap-3">
        {articles.map((article) => {
          const {id,email,content,title,keywords,imgUrl} = article
          return (
            <div className="col" key={id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    {content.length > 150 && content.slice(0,150)+"..."}
                  </p>
                  <p className="card-text text-muted">
                    keywords: {keywords}
                  </p>
                  <p className="card-text text-muted">
                   author: {email}
                  </p>
                  <div className="d-flex justify-content-between">
                  <a  onClick={()=>readMore(article)} className="btn btn-primary">
                    Read More...
                  </a>
                  <a  onClick={()=>handleDelete(id,email)} className="btn btn-danger">
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
