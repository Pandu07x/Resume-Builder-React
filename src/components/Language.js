import React,{useState} from "react";
import Modal from "@material-ui/core/Modal";
import { FaArrowRight,FaCode } from 'react-icons/fa';

function Language() {
    const ini={
        "language":"",
        "pro":""
    }
    const [skills,setSkills]=useState([])
    const [text,setText]=useState("")
    const [text2,setText2]=useState("")
    const [open,setOpen]=useState(false)

    const add=()=>{
        const temp=skills
        const data={
            "language":text,
            "pro":text2

        }
        temp.push(data)
        setSkills(temp)
        setText("")
        setText2("")
        setOpen(false)
    }
    const handleopen=()=>{
        setOpen(true)
    }
    const handlclose=()=>{
        setOpen(false)
    }
    const deletes=(index)=>{
        const temp=skills.filter((item,i)=>i!==index)
        setSkills(temp)
    }
    return(
        <div>
            <h1 style={{

                textDecoration:"underline"
            }} align="center">Language&nbsp; <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleopen}>Open</button></h1>
            <div>
                <Modal
                    onClose={handlclose}
                    open={open}
                    style={{
                        position: 'absolute',

                        boxShadow: '2px solid black',
                        height:100,
                        alignItems:"center",
                        width: 240,
                        marginTop:90,
                        marginBottom: 50,
                        marginRight: 300,
                        marginLeft: 800,

                    }}
                >
                    <div>
                        <h2 style={{
                            color:"white"
                        }}>Enter Known your Know Language</h2>
                        <p style={{
                            color:"white"
                        }} align="center">Known Language</p>
                        <input type="text" className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}}/><br/>
                        <p style={{
                            color:"white"
                        }} align="center">Proficiency</p>
                        <input type="text" className="form-control" value={text2} onChange={(e)=>{setText2(e.target.value)}}/><br/>




                        <button className="btn btn-outline-info btn-block" onClick={add}>Add</button>
                    </div>
                </Modal>
            </div>
            <div className="container">
                <div>
                    {
                        skills.map((list,index)=>(
                            <div>
                                <h5 style={{
                                    fontSize:"x-large",
                                    marginLeft:100

                                }} onClick={()=>{deletes(index)}} align="center">{list.language}</h5>

                                <h6 style={{ color:"grey",marginLeft:30}} align="left">Proficiency:{list.pro}</h6>
                                <br/>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )

}
export default Language;