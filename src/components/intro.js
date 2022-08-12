import React,{useState} from "react";
import Modal from "@material-ui/core/Modal/Modal";
import { FaMobile,FaEnvelope,FaGithub,FaArrowAltCircleDown } from 'react-icons/fa';



function Intro() {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [text,setText]=useState("")
    const [text2,setText2]=useState("")
    const [text3,setText3]=useState("")
    const [text4,setText4]=useState("")
    const [text5,setText5]=useState("")
    const [desc,setDesc]=useState("")
    const [title,setTitle]=useState("")
    const [open,setOpen]=useState(false)

    const handleopne=()=>{
        setOpen(true)
    }
    const handleclose=()=>{
        setOpen(false)
    }

    const ino=()=>{

        setName(text)
        setEmail(text2)
        setPhone(text3)
        setTitle(text4)
        setDesc(text5)
        setOpen(false)

    }
    return(
        <div>
            <div className="container-fluid " style={{ display: 'block', padding: 30 }}>
                <button className="btn btn-outline-dark" onClick={handleopne}>Click me</button>
                <div className="container text-left" >

                    <h1 style={{
                        color:"#313c4e",
                        fontSize:"xxx-large"
                    }} align="center">{name}</h1>
                    <h2 style={{
                        color:"grey",
                        fontSize:"xx-large"
                    }} align="center">{title}</h2>
                    <h2 align="center" style={{
                        fontSize:"x-large"
                    }}>{desc}</h2>
                </div>


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
                        <h1 style={{ color:"white"}}>Fill The Form</h1>
                        <p style={{color:"white"}}>Name:</p><input type="text" className="form-control" onChange={(e)=>{setText(e.target.value)}}/><br/>
                        <p style={{color:"white"}}>Title:</p>  <input type="text" className="form-control" onChange={(e)=>{setText4(e.target.value)}}/><br/>
                        <p style={{color:"white"}}>Description:</p> <textarea onChange={(e)=>{setText5(e.target.value)}}></textarea><br />
                        <p style={{color:"white"}}>Email:</p><input type="email" className="form-control" onChange={(e)=>{setText2(e.target.value)}}/><br />

                        <p style={{color:"white"}}>Phone No:</p><input type="number" className="form-control" onChange={(e)=>{setText3(e.target.value)}}/>
                        <br/>
                        <br/>
                        <button className="btn btn-outline-info btn-block" onClick={ino}>Add</button>
                    </div>
                </Modal>
            </div>

            <div>






                <hr style={{
                    backgroundColor:"#313c4e"
                }}/>

                <div className="container" >
                    <h3 align="center" style={{
                        color:"black",
                        fontSize:"large"
                    }}><FaMobile />&nbsp;{phone} &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                      <FaEnvelope /> &nbsp;{email}  </h3>
                </div>
                <hr style={{
                    backgroundColor:"#313c4e"
                }}/>
                <div className="container" style={{
                    backgroundColor:"white"
                }}>

                </div>
















                </div>


            </div>


    )

}
export default Intro;