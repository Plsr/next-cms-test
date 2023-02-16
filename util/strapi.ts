export const getPage = async (id: number) => {
  const res = await fetch("http://0.0.0.0:1337/api/content-pages/" + id);
  const json = await res.json();

  return json.data.attributes;
};
