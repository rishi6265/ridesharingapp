import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
function Inputbtn({placeholder}) {
    const [value, setValue] = useState(null);
   const gkey=import.meta.env.VITE_GOOGLE_MAP_KEY;
  return (

    <div className='flex items-center justify-center md:w-80 w-2/4  rounded-lg bg-slate-300'>
    {/* <input className='bg-transparent border-none outline-none'  type="text" placeholder={placeholer}/> */}
    <GooglePlacesAutocomplete
    apiKey={gkey}
    selectProps={{
        value,
        onChange: setValue,
        isClearable:true,
        className:'w-full ',
        placeholder: placeholder,
        components:{
            DropdownIndicator:false,
            
        },
        styles:{
            control:(provided)=>(
                {
                    ...provided,
                    backgroundColor:"#00ffff00",
                    
                   
                }
            )
        }
      }}
     
    ></GooglePlacesAutocomplete>
    </div>
  )
}

export default Inputbtn;