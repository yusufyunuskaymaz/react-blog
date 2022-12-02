import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PostDetail = () => {
    const navigate = useNavigate()
  const { state: article } = useLocation();
  const { id, email, content, title, keywords, imgUrl } = article;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="text-center">
            <h1 className="display-5 text-danger my-4">{title}</h1>
            <img src={imgUrl} alt={keywords} />
            <p className="text-muted mt-2">Author: {email}</p>
          </div>
          <p className="text-muted fs-3 text-left">{content}</p>
        </div>
      </div>
      <div className="text-center mb-5">
        <div className="btn btn-success me-5" onClick={()=>navigate("/")}>Go Home</div>
        <div className="btn btn-warning" onClick={()=>navigate(-1)}>Go Back</div>
      </div>
    </div>
  );
};

export default PostDetail;
