import Card from "./Card";

const CardContainer = () => {
  const cardsData = [
    {
      image: "/assets/readme-image.png",
      title: "Holidaze",
      description: "A venue site where you can book or host a venue for people to rent, edit and delete venues. This project was created with React, Vite and Tailwind.",
      alt: "Screenshot of Holidaze project homepage",
      link1: { url: "https://github.com/Zaracki/Exam-Holidaze", text: "GitHub" },
      link2: { url: "https://heartfelt-chaja-95c0e2.netlify.app", text: "Website" },
    },
    {
      image: "/assets/shopdrop.png",
      title: "Shopdrop",
      description: "A e-commerce site where you can buy products, add them to cart and have total update. This project was created with React, Vite and Tailwind.",
      alt: "Screenshot of Shopdrop project homepage",
      link1: { url: "https://github.com/Zaracki/react-ecom", text: "GitHub" },
      link2: { url: "https://shopdroper.netlify.app", text: "Website" },
    },
    {
      image: "/assets/Swiftbid.png",
      title: "Swiftbid",
      description: "A bidding site where you can bid on products and put up products for auction. This project was created with JavaScript and Bootstrap.",
      alt: "Screenshot of Swiftbid project homepage",
      link1: { url: "https://github.com/Zaracki/Semester-Project-2", text: "GitHub" },
      link2: { url: "https://swiftbid.netlify.app", text: "Website" },
    },
  ];

  return (
    <div className="container mx-auto pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link1={card.link1}
            link2={card.link2}
            alt={card.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
