import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import {SlLocationPin} from "react-icons/sl"
import {CiDollar} from "react-icons/ci"

const Job = ({job}) => {
    const {id,logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job
    return (
    <div className='card p-7 border rounded-lg'>
      <img src={logo} alt="" className='w-28' />
      <h3 className='my-4 text-xl font-extrabold text-titleColor'>{job_title}</h3>
      <p>{company_name}</p>
      <div  className=' flex gap-3 my-3'>
        <Link id="text_gradient" className='border border-[#7E90FE] px-6 py-2 rounded-md'>{remote_or_onsite}</Link>
        <Link id="text_gradient" className='border border-[#7E90FE] px-6 py-2 rounded-md'>{job_type}</Link>
      </div>
      <div className='flex gap-8'>
        <span><SlLocationPin className='inline mr-2'/>{location}</span>
        <span><CiDollar className='inline mr-2 text-xl'/>Salary: {salary}</span>
      </div>
      {/* <button  onClick={()=>detailsNavigate(`/job/${id}`)} className="w-36 btn mt-3 text-white font-extrabold rounded-lg capitalize    bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button> */}
      
      <Link to={`/job/${id}`} className="w-36 btn mt-3 text-white font-extrabold rounded-lg capitalize    bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</Link>


    </div>
  )
}

Job.propTypes = {
    job: PropTypes.object.isRequired,
}

export default Job