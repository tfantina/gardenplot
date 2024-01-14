import { fetchFromPixelfed } from '$lib/utils';
import { json } from '@sveltejs/kit';
import { XMLParser } from "fast-xml-parser";

export const GET = async () => {
   const pixelfed_feed = await fetchFromPixelfed()
   return pixelfed_feed
}
