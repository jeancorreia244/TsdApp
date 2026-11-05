export async function api(query, variables = null, token = null) {
  const res = await fetch((import.meta.env.VITE_API_URL || 'http://localhost:4000') + '/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {})
    },
    body: JSON.stringify({ query, variables })
  })

  // Return parsed JSON. Caller handles errors (res.errors) as needed.
  return res.json()
}
