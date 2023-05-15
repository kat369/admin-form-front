import React, { useState } from 'react'

function EditArticleForm1({ setdata, data, setpage}) {
    const [articlefocus, setarticlefocus] = useState(false);
    const [headingfocus, setheadingfocus] = useState(false);
    const [authorfocus, setauthorfocus] = useState(false);
    const [volumefocus, setvolumefocus] = useState(false);
    const [issuefocus, setissuefocus] = useState(false);
    const [abstractfocus, setabstractfocus] = useState(false);
    
    const focuschange = ()=>{
      setarticlefocus(true)
      setheadingfocus(true)
      setauthorfocus(true)
      setvolumefocus(true)
      setissuefocus(true)
      setabstractfocus(true)
    }
    const handlesubmit = async (e) => {
      e.preventDefault();
      setpage((currentpage) => currentpage + 1);
      
    };
  
    return (
      <>
      <div className='head'>Edit Article Page(1/4)</div>
        <form onSubmit={handlesubmit}>
          <div className="frm-group">
            <label>Article_ID :</label>
            <input
              type="text"
              name="article"
              value={data.article || ""}
              required
              onChange={(e) => {
                setdata({ ...data, [e.target.name]: e.target.value });
              }}
              onBlur={() => {
                setarticlefocus(true);
              }}
              focused={articlefocus.toString()}
            ></input>
            <span>required</span>
          </div>
          <div className="frm-group">
            <label>Heading :</label>
            <input
              type="text"
              name="heading"
              value={data.heading || ""}
              required
              onChange={(e) => {
                setdata({ ...data, [e.target.name]: e.target.value });
              }}
              onBlur={() => {
                setheadingfocus(true);
              }}
              focused={headingfocus.toString()}
            ></input>
            <span>required</span>
          </div>
          
  
          <div className="frm-group">
            <label>Volume :</label>
            <select
              name="volume"
              value={data.volume || ""}
              onChange={(e) => {
                setdata({ ...data, [e.target.name]: e.target.value });
              }}
              onBlur={() => {
                setvolumefocus(true);
              }}
              focused={volumefocus.toString()}
              required
            >
              <option name=""></option>
              <option name="Volume-1">Volume-1</option>
              <option name="Volume-2">Volume-2</option>
              <option name="Volume-3">Volume-3</option>
              <option name="Volume-4">Volume-4</option>
              <option name="Volume-5">Volume-5</option>
              <option name="Volume-6">Volume-6</option>
              <option name="Volume-7">Volume-7</option>
              <option name="Volume-8">Volume-8</option>
              <option name="Volume-9">Volume-9</option>
              <option name="Volume-10">Volume-10</option>
            </select>
            <span>required</span>
          </div>
  
          <div className="frm-group">
            <label>Issue :</label>
            <select
            name="issue"
            value={data.issue || ""}
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setissuefocus(true);
            }}
            focused={issuefocus.toString()}
            required
            >
              <option name=""></option>
              <option name="ISSUE-1">ISSUE-1</option>
              <option name="ISSUE-2">ISSUE-2</option>
              <option name="ISSUE-3">ISSUE-3</option>
              <option name="ISSUE-4">ISSUE-4</option>
              <option name="ISSUE-5">ISSUE-5</option>
              <option name="ISSUE-6">ISSUE-6</option>
              <option name="ISSUE-7">ISSUE-7</option>
              <option name="ISSUE-8">ISSUE-8</option>
              <option name="ISSUE-9">ISSUE-9</option>
              <option name="ISSUE-10">ISSUE-10</option>
            </select>
            <span>required</span>
          </div>
          <div className="frm-group">
            <label>Authors :</label>
            <input
              type="text"
              name="authors"
              value={data.authors || ""}
              required
              onChange={(e) => {
                setdata({ ...data, [e.target.name]: e.target.value });
              }}
              onBlur={() => {
                setauthorfocus(true);
              }}
              focused={authorfocus.toString()}
            ></input>
            <span>required</span>
          </div>
          <div className="frm-group">
            <label>Abstract :</label>
            <textarea
              rows="5" 
              name="abstract"
              value={data.abstract || ""}
              required
              onChange={(e) => {
                setdata({ ...data, [e.target.name]: e.target.value });
              }}
              onBlur={() => {
                setabstractfocus(true);
              }}
              focused={abstractfocus.toString()}
            ></textarea>
            <span>required</span>
          </div>
          <div className="buttonx">
            <button className="subx" onClick={focuschange}>next</button>
          </div>
        </form>
      </>
    );
  }

export default EditArticleForm1