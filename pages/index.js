export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <main className="w-[1512px] h-[900px] flex items-start justify-between gap-0">
        <div>
          <LeftBar />
        </div>

        <div>
          <Navigation />
          <VideoContent />
        </div>
      </main>
    </div>
  )
}
