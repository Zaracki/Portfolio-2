import Card from "./Card";

const CardContainer = () => {
  const cardsData = [
    {
      image: "./assets/readme-image.png",
      title: "Holidaze",
      description: "Info",
      link1: { url: "https://github.com/Zaracki/Exam-Holidaze", text: "GitHub" },
      link2: { url: "https://heartfelt-chaja-95c0e2.netlify.app", text: "Website" },
    },
    {
      image: "./assets/Shopdrop.png",
      title: "Shopdrop",
      description: "Info",
      link1: { url: "https://github.com/Zaracki/react-ecom", text: "GitHub" },
      link2: { url: "https://shopdroper.netlify.app", text: "Website" },
    },
    {
      image: "./assets/Swiftbid.png",
      title: "Swiftbid",
      description: "info",
      link1: { url: "https://github.com/Zaracki/Semester-Project-2", text: "GitHub" },
      link2: { url: "https://swiftbid.netlify.app", text: "Website" },
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link1={card.link1}
            link2={card.link2}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
