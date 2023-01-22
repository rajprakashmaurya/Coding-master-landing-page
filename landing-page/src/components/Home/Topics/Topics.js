import React from "react";
import "./Topics.css";
import Topic from "./Topic/Topic";

export default function Topics() {
  const topics = [
    {
      title: "Javascript",
      image: "https://programacion.net/files/article/article_01705_.png",
      description: "Learn Javascript. The world popular language",
    },
    {
      title: "React",
      image:
        "https://fiverrpromotion.com/wp-content/uploads/2021/04/create-and-fix-reactjs-and-react-native.png",
      description: "Learn React. The world popular javascript library",
    },
    {
      title: "C++s",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--xVCufn18--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5nnkrcc3kixypm642opg.gif",
      description: "Learn C++. ",
    },
    {
      title: "DSA",
      image:
        "https://findvectorlogo.com/wp-content/uploads/2018/09/data-systems-analysts-inc-dsa-vector-logo.png",
      description: "Learn DSA in C++.",
    },
  ];

  return (
    <>
      <div className="topics-container">
        {topics.map((item, index) => (
          <Topic
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
