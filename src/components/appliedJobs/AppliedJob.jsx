import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import {CiDollar} from "react-icons/ci"
import {SlLocationPin} from "react-icons/sl"

const AppliedJob = ({data}) => {
    const {id,logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = data

  return (
    <div className='flex justify-between border rounded-lg p-8'>
        <div className='w-40 bg-gray-100 flex justify-center items-center rounded-lg '>
          <img src={logo} alt="" className='w-28'/>
        </div>
        <div>
          <h3>{job_title}</h3>
          <p>{company_name}</p>
          <div  className=' flex gap-3 my-3'>
            <Link id="text_gradient" className='border border-[#7E90FE] px-6 py-2 rounded-md'>{remote_or_onsite}</Link>
            <Link id="text_gradient" className='border border-[#7E90FE] px-6 py-2 rounded-md'>{job_type}</Link>
          </div>
          <div className='flex gap-8'>
            <span><SlLocationPin className='inline mr-2'/>{location}</span>
            <span><CiDollar className='inline mr-2 text-xl'/>Salary: {salary}</span>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Link to={`/job/${id}`} className="w-36 btn mt-3 text-white font-extrabold rounded capitalize    bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</Link>
        </div>
    </div>
  )
}

AppliedJob.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AppliedJob