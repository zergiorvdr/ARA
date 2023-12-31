import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";
import fireworks from "./audio/fireworks.mp4";
import catGif from "./cat/cat.gif";

function App() {
  const [countdownCompleted, setCountdownCompleted] = useState(false);
  const [showBackgroundVideo, setShowBackgroundVideo] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(true);

  const particlesInit = async (main) => {
    await loadStarsPreset(main);
  };

  const Timelife = () => {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    return newYearDate - nowDate;
  };

  useEffect(() => {
    if (countdownCompleted) {
      // Setelah countdown selesai, atur state untuk menampilkan video dan menyembunyikan elemen lainnya
      setShowBackgroundVideo(true);
      // Tampilkan alert "Selamat Tahun Baru!"
      alert("Happy New ara!");
      alert("Sorry ya cuma bisa ngasi ginian");
      alert("Oh ya, thanks deh uda ngajarin gua cara nyenengin cewe, ya walaupun gua gatau lu seneng apa kaga");
      alert("So, gua gatau bodoh apa engganya gua, nembak lo disini");
      alert("mau ga jadi pacar gua?");
      alert("mau kan?");
      alert("harus mau");
      alert("lo gabisa nolak si :");
      alert("atau ini tulisan ga abis²?");
      alert("ara: iya deh gua mau🤧");
      alert("yey lopin sama ara dah jadiann😭");
    }
  }, [countdownCompleted]);

  return (
    <div className="">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{ preset: "stars" }}
      />

      <div className="flex flex-col py-5 px-5 mt-20 justify-center items-center relative text-white font-bold text-lg">
{countdownCompleted ? null : (
        <Typewriter
          words={[
            "hi ara, aku kupin = kucing lopin xixixi ketawa",  "tungguin sampe waktunya abis ya. ",  "i have a surprisee for u >.<"
          ]}
          loop={false}
          cursor
          deleteSpeed={30}
          typeSpeed={30}
        />
     )}
        <span className="text-white text-3xl font-bold z-100 px-4">
          {countdownCompleted ? null : (
            <img className="z-50 relative" src={catGif} alt="NyanCat" />
          )}
        </span>
        {!countdownCompleted && (
          <div className="text-white z-50 relative font-bold text-4xl">
            <Countdown
              date={Date.now() + Timelife()}
              onComplete={() => setCountdownCompleted(true)}
            />
          </div>
        )}
                <span className="mt-8 flex flex-col justify-center items-center text-lg text-white">
        
       {countdownCompleted ? null : (
        <Typewriter
          words={[
            "sorry ya, bikinanya kurang bagus, oh iya ra. gua suka bgt sama lo, gatau kenapa kek lu cewe paling cakep pernah gua temuin. seriously gua ga lebay. it's fact. sambil nunggu new year gua pengen lo mikir, menurutlo gua cocok ga jdi pacarlo. i know gua belom tau lo bgt. tapi kasih gua sedikit rasa ya ra. gua pengen bgt bisa di treat like a king sama cewe kek lu. itu wishless gu, oh ya jadi pcarlu juga termasuk hehe. Tpi gua sadar si, cowo jelek kek gua manada cewe yang mau sama gua. mana tiap hari insecure lagi. tapi kalo gua bisa dapetinlo gua seneng bgt si rasany. tapi gatau itu bakalan kejadian apa ga. i hope this can make u happy ya ara."
          ]}
          cursor
          deleteSpeed={30}
          typeSpeed={30}
          className="mt-50"
        />
     )}
        </span>
      </div>
        
    </div>
  );
}

export default App;