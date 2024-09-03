import React from "react";

const Profile = () => {
    return(
        <>
            <div className="bg-white h-full w-auto text-black rounded-xl border-4 border-solid">
              <div className="rounded-2xl flex justify-center items-center m-4">
                <img src="https://img.logoipsum.com/243.svg" alt="" className="h-44 w-44 rounded-full border-4 border-solid"/>
              </div>
  
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <h3 className="text-2xl font-bold">John Doe</h3>
                <p className="finwise-blue leading-3 text-xs">@username</p>
              </div>

              <div className="grid grid-rows-2 grid-flow-col gap-4 justify-center text-left">
              </div>
            </div>
        </>
    )
}

export default Profile;