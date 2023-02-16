import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export const getPage = async (id: string, locale: "en" | "de" = "en") => {
  console.log(locale);
  const page = await client.fetch(
    `*[_id == "${id}" && __i18n_lang == ${locale}]`
  );
  return page[0];
};
