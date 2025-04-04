import React from "react";
import "../../index.css";
import styles from "./Home.module.css"
import Navbar from "../../components/Navbar/Navbar";
import Category from "../../components/Category/Category";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";


const Home = () => {
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
      <Category 
        categoryTitle = "Recommended For You"
        items={recommendedItems} 
      />
    </div>
  );
};

export default Home;
