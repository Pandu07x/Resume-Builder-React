import React,{useState} from "react";
import Modal from "@material-ui/core/Modal";

function Course() {
    const ini={
        "title":"",
        "provider":"",
        "months":"",
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
            "provider":text2,

            "months":text3,
            "task":text4
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
                        }} align="center">Course Details</h1>
                        <p style={{
                            color:"white"
                        }}>Course Title</p>   <input type="text" className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}}/><br/>
                        <p style={{
                            color:"white"
                        }}> Provider Name</p>  <input type="text" className="form-control" value={text2} onChange={(e)=>{setText2(e.target.value)}}/><br/>
                        <p style={{
                            color:"white"
                        }}>Time Period(in months)</p>  <input type="number" className="form-control" value={text3} onChange={(e)=>{setText3(e.target.value)}}></input><br />
                        <p style={{
                            color:"white"
                        }}>Course Description(Small)</p>  <textarea  className="form-control" value={text4} onChange={(e)=>{setText4(e.target.value)}}/><br />

                        <button className="btn btn-outline-info btn-block" onClick={add}>Click</button>
                    </div>


                </Modal>
            </div>



            <div className="container" >
                <div className="row">
                    <div className="col-sm">
                        <h1 style={{
                            textDecoration:"underline",
                            marginLeft:100
                        }} > Certificates<button type="button" className="btn btn-outline-dark btn-sm" onClick={handleopen}>Open</button></h1>
                        <br />
                        <br/>
                        {
                            program.map((list,index)=>(
                                <div>
                                    <h1 key={index} style={{
                                        fontWeight:"Bold",
                                        fontSize:"xx-large",
                                        marginLeft:100


                                    }} >Program: {list.title}</h1>
                                    <h3 style={{
                                        fontSize:"large",
                                        marginLeft:30

                                    }}>Name of Provider {list.provider }</h3>

                                    <h6  style={{color:"grey",marginLeft:350}}>Worked Period: {list.months}</h6>
                                    <h6 style={{marginLeft:30}}>Course Description: {list.task}</h6>
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
export default Course;