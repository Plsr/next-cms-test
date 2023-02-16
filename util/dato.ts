export const getPage = async (id: string, locale: "en" | "de" = "en") => {
  const res = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{   page(filter: {id: {eq: ${id}}}, locale: ${locale}) {     id     content title  } }`,
    }),
  });
  const json = await res.json();
  return json.data.page;
};
