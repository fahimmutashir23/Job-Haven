import { AiOutlineMail } from "react-icons/ai";
import contact from "../../assets/image/contactIcon.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const ContactUs = () => {
    const {user} = useContext(AuthContext);
    const userEmail = user? user.email : ""

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.massage.value;
    const templateParams = {
      from_email: email,
      from_name: name,
      message: message,
    };
    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID1;
    const publicKey = import.meta.env.VITE_PUBLICKEY;
    emailjs.send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
            if(response){
                Swal.fire({
                    position: "top",
                    title: "Successfully Send Message",
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
          })
  };
  return (
    <div className="bg-gradient-to-r from-base-200 rounded-2xl">
      <hr />
      <h1 className="text-center font-bold text-3xl bg-base-200 py-2 px-8 rounded-b-lg max-w-fit mx-auto mb-5">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
        <div className="md:w-1/2 flex justify-center">
          <img src={contact} className="w-2/3" />
        </div>

        <div className="md:w-1/2 px-5">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm font-medium ">Your Name</label>
            <div className="relative">
              <input
                type="text"
                name="text"
                className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <AiOutlineMail></AiOutlineMail>
              </div>
              <input
                type="email"
                name="email"
                defaultValue={userEmail ? userEmail : " "}
                className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
              />
            </div>
            <label className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              name="massage"
              rows="4"
              className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
            <button type="submit" className="btn btn-primary w-full mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
