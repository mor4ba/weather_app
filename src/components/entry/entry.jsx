export default function Entry({ activity, onRemoveEntry, id }) {
  return (
    <li>
      {activity}
      <button onClick={() => onRemoveEntry(id)} type="button">
        X
      </button>
    </li>
  );
}
