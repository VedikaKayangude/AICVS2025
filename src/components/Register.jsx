import React from 'react';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import { MLusion, roboface, Synapse } from '../assets';

const Register = () => {
  const repository = import.meta.env.VITE_REPOSITORY_LINK;
  const kaggle = import.meta.env.VITE_KAGGLE_LINK;

  return (
    <div>
      <Header />
      <Section crosses className="relative w-full mx-auto overflow-x-hidden">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-[-15%] right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(145,94,255,.15),rgba(255,255,255,0))]"></div>
        </div>

        {/* MLUsion Section */}
        <div className="sm:px-10 px-6 lg:pt-0 pt-20 pb-16 max-w-7xl mx-auto flex flex-row items-start gap-5">

          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#d22490] border-2 border-white shadow-neon" />
            <div className="w-1 sm:h-80 h-[45rem] rounded-full bg-gradient-to-b from-[#d22490]" />
          </div>
          <div>
            <h1 className="font-black text-white lg:text-left lg:text-[80px] mt-3 mb-0 sm:text-center xs:text-[50px] text-4xl sm:text-5xl lg:leading-[98px]">
              Welcome to <span className="text-[#d22490]">MLusion 2.0</span>
            </h1>
            <p className="text-[#dfd9ff] lg:text-[25px] sm:text-[26px] text-[20px] lg:leading-[40px] mt-0 w-full">
              
              <br />
              🚀 <strong>MLusion 2.0 Submissions Are Now Open!</strong><br /><br />
              🔗 Submit Your Final Project Here:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe439BZbGrwF30lzKOlXY43nNbBBvHdYAPWIGRuw5WA4_3Wjw/viewform"
                className="text-[#d22490] underline italic hover:text-[#2a31fa]"
              >
                Submission Form Link
              </a><br />
              ⚠️ Please note: You can submit only once, so make sure all the details are accurate before submitting!<br /><br />
              📌 Important: Each team must also complete the MLusion 2.0 Registration Form:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVjfcYT_h9kWU-8Gbgk3TBrBPnBTBvMlJQfzMSXu4mqjX1yg/viewform"
                className="text-[#d22490] underline italic hover:text-[#2a31fa]"
              >
                Registration Form Link
              </a><br /><br />
              📅 <strong>Key Dates:</strong><br />
              🔹 Registrations Open: <strong>16th April</strong><br />
              🔹 Submissions Begin: <strong>19th April</strong><br />
              🔹 Last Date for Submission: <strong>8th May</strong>
            </p>
            <div className="mt-20 flex flex-col items-center justify-center">
              <img
                src={MLusion}
                alt="Event Poster"
                className="w-full max-w-[500px] rounded-lg sm:shadow-glow-pink"
              />
            </div>
          </div>
        </div>

       {/* Synapse Section */}
       <div className="sm:px-10 px-6 pt-28 pb-16 max-w-7xl mx-auto flex flex-row items-start gap-5">

  <div className="flex flex-col justify-center items-center mt-5">
    <div className="w-5 h-5 rounded-full bg-[#20b920] border-2 border-white shadow-neon" />
    <div className="w-1 sm:h-80 h-[45rem] rounded-full bg-gradient-to-b from-[#20b920]" />
  </div>
  <div>
    <h1 className="font-black text-white lg:text-[80px] mt-3 mb-6 sm:text-center xs:text-[50px] text-4xl sm:text-5xl lg:leading-[98px]">
      Welcome to <span className="text-[#20b920]">Synapse 2025</span>
    </h1>
    <p className="text-[#dfd9ff] lg:text-[25px] sm:text-[26px] text-[20px] lg:leading-[40px] mt-2 w-full">
    🚀💡 Get ready to code, create, and conquer at <strong>Synapse 2025!</strong><br/>
      📅 <strong>Date:</strong> 16th March 2025 <br />
      🕗 <strong>Time:</strong> 8:00 AM – 7:00 PM <br />
      📍 <strong>Venue:</strong> Cummins College of Engineering, Pune <br /><br />
      🧑‍💻 <strong>Eligibility:</strong> Open to all years and branches <br />
      👥 <strong>Team Size:</strong> 3 members <br /><br />

      🔗 <strong>Registration Link:</strong>{" "}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfVKoEHYyWqWrm02pDeRPmytPQrUJxRp77J9qhB5N5-4vWkjg/viewform?pli=1"
        className="text-[#20b920] underline italic hover:text-[#2a31fa]"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to Register
      </a><br /><br />

      
    </p>
    <div className="mt-20 flex flex-col items-center justify-center">
      <img
          src={Synapse}
          alt="Event Poster"
          className="w-full max-w-[500px] rounded-lg sm:shadow-glow-green"
      />
    </div>
  </div>
</div>


        {/* Kaggle Section */}
        <div className="sm:px-10 px-6 pt-4 pb-10 max-w-7xl mx-auto flex flex-row items-start gap-5">


          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff] border-2 border-white shadow-neon" />
            <div className="w-1 sm:h-80 h-[45rem] rounded-full bg-gradient-to-b from-[#915eff]" />
          </div>
          <div>
            <h1 className="font-black text-white lg:text-[80px] mt-3 mb-6 sm:text-center xs:text-[50px] text-4xl sm:text-5xl lg:leading-[98px]">
              Welcome to <span className="text-[#915eff]">Kaggle 2024</span>
            </h1>
            <p className="text-[#dfd9ff] lg:text-[25px] sm:text-[26px] text-[20px] lg:leading-[40px] mt-2 w-full">
              🌟 Get Ready for the Kaggle Challenge! 🌟<br />
              ✨ Pre-Kaggle: Join us on December 7, 2024, for an exciting warm-up!<br />
              ✨ Kaggle: The main event is coming soon! Stay tuned and join Pre-Kaggle to uncover!<br />
              🔗 Github repository to learn about Kaggle is compiled{" "}
              <a
                href={repository}
                className="text-[#915bff] underline italic hover:text-[#2a31fa]"
              >
                Here
              </a><br />
              🔗 Kaggle:{" "}
              <a
                href={kaggle}
                className="text-[#915bff] underline italic hover:text-[#2a31fa]"
              >
                Join here
              </a>
            </p>

            <div className="mt-20 flex flex-col items-center justify-center">
              <img
                src={roboface}
                alt="Event Poster"
                className="w-full max-w-[500px] rounded-lg sm:shadow-glow-purple"
              />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Register;
