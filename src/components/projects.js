import React,{useState} from "react";
import Modal from "@material-ui/core/Modal";
import { FaGithub,FaBookmark } from 'react-icons/fa';

function Project() {
    const ini={
        "name":"",
        "date":"",
        "desc":"",


    }
    const [program,setProgram]=useState([])
    const [open,setOpen]=useState(false)
    const [text,setText]=useState("")
    const [text2,setText2]=useState("")
    const [text3,setText3]=useState("")
    const [text4,setText4]=useState("")
    const [text5,setText5]=useState("")

    const handleopen=()=>{
        setOpen(true)

    }
    const handleclose=()=>{
        setOpen(false)
    }

    const add=()=>{
        const data={
            "name":text,
            "date":text2,
            "desc":text3,

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
                        <h1 style={{
                            color:"white",

                        }} align="center" >Personal Projects</h1>
                        <p style={{
                            color:"white"
                        }}>Project Name</p>   <input type="text" className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}}/><br/>


                        <p style={{
                            color:"white"
                        }}>Time Period(in months) </p>  <input type="number" className="form-control" value={text2} onChange={(e)=>{setText2(e.target.value)}}/><br />
                        <p style={{
                            color:"white"
                        }}>Your Task  Description</p>  <textarea  className="form-control" value={text3} onChange={(e)=>{setText3(e.target.value)}}/><br />

                        <button className="btn btn-outline-info btn-block" onClick={add}>Click</button>
                    </div>


                </Modal>
            </div>



            <div className="container" >
                <div className="row">
                    <div className="col-sm">
                        <h1 style={{textDecoration:"underline"}}> <FaGithub /> &nbsp;Personal Projects <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleopen}>Open</button></h1>
                        <br />

                        {
                            program.map((list,index)=>(
                                <div>
                                    <h1 key={index} style={{
                                        fontWeight:"Bold",
                                        fontSize:"xx-large",
                                        marginLeft:100


                                    }}  onClick={()=>{deletes(index)}}> {list.name}</h1>


                                    <h6 style={{color:"grey",marginLeft:300}}>Time Period: {list.date} Months</h6>
                                    <h6 align="left">Description: <br/>{list.desc}</h6>
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
export default Project;