const preprApi = "https://cdn.prepr.io";
const accessToken = process.env.PREPR_ACCESS_TOKEN;

export const getPage = async (id: string) => {
  const res = await fetch(
    preprApi + "/content_items/" + id + "?fields=created_by,title,items",
    {
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
      }),
    }
  );

  const json = await res.json();
  return json.items;
};
