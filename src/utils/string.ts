export function splitStringSearch(result: string, search: string) {
  const position = result.toLowerCase().search(search.toLowerCase());
  const higlighted = result.slice(position, position + search.length);

  return {
    start: result.slice(0, position),
    higlighted,
    end: result.slice(position + search.length),
  };
}
