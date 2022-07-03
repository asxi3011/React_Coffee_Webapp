
import {useState,useCallback} from 'react';
import {useNavigate} from "react-router-dom"

import {authentication,db} from '../../../Firebase/config'
import { RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { Form,Row,Col, Input, Button, Select,Space} from 'antd';
import $ from 'jquery'
authentication.languageCode = "it";
export default function Profile(){
    const { Option } = Select;
    const navigate = useNavigate();
    const [showOTP,setShowOTP] = useState(true);
    const [OTP,setOTP] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [isDisabledButton,setIsDisabledButton] = useState(true);
    const phoneCode = "+84";
    const grecaptcha = {};
    const onFinish = (values) => {
        console.log('Success:', values);
      };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    const handleClickSendCode = ()=>{
        console.log('click')
        setShowOTP(true);
        requestOTP();
    }
  
    const generateRecaptcha = ()=>{
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              console.log('rep',response);

            }
          }, authentication);
     
    }
    const clearRecaptcha = ()=>{
      window.recaptchaVerifier = "";
    }
    const handleChangeNumber = (e)=>{
        setPhoneNumber(e.target.value);
        if(e.target.value.length>8){
            setIsDisabledButton(false);
        }else{
            setIsDisabledButton(true);
        }
    }
   
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }} disabled>
            <Option value={phoneCode}>{phoneCode}</Option>
          </Select>
        </Form.Item>
      );
    const requestOTP = ()=>{
        let str = phoneNumber.replace(/\b0+/g, '')
        let phone = phoneCode + str;
        console.log(phone)
        generateRecaptcha();
        let appriver = window.recaptchaVerifier
        console.log('after',window.recaptchaVerifier);
        console.log('ap',appriver)
        console.log('config',authentication)
        if(phone.length>=12){
             signInWithPhoneNumber(authentication,phone,appriver)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult
            console.log(confirmationResult);
            // ...
          }).catch((error) => {
            console.log(error);
          });
        }
     
    }
    const verifyOTP = (e)=>{
      const MAX_LENG_OTP = 6;
      let otp = e.target.value;
      console.log(otp);
      if(otp.length === MAX_LENG_OTP){
        let confirmationResult = window.confirmationResult;
        console.log(otp);
        confirmationResult.confirm(otp)
            .then(async (result)=>{
                alert('Xin chào')
                const user = result.user;
                const createAt = user.metadata.createAt;
                const lastLogin = user.metadata.lastLoginAt; 
                console.log(createAt,lastLogin)
                if(createAt === lastLogin) {
                  try{
                    const docRef = await addDoc(collection(db, "users"), {
                    displayName:"dau65",
                    email:"asxi",
                    phone:"090",
                    photoURL:"",
                    
                  });
                  console.log(docRef.id) 
                }catch{
                  alert("Khong them dc db")
                }
                 }
              navigate("/profile")
             
            })
            .catch(e=>{
             console.log(e);
            })
      }
      setOTP(e.target.value)
  }
      return (
        <Form
        className="m-auto"
            style={{maxWidth:'800px'}}
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          initialValues={{
            remember: true,
            prefix: phoneCode,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
           <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input value={phoneNumber} onChange={(e)=>{handleChangeNumber(e)}} addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
            {
                showOTP ? 
                <Form.Item
                label="OTP"
                name="otp"
                rules={[
                  {
                    required: true,
                    message: 'Nhập mã otp!',
                  },
                ]}
              >
              <Input value={OTP} onChange={(e)=>{verifyOTP(e)}} maxLength={6} style={{ width: '100%' }} />

                </Form.Item>:
                <></>
            }
         
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
              <Space>
                    <Button id="sendOtp" type="primary" onClick={handleClickSendCode} disabled={isDisabledButton}>
                    Send code
                    </Button>
              </Space>
            
          </Form.Item>
          <div id="sign-in-button"></div>
        </Form>
      );
}