import Grid from "../../../../ui/Grid";
import ButtonOpenCart from "../../../../ui/Button/ButtonOpenCart";

const fetchCategories = async (props) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${props}`
  );
  return res.json();
};

const fetchSearch = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  return res.json();
};

export default async function SearchPage({ params }) {
  const { query } = params;
  const arrCategories = [
    "electronics",
    "jewelery",
    "men's%20clothing",
    "women's%20clothing",
  ];
  const result = arrCategories.includes(query);
  let res;

  if (result) {
    res = await fetchCategories(query);
  } else {
    res = await fetchSearch();
  }

  return (
    <section>
      <ButtonOpenCart />
      <Grid products={res} query={query} arr={arrCategories}></Grid>
    </section>
  );
}
