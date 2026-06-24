import { client } from "./client";

export async function getNavbarData() {
  // Query untuk mengambil dokumen siteSettings pertama yang ditemukan
  const query = `*[_type == "siteSettings"][0]{
    tahunPelaksanaan,
    linkOprec,
    linkDiklat
  }`;
  
  const data = await client.fetch(query);
  return data;
}