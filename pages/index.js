import LeftBar from "@/components/LeftBar";
import Navigation from "@/components/Navigation";
import VideoContent from "@/components/VideoContent";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full ">
      <main className="w-[1512px] h-[900px] flex items-start justify-between gap-0 rounded-3xl">
        <div className="w-[248px]">
          <LeftBar />
        </div>

        <div className="w-[1264px]">
          <Navigation />
          <VideoContent />
        </div>
      </main>
    </div>
  )
}
