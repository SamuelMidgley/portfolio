async function dictionaryAPI(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  )

  const obj = await res.json()

  return obj
}

export default dictionaryAPI
