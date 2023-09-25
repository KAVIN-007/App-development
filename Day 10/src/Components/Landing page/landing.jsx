import React from 'react'
// import { Navbar } from '../Navbar/Navbar'
import './landing.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalculateIcon from '@mui/icons-material/Calculate';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import Abouta from ''

export const Landing = () => {
    const navigate=useNavigate();
  return (
    <div>
        {/* <Navbar/> */}
        <div className='topland'>
            <div className="toptext">
                <h1>TAX CALCULATING</h1>
            </div>
            <div className="toplandtext">
                <h3>A tax calculator is a powerful financial tool that allows individuals, businesses, and organizations to estimate their tax liabilities based on their income, expenses, and various tax regulations. In today's complex and ever-changing tax landscape, understanding how much you owe or are eligible to receive in tax refunds is essential for effective financial planning. </h3>
                <h3></h3>
            </div>
            <div className="toplandimg">
                <img src='https://t4.ftcdn.net/jpg/03/26/35/21/360_F_326352149_w3jNIwXUc2tWtwGj1owbwLacnLI7ZC1M.jpg' style={{width:'30vw',height:'30vh',marginTop:'10%',marginLeft:'13%'}}></img>
            </div>
            <div className="toplandbut">
                <Button style={{backgroundColor:'blue',color:'white'}} onClick={()=>{navigate('/login')}}>Get Started</Button>
            </div>
        </div>
        <div className="landrow">
            <div className="rowtext" style={{paddingleft:'50px'}}>
                Employees
                <div className="rowico">
                    <PeopleIcon style={{fontSize:'30px',marginLeft:'-45px'}}/>
                </div>
            </div>
            <div className="rowtext">
                Incomes
                <div className="rowico">
                    <CurrencyRupeeIcon style={{fontSize:'30px'}}/>
                </div>
            </div>
            <div className="rowtext">
                Tax Calculating
                <div className="rowico">
                    <CalculateIcon style={{fontSize:'30px'}}/>
                </div>
            </div>
            
        </div>
        <div className="textofsoft">
           <div style={{marginLeft:'20px',marginTop:'90px'}}><h2> Intuitively simple & beginner-friendly</h2></div> 
            <div className="downimage">
                <img src='data:image/png;base64,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' style={{width:'40vw',height:'40vh',marginTop:'13%'}}></img>   
            </div>
            <div className="downtext">
                <h3>Manage Your Taxes, Incomes </h3>
                <h3> with us.</h3>
            </div>
            <div className="landdownbut">
                <Button style={{backgroundColor:'blue',color:'white'}} onClick={()=>{navigate('/signup')}}>New User</Button>
            </div>
        </div>
        <div className="landend">
            <div className="endtext">
                <h4 style={{cursor:'pointer'}}onClick={()=>navigate('/faq')}>FAQ Section</h4>
            </div>
            <div className="endtext">
                <h4 style={{marginLeft:'20px',cursor:'pointer'}}onClick={()=>navigate('/privacy')}>Trust and Credibility</h4>
            </div>
            <div className="endtext">
                <h4 style={{marginLeft:'30px',cursor:'pointer'}} onClick={()=>navigate('/about')} >About Us</h4>
            </div>
            <div className="endtext">
            </div>
        </div>
           
    </div>
  )
}