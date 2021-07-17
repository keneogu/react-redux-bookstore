const BooksForm = () => (
  <form>
    <input type="text" placeholder="Book Form" />
    <select name="categories" id="categories">
      {categories.map((category) => (
        <option key={Math.random()} value={category}>
          {category}
        </option>
      ))}
    </select>
    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
