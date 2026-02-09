import API from "../utils/api";

export default function Login() {
  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", {
      email: e.target.email.value,
      password: e.target.password.value,
    });

    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return (
    <form onSubmit={submit}>

      <div className="h-screen w-full">
        <div className="logo h-80 w-full flex justify-center pt-25">
            <img className="img h-40 w-40 rounded-full " src="src/Assets/LOGO noef.jpeg" alt="" />
        </div>
        <div className="glass h-100 w-full flex justify-center items-center ">
            <div className="sub h-100 w-1/3 border-2 border-white rounded-4xl flex flex-col gap-10 p-20 bg-linear-to-l from-[rgba(171,249,255,0.1)] to-transparent" >
                <input className="ip2 h-3/9 w-full border-2 border-white rounded-2xl p-5 text-white text-lg" name="email" placeholder="Email"/>
                <input className="ip2 h-3/9 w-full border-2 border-white rounded-2xl p-5 text-white text-lg" name="password" placeholder="Password"/>
                <div className="btns h-3/9 w-full flex items-center justify-center gap-20 ">
                    <button className="Login h-full w-1/4 text-center text-white text-lg bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-lg">Login</button>
                </div>
            </div>   
        </div>
      </div>

    </form>
  );
}
