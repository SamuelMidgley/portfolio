async function dictionaryAPI(word: string) {
  let obj;

  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  obj = await res.json();

  return obj;
}

export default dictionaryAPI;
