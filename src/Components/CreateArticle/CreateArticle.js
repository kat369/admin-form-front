import React, { useState } from "react";
import CreateArticleForm1 from "./CreateArticleForm1";
import CreateArticleForm2 from "./CreateArticleForm2";
import CreateArticleForm3 from "./CreateArticleForm3";
import CreateArticleForm4 from "./CreateArticleForm4";

function CreateArticle() {
  const [page, setpage] = useState(0);
  const [data, setdata] = useState({});

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <CreateArticleForm1 setdata={setdata} data={data} setpage={setpage} />
      );
    } else if (page === 1) {
      return (
        <CreateArticleForm2 setdata={setdata} data={data} setpage={setpage} />
      );
    } else if (page === 2) {
      return (
        <CreateArticleForm3 setdata={setdata} data={data} setpage={setpage} />
      );
    } else if (page === 3) {
      return (
        <CreateArticleForm4 setdata={setdata} data={data} setpage={setpage} />
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="inpform">
          {pageDisplay()}</div>
      </div>
    </>
  );
}

export default CreateArticle;
