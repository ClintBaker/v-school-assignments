async function getAllIssues() {
  try {
    // get user issues
    const res = await userAxios.get('/api/api/issue')
    // sort issues based on upvotes
    const sortedIssues = res.data.issues.sort(
      (a, b) => b.totalVotes - a.totalVotes
    )
    // update state
    setUserState((prevUserState) => ({
      ...prevUserState,
      issues: sortedIssues,
    }))
  } catch (e) {
    console.log(e.response.data.error)
  }
}
