import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const useMenuState = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentUser = useCurrentUser();
  const [paddingTop, setPaddingTop] = useState("120px");

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (currentUser) {
      setPaddingTop(menuOpen ? "180px" : "120px");
    } else {
      setPaddingTop(menuOpen ? "140px" : "120px");
    }
  }, [currentUser, menuOpen]);

  return { menuOpen, setMenuOpen, paddingTop };
};

export default useMenuState;
