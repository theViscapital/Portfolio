import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#40484F] text-white flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/66cbbfcb-0fae-4b9e-9a3b-6f026d1c58c1"
        className="flex flex-col max-w-[600px] w-full mx-4 px-4 border-white border-2 rounded-lg py-4 shadow-lg shadow-black"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FBB623]">
            Contact
          </p>
        </div>
        <input
          autoComplete="off"
          className="rounded-lg p-2 text-black border-2 border-black focus:border-4 focus:border-[#FBB623]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          autoComplete="off"
          className="rounded-lg my-4 p-2 text-black border-2 border-black focus:border-4 focus:border-[#FBB623]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="10"
          className="rounded-lg p-2 text-black border-2 border-black focus:border-4 focus:border-[#FBB623]"
        ></textarea>
        <button className="text-[#FFFEFB] hover:shadow-md hover:shadow-[#FBB623] hover:translate-x-1.5 hover:translate-y-1.5 rounded-[4px] border-4 border-[#FFFEFB] px-6 py-3 my-6 flex items-center hover:bg-[#FBB623] hover:border-[#0A0909] hover:text-[#0A0909] font-bold mx-auto bg-[#40484F]">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
