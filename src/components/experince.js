import React,{useState} from "react";
import Modal from "@material-ui/core/Modal";
import { FaArrowRight,FaBuilding } from 'react-icons/fa';

function Experince() {
    const ini={
        "title":"",
        "company":"",
        "Place":"",
        "time":"",
        "task":""

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
            "title":text,
            "company":text2,
            "Place":text3,
            "time":text4,
            "task":text5
        }
        const temp=program
        temp.push(data)
        setProgram(temp)
        console.log(program)
        setText("")
        setText2("")
        setText3("")
        setText4("")
        setText5("")
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
                            color:"white"
                        }} align="center">Your Experience</h1>
                        <p style={{
                            color:"white"
                        }}>Job Title</p>   <input type="text" className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}}/><br/>
                        <p style={{
                            color:"white"
                        }}> Name of Company</p>  <input type="text" className="form-control" value={text2} onChange={(e)=>{setText2(e.target.value)}}/><br/>
                        <p style={{
                            color:"white"
                        }}>Company Address(only City)</p>  <input type="text" className="form-control" value={text3} onChange={(e)=>{setText3(e.target.value)}}></input><br />
                        <p style={{
                            color:"white"
                        }}>Period of Work( in Years)</p>  <input type="number" className="form-control" value={text4} onChange={(e)=>{setText4(e.target.value)}}/><br />
                        <p style={{
                            color:"white"
                        }}>Your Task (Small Description)</p>  <textarea  className="form-control" value={text5} onChange={(e)=>{setText5(e.target.value)}}/><br />

                        <button className="btn btn-outline-info btn-block" onClick={add}>Click</button>
                    </div>


                </Modal>
            </div>



            <div className="container" >
                <div className="row">
                    <div className="col-sm">
                        <h1 style={{
                            textDecoration:"underline"
                        }}><FaArrowRight />&nbsp;Work Experience <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleopen}>Open</button></h1>
                        <br />
                        <br/>
                        {
                            program.map((list,index)=>(
                                <div>
                                    <h1 key={index} style={{
                                        fontWeight:"Bold",
                                        fontSize:"xx-large",
                                        marginLeft:100

                                    }}  onClick={()=>{deletes(index)}}> {list.title}</h1>
                                    <h3 style={{
                                        fontSize:"large"

                                    }}>Name of Company: {list.company }</h3>

                                    <h6  style={{color:"grey", marginLeft:10}}>Worked Period: {list.time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City: {list.Place }</h6>
                                    <h6 align="left">Your Role <br />{list.task}</h6>
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
export default Experince;