import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { getId } from "../../../localStorage"
import AppliedJob from "./AppliedJob"



const AppliedJobs = () => {
    
    const allData = useLoaderData()
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        const ids = getId()
        const data = allData.filter(data=>ids.includes(data.id))
        setDatas(data)
        
    },[])

  return (
    <div className="my-yMargin px-xPadding flex flex-col gap-6 ">
        {
          datas.map(data=><AppliedJob key={data.id} data={data} />)
        }
    </div>
  )
}

export default AppliedJobs