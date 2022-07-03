import {useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt';
import {Form} from 'react-bootstrap'


export default function MenuProfile(){
    useEffect(()=>{
        const element = document.getElementById("card-user");
        VanillaTilt.init(element);
    },[])
    return(
        <div className="col-lg-4 col-md-12 border-info-left">
                            <div className="member-card">              
                                <div id="card-user" className="rad-12 member-card-gold ">
                                    <div className="d-flex flex-row-reverse img-background-card">
                                        <img style={{width:'160px'}} src="https://order.thecoffeehouse.com/_nuxt/img/Leaves.5c9ad83.svg" alt="" />
                                    </div>
                                    <div className="card-info-name text-metal-dark fw-bold fs-6">
                                        VONG SAY DAU
                                    </div>
                                    <div className="card-info-rank text-metal-gold fs-6">
                                        GOLD
                                    </div>
                                    <div className="card-info-idUser text-metal-dark fw-bold fs-5">
                                        QCF20 65687
                                    </div>
                                </div>
                                <div className="note-member-card half-down-border-product half-down-rad-12">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span className="text-secondary fw-bold">Vàng</span>
                                        <span className="text-secondary fw-bold">Kim cương</span>
                                    </div>
                                    <Form.Range className="py-2"min="1" max="100" />
                                    <span className="fs-min-plus">
                                            Còn 100 BEAN nữa bạn sẽ thăng hạng. Đổi quà không ảnh hưởng tới việc thăng hạng của bạn Chưa tích điểm
                                    </span>
                                </div>
                               
                            </div>
                            <div className="pd-12">
                                <div className="options-user options-active pe-cursor">
                                    <i className="fa-regular fa-user mx-4 options-active"></i>
                                    <span className="fw-bold">Thông tin tài khoản</span>                                                   
                                </div>
                                <div className="options-user user-active pe-cursor">
                                    <i className="fa-solid fa-shield-heart mx-4 text-secondary"></i> 
                                    <span className="">Quyền lợi thành viên</span>                                                   

                                </div>
                                <div className="options-user user-active pe-cursor">
                                    <i className="fa-solid fa-clock-rotate-left mx-4 text-secondary"></i> Lịch sử mua hàng                                          
                                </div>
                              
                            </div>
                                
        </div>    
    )
}