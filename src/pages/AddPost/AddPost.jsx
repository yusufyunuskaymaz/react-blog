import React, { useState } from "react";
import { useContext } from "react";
import postBlog from "../../auth/functions";
import {UserContext} from "../../context/UserContextProvider";

const AddPost = () => {
  const {currentUser} = useContext(UserContext)
  const [title, setTitle] = useState()
  const [imgUrl, setImgUrl] = useState()
  const [keywords, setKeywords] = useState()
  const [content, setContent] = useState()
  const handleSubmit = ()=>{
    if(!title || !imgUrl || !keywords || !content){
      alert("Please fill all inputs")
    }else{
      postBlog(title,imgUrl,keywords,content, currentUser)
    }

  }
  return (
    <div className="container mt-5 w-50">
      {title}
      {imgUrl}
      {keywords}
      {content}
      <h1 className="display-6 text-center text-danger">Share A New Article</h1>
      <div className="row">
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Blog Title"
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Image Url
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Url"
              onChange={(e)=>setImgUrl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Keywords
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="happiness, childhood, family"
              onChange={(e)=>setKeywords(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              onChange={(e)=>setContent(e.target.value)}
            />
          </div>
          <div className="text-center">
          <button onClick={()=>handleSubmit()} type="submit" className="btn btn-primary">
            Share
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
