async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default fetchData;
