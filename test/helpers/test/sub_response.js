module.exports =
  (res_body, body) => {

    if (typeof res_body == 'object') {
      if (res_body.length == undefined) {
        let keys_res_body = Object.keys(res_body)
        for (let i = 0; i < keys_res_body.length; i++) {
          sanari.helpers.test.sub_response(res_body[keys_res_body[i]], body[keys_res_body[i]])
        }
      } else {
        for (let i = 0; i < res_body.length; i++) {
          let keys_res_body = Object.keys(res_body[i])
          for (let j = 0; j < keys_res_body.length; j++) {
            sanari.helpers.test.sub_response(res_body[i][keys_res_body[j]], body[i][keys_res_body[j]])
          }
        }
      }
      return
    }
    expect(res_body).toBe(body)
  }