import React from 'react';


const Footer=()=>{
    return (
        <div className='grid grid-cols-3 bg-blue-950 p-4 '>
          <div  >
            <p className='text-amber-700 font-bold'> OUR SERVICES</p>
            <h3 className='text-amber-200 '>Custom Software Development</h3>
           <h3 className='text-amber-200 '>Data Analysis</h3>
           <h3 className='text-amber-200 '>Website Development </h3>
            <h3 className='text-amber-200 '>Mobile App Development</h3>
            <h3 className='text-amber-200 '>SEO Systems</h3>
          </div>
          <div className='text-center'>
            <p className='text-amber-700 text-center font-bold'> RELATED LINKS</p>
            <a href='	http://bidhaalink.com/' className='text-amber-200 '>Bidhaalink</a>
          </div>
          <div>
          <h3 className=" text-center font-bold text-amber-700">OUR SOCIAL MEDIA</h3>
      
          <div class="grid grid-cols-5 text-center p-2 gap-0" >
      
        
        <div> 
      <a href="https://wa.me/255759233403" className=" text  ">
        <img src="/tsp.png "className="w-10   rounded-full"/>
        
    </a>
    </div> 
    <div> 
      <a href="https://www.facebook.com/share/19Svf7oGNh/?mibextid=wwXIfr" className=" text  ">
        <img src="/fb.png "className="w-10   rounded-full"/>
        
    </a>
    </div>
    <div> 
      <a href="https://www.instagram.com/dmgtechnology_?igsh=MWoyNDZ5dG82aGFtcw%3D%3D&utm_source=qr" className=" text  ">
        <img src="/inst.png "className="w-10   rounded-full"/>
        
    </a>
    </div>   <div> 
      <a href="https://www.linkedin.com/in/ditram-aristid-0838b8310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className=" text  ">
        <img src="/lnk.png "className="w-10   rounded-full"/>
        
    </a>
    </div>    
    
    
    
    

  
    </div>
          </div>
         </div>

    );
};
export default Footer