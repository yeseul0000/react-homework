function ContentCard({ id, photo, name = "" }) {
  return (
    <li key={id}>
      <img src={photo} alt={name} />
    </li>
  );
}

export default ContentCard;
