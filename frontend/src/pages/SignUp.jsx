import { useState } from "react";
import { Link } from "react-router-dom";

export const InputTaker = ({ placeholder, text, setText }) => {
  return (
    <div className=" bg-orange-300 ">
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full md:placeholder:text-center lg:placeholder:text-start outline-none border-b-2 focus:border-b-lightBlue-0 focus:placeholder:top-0"
      />
    </div>
  );
};
export const SignUp = () => {
  const [username, Setusername] = useState("");
  const [fullname, Setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, Setpassword] = useState("");
  const [file, setFile] = useState(null);
  const [imgPreview, setImagePrev] = useState(null);

  const SaveButton = (params) => {
    const { username, fullname, email, password } = params;

    const myFile = new FormData();
    // console.log(myFile);
    myFile.append("avatar", file);
    myFile.append("username", username);
    myFile.append("fullname", fullname);
    myFile.append("email", email);
    myFile.append("password", password);
    //   console.log(myFile.get("avatar"));
    //const newParams = { username, fullname, email, password, myFile };
    const sendValues = async () => {
      const response = await fetch(
        "http://localhost:8000/api/v1/users/register",
        {
          method: "POST",

          body: myFile,
        }
      );
      const data = await response.json();
      console.log(data);
    };
    //  console.log(sendValues());
    sendValues();
    // setInterval(() => {
    //   window.location.reload();
    // }, 5000);
  };

  const processImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setImagePrev(e.target.result);
        console.log(e.target.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  return (
    <section className=" w-full flex ">
      <div className="lg:max-w-[625px] flex flex-col  font-custom lg:min-w-[486px] py-[28px] px-[56px] w-full  ">
        <img src="/images\logo.png" className=" w-[156px]"></img>
        <div className=" py-[12%]">
          <h2 className=" text-[32px]">Start your free account</h2>
          <Link to={"/login"}> or, Login to your account</Link>
          <div className=" my-4 mx-auto flex justify-center m-2">
            <p className=" bg-[#1976d2] w-fit flex gap-2 rounded-lg shadow-md px-[16px] py-[6px]">
              <img src="public\icons\search.png" className="w-6" alt="" />
              <span className=" text-white text-[14px]">
                SIGN UP WITH GOOGLE
              </span>
            </p>
          </div>
          <hr></hr>

          <div className=" my-6 space-y-[28px]">
            <p className=" text-gray-500 text-center">Sign up with email</p>
            <div>
              Add Avatar
              <input
                className=" m-2"
                type="file"
                onChange={(e) => {
                  processImage(e);
                }}
              />
              {file && (
                <p className=" rounded-full  w-fit p-1">
                  <span>{file.name}</span>
                  <img
                    className={` w-[58px] rounded-full h-[58px]`}
                    src={imgPreview}
                  />
                </p>
              )}
            </div>
            {
              <InputTaker
                text={fullname}
                setText={Setfullname}
                placeholder=" full name"
              />
            }
            {
              <InputTaker
                text={username}
                setText={Setusername}
                placeholder=" Username"
              />
            }
            {
              <InputTaker
                text={email}
                setText={setEmail}
                placeholder=" email address"
              />
            }{" "}
            {
              <InputTaker
                text={password}
                setText={Setpassword}
                placeholder=" password"
              />
            }
          </div>
          <div className=" place-self-center bg-orange-300 m-2">
            <button
              onClick={() =>
                SaveButton({ file, username, fullname, email, password })
              }
              className=" bg-[#1976d2] w-fit flex gap-2 rounded-md
             shadow-md px-[24px] py-[6px]"
            >
              <span className=" text-white text-[14px]">
                SIGN UP WITH EMAIL
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[85%] hidden lg:grid place-items-center  px-[96px] py-[58px] bg-blueSky-0">
        <img src="/images\step_1.svg" alt="" />
      </div>
    </section>
  );
};
