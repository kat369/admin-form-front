import React, { useState } from 'react'

function EditArticleForm2({ setdata, data, setpage }) {
  const [keyfocus, setkeyfocus] = useState(false);
  const [psfocus, setpsfocus] = useState(false);
  const [pefocus, setpefocus] = useState(false);
  const [fromfocus, setfromfocus] = useState(false);
  const [tofocus, settofocus] = useState(false);
  const [yearfocus, setyearfocus] = useState(false);


  const focuschange = ()=>{
    setkeyfocus(true)
    setpsfocus(true)
    setpefocus(true)
    setfromfocus(true)
    settofocus(true)
    setyearfocus(true)
      
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    setpage((currentpage) => currentpage + 1);
    
  };
  return (
    <>
    <div className='head'>Edit Article Page(2/4)</div>
      <form onSubmit={handlesubmit}>
        <div className="frm-group">
          <label>Key Words :</label>
          <input
            type="text"
            name="keywords"
            value={data.keywords || ""}
            required
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setkeyfocus(true);
            }}
            focused={keyfocus.toString()}
          ></input>
          <span>required</span>
        </div>
        <div className="frm-group">
          <label>Page Start :</label>
          <input
            type="number"
            name="pstart"
            value={data.pstart || ""}
            required
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setpsfocus(true);
            }}
            focused={psfocus.toString()}
          ></input>
          <span>required</span>
        </div>

        <div className="frm-group">
          <label>Page End :</label>
          <input
            type="number"
            name="pend"
            value={data.pend || ""}
            required
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setpefocus(true);
            }}
            focused={pefocus.toString()}
          ></input>
          <span>required</span>
        </div>

        <div className="frm-group">
          <label>From :</label>
          <select
            name="from"
            value={data.from || ""}
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setfromfocus(true);
            }}
            focused={fromfocus.toString()}
            required
          >
            <option name=""></option>
            <option name="jan">January</option>
            <option name="feb">Febraury</option>
            <option name="mar">march</option>
            <option name="april">April</option>
            <option name="may">May</option>
            <option name="june">June</option>
            <option name="july">July</option>
            <option name="aug">August</option>
            <option name="sep">September</option>
            <option name="oct">October</option>
            <option name="nov">November</option>
            <option name="dec">December</option>
          </select>
          <span>required</span>
        </div>

        <div className="frm-group">
          <label>To :</label>
          <select
            name="to"
            value={data.to || ""}
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              settofocus(true);
            }}
            focused={tofocus.toString()}
            required
          >
            <option name=""></option>
            <option name="jan">January</option>
            <option name="feb">Febraury</option>
            <option name="mar">march</option>
            <option name="april">April</option>
            <option name="may">May</option>
            <option name="june">June</option>
            <option name="july">July</option>
            <option name="aug">August</option>
            <option name="sep">September</option>
            <option name="oct">October</option>
            <option name="nov">November</option>
            <option name="dec">December</option>
          </select>
          <span>required</span>
        </div>

        <div className="frm-group">
          <label>Year :</label>
          <select
            name="year"
            value={data.year || ""}
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
            onBlur={() => {
              setyearfocus(true);
            }}
            focused={yearfocus.toString()}
            required
          >
            <option name=""></option>
            <option name="2023">2023</option>
            <option name="2022">2022</option>
            <option name="2021">2021</option>
            <option name="2020">2020</option>
            <option name="2019">2019</option>
            <option name="2018">2018</option>
            <option name="2017">2017</option>
            <option name="2016">2016</option>
            <option name="2015">2015</option>
            <option name="2014">2014</option>
          </select>
          <span>required</span>
        </div>

        <div className="buttons">
          <button
            className="sub"
            onClick={() => {
              setpage((currentpage) => currentpage - 1);
            }}
          >
            back
          </button>
          <button className="sub" onClick={focuschange}>next</button>
        </div>
      </form>
    </>
  );
}


export default EditArticleForm2