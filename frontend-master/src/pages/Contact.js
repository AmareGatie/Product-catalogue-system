import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import * as yup from  "yup";
import {useFormik} from "formik";
import { useDispatch, useSelector } from "react-redux";
import { creatQuery } from "../features/contact/contactSlice";
const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().nullable().email("Email should be valid").required("Email is Required"),
  mobile: yup.string().default('').nullable().required("mobile number is required"),
  comment: yup.string().default('').nullable().required("Comment is required"),
});
const Contact = () => {
  const dispatch= useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      comment:"",
    },
    validationSchema:contactSchema,
    onSubmit: values => {
    dispatch(creatQuery({name: values.name,email:values.email,mobile:values.mobile,comment:values.comment}));
    },});
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31237.566148981336!2d37.99383366428542!3d11.856556155380229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16447db5c88132bf%3A0x28cd667d8ea10014!2z4Yuw4Yml4YioIOGJs-GJpuGIrSwg4Yqi4Ym14Yuu4Yy14Yur!5e0!3m2!1sam!2snl!4v1686918946574!5m2!1sam!2snl"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name ="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value ={formik.values.name}
                    />
                  </div>
                  <div className="errors">
                    {
                      formik.touched.name && formik.errors.name
                    }

                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name= "email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value ={formik.values.email}
                    />
                  </div>
                  <div className="errors">
                    {
                      formik.touched.email && formik.errors.email
                    }
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                      name ="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value ={formik.values.mobile}
                    />
                  </div>
                  <div className="errors">
                    {
                      formik.touched.mobile && formik.errors.mobile
                    }
                  </div>
                  <div>
                    <textarea
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                      name ="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value ={formik.values.comment}
                    ></textarea>
                  </div>
                  <div className="errors">
                    {
                      formik.touched.comment && formik.errors.comment
                    }
                  </div>
                  <div>
                    <button className="button border-0" type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno: , Near village Bahredar , Debertabor, Ethiopia
                      
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 8264954234">+251937398502</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:amaregatie2006@gmail.com@gmail.com">
                        amaregatie2006@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
