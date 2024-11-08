import { useState } from "react";

interface T {
  value: string;
  message: string | null
}

export const ColorChanger = () => {

  const[form, setForm] = useState<T>({
    value: '#E74C3C',
    message: 'Ошибка!'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const hexToRgb = (value: string) => {
      const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
      const result = hexRegex.exec(value);
      return result 
        ? [ parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16) ]
        : null;
    }

    const newValue = hexToRgb(value); 

    if(value.length === 7 && newValue) {
      setForm({
        value: value,
        message: `rgb(${newValue[0]}, ${newValue[1]}, ${newValue[2]})`
      });
    } else {
      setForm({
        value: '#E74C3C',
        message: 'Ошибка!'
    })
    }
  };

  return (
    <div className='background' style={{background: form.value}}>
      <div className="formWrapper">
        <form className="form" autoComplete="off">
          <label htmlFor="color"></label>
          <input type="text" id="color" name="color" onChange={handleChange}/>
        </form>
        <div className="textWrapper">
          <span>{form.message}</span>
        </div>
      </div>
    </div>
  )
}