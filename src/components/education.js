import React,{useState} from "react";
import Modal from "@material-ui/core/Modal";
import { FaArrowRight,FaBookmark,FaBook } from 'react-icons/fa';

function Education() {
    const ini={
        "Program":"",
        "Institute":"",
        "CompletionYear":"",
        "Grade":"",

    }
    const [program,setProgram]=useState([])
    const [open,setOpen]=useState(false)
    const [text,setText]=useState("")
    const [text2,setText2]=useState("")
    const [text3,setText3]=useState("")
    const [text4,setText4]=useState("")

    const handleopen=()=>{
        setOpen(true)

    }
    const handleclose=()=>{
        setOpen(false)
    }

    const add=()=>{
        const data={
            "Program":text,
            "Institute":text2,
            "CompletionYear":text3,
            "Grade":text4,
        }
        const temp=program
        temp.push(data)
        setProgram(temp)
        console.log(program)
        setText("")
        setText2("")
        setText3("")
        setText4("")
        setOpen(false)

    }
    const deletes=(index)=>{
        const temp=program.filter((item,i)=>i!==index)
        setProgram(temp)
    }

    return(
        <div>
            <div className="container-fluid text-center" style={{
                backgroundColor:"white"
            }}>
                <Modal
                    onClose={handleclose}
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
                     <p style={{
                         color:"white"
                     }}>Study Program</p>   <input type="text" className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}}/><br/>
                        <p style={{
                            color:"white"
                        }}> Name of Institute</p>  <input type="text" className="form-control" value={text2} onChange={(e)=>{setText2(e.target.value)}}/><br/>
                        <p style={{
                            color:"white"
                        }}>Completion Year</p>  <input type="text" className="form-control" value={text3} onChange={(e)=>{setText3(e.target.value)}}></input><br />
                        <p style={{
                            color:"white"
                        }}>Grade/Percentage</p>  <input type="email" className="form-control" value={text4} onChange={(e)=>{setText4(e.target.value)}}/><br />

                        <button className="btn btn-outline-info btn-block" onClick={add}>Click</button>
                    </div>


                </Modal>
            </div>



            <div className="container" >
                <div className="row">
                    <div className="col-sm">
                        <h1 style={{
                            textDecoration:"underline"
                        }}><FaArrowRight />&nbsp;Education <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleopen}>Open</button></h1>
                        <br />
                        <br/>
                {
                    program.map((list,index)=>(
                        <div>
                        <h1 key={index} style={{
                            fontWeight:"Bold",
                            fontSize:"xx-large",
                            marginLeft:70

                        }}  onClick={()=>(deletes(index))}>Program: {list.Program}</h1>
                            <br/>
                        <h3 style={{
                            fontSize:"large"

                        }}>Name of Institue: {list.Institute }</h3>

                            <h6 align="left" style={{color:"grey"}}>Completion Month & Year: {list.CompletionYear}</h6>
                            <h6 align="left">Grade/Percentage: {list.Grade }</h6>
                        <br/>
                        </div>

                    ))
                }

            </div>
                </div>
            </div>
        </div>
    )


}
export default Education;