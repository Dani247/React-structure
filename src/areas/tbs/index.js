import React from 'react';

function App({ children, ...props }) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}

export default App;
