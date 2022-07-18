//const url = "http://localhost:5000/api/users"

const dados = (data) => {
  const ul = document.querySelector("data")
  const li = document.createElement('li')
}
dados()

const getUsers = async () => {
  return await fetch(url)
  .then(response => {
    return response.json();
  })
    .then(data => {
      dados(data)
    })
}
//getUsers()

