import "./PetsList.css";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );
  return (
    <section className="pets-wrapper">
      <nav className="pets-nav">
        <ul>
          <li>
            <a href="/pets/cats">See All Cats ({cats.length})</a>
          </li>
          <li>
            <a href="/pets/dogs">See All Dogs ({dogs.length})</a>
          </li>
        </ul>
      </nav>
      <section className="pets-list">
        {/* All cats view. */}
        {cats.map((cat) => (
          <article key={cat.id}>
            <h3>🐈 {cat.name}</h3>
          </article>
        ))}
        {/* All dogs view. */}
        {dogs.map((dog) => (
          <article key={dog.id}>
            <h3>🐕 {dog.name}</h3>
          </article>
        ))}
      </section>
    </section>
  );
};

export default PetsList;
