import React,{useState} from "react";
import Modal from "@material-ui/core/Modal";
import { FaArrowRight,FaCode } from 'react-icons/fa';

function Technical() {
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
        <div>
            <h1 style={{

                textDecoration:"underline"
            }} align="center"><FaCode />&nbsp;Technical Skills&nbsp; <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleopen}>Open</button></h1>
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
                        }} align="center">Your Technical Language</p>
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
                                <h5 style={{
                                    fontSize:"x-large",
                                    marginLeft:100

                                }} onClick={()=>{deletes(index)}}>{list}</h5>
                                <br/>



                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )

}
export default Technical;