import React from "react";
import "../../index.css";
import styles from "./Home.module.css"

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Category from "../../components/Category/Category";

import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";

import image6 from "../../assets/image6.webp";

import image7 from "../../assets/image7.webp";
import image8 from "../../assets/image8.webp";
import image9 from "../../assets/image9.webp";
import image10 from "../../assets/image10.webp";
import image11 from "../../assets/image11.webp";


const Home = () => {
  const headerItems = {
    main: {
      image: image6,
      title: "Markets Tumble as S&P 500 Sees Sharpest Decline Since Covid Amid Tariff Turmoil",
      description:
        "Global investors reacted sharply as the S&P 500 posted its worst single-day loss since the pandemic era. The downturn follows a controversial tariff announcement by the US President, who remains unapologetic despite widespread economic unease.",
      author: "Zack Beauchamp",
    },    
    list: [
      {
        image: image7,
        title:
          "Carrie Coon Exited Marvel After the Studio Said ‘We're Not Going to Pay You Any More Money’ for ‘Avengers: Endgame,’ Says Husband Tracy…",
      },
      {
        image: image8,
        title:
          "Ellen Pompeo Asked Taylor Swift to ‘Write Me a Check’ for Charity Despite Knowing Each Other for ‘All but 20 Minutes’; Swift Sent the ‘Biggest Check…",
      },
      {
        image: image9,
        title:
          "Christopher Nolan’s ‘The Odyssey’ Is a ‘Masterpiece That Homer Himself Would Likely Be Proud Of,’ Universal Executive…",
      },
      {
        image: image10,
        title:
          "Julia Roberts Gets Scorched by #MeToo Scandal in Gripping CinemaCon Trailer for Luca Guadagnino’s ‘After the Hunt’",
      },
      {
        image: image11,
        title:
          "‘Wicked: For Good’ Trailer Wows CinemaCon, From Cynthia Erivo Belting ‘No Good Deed’ to Dorothy’s Arrival in Oz",
      },
    ],
  };


    const recommendedItems = [
      {
        title: 'Will cheap housing lead to more babies?',
        author: 'RACHEL COHEN',
        image: image1,
      },
      {
        title: "Where the right's defense of free speech ends",
        author: 'ZACK BEAUCHAMP',
        image: image2,
      },
      {
        title: "Trump's single most aggressive attack on immigrants is now before the Supreme Court",
        author: 'IAN MILLHISER',
        image: image3,
      },
      {
        title: "The Supreme Court struggles with whether to wound Medicaid to spite Planned Parenthood",
        author: 'IAN MILLHISER',
        image: image4,
      },
      {
        title: 'Trump is making Europe great again',
        author: 'MILES BRYAN',
        image: image5,
      },
    ];

  return (
    <div>
      <Navbar/>
      <Header 
        main={headerItems.main} 
        list={headerItems.list} 
      />
      <Category 
        categoryTitle = "Recommended For You"
        items={recommendedItems} 
      />
    </div>
  );
};

export default Home;
