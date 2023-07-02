// vendor imports
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// local imports
// store
import { setCurrentPage, setIsScrollDown } from "../../../store/apiSlice";
// components
import CardComponent from "../../elements/CardComponent";
// styles
import Container from "./styles";

const CardsComponent = () => {
  const { cards, currPage } = useSelector((state) => state.api);
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const handlerScroll = () => {
    if (containerRef !== null) {
      const { clientHeight, scrollTop, scrollHeight } = containerRef.current;

      if (scrollHeight - scrollTop - clientHeight <= 10) {
        dispatch(setCurrentPage(currPage + 1));
        dispatch(setIsScrollDown(true));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, [window.scrollY]);

  return (
    <Container ref={containerRef}>
      {cards.map((card) => (
        <CardComponent key={card.id} card={card} />
      ))}
    </Container>
  );
};

export default CardsComponent;
