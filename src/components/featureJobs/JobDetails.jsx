import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import {CiDollar} from "react-icons/ci"
import {SlLocationPin} from "react-icons/sl"
import {BsTelephone} from "react-icons/bs"
import {HiOutlineBriefcase} from "react-icons/hi"
import {AiOutlineMail} from "react-icons/ai"
import { setId } from "../../../localStorage"


const JobDetails = () => {
  const appliedNavigate = useNavigate()
  const allData = useLoaderData()
  const {detailsId} = useParams() // have to note,    main.jsx j dynamic id name use kora hoise seita use korte hobe
  const job = allData.find(j=>j.id == detailsId)
  const {id,job_title, job_description,job_responsibility,salary, contact_information,educational_requirements, experiences} = job
  const {phone, email, address} = contact_information

  const handleApply = ()=>{
    setId(id)
    appliedNavigate("/applied-jobs")
  }
  
  return (
    <div className=" px-xPadding my-yMargin">
      <div className=" flex justify-between gap-4">
        <div className="flex flex-col gap-4 w-2/3">
          <p><span className="font-extrabold">Job Description:</span> {job_description}</p>
          <p><span className="font-extrabold">Job Responsibility:</span> {job_responsibility}</p>
          <p  className="font-extrabold">Educational Requiremments:</p>
          <p>{educational_requirements}</p>
          <p className="font-extrabold">Experiences:</p>
          <p>{experiences}</p>
        </div>
        <aside className="w-1/3">
          <div  id="job_details_card" className="p-7 rounded-lg" >
            <h4 className="text-xl font-bold mb-6">Job Details</h4>
            <hr />
            <p className="mt-6"><CiDollar className='inline mr-2 text-xl'/>Salary: {salary}</p>
            <p><HiOutlineBriefcase className='inline mr-2 text-xl'/>Job Title: {job_title}</p>
            <h4 className="text-xl font-bold my-6">Contact Information</h4>
            <hr />
            <p className="mt-6"><BsTelephone className='inline mr-2 text-xl'/>Phone: {phone}</p>
            <p><AiOutlineMail className='inline mr-2 text-xl'/>Email: {email}</p>
            <p><SlLocationPin className='inline mr-2 text-xl'/>Address: {address}</p>
          </div>
          <button onClick={handleApply} className="mt-6 w-full btn text-xl text-white font-extrabold rounded-lg capitalize    bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
        </aside>
      </div>
    </div>
  )
}

export default JobDetails