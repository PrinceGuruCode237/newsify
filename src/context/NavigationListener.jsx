import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "./AppContext";
import { useDispatch } from "react-redux";
import { reset } from "../features/auth/authentfication";

const NavigationListener = () => {
  const location = useLocation();
  const { setIsLoading } = useAppContext();
  const dispatch = useDispatch();

  // console.log(location);

  useEffect(() => {
    // Start loading when route changes
    setIsLoading(true);

    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay as needed for a smoother transition
    dispatch(reset());
    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading, dispatch]);

  return null; // Does not render anything
};

export default NavigationListener;
