import PropTypes from 'prop-types';

const ScheduleTable = ({ schedule }) => {
  // schedule format: [ { time: "08:00 AM", className: "Zumba", coach: "Coach Sarah" }, ... ]
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-red text-white uppercase font-display tracking-widest text-lg">
            <th className="py-4 px-6 border-b-2 border-bg">Time</th>
            <th className="py-4 px-6 border-b-2 border-bg">Class</th>
            <th className="py-4 px-6 border-b-2 border-bg">Instructor</th>
          </tr>
        </thead>
        <tbody className="font-mono text-sm">
          {schedule.map((session, i) => (
            <tr key={i} className="border-b border-gray/20 hover:bg-gray/5 transition-colors">
              <td className="py-4 px-6 text-gold font-bold">{session.time}</td>
              <td className="py-4 px-6 text-white uppercase font-sans font-bold">{session.className}</td>
              <td className="py-4 px-6 text-gray">{session.coach}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ScheduleTable.propTypes = {
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      coach: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ScheduleTable;
