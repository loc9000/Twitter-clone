const axios = require("axios");

module.exports = async (req, res) => {
  const query = `
        query user($id: ID!) {
            user( id: $id ) {
                id, 
                posts {
                    id,
                    body,
                    author
                },
                username,
                email
            }
        }
    `;

  let graphqlRes = {};
  try {
    graphqlRes = await axios(
      "http://localhost:3000/graphql",
      {
        data: {
          query,
          variables: {
            id: "628d5a4af171591fe948d35e",
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      });
  } catch (e) {
    console.log(e);
  }

  const user = graphqlRes.data.data.user

  res.render("./", { user });
};
