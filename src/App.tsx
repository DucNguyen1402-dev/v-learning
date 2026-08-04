const App = () => (
  <div className="flex min-h-screen flex-col items-center justify-center">
    <button
      className="bg-green-500 px-2 py-1 text-white dark:bg-black"
      onClick={() => document.documentElement.classList.toggle("dark")}
    ></button>
  </div>
);

export default App;
