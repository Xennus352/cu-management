import { useFetch } from "@/hooks/useFetch";

export default function Home() {
  const { data, loading } = useFetch("/api/department");
  console.log(data);
  return (
    <>
      <nav className="flex justify-between flex-wrap">
        {/* logo  */}
        <div className="">My logo</div>

        {/* icon  */}
        <div className="">icon</div>
      </nav>
    </>
  );
}
