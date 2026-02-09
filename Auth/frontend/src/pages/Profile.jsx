import { useEffect, useState } from "react";
import API from "../utils/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/auth/profile", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then(res => setUser(res.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
  };

  if (!user) return <p>Login again !</p>;

  return (
    <>
    
      <div className="main h-screen w-full relative">
        <h1 className="h-fit w-fit text-white text-[9rem] font-extrabold ml-48">NO<br/>Efforts<br/>Notes..</h1>
        <h2 className="h-fit w-3/4 text-3xl font-semibold ml-20">while preparing for exam many of us, use online medium to find answers and take a screenshots of a particular topics/question bank. It may can confuse and very difficult to maintain that all screenshots, sometimes subjects get mixed-match leads too waste of time so, to avoid this and save time my NOEF helps.</h2>
        <div className="feature h-32 w-32 mt-4 absolute right-0 mr-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-lg flex flex-col gap-4">
            <div className="h-3/4 w-full  bg-white/90 backdrop-blur-md border border-white/30 shadow-lg rounded-full"></div>
            <div className="h-3/4 w-full  bg-white/90 backdrop-blur-md border border-white/30 shadow-lg rounded-full"></div>
            <div className="h-3/4 w-full  bg-white/90 backdrop-blur-md border border-white/30 shadow-lg rounded-full"></div>
        </div>
    </div>

    </>
  );
}
