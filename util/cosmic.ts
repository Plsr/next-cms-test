import Cosmic from "cosmicjs";

const cms = Cosmic();

const bucket = cms.bucket({
  slug: process.env.COSMIC_SLUG,
  read_key: process.env.COSMIC_READ_KEY,
});

export const getPage = async (slug: string, locale: "en-US" | "de-DE") => {
  const data = await bucket.objects
    .find({
      type: "pages",
      slug,
      locale,
    })
    .props("slug,title,content,metadata");

  return data;
};
