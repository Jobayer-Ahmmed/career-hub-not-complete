import { useEffect} from "react"
import { useState } from "react"
import Job from "./Job"



const FeatureJobs = () => {
  const [jobsLength, setJobsLength] = useState(4)
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    fetch("./jobs.json")
    .then(res=>res.json())
    .then(d=>setJobs(d))
  },[])

  return (
    <div className=" px-44 py-20">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
        <p className="font-medium mt-2 mb-8">Explore thousands of job opportunities 
        with all the information you need. Its your future</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
          jobs.slice(0, jobsLength).map(job=> <Job key={job.id} job={job}/>)
        }
      </div>
      <div className={`${(jobsLength == jobs.length)? 'hidden': ''} text-center mt-10`}>
        <button onClick={()=>setJobsLength(jobs.length)} className=" btn text-xl text-white font-extrabold rounded-lg capitalize    bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</button>
      </div>
    </div>
  )
}

export default FeatureJobs