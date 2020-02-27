const axios = require('axios')
axios
  .get(`https://api.github.com/users/${process.argv[2]}`)
  .then(function (res) {
    const { data } = res
    
    let name
    if (data.name) {
        name = data.name
    } else {
        name = data.login
    }

    console.log(
      `Hi, ${name}. You have ${data.followers} follower${data.followers === 1 ? 's' : ''} and are following ${data.following}.`
    )
  })
  .catch(function (error) {
    console.error(error)
  })
