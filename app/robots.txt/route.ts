
export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://anemoneduette.com/sitemap.xml`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
