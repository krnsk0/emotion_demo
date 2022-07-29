import { useState } from 'react';
import { styles } from './App.styles';

function App() {
  const [state, setState] = useState(false);

  return (
    <>
      <div css={styles.underlinedText}>this is styled with the css prop</div>
      <div css={styles.colorText}>this imports a shared color value</div>
      <div css={styles.highlightOnHover}>
        this has a hover behavior set up with scss-style syntax
      </div>
      <div css={styles.composed}>
        this has two style declarations composed together in the styles file
      </div>
      <div css={[styles.colorText, styles.underlinedText]}>
        these styles are composed via an array in the css prop
      </div>
      <div className="italText">this is styled by emotion global styles</div>
      <button
        type="button"
        css={styles.dynamic(state)}
        onClick={() => setState(!state)}
      >
        dynamic styles via function
      </button>
      <button
        type="button"
        css={[state && styles.underlinedText]}
        onClick={() => setState(!state)}
      >
        dynamic styles via array
      </button>
      <div css={styles.randomColor()}>
        random color on every render; logic is in the styles rather than tsx
      </div>
      <div css={[styles.box, styles.nestedTarget]}>
        <div css={styles.box}>
          <div css={styles.box}>
            <p>here we target a deeply nested child via scss syntax</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
