import database from "../../../../infra/databse.js"

async function status(request, response) {
  response.status(200).json({ response: "200" })
}

export default status