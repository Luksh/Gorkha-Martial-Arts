// src/components/ClassesPage.js
const ClassesPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Class Timetable</h1>
      <table className="table-auto w-full bg-gray-100">
        <thead>
          <tr>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Monday</th>
            <th className="px-4 py-2">Tuesday</th>
            <th className="px-4 py-2">Wednesday</th>
            <th className="px-4 py-2">Thursday</th>
            <th className="px-4 py-2">Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">06:00 - 07:30</td>
            <td className="border px-4 py-2">Jiu-Jitsu</td>
            <td className="border px-4 py-2">Karate</td>
            <td className="border px-4 py-2">Judo</td>
            <td className="border px-4 py-2">Jiu-Jitsu</td>
            <td className="border px-4 py-2">Muay Thai</td>
          </tr>
          {/* Repeat for other time slots */}
        </tbody>
      </table>
    </div>
  );
};

export default ClassesPage;
