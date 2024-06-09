import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const useMenuState = () => {
  // State to manage the menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  // Hook to get the current location object
  const location = useLocation();

  // Hook to get the current user from the context
  const currentUser = useCurrentUser();

  // State to manage the padding top based on menu and user state
  const [paddingTop, setPaddingTop] = useState("120px");

  // Effect to close the menu whenever the location changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Effect to adjust the padding top based on the menu state and user state
  useEffect(() => {
    if (currentUser) {
      setPaddingTop(menuOpen ? "180px" : "120px");
    } else {
      setPaddingTop(menuOpen ? "140px" : "120px");
    }
  }, [currentUser, menuOpen]);

  // Return the state and function to manage the menu and padding top
  return { menuOpen, setMenuOpen, paddingTop };
};

export default useMenuState;
