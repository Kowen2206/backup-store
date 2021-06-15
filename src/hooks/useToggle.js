import {useState} from 'react';

const useToggle = (bolean = false) => {
   const [toggle, settoggle] = useState(bolean);
   const toggleState = () => settoggle(!toggle);
  
   return toggleState;
}

export default useToggle
