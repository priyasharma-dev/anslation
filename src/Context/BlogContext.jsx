import React, { useEffect, useState } from "react";
import { createContext } from "react";



export const BlogContext = createContext(null)

function BlogContextProvider({children}){
    const [blogData , setBlogData] = useState([])
    const [jobData , setJobData] = useState([])

    useEffect(() =>{
         let storeBlogdata = localStorage.getItem("blogData")
         if(storeBlogdata){
             setBlogData(JSON.parse(storeBlogdata))
         }
    },[])

      function AddBlogData(data){
        const newBlog = {
            id: Date.now(),
            ...data,
            readTime: `${data.readTime} min`
          };

          let updatedBlogData = [newBlog , ...blogData]

          localStorage.setItem("blogData" , JSON.stringify(updatedBlogData))

          setBlogData(updatedBlogData)

      }

    useEffect(() =>{
        let jobDataStore = localStorage.getItem("jobData")
        if(jobDataStore){
            setJobData(JSON.parse(jobDataStore))
        }
    },[])

    function JobDataCreate(jdata){
            const newJobCreate = {
                id: Date.now(),
                ...jdata,
                postedDate: 'Just now'
            };
         let updatedJob = [newJobCreate , ...jobData]

         localStorage.setItem("jobData" , JSON.stringify(updatedJob))

         setJobData(updatedJob);
    }


   
    return(
        <BlogContext.Provider value={{AddBlogData , blogData , jobData ,JobDataCreate }}  >
            {children}
        </BlogContext.Provider>
    )

}
export default BlogContextProvider