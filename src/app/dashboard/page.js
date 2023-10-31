import GameSession from "@/components/GameSession";
import StudentChoices from "@/components/StudentChoices";
import Cards from "@/components/Cards";
import PerformanceInsight from "@/components/PerformanceInsight";

export const metadata = {
  title: "BeHumane Educator Dashboard",
  description: "BeHumane Educator Dashboard",
};

export const revalidate = 10;

const fetchSessionData = async () => {
  const response = await fetch(
    "https://api.behumane.co/api/v1/game_sessions/1",
  );
  return await response.json();
};

const fetchStudentChoices = async () => {
  const response = await fetch(
    "https://api.behumane.co/api/v1/game_sessions/1/choices",
  );
  return await response.json();
};

const fetchStudentInsight = async () => {
  const response = await fetch(
    "https://api.behumane.co/api/v1/game_sessions/1/insights",
  );
  return await response.json();
};

const DashboardPage = async () => {
  const sessionData = await fetchSessionData();
  const studentChoices = await fetchStudentChoices();
  const studentInsight = await fetchStudentInsight();

  return (
    <section id="dashboard">
      <section id="game-session" className="flex flex-row w-auto my-5">
        <GameSession data={sessionData}/>
      </section>
      <section
        id="colums"
        className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"
      >
        <div className="col-span-12 rounded-sm bg-white pt-7.5 mb-5 shadow-default sm:px-7.5 xl:col-span-6">
          <StudentChoices data={studentChoices}/>
        </div>

        <div className="col-span-12 rounded-sm bg-white pt-7.5 mb-5 shadow-default sm:px-7.5 xl:col-span-6">
          <PerformanceInsight data={studentInsight}/>
        </div>
      </section>
      <section id="cards">
        <Cards data={studentChoices}/>
      </section>
    </section>
  );
};

export default DashboardPage;
