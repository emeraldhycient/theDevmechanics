// import React, { useRef, useState } from "react";
// import gsap from "gsap";

// const StackedCards = () => {
// 	const cardContainerRef = useRef(null);
// 	const [cards, setCards] = useState([
// 		{ title: "Card 1", content: "This is the content of card 1." },
// 		{ title: "Card 2", content: "This is the content of card 2." },
// 		{ title: "Card 3", content: "This is the content of card 3." },
// 	]);
// 	const [activeCardIndex, setActiveCardIndex] = useState(null);

// 	const animateCards = (newIndex) => {
// 		const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
// 		setCards(shuffledCards);

// 		const newCards = cardContainerRef.current.children;

// 		gsap.to(newCards, {
// 			duration: 0.5,
// 			ease: "power3.out",
// 			stagger: 0.1,
// 			y: (i) => (i === newIndex ? 0 : i * -10),
// 			zIndex: (i) =>
// 				i === newIndex ? newCards.length : newCards.length - 1 - i,
// 		});
// 	};

// 	const handleClick = (index) => {
// 		setActiveCardIndex(index);
// 		animateCards(index);
// 	};

// 	React.useEffect(() => {
// 		animateCards(activeCardIndex);
// 	}, [activeCardIndex]);

// 	return (
// 		<div ref={cardContainerRef} className="card-stack">
// 			{cards.map((card, index) => (
// 				<div
// 					key={index}
// 					className="card border"
// 					onClick={() => handleClick(index)}>
// 					<h3>{card.title}</h3>
// 					<p>{card.content}</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default StackedCards;
