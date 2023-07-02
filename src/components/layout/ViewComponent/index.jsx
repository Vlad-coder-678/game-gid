// vendor imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

// local imports
// constants
import ROUTE from "../../../constants/routes";
// store
import { setIsScrollDown } from "../../../store/apiSlice";
// utilities
import { fetchGamesResults, fetchMoreResults } from "../../../utilities/api";
// components
import Home from "../../../pages/Home";
import Details from "../../../pages/Details";
import NotFound from "../../../pages/NotFound";
import HeaderComponent from "../../elements/HeaderComponent";
// styles
import ViewContainer from "./styles";

const ViewComponent = () => {
  const stateApi = useSelector((state) => state.api);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchGamesResults({
        page: stateApi.currentPage,
        genres: stateApi.genres,
        ordering: stateApi.ordering,
        pageSize: stateApi.pageSize,
        platforms: stateApi.platforms,
        dates: stateApi.releaseDate,
        search: stateApi.searchValue,
      }),
    );
  }, [
    dispatch,
    stateApi.genres,
    stateApi.ordering,
    stateApi.releaseDate,
    stateApi.platforms,
    stateApi.searchValue,
    stateApi.title,
  ]);

  const handlerScroll = () => {
    if (stateApi.isScrollDown) dispatch(
      fetchMoreResults({
        page: stateApi.currentPage,
        genres: stateApi.genres,
        ordering: stateApi.ordering,
        pageSize: stateApi.pageSize,
        platforms: stateApi.platforms,
        dates: stateApi.releaseDate,
        search: stateApi.searchValue,
      }),
    );
    dispatch(setIsScrollDown(false));
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);

    return () => window.removeEventListener("scroll", handlerScroll);
  }, [stateApi.isScrollDown, window.scrollY]);

  return (
    <ViewContainer>
      <HeaderComponent />
      <Routes location={location}>
        <Route path={ROUTE.main} exact element={<Home />} />
        <Route path={`${ROUTE.games}/:slug`} render={() => <Details />} />
        <Route path={ROUTE.other} element={<NotFound />} />
      </Routes>
    </ViewContainer>
  );
};

export default ViewComponent;
