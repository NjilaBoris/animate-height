import React, { useState } from "react";
import { motion } from "motion/react";
import useMeasure from "react-use-measure";

const App = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bounds] = useMeasure();
  return (
    <div className="wrapper">
      <button className="button" onClick={() => setShowExtraContent((b) => !b)}>
        Toggle height
      </button>
      <motion.div animate={{ height: bounds.height }} className="element">
        <div className="inner" ref={ref}>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>This extra content will change the height of the drawer.</p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
};

export default App;
