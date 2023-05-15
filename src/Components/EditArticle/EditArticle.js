import React, { useEffect, useState } from "react";
import EditArticleForm1 from "./EditArticleForm1";
import EditArticleForm2 from "./EditArticleForm2";
import EditArticleForm3 from "./EditArticleForm3";
import EditArticleForm4 from "./EditArticleForm4";
import axios from "axios";

function EditArticle() {
  const [page, setpage] = useState(0);
  const [data, setdata] = useState({});
  const [dbdata, setdbdata] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    try {
      let articledata = await axios.get(`http://localhost:3000/file?id=${"646217fac5181c480cae378f"}`);

      setdata(articledata.data);
      
      setdbdata(articledata.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <EditArticleForm1 setdata={setdata} data={data} dbdata={dbdata} setpage={setpage}  />
      );
    } else if (page === 1) {
      return (
        <EditArticleForm2 setdata={setdata} data={data} dbdata={dbdata} setpage={setpage} />
      );
    } else if (page === 2) {
      return (
        <EditArticleForm3 setdata={setdata} data={data} dbdata={dbdata} setpage={setpage} />
      );
    } else if (page === 3) {
      return (
        <EditArticleForm4 setdata={setdata} data={data} dbdata={dbdata} setpage={setpage} loadData = {loadData}/>
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="inpform">{pageDisplay()}</div>
      </div>
    </>
  );
}

export default EditArticle;
