import { Button, List } from "@mui/material";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addInjury, findAllInjueries } from "../action/actionfun";
import { Outlet } from "react-router-dom";
import { Divider } from "@mui/material";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Avatar from '@mui/material/Avatar';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { deepOrange, green } from '@mui/material/colors';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import SystemUpdate from "@mui/icons-material/SystemUpdate";
function AddInjury(props) {

    const [personName, setPersonName] = useState('')
    const [personAddress, setPersonAddress] = useState('')
        // const[injuryDate,setInjuryDate]=useState('')
    const [mobile, setMobile] = useState('')
    const [nameError, setNameError] = useState('')
    const [addressError, setAddressError] = useState('')
        // const[dateError,setError]=useState('')
    const [mobileError, setMobileError] = useState('')
        useEffect(()=>{
            props.mydispatch(findAllInjueries())
        },[])
    return(
    <div>
 <div style={{position:'relative',top:200,left:40}}>
        
        <List sx={{width:100}}>
        
        
               <Link to='/home/injurycentre/view'><input type='button'
               style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}} value='View'></input></Link>
               <Avatar sx={{left:70,top:-33}} variant="rounded">
        <AssignmentIcon />     
      </Avatar>
      
               <br></br>
               
               <Link to='/home/injurycentre/update'><input type='button'
               style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}}
               data-testid="updatectrl" 
               value='Update'></input></Link>
               <Avatar sx={{ left:70,top:-33}} variant="rounded">
        <SystemUpdate/>
      </Avatar>
              
              
               </List>
              
        </div>

        <div style={{position:'relative',left:500,width:900}}>
         <span style = {{color: "black"}} > <h3> Enter Person Name </h3></span>

        <input type='text'
           onChange = {
            (e) => {
                let nam = e.target.value

                if (nam.length < 4 || nam.length >= 20) {
                    setNameError('name should be more than 4 charatcters')
                } else {
                    setPersonName(e.target.value)
                    setNameError('')
                }

            }
        }/><br/>
         <span style = {{color: 'red'}} > { nameError } </span><br/>

        <span style = {{ color: 'black' }} > <h3> Enter Person Address </h3></span >
        <input type='text'
        onChange = {
            (e) => {
                setPersonAddress(e.target.value)
                let add = e.target.value
                var addexp = String(add).toLowerCase().match("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s)$")
                if (addexp || add <= 200 || add == null) {
                    setAddressError('address is mandatory ')
                } else {
                    setPersonAddress(e.target.value)
                    setAddressError('')
                }
            }
        }/><br/>
        <span style = { { color: 'red' } } > { addressError } </span><br/>
        <span style = {{ color: 'black' }} > <h3> Enter Mobile Number </h3></span >
          
        <input type='text'
         onChange = {
            (e) => {
                let mob = e.target.value
                var exp = String(mob).match("^(?=.[0-9]).{10}$")
                if (exp || mob.length == 10) {
                    setMobile(e.target.value)
                    setMobileError('')
                } else {
                    setMobileError('Enter valid mobile number')
                }
            }
        }/><br/>
          <span style = {{ color: 'red' }}> { mobileError } </span><br/>

          < input type = 'button' style = {{color:'black',backgroundColor:'#00C9A7',top:-10,left:30 }} 
         data-testid="savectrl" 
        onClick={()=>{ var inju = {
                    //  "injuryId" :injuryId,
                    "personName": personName,
                    "personAddress": personAddress,
                    //  "injuryDate":injuryDate,
                    "mobile": mobile

                }
                props.mydispatch(addInjury(inju))
                console.log(inju)

        }}
        value = 'SAVE'  />
<div style={{position:'relative',left:300}}><Outlet/></div> 

        
    </div>
    
   
        </div>)

}
    const mapDispatchToProps = dispatch => ({
        mydispatch: dispatch
    })
    const mapStateToProps = state => ({
        data: state
    })

    export default connect(mapStateToProps, mapDispatchToProps)(AddInjury);