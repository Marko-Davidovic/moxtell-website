function App() {
  return (
    <>
      <CursorGlow active />
      <Nav />
      <Hero />
      <OneOfOne />
      <Problem />
      <ROI />
      <Solution />
      <HowItWorks />
      <Examples />
      {/* <PhotoStrip /> */}
      <Demo />
      <Blog />
      <FAQ />
      {/* <CTA /> */}
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
