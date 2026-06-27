export default function Loader() {
  return (
    <>
      <div id="scroll-progress" role="progressbar" aria-label="Page scroll progress"></div>
      <div id="loader" role="status" aria-label="Loading">
        <div className="loader-inner">
          <div className="loader-name">Anmol H R</div>
          <div className="loader-bar-wrap">
            <div className="loader-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
