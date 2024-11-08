import { useState } from "react";

export const ColorChanger = () => {

  const[form, setForm] = useState({
    value: '#562232'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 
    const { value } = e.target;
    setForm({value})
    console.log(value)
  };

  return (
    <div className='background' style={{background: form.value}}>
      <div className="formWrapper">
        <form className="form" autoComplete="off">
          <label htmlFor="color"></label>
          <input type="text" id="color" name="color" onChange={handleChange}/>
        </form>
        <div className="textWrapper">
          <span>{form.value}</span>
        </div>
      </div>
    </div>
  )
}