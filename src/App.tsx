import { message } from "@/utils/test";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <h1 className="text-5xl font-bold text-white">{message}</h1>
    </div>
  );
}

export default App;