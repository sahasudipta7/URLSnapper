import React, { useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import * as Yup from 'yup'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'
import Error from './error'

const Login = () => {

  const [errors, setErrors] = useState({})

  const [formData,setFormData] = useState({
    email:"",
    password:""
  });

  const handleInputChange = (e)=>{
    const {name,value} = e.target
    setFormData((prevState) =>({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async() =>{
    setErrors({});
    try {
      const schema = Yup.object().shape({
        email:Yup.string().email("Invalid Email").required("Email is a required field"),
        password:Yup.string().min(6,"Password must be atleast 6 characters").required("Password is a required field")
      });
      await schema.validate(formData,{abortEarly:false})

    } catch (e) {
      const newErrors = {};
      e?.inner?.forEach((err)=>{
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Already have one?</CardDescription>
        <Error message={"some error"}/>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input name="email" type="email" placeholder="Enter Email" onChange={handleInputChange}/>
        </div>
        {errors.email && <Error message={errors.email}/>}
        <div className="space-y-1">
          <Input name="password" type="password" placeholder="Enter Password" onChange={handleInputChange}/>
        </div>
        {errors.password && <Error message={errors.password}/>}
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin}>
          {true? <BeatLoader size={10} color="#36d7b7"/>:"Login"}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Login
