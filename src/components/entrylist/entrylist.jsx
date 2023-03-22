import Entry from "../entry/entry";

export default function Entrylist({ activities, onRemoveEntry }) {
  return (
    <>
      <div className="entryList">
        <h2> WEATHER ACTIVITIES</h2>
        {activities.map((activity) => (
          <Entry
            key={activity.id}
            id={activity.id}
            activity={activity.activity}
            onRemoveEntry={onRemoveEntry}
          />
        ))}
      </div>
    </>
  );
}
