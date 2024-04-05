import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Fbregister.css';
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";

function Registeration(){
    const{register,handleSubmit,formState: { errors }}=useForm()
    const [data,setdata]=useState("");
    return(
        <div>
            <Container>
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="120" fill="none" viewBox="0 0 1090 360">
                <path fill="#0866FF" d="M881.583 257.897h29.48v-47.696l41.137 47.696h36.072l-47.89-54.969 40.909-47.663h-32.825l-37.403 43.93v-96.982l-29.48 3.864v151.82Zm-67.988-105.261c-32.728 0-55.455 22.013-55.455 53.929s22.727 53.929 55.455 53.929c32.727 0 55.455-22.013 55.455-53.929s-22.728-53.929-55.455-53.929Zm0 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-119.807-82.728c-32.727 0-55.455 22.013-55.455 53.929s22.728 53.929 55.455 53.929c32.728 0 55.455-22.013 55.455-53.929s-22.727-53.929-55.455-53.929Zm0 82.728c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.389 28.799-25.552 28.799Zm-112.826-82.728c-13.636 0-24.935 5.357-32.013 15.162v-65.585l-29.513 3.831v151.82h26.169l.519-15.844c6.981 11.818 19.481 18.474 34.838 18.474 27.988 0 48.475-22.728 48.475-53.929 0-31.202-20.39-53.929-48.475-53.929Zm-6.98 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-113.638 1.331c-15.649 0-26.883-7.273-30.714-19.805h72.63c.715-3.831 1.202-8.377 1.202-11.429 0-33.02-18.475-52.825-49.514-52.825-31.331 0-53.02 22.013-53.02 53.929 0 32.338 22.728 53.929 56.462 53.929 17.467 0 34.448-5.844 45.065-15.552l-10.617-18.701c-10.292 7.11-20.39 10.454-31.494 10.454Zm-6.591-61.137c13.637 0 22.338 8.279 22.338 21.104v.098h-47.078c2.825-13.604 11.623-21.202 24.74-21.202Zm-98.994 84.968c15.26 0 30.195-5.844 40.714-15.974l-11.526-19.383c-8.182 6.364-17.467 9.805-26.266 9.805-16.364 0-27.273-11.429-27.273-28.377s10.909-28.377 27.273-28.377c8.084 0 16.883 2.922 24.026 8.085l11.721-19.806c-9.481-8.571-24.156-13.831-38.702-13.831-32.013 0-54.643 22.338-54.643 53.929.032 31.494 22.662 53.929 54.676 53.929Zm-93.735-105.261-.519 15.975c-6.981-11.916-19.481-18.572-34.838-18.572-28.085 0-48.475 22.728-48.475 53.929 0 31.202 20.52 53.929 48.475 53.929 15.357 0 27.889-6.656 34.838-18.474l.519 15.844h26.169V155.265h-26.169Zm-28.377 80.099c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.422 28.799-25.552 28.799Zm-57.663-79.906h-26.526v-8.767c0-13.117 5.13-18.149 18.442-18.149 4.123 0 7.467.097 9.383.292v-22.5c-3.637-1.007-12.5-2.013-17.63-2.013-27.111 0-39.611 12.792-39.611 40.422v10.682h-16.753v24.806h16.753v77.631h29.448v-77.599h21.949l4.545-24.805Z"/>
            </svg>
            <div className='border border-1 rounded w-50 m-auto py-3'>
                <h4>Create a new account</h4>
                <p>It's quick and easy.</p>
                <div className='border-top'>
                    <form className='d-flex flex-wrap' onSubmit={handleSubmit((data)=>{
                        setdata(JSON.stringify(data))
                    })}>
                        <input type='text' placeholder='First name' {...register("fname",{ required: "First name is required" })} className='input-50'/>
                        {errors.fname && <span>{errors.fname.message}</span>}
                        <input type="text" placeholder='Surname'{...register("lname",{ required: "Surname is required" })} className='input-50'/>
                        {errors.lname && <span>{errors.lname.message}</span>}
                        <input type='text'{...register("phoneoremail",{ required: "Phone number or email is required" })} placeholder='Mobile number or email address' className='w-100'/>
                        {errors.phoneoremail && <span>{errors.phoneoremail.message}</span>}
                        <input type='password'{...register("pwd",{ required: "password is required", minLength:{value:8,message:"Atleast 8 characters"} })} placeholder='New Password' className='w-100'/>
                        {errors.pwd && <span>{errors.pwd.message}</span>}
                        <div className='w-100 d-flex flex-wrap justify-content-around'>
                            <span className='text-start head w-100 p-2'>Date of birth</span>
                            <span>
                                <select {...register("birthday_day",{ required: "Birthday_day is required" })}className='border px-5 py-1' id="day" title="Day"><option value="1" selected="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                                {errors.birthday_day && <span>{errors.birthday_day.message}</span>}
                            </span>
                            <span>
                                <select {...register("birthday_month",{ required: "Birthday_month is required" })}className='border px-5 py-1' id="month" title="Month"><option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4" selected="1">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option></select>
                                {errors.birthday_month && <span>{errors.birthday_month.message}</span>}
                            </span>
                            <span>
                                <select {...register("birthday_year",{ required: "Birthday_year is required" })} className='border px-5 py-1' id="year" title="Year"><option value="2024" selected="1">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option></select>
                                {errors.birthday_year && <span>{errors.birthday_year.message}</span>}
                            </span>
                        </div>
                        <div className='w-100 d-flex flex-wrap justify-content-around'>
                            <span className='w-100 text-start p-2 head'>Gender</span>
                            <span className=' border px-3 py-1'>
                                <input type="radio" {...register("gender",{ required: "Gender is required" })} id="male" value="male"/>
                                <label for="male" className='px-4'>Male</label>
                            </span>
                            <span className=' border px-3 py-1'>
                                <input type="radio" {...register("gender",{ required: "Gender is required" })} id="female" value="female"/>
                                <label for="female" className='px-4'>Female</label>
                            </span>
                            <span className=' border px-3 py-1'>
                                <input type="radio" {...register("gender",{ required: "Gender is required" })} id="others" value="others"/>
                                <label for="others" className='px-4'>Others</label>
                            </span>                            
                        </div>
                        <div className='p-2'>
                            <span className='terms'>People who use our service may have uploaded your contact information to Facebook.<a> Learn more.</a></span>
                            <span className='terms'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</span>
                        </div>
                        <input type='submit' value="SignUp" className='rounded text-light my-3 m-auto button-signup'/>
                        <a  className='d-block w-100'>Already have an account?</a>
                    </form>
                    {data}

                </div>
            </div>
            </Container>
        </div>
    )
}

export default Registeration;