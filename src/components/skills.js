import React,{useState} from "react";
import Modal from "@material-ui/core/Modal";
import {FaBookmark} from "react-icons/fa";


function Skills() {
    const [skills,setSkills]=useState([])
    const [text,setText]=useState("")
    const [open,setOpen]=useState(false)

    const add=()=>{
        const temp=skills
        temp.push(text)
        setSkills(temp)
        setText("")
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
        <div style={{
            fontSize:"small"
        }}>
            <h1 style={{

                textDecoration:"underline"

            }} align="center"><FaBookmark />&nbsp;Skills <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleopen}>Open</button></h1>
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
                        }}>Enter your Technical skills</h2>
                        <p style={{
                            color:"white"
                        }} align="center">Your Skill</p>
                        <input type="text" className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}}/><br/>
                        <button className="btn btn-outline-info btn-block" onClick={add}>Add</button>
                    </div>
                </Modal>
            </div>
            <div className="container">
                <div>
                    {
                        skills.map((list,index)=>(
                            <div>
                                <button className="btn btn-outline-dark" style={{
                                    fontSize:"medium",
                                    marginLeft:100

                                }} onClick={()=>{deletes(index)}}>{list}<br/></button>
                                <br/>

                                &nbsp;



                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )

}
export default Skills;