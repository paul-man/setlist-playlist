import {load} from 'cheerio';
import {websiteContentMock} from './__mocks__/websiteResponse';

/**
 * When we retrieve the trending albums from SM, we'll store them as an array of objects.
 */
export type TrendingAlbums = {artist: string, album: string}[];

export async function GET() {
  try {
    // const response = await fetch(new URL('https://www.sputnikmusic.com/'));
    // const html = await response.text();
    // const $ = load(html);

    const $ = load(websiteContentMock);
    const trendingAlbums: TrendingAlbums = [];

    // Find the span with the content "TRENDING ALBUMS" and grab its closest table, which should be the table containing the Trending Albums information
    const trendingAlbumsTable = $('span.style48:contains("TRENDING ALBUMS")').first().closest('table');
    trendingAlbumsTable.find('tbody tr:gt(0)').find('table').each(function () {
      // It's expected that the albums are in an <a> tag
      $(this).find("a").each(function () {
        // Extract text content from the <a> tag
        const fullText = $(this).text().trim();

        // Extract album information which is contained in the child element with class "style31"
        const album = $(this).find('.style31').text().trim();

        // Remove album information from the full text to isolate the artist name
        const artist = fullText.replace(album, '').trim();
        trendingAlbums.push({artist, album})
      });
    });

    return Response.json({trendingAlbums})
  } catch (error) {
    return Response.error()
  }
}
