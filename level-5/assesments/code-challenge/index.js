function capitalizeSentence(string) {
  const res = string.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })

  return res.join(' ')
}

console.log(capitalizeSentence('clint baker is smoking!!!'))
