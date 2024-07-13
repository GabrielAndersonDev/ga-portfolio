'use client';

import projectInfo from "./projectInfo";
import ProjectCard from "./ProjectCard";
import Navigation from "./navigation";
import Contact from "./contact";
import { useState } from "react";

export default function Home() {

  const [notifFailState, setNotifFailState] = useState(false);
  const [notifSuccessState, setNotifSuccessState] = useState(false);
  const [notifState, setNotifState] = useState(false);

  const handleNotifState = (success, fail) => {

    console.log('handle notif state')
    if (success || fail) {
      setNotifState(true);
      return;
    }
    setNotifState(false);
  };

  const handleFailState = (failState) => {
    console.log('failstate')
    setNotifFailState(failState);
    handleNotifState(notifSuccessState, failState);
  };

  const handleSuccessState = (successState) => {
    setNotifSuccessState(successState);
    handleNotifState(successState, notifFailState);
  };



  return (
    <main className="bg-[#191919]">

      <dialog className={`notif-success z-100 ${notifSuccessState? 'active block' : 'inactive hidden'}`}>
        <h3 className="dialog-text">
          Message Sent
        </h3>
        <button 
          onClick={() => handleSuccessState(!notifSuccessState)}
          id="close-success"
          name="close-window"
          className="close-btn"
        >
          Close
        </button>
      </dialog>

      <dialog className={`notif-fail z-100 ${notifFailState? 'active block' : 'inactive hidden'}`}>
        <h3 className="dialog-text">
          Please try again.
        </h3>
        <button 
          onClick={() => handleFailState(!notifFailState)}
          id="close-fail"
          name="close-window"
          className="close-btn"
        >
          Close
        </button>
      </dialog>

      <div className={`bg-slate-950 opacity-75 w-full h-full ${notifState? 'dialog block' : 'hidden'} z-50 fixed`}></div>

      <div className={`main-container bg-[#28282D] mx-10 ${notifState? 'dialog' : ''}`}>
        <header>
          <h1>Gabriel Anderson</h1>
          <hr/>
          <Navigation/>
          <hr/>
        </header>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius fringilla lorem sed tempor. Sed vitae laoreet dui. Vestibulum aliquam hendrerit nibh ut pharetra. Duis accumsan mollis nisl, in porttitor mauris. Vivamus finibus venenatis est id facilisis. Pellentesque aliquet sapien non dictum lobortis. Nunc tempus ut nisl eu blandit. Pellentesque a odio vel mauris consectetur pellentesque vitae in odio.
          Cras enim risus, molestie tempus enim non, dignissim lobortis eros. Donec ligula est, faucibus sed odio et, lacinia consectetur diam. Donec imperdiet nisi finibus, consequat quam eget, volutpat libero. Aliquam erat volutpat. Ut placerat felis a odio viverra, sed mattis nisl finibus. Mauris eu accumsan magna. Nulla facilisi.
        </p>
        <hr/>
        <h2>Portfolio</h2>
        {projectInfo.map(project => (
          <ProjectCard key={project.id} id={project.id} name={project.name} url={project.url}/>
        ))}
        <hr/>
        <h2>Contact</h2>
        <Contact 
          handleFailState={handleFailState}
          handleSuccessState={handleSuccessState}
          notifState={notifState}
        />
      </div>
      
    </main>
  );
}
