import React, { useEffect,useState } from 'react'
import {useForm} from 'react-hook-form'
import { VictoryPie } from 'victory';
import {MdModeEditOutline} from 'react-icons/md'
import {IoIosSend} from 'react-icons/io'
import {MdCloudUpload} from 'react-icons/md'
import axios from 'axios';
function Profile() {

  let [editName,setEditName] = useState(false);
  let [editEmail,setEditEmail] = useState(false);
  let [editMobile,setEditMobile] = useState(false);
  let [editResume,setEditResume] = useState(false);
  let [isUpdated,setIsUpdated] = useState(false)
  //studentDetails
  let [stdName,setStdName] = useState('')
  let [stdRoll,setStdRoll] = useState('')
  let [stdBatch,setStdBatch] = useState('')
  let [stdSection,setStdSection] = useState('')
  let [stdEmail,setStdEmail] = useState('')
  let [stdMobile,setStdMobile] = useState('')
  let [stdResume,setStdResume] = useState()
  //forms
  const nameForm = useForm();
  const emailForm = useForm();
  const mobileForm = useForm();
  const resumeForm = useForm();
  //handle name edit
  const handleName = (data)=>{
    data.roll = stdRoll.toLowerCase();
    data.field = 'name';
    console.log(data);
    axios
    .post('http://localhost:3500/student/updateprofile',data)
    .then((res)=>{
      setIsUpdated(!isUpdated);
      console.log('response in student profile~ ',res)
    })
    .catch((err)=>{console.log('error in profile~ ',err)})
    setEditName(!editName)
  } 
  //handle email edit
  const handleEmail = (data)=>{
    data.roll = stdRoll.toLowerCase();
    data.field = 'mail';
    console.log(data);
    axios
    .post('http://localhost:3500/student/updateprofile',data)
    .then((res)=>{
      setIsUpdated(!isUpdated);
      console.log('response in student profile~ ',res)
    })
    .catch((err)=>{console.log('error in profile~ ',err)})
    setEditEmail(false)
  }
  //handle mobile edit
  const handleMobile = (data)=>{
    data.roll = stdRoll.toLowerCase();
    data.field = 'mobile';
    console.log(data);
    axios
    .post('http://localhost:3500/student/updateprofile',data)
    .then((res)=>{
      setIsUpdated(!isUpdated);
      console.log('response in student profile~ ',res)
    })
    .catch((err)=>{console.log('error in profile~ ',err)})
    setEditMobile(false)
  }
  const handleResume = (data)=>{
    data.roll = stdRoll.toLowerCase();
    data.field = 'resume';
    console.log(data);
    // axios
    // .post('http://localhost:3500/student/updateprofile',data)
    // .then((res)=>{
    //   setIsUpdated(!isUpdated);
    //   console.log('response in student profile~ ',res)
    // })
    // .catch((err)=>{console.log('error in profile~ ',err)})
    setEditResume(false);
  }
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      axios
      .post('http://localhost:3500/verifyLoginToken',{token})
      .then((res)=>{
        setStdName(res.data.payload.name);
        setStdRoll(res.data.payload.roll);
        setStdBatch(res.data.payload.batch);
        setStdSection(res.data.payload.section);
        setStdEmail(res.data.payload.mail);
        setStdMobile(res.data.payload.mobile);
        setStdResume(res.data.payload.resume);
        // console.log('response in profile ~',res)
      })
      .catch((err)=>{console.log('error in profile ~' , err)})
    }
  },[isUpdated])

  const data = [
    { x: `Submitted`, y: 20 },
    { x: `Pending`, y: 10 }    
  ];
  

  return (
    <div className='  container'>
      <div className="row  mt-5 ">
        {/* Personal Details */}
        <div className="col-lg-6 mt-0 m-auto p-0 m-0">
          <h3 className='text-start mb-5'>Personal Details</h3>
          <div className="row  p-0 m-0">

            {/* Student Name */}
              <div className="col-sm-4 text-start p-0 py-1 m-0  ">
                <label htmlFor="name" className='fw-bold'>Student Name</label>
              </div>

              <form className='row col-sm-8' onSubmit={nameForm.handleSubmit(handleName)}>
                <div className="col-sm-9 text-start p-0 py-1  m-0">
                  <input 
                    type="text"
                    name="name"
                    id="name" 
                    defaultValue={stdName} 
                    disabled={!editName}
                    className='border fw-bold text-dark rounded'
                    {...nameForm.register('name' ,{required:true})}
                  />
                  
                </div>  
                <div className="col-sm-3  p-0 m-0 text-start ">
                  {editName?
                  <button type='submit' className="btn text-secondary"><IoIosSend size={'25px'} className='text-success'/></button>: 
                  <button type='button' onClick={(e)=>{e.preventDefault();setEditName(true)}} className='btn text-secondary'><MdModeEditOutline size={'25px'} className='text-warning'/></button>}
                </div>
              </form>
              {nameForm.formState.errors.name?.type==='required' && <p className="text-danger">*This field shouldn't be empty</p> }
            <hr  className='m-1 p-0'/>

            {/* Student Roll */}
            <div className="col-sm-4 text-start p-0 py-1 m-0  ">
              <label htmlFor="studentRoll" className='fw-bold'>Student Roll</label>
            </div>
            <div className="col-sm-6  text-start p-0 py-1  m-0  ">
              <input 
                type="text"
                name="studentRoll"
                 id="studentRoll" 
                 value={stdRoll} 
                 disabled
                className='border  fw-bold  text-dark rounded'
              />
            </div>
            <hr  className='m-1 p-0'/>

            {/* Section */}
            <div className="col-sm-4 text-start p-0 py-1 m-0  ">
              <label htmlFor="section" className='fw-bold'>Section</label>
            </div>
            <div className="col-sm-6  text-start p-0 py-1  m-0  ">
              <input 
                type="text"
                name="section"
                 id="section" 
                 value={stdSection} 
                 disabled={true}
                className='border  fw-bold  text-dark rounded'
              />
            </div>
            <hr  className='m-1 p-0'/>

            {/* Batch */}
            <div className="col-sm-4 text-start p-0 py-1 m-0  ">
              <label htmlFor="Batch" className='fw-bold'>Batch</label>
            </div>
            <div className="col-sm-6  text-start p-0 py-1  m-0  ">
              <input 
                type="text"
                name="Batch"
                id="Batch" 
                value={stdBatch} 
                disabled
                className='border  fw-bold  text-dark rounded'
              />
            </div>
            <hr  className='m-1 p-0'/>

            {/* Email */}
            <div className="col-sm-4 text-start p-0 py-1 m-0  ">
              <label htmlFor="mail" className='fw-bold'>Email</label>
            </div>
            <form className='row col-sm-8' onSubmit={emailForm.handleSubmit(handleEmail)}>
              <div className="col-sm-9  text-start p-0 py-1  m-0  ">
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  defaultValue={stdEmail}
                  disabled={!editEmail} 
                  className='border  fw-bold  text-dark rounded'
                  {...emailForm.register('mail' ,{required:true})}
                />
              </div>
              <div className="col-sm-3 p-0 m-0 text-start ">
                {editEmail?
                <button type='submit' className="btn text-secondary"><IoIosSend size={'25px'} className='text-success'/></button>: 
                <button type='button' onClick={(e)=>{e.preventDefault();setEditEmail(true)}} className='btn text-secondary'><MdModeEditOutline size={'25px'} className='text-warning'/></button>}
              </div>
            </form>
            {emailForm.formState.errors.mail?.type==='required' && <p className="text-danger">This field shouldn't be empty</p> }
            <hr  className='m-1 p-0'/>

            {/* Mobile */}
            <div className="col-sm-4 text-start p-0 py-1 m-0  ">
              <label htmlFor="mobile" className='fw-bold'>Mobile</label>
            </div>
            <form className='row col-sm-8' onSubmit={mobileForm.handleSubmit(handleMobile)}>
              <div className="col-sm-9  text-start p-0 py-1  m-0  ">
                <input 
                  type="number"
                  name="mobile"
                  id="mobile" 
                  defaultValue={stdMobile} 
                  disabled={!editMobile}
                  className='border  fw-bold  text-dark rounded'
                  {...mobileForm.register('mobile' ,{required:true , minLength:10 , maxLength:10 })}
                />
              </div>
              <div className="col-sm-3 p-0 m-0 text-start ">
                {editMobile?
                <button type='submit' className="btn text-secondary"><IoIosSend size={'25px'} className='text-success'/></button>: 
                <button type='button' onClick={(e)=>{e.preventDefault();setEditMobile(true)}} className='btn text-secondary'><MdModeEditOutline size={'25px'} className='text-warning'/></button>}
              </div>
            </form>
            {mobileForm.formState.errors.mobile?.type === 'required' && <p className="text-danger">*This field shouldn't empty</p> }
            {mobileForm.formState.errors.mobile?.type === 'minLength' && <p className="text-danger">*This field should have length 10</p> }
            {mobileForm.formState.errors.mobile?.type === 'maxLength' && <p className="text-danger">*This field should have length 10</p> }
            <hr  className='m-1 p-0'/>

            {/* Resume */}
            <div className="col-sm-4 text-start p-0 py-1 m-0  ">
              <label htmlFor="resume" className='fw-bold'>Upload Rresume</label>
            </div>
            <form className='row col-sm-8' onSubmit={resumeForm.handleSubmit(handleResume)}>
              <div className="col-sm-9  text-start p-0 py-1  m-0  ">
                <input 
                  type="file"
                  name="resume" 
                  id="resume" 
                  defaultValue={stdResume} 
                  disabled={!editResume}
                  className=' fw-bold text-dark rounded'
                  {...resumeForm.register('resume')}
                />
              </div>
              <div className="col-sm-3 p-0 m-0 text-start ">
                {editResume?
                <button type='submit' className="btn text-secondary"><MdCloudUpload size={'25px'} className='text-success'/></button>: 
                <button type='button' onClick={(e)=>{e.preventDefault();setEditResume(true)}} className='btn text-secondary'><MdModeEditOutline size={'25px'} className='text-warning'/></button>}
              </div>
            </form>

          </div>
        </div>
        {/* Course Details */}
        <div className="col-lg-5 my-0 m-auto p-0 m-0">
          <h3 className='text-start mb-5'>Course Details</h3>
          <div className="row m-0 p-0 py-1">
            <div className="col-sm-8 fw-bold text-start m-0 p-0">Assignments Given</div>
            <div className="col-sm-4 fw-bold text-start m-0 p-0">{30}</div>
          </div>
          <div className="row m-0 p-0 py-1">
            <div className="col-sm-8 fw-bold text-start m-0 p-0">Submited </div>
            <div className="col-sm-4 fw-bold text-start m-0 p-0">{20}</div>
          </div>
          <div className="row m-0 p-0 py-1">
            <div className="col-sm-8 fw-bold text-start m-0 p-0">Pending</div>
            <div className="col-sm-4 fw-bold text-start m-0 p-0">{10}</div>
          </div>
          <div className="row m-0 p-0 py-1">
            <div className="col-sm-8 fw-bold text-start m-0 p-0">Total Score</div>
            <div className="col-sm-4 fw-bold text-start m-0 p-0">{200}</div>
          </div>

          {/* <PieChart data={data} options={options}/> */}
          <div className='fw-bold' style={{height:'350px'}}>
            <VictoryPie 
              data={data}
              // labelRadius='70'
              colorScale={['#00994B', '#C91D2E']}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile