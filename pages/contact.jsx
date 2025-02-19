import {useState} from "react";
import BannerLayout from "../components/Common/BannerLayout";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {SiUpwork} from "react-icons/si";
import {HiMail, HiUser} from "react-icons/hi";
import {BsChatTextFill} from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
import {Modal} from "antd";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = {lat: 31.5415526, lng: 74.2888496}; // Coordinates from your provided link

  // Dark Mode Map Style
  const darkModeStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dn6m6ys", // Replace with your EmailJS Service ID
        "template_hl8mbmx", // Replace with your EmailJS Template ID
        formData,
        "LhJwbmAIdrDkQzlLJ" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setSuccessMessage("Message sent successfully!");
          setFormData({name: "", email: "", message: ""});
          setIsOpen(true);
        },
        (error) => {
          setSuccessMessage("Failed to send the message. Try again later.");
          setIsOpen(true);
        }
      );
  };

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          {/* <div className="flex flex-col md:flex-row items-center gap-5 text-xs"> */}
          <div className="flex flex-col md:flex-row items-normal gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">Pakistan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Lahore</span>
              </div>
              <div className="flex justify-between items-center">
                {/* <span className="md:text-base">Company:</span> */}
                {/* <span className="text-LightGray md:text-sm">visualsX</span> */}
                <span className="md:text-base"> </span>
                <span className="text-LightGray md:text-sm"> </span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  rohabkhan3585@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="text-LightGray text-sm">Muhammad Rohab</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">
                  +92 (317) 4222397
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            // href="https://github.com/MuhammadRohab-3585"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/muhammad-rohab-4a644633b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/iosamajavaid" target='_blank' rel="noreferrer"><FaTwitter /></a> */}
          <a
            className="hover:scale-125 ease-in-out duration-700 hidden sm:block"
            // href="https://www.fiverr.com/codeworthy"
            target="_blank"
            rel="noreferrer"
          >
            <Fiverr_Icon />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                  >
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    className="input_stylings"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="my-4">
                {/* <button onClick={() => setIsOpen(true)} className="button"> */}
                <button className="button">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Location</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.431019866899!2d74.28787161472248!3d31.54250617930614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903479dbfb3e9%3A0xe3b7ed5cdd6b23f2!2sAshraf%20St%2C%20Samanabad%20Town%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2sin!4v1637004961350!5m2!1sen!2sin"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        {/* <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">In Progress</h1>
          <a
            className="underline text-Snow"
            target="_blank"
            href="https://github.com/MuhammadRohab-3585/portfolio"
          >
            Be the one to integrate this!
          </a>
        </div> */}
        <div className="flex flex-col items-center justify-center">
          {successMessage === "Message sent successfully!" ? (
            <h1 className="text-Green font-bold text-2xl">{successMessage}</h1>
          ) : (
            <h1 className="text-red-500 font-bold text-2xl">
              {successMessage}
            </h1>
          )}
          <span
            className="text-lg font-bold text-white "
            // className="underline text-Snow"
            // target="_blank"
            // href="https://github.com/MuhammadRohab-3585/portfolio"
          >
            {successMessage === "Message sent successfully!"
              ? "Thank you for reaching out!"
              : "Please try again!"}
          </span>

          <button
            className="button mt-4"
            onClick={() => setIsOpen(false)} // Close modal
          >
            Close
          </button>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
