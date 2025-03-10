import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col text-gray-700 h-auto md:min-h-screen w-full justify-start items-start flex-wrap pt-30 pb-9 px-4 md:px-74">
      <p className="text-3xl font-bold">Contact Us</p>
     
      <ul className="w-full mt-4 mb-15 md:w-1/2 h-auto">
        <li className=" transition duration-300 flex items-center mb-2">
          <a href="tel:+8801700000000" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} size="lg" className="text-inherit" />
            +880 1712 564429 | +880 1750 944287
          </a>
        </li>
        <li className=" transition duration-300 flex items-center mb-2">
          <a href="https://mail.google.com/mail/?view=cm&to=mahbubur.ice@gmail.com" className="flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-inherit" />
            mahbubur.ice@gmail.com
          </a>
        </li>
        <li className="transition duration-300 flex items-start gap-3 mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="xl" className="text-inherit pt-1 md:pt-0" />
          <span> Dept. of EEE, 4th floor, Science Building, Trishal, Mymensingh-2224, BD</span>
        </li>
      </ul>
      
      <div className="w-full mt-6 min-h-75">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525.4840181861957!2d90.37413096944421!3d24.581157408618612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756417d6f5720b1%3A0xe1ceb4dc98304a21!2sDepartment%20of%20EEE%2C%20Jatiya%20Kabi%20Kazi%20Nazrul%20Islam%20University!5e0!3m2!1sen!2sbd!4v1740284186728!5m2!1sen!2sbd"
        className="w-full h-80"
        style={{ border: 0 }}
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />

      </div>
    </div>
  );
};

export default Contact;
